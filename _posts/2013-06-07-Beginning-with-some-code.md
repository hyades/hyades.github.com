---
layout: post
title: Beginning with some code
tags: gsoc timvideos python
category: 'GSoC-2013'
Year: 2013
Month: 06
Date: 07
---

<p>
	Finally getting some fingers moving. I am pushing code at <a href="https://github.com/hyades/gst-switch/tree/python-api">here</a>. Worked out an initial class structure for getting the things working. I am trying to put in little bit of documentation in the function itself.
	<br>
	Currently there are three main classes: Server, UI and Controller.
</p>
<h4>
	The Server
</h4>
<p>
	The Server is the interaction module with gst-switch-srv. It is capable of controlling the server. The Server class has a contructor where the user can specify the video port, audio port, control port and the output record file.
	{% highlight python %}
		from gstswitch import *		#importing all modules
	{%  endhighlight %}
	{% highlight python %}
		server = Server()			#simple enough thing, gets the server running with default parameters.
	{%  endhighlight %}
	The server can be started off forking a new process and can safely be killed. Connection to the controller can be made by invoking the Controller class.
	{% highlight python %}
		control = server.connectController()
	{%  endhighlight %}
	If a connection does not exist a new connection should be made to the Controller. Now that the server is running, there should be some input to the server! These are the videotestsrc elements of gstreamer. I have added options where the user can select what pattern, height, width etc can be specified. The width of the input stream should be 300 and height should be 200 always, else it might result in some strange unclear patterns coming up. If no pattern is specified a random one gets selected.
	{% highlight python %}
		server.newTestVideo() 		#adds a new test source to the gst-switch
		server.getAllTestVideo() 	#displays all test sources feeding in the gst-switch
	{%  endhighlight %}
	The Server and the test sources can be easily killed off by invoking like this. I was earlier facing a problem where the subprocess.Popen() command was making two processes. Now, while killing only one gets killed, whereas the other one was still remaining. I was using an option shell=True as an argument to the Popen command. Changing this option to shell=False allowed me to control the server class more easily as in this case only one process gets created!
	{% highlight python %}
		server.end() 				#kills off the server process
		server.endAllTestVideo() 	#kills off all test videos that have been defined. server.end() takes care of this
	{%  endhighlight %}
	Currently the video sources are being fed by creating new processes. I will modify these using the Gstreamer 1.0 Python Bindings defined under gi.repository.Gst
</p>
<h4>
	The UI
</h4>
<p>
	Now the server is running and the input sources have been specified, we need to view the output that is getting generated. For this the gst-switch-ui can be invoked. Simply the UI is run using:
	{% highlight python %}
		ui = UI()
	{%  endhighlight %}
	The UI process is ended simply using ui.end() method.
	Once the controller is ready, the compose port can be used to view the output of the gst-switch server directly eliminating the need of the UI.
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

