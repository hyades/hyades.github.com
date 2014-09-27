---
layout: post
title: Correcting lots of stuff
tags: python gsoc
Year: 2013
Month: 07
Date: 20
---

<h2>
	What was Wrong
</h2>
<p>
	While writing unittests I went off-track. Thankfully, mithro guided me at correct time. Two major wrong things I was doing were:
	<ol>
		<li>For testing purposes, to each and every function in my code I was adding input validation statements, so that I did not get any TypeError or ValueError while running it. Instead of doing this, I should have made exception handlers. So my last few commits were not useful at all and I had to remove them.</li>
		<li>I was using setters and getters in my code. I had added them to give extra abstraction to the user. However, I learnt that in python these are seldom used. So, I had to remove these lines from the code.</li>
	</ol>
	These things were the reason I delayed writing this blog post.
</p>
<h2>
	Commits:
</h2>
<p>
	A rather long list of commits:
	<ul>
		<li>exceptions for run, terminate and kill: <a href="https://github.com/hyades/gst-switch/commit/af1bd7c8645b82fd2a725655fd6905709d6d8d45">af1bd7c8645b82fd2a725655fd6905709d6d8d45</a></li>
		<li>exceptions for run, terminate and kill: <a href="https://github.com/hyades/gst-switch/commit/51dada1c0b16e8e3fd90eb7a967fb583b87d76f8">51dada1c0b16e8e3fd90eb7a967fb583b87d76f8</a></li>
		<li>Exception handling for Server.run and py.tests: <a href="https://github.com/hyades/gst-switch/commit/8807d07c2d98d5d39b8a0c22eabfc77b619369e1">8807d07c2d98d5d39b8a0c22eabfc77b619369e1</a></li>
		<li>exception handling for server process creation: <a href="https://github.com/hyades/gst-switch/commit/832e0cb1948c601faa20292b6883a4d4d12bb1dc">832e0cb1948c601faa20292b6883a4d4d12bb1dc</a></li>
		<li>added exception for subprocess: <a href="https://github.com/hyades/gst-switch/commit/8ef1346d40822b47e3cba16fd42848843a265783">8ef1346d40822b47e3cba16fd42848843a265783</a></li>
		<li>gst-option added and updated connection.py: <a href="https://github.com/hyades/gst-switch/commit/9f8434cb9f06a25d6f9e3fec22a04289d2ba458e">9f8434cb9f06a25d6f9e3fec22a04289d2ba458e</a></li>
		<li>Removed wrong unittests: <a href="https://github.com/hyades/gst-switch/commit/269d307d5edd1b6d621457038b9148152bf14e12">269d307d5edd1b6d621457038b9148152bf14e12</a></li>
		<li>Made helpers.py and testsource.py pythonic: <a href="https://github.com/hyades/gst-switch/commit/18608b8702826279711ed9d749f435b4340607ee">18608b8702826279711ed9d749f435b4340607ee</a></li>
		<li>Made server.py pythonic: <a href="https://github.com/hyades/gst-switch/commit/abecf31fb2d429a84288026008e44feae3e8640c">abecf31fb2d429a84288026008e44feae3e8640c</a></li>
		<li>Made connection.py pythonic and removed dbus.py: <a href="https://github.com/hyades/gst-switch/commit/2c7c7c03b527885c6bc0043dd73a0aeb7d29444d">2c7c7c03b527885c6bc0043dd73a0aeb7d29444d</a></li>
		<li>Made connection.py pythonic and removed dbus.py: <a href="https://github.com/hyades/gst-switch/commit/82cd61beadbd499f9424409c218bcae5b4840217">82cd61beadbd499f9424409c218bcae5b4840217</a></li>
		<li>fixed typo: <a href="https://github.com/hyades/gst-switch/commit/e11aaea2b080d63f55a95b682593d4e6c50c1606">e11aaea2b080d63f55a95b682593d4e6c50c1606</a></li>
		<li>Fixed problems: <a href="https://github.com/hyades/gst-switch/commit/48e1742478627741b7c6def34ab2c2f972609b82">48e1742478627741b7c6def34ab2c2f972609b82</a></li>
	</ul>
</p>

<h2>
	Exception Handling
</h2>
<p>
	From above experience I learnt that I had to put exception handlers in my code. I had very little knowledge of exception handlers and absolutely no experience.
</p>
<p>
	Some good links that I found were very useful in the field of exception handling and testing:
	<ul>
		<li><a href="http://pythontesting.net/framework/pytest/pytest-introduction/">http://pythontesting.net/framework/pytest/pytest-introduction</a> : This page nicely explains how to use py.test.</li>
		<li><a href="http://www.itmaybeahack.com/book/python-2.6/html/p02/p02c07_exceptions.html">http://www.itmaybeahack.com/book/python-2.6/html/p02/p02c07_exceptions.html</a>: A very long and very good page which explains exception handling to its core.</li>
		<li><a href="http://stackoverflow.com/questions/6180185/custom-python-exceptions-with-error-codes-and-error-messages">http://stackoverflow.com/questions/6180185/custom-python-exceptions-with-error-codes-and-error-messages</a>: Nicely explains how to create custom exception classes</li>
		<li><a href="http://blog.ianbicking.org/2007/09/12/re-raising-exceptions/">http://blog.ianbicking.org/2007/09/12/re-raising-exceptions/</a>: Nicely explains how to raise and re-raise exceptions in python</li>
	</ul>
</p>
<p>
	After spending lots of time on reading exception handling in python, I made a few changes to the code, where I defined some custom Exceptions like PathError: Raised when a wrong path is specified to the run the gst-switch-srv process. Another one is ServerProcessError: Raised when something wrong happens with the process running like a OSError indicating some internal fault.
</p>
<h2>Things to do..</h2>
<p>
	Add exception handling for all modules and write py.test testing modules for testing them
</p>

<div class="row">	
	<div class="span9 column">
			<p class="pull-right">{% if page.previous.url %} <a href="{{page.previous.url}}" title="Previous Post: {{page.previous.title}}"><i class="icon-chevron-left"></i></a> 	{% endif %}   {% if page.next.url %} 	<a href="{{page.next.url}}" title="Next Post: {{page.next.title}}"><i class="icon-chevron-right"></i></a> 	{% endif %} </p>  
	</div>

</div>

<div class="row">	
    <div class="span9 columns">    
		<h2>Comments Section</h2>
	    <p>Feel free to comment on the post but keep it clean and on topic.</p>	
		<div id="disqus_thread"></div>
		<script type="text/javascript">
			/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
			var disqus_shortname = 'aayushahuja'; // required: replace example with your forum shortname
			
			
			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		</script>
		<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
		<a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>
	</div>
</div>

<!-- Twitter -->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<!-- Google + -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
<!-- Written by hyades -->

