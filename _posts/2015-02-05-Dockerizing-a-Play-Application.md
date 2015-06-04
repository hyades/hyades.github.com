---
layout: post
title: Dockerizing a Play Application
tags: docker play-framework groupon java
category: code
Year: 2015
Month: 02
Date: 05
---

<div>

	<p>
		Recently I learnt how to use docker, and went ahead <a href="http://docker.com">dockerizing</a> a <a href="http://playframework.com">Play</a> application which I have been developing at Groupon.
	</p>

	<p>
		Docker is basically a kind of LXC container which provides a separate environment for your application to run. Thus we can have an App running Java 8 in a machine running Java 6, without creating any issues with the apps already running. Also, getting away from the <code>virtualenv</code> in Python (which I don't personally like) to switch between versions of Python and creating custom packages and <code>eggs</code> is possible with ease. I will start off with a new Java Play application. The code is on Github at <a href="https://github.com/hyades/docker-play">https://github.com/hyades/docker-play</a>. So we create a new Play application from the Java template - 
	</p>
	<p>
{% highlight bash %}
[~/Playground/github]$ activator new docker-play                                                                                                                                                       

Fetching the latest list of templates...

Browse the list of templates: http://typesafe.com/activator/templates
Choose from these featured templates or enter a template name:
  1) minimal-akka-java-seed
  2) minimal-akka-scala-seed
  3) minimal-java
  4) minimal-scala
  5) play-java
  6) play-scala
(hit tab to see a list of all templates)
> 5
OK, application "docker-play" is being created using the "play-java" template.

To run "docker-play" from the command line, "cd docker-play" then:
/Users/aahuja/Playground/github/docker-play/activator run

To run the test for "docker-play" from the command line, "cd docker-play" then:
/Users/aahuja/Playground/github/docker-play/activator test

To run the Activator UI for "docker-play" from the command line, "cd docker-play" then:
/Users/aahuja/Playground/github/docker-play/activator ui
{% endhighlight %}
	</p>

	<p>
		First we get docker on our system. I installed the <a href="https://github.com/boot2docker/boot2docker">boot2docker</a> on my MAC. In MAC and other non-Linux OS, docker will be running inside a VirtualBox VM. In Linux it will run natively, so only a <code>apt-get install docker</code> or <code>yum install docker</code> is enough to get it running. 
	</p>

	<p>There are two ways of creating a container. First is open up an interactive terminal like - </p>
	<p>
{% highlight bash %}
[~]$ docker pull ubuntu
[~]$ docker run -i -t ubuntu /bin/bash
{% endhighlight %}
	</p>
	<p>This will fetch a ubuntu container which will be an empty one. And then we get a prompt into the container. Here we can install whatever we want, and the finally come out and say</p>
{% highlight bash %}
docker ps -l
# copy the container id
[~]$ docker commit <container-id>
{% endhighlight %}
	<p>
		The second way is a better way. It is through a <code>Dockerfile</code>. In the dockerfile, we can provide only the build instructions. We cannot start off any process using the Dockerfile. My Dockerfile looks like this - 
	</p>
	<p>
{% highlight docker %}

# Base Image as CentOS

FROM centos 

MAINTAINER aayushahuja@gmail.com

RUN yum -y update

# Install Java 1.7

RUN yum -y install wget git unzip pwgen ca-certificates java-1.7.0-openjdk java-1.7.0-openjdk-devel

ENV PROJECT_WORKPLACE /usr/src/

RUN mkdir -p $PROJECT_WORKPLACE/activator $PROJECT_WORKPLACE/build $PROJECT_WORKPLACE/app

WORKDIR $PROJECT_WORKPLACE/activator

# Fetch Activator for Play

RUN wget http://downloads.typesafe.com/typesafe-activator/1.3.2/typesafe-activator-1.3.2.zip && \
    unzip typesafe-activator-1.3.2.zip

ENV PATH $PROJECT_WORKPLACE/activator/activator-1.3.2:$PATH

# Copy Files to Docker Container

COPY . $PROJECT_WORKPLACE/build

WORKDIR $PROJECT_WORKPLACE/build

RUN activator clean stage

RUN cp -R $PROJECT_WORKPLACE/build/target/universal/stage $PROJECT_WORKPLACE/app

EXPOSE 9000

# This Runs with docker run

CMD $PROJECT_WORKPLACE/app/stage/bin/docker-play -Dhttp.port=9000 -Dlogger.file=$PROJECT_WORKPLACE/build/logger.xml


{% endhighlight %}
	</p>

	<p>
		All the commands in <code>RUN</code> will be run when the docker container is built. The <code>CMD</code> is run when the container is run. Hence it is a two step process. We also expose the port 9000 of the container. This will be used by our play application to communicate through the docker to the rest of the world! Here we install some Java into the container, and some basic things before to get our app running.
	</p>

	<p>
		So we finally build our container. 
	</p>
	<p>
{% highlight bash %}

[~]$ docker build  -t  "hyades/docker-play" .

{% endhighlight %}
	</p>
	<p>
		Wait some time for all stuff to be downloaded and installed to the system. Here we use the <code>-t</code> option to tag the container and give it a name, which can be easily used in further steps.
	</p>
	<p>
		Now, once the build is done, we have a container ready. But its still not running. So we now run it
	</p>

	<p>
{% highlight bash %}
[~]$ docker run -d -p 0.0.0.0:9000:9000 hyades/docker-play
{% endhighlight %}
	</p>
	<p>
		The <code>-d</code> option will run the <code>docker run</code> process as a daemon, the <code>-p</code> option will connect to an opened port on the container. Here we connect the <code>9000</code> port of our system to the <code>9000</code> port of the container. We can check this by running
	</p>
	<p>
{% highlight bash %}
[~]$ docker ps
# get the container id of our container
[~]$ docker port <container-id>
9000/tcp -> 0.0.0.0:9000
{% endhighlight %}
	</p>
	<p>
		Additionally, if we are using OSX, we should open up the boot2docker's port to OSX. 
	</p>
	<p>
{% highlight bash %}
 open http://$(boot2docker ip 2>/dev/null)/
{% endhighlight %}
	</p>
	<p>
		This will open up the browser for you, with an IP address. Mine looks like <a href="http://192.168.59.103/">http://192.168.59.103/</a>.Now, if we point to <a href="http://192.168.59.103:9000">http://192.168.59.103:9000</a>, we can see the welcome message from the Play application!
	</p>
	<div>
		<p>
			<img src="/images/play-app-docker.png" style="width:auto; height: 100px">
		</p>
	</div>
	<p>So the Play application is up and running from inside the docker container!</p>
	

</div>



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

