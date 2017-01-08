---
layout: default
title: "NodeJS Promises Done Right"
description: ""
---



<h2>Promises</h2>
<p>
    <blockquote cite="https://promisesaplus.com/">
        A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled
    </blockquote>
</p>

<p>
    A quick Google search will tell you that the two most popular implementations of <i>Promises</i> in NodeJS are the <a href="https://github.com/kriskowal/q">Q</a> and <a href="https://github.com/petkaantonov/bluebird">Bluebird</a> libraries.
</p>

<br>
<p>
    In this blog I am mainly talking about using NodeJS as an API server to server requests from a MongoDB database using the <a href="http://mongoosejs.com/">Mongoose driver</a>.
</p>
<br>
<h5>A Sample API Application</h5>

<p>
    Consider the use case that we are creating APIs for an app which helps its users to book and schedule Sunday football matches among themselves.
</p>
<p>
    We want a function <code>getRegisteredUserNames</code> which returns the names of all players who have registered this week. We look first at some of the the ways to achieve this and what could be wrong in them.
</p>

<br>

<h2>The Dreaded Deferred</h2>

<p>We first take a look at an implementation using <a href="https://github.com/kriskowal/q#using-deferreds">Q's defer</a></p>
{% highlight js %}

var Q = require('q');

var getRegisteredUserNames = function (startDate, endDate) {
    var defer = Q.defer();

    try {
        var query = {day: {$gte: startDate, $lte: endDate}};
        var project = {name: 1};
        function onDocsFunc(err, data) {
            if(err) {
                defer.reject(err);
            }
            else {
                defer.resolve(data);
            }
        }
        RegisteryCollection.find(query, project).lean().exec(onDocsFunc);
    }
    catch (ex) {
        defer.reject(ex);
    }
    return defer.promise;
};

{% endhighlight %}

<p>
    The above function <code>getRegisteredUserNames</code> returns a promise, and would work as it should. We go and execute it, and in the <code>then</code> callback, we receive the data points. Notice the <code>try-catch</code> block here. This is added since if the code breaks here, the function calling this method has no way to detect what happened. Calling this function, the <code>data</code> looks like this -
</p>

{% highlight js %}

[
    {name: 'John'},
    {name: 'Adam'},
    {name: 'Mat'},
    {name: 'Prince'}
]

{% endhighlight %}
<p>
    But what we wanted was a list of names rather than objects. One easy workaround here would be to modify the <code>defer.resolve(data)</code>, and resolving the <code>modifiedData</code>.

{% highlight js %}
var modifiedData = data.map(function (x) {
    return x.name
});
defer.resolve(modifiedData);
{% endhighlight %}
</p>
<p>
    Now we ask the question - Does this code handle all exceptions? What happens if it does not? Obviously Node will throw an exception. But who's catching that exception? What happens to the promise? 
</p>
<p>
    Yes, we need another <code>try-catch</code> over here, else the promise is never resolved nor rejected.
</p>
{% highlight js %}
try {
    var modifiedData = data.map(function (x) {
        return x.name
    });
    defer.resolve(modifiedData);
}
catch (ex) {
    defer.reject(ex);
}
{% endhighlight %}
<p>
    Ugly? Imagine doing this everywhere in your code, using <code>try-catch</code> blocks everywhere in all callbacks as you write multiple application logics. I'm sure half of your time and lines of code is spent writing these redundant blocks. Also it makes the code harder to debug and maintain. What can be done? 
</p>
<br>



<h2>Separation of Concerns</h2>

<p>
    The problem above is that we are trying to mix application logic into a promise creation utility. <b><i>Create promise at one place and reuse it elsewhere</i></b> is the general rule to follow. Also, using the <code>defer</code> objects is a kind of an anti-pattern here and can be fully avoided by making use of the <code>Promise</code> constructor provided by the promise library of your choice.
</p>
{% highlight js %}
var getRegisteredUserNames = function (startDate, endDate) {
    return Q.Promise(function (resolve, reject) {
        var query = {day: {$gte: startDate, $lte: endDate}};
        var project = {name: 1};
        function onDocsFunc(err, data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        }

        RegisteryCollection.find(query, project).lean().exec(onDocsFunc);
    })
};

getRegisteredUserNames(startDate, endDate).then(function (data) {
   return data.map(function (x) {
       return x.name
   });
})
.catch(function (err) {
    logger.error(err);
});
{% endhighlight %}

<p>
    Notice that the <a href="https://github.com/kriskowal/q#using-qpromise">Q.Promise</a> (<a href="http://bluebirdjs.com/docs/api/new-promise.html">Promise</a> in Bluebird) implementation is a wrapper around our code. Any exceptions thrown by the code are made into rejections with the appropriate error. Here, we separated the application logic away into the callee function, where we perform the manipulations. 
</p>
<br>

<h2>Second Argument of Promises</h2>
{% highlight js %}
outPromise.then(
    resolveHandler, 
    rejectHandler
);
{% endhighlight %}
<p>
    The second argument of promises takes a callback which is executed when the promise <code>rejects</code>. In most circumstances avoid using this. The <code>.catch()</code> / <code>.fail()</code> method is provided specifically for this purpose and makes life much simpler. Note that this is not part of the <a href="https://github.com/promises-aplus/promises-tests">Promise A+</a> guidelines, but is anyways provided by both the promise implementations.
</p>
{% highlight js %}
outPromise.then(
    resolveHandler
).catch(
    rejectHandler
);
{% endhighlight %}

<h2>Writing APIs</h2>

<p>
    We now look at how to integrate everything together into a NodeJS API using ExpressJS.
</p>
<p>
    We come back to our original example of creating a football match scheduling service. We now wish to write an API which given a <code>start_date</code> and <code>end_date</code> will generate random teams, then schedule the matches, and finally send emails to all the players informing them of the team they belong to.
</p>
<br>
<p>
    We break down the problem into the following parts - 
    <ul>
        <li>Fetch the list players who registered.</li>
        <li>Fetch emails for each user</li>
        <li>Randomly generate teams</li>
        <li>Send emails to each player mentioning the team the user belongs</li>
    </ul>
    We assume that there are two collections in MongoDB - User and Registry.
</p>
<p>
    Writing the API endpoint in the <code>routes/index.js</code> file
</p>
{% highlight js %}
router.post('/createMatches', function (req, res) {
    var params = {
        startDate: req.body.start_date,
        endDate: req.body.end_date,
    };
    createMatches(params).then(data => {
        res.status(200);
        res.send(data);
    }).catch(err => {
        res.status(500);
        logger.error(err);
        res.send(err);
    })
});
{% endhighlight %}

<p>
    We now write the controller <code>createMatches</code>. Remember that since this method will just implement application logic, we should not be creating promises here, rather just manipulating them around. However, there are still chances of typos here and there which might go uncaught, and our promise would just be dangling since there is no appropriate handler. To take care of this, the Bluebird library provides a handy wrapper around the functions - <a href="http://bluebirdjs.com/docs/api/promise.method.html">Promise.method</a>. We just need to wrap the any function in this, and it should handle any such issues with the code. 
</p>
<p>
    Note that in case you are using ES6, you might want to fall back on using the full function definition instead of the array notation while using <code>Promise.method</code>.
</p>

{% highlight js %}
var createMatches = Promise.method(function (params) {
    var startDate = params.startDate;
    var endDate = params.endDate;

    return Registry.getUserNames({startDate: startDate, endDate: endDate})
        .then(function (data) {
            return data.map(function (x) {
                return x.name; // ['john', 'adam', 'john']
            });
        })
        .then(function (data) {
            return Array.from(new Set(data)); // remove duplicates - ['john', 'adam']
        })
        .then(function (userNameData) {
            var userEmailPromises = userNameData.map(function (userName) {
                return User.getEmail(user);
            });
            return Promise.all(userEmailPromises); // ['john@gmail.com', 'adam@gmail.com']
        })
        .then(function (userEmailData) {
            var shuffledUserEmailData = shuffle(userEmailData); // random shuffling
            return assignTeam(shuffledUserEmailData);
            // [{email: 'john@gmail.com', team: 1}, {email: 'john@gmail.com', team: 2}]
        })
        .then(function (teamEmailData) {
            var sendEmailPromises = teamEmailData.map(function (data) {
                return sendEmail(data.email, data.team);
            });
            return Promise.allSettled(sendEmailPromises);
        })
});
{% endhighlight %}

<p>
    The implementations of the methods under <code>User</code>, <code>Registry</code> and <code>sendEmail</code> should only do what they are supposed to do. Thus they should merely be wrappers around the existing <code>Mongoose/Mongodb/SMTP</code> functions, and might use the <code>new Promise</code> if the underlying API only provides a callback (Bluebird allows to <a href="http://bluebirdjs.com/docs/api/promise.promisify.html">promisify</a> callbacks) 
</p>
<br>
<p>
    The advantages of following the above style is that even though we are doing a lot of things, our logic is flat. Using multiple <code>then</code> statements, we know the exact execution order. Any errors in any of the step is propagated forward and is caught at the <code>index.js</code> file in the <code>.catch()</code> block. Thus a single place to catch all errors.
</p>
<br>
<h2>Conclusion</h2>
<p>
    Separation of concerns along with manipulating promises is the correct way. This way we utilize the maximum capabilities of the awesome promise libraries provided, making code easier to understand, and thus easier to maintain.
</p>
