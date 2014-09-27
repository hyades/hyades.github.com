---
layout: post
title: The SoC Coding Period Starts Off
tags: gsoc python start gdbus dbus
Year: 2013
Month: 06
Date: 17
---

<h2>The Last Few Days</h2>
<h3>Defining pipelines for test sources</h3>
<p>I have been revamping the code. The major change was the introduction of a class structure and subsequent code to support pipelines for testing. Any pipeline can be derived using the base pipeline. It supports some basic functionalities. Of course, newer functionalities will be added into the classes which are derived from this class. I made a class for testing a video source which uses a derived and modified version of this base pipeline. This kind of a video source allows simulating a test video source without the overhead of creating a separate shell process.
</p>
<h3>Looking into the Gio Modules</h3>
<p>
	I have been also trying to control the gst-switch-srv through the dbus. GDbus or rather Gio is very much capable of handling the situation. It has low-level bindings. DBus on the other hand uses the libdbus library for its communication. Thus, it can be said that GDbus is far more extensible than DBus. However the problem with GDbus is that it lacks a documentation especially for the python modules. I found some good stuff at <a href="http://developer.ubuntu.com/api/ubuntu-12.10/python/Gio-2.0.html">http://developer.ubuntu.com/api/ubuntu-12.10/python/Gio-2.0.html</a>. Only problem here is that the documentation for the C functions and not for Python. I tried a bit but was only capable of calling remote methods which get information such has get_encode_port, get_audio_port etc. However calling methods where a parameter had to be specified <strong>crashed</strong> the server again and again even after repeated attempts. Lack of examples and proper documentation for the Python modules was indeed a hindrance. :( 
</p>
<p>
	So, I decided to take a deeper look into previously tested DBus module itself thinking that I might be wrong previously in underestimating DBus. DBus has an easy structure where you can define a bus first and then use functions of the bus itself to call methods on the remote object. Gst-switch-srv uses a non-default bus address at "unix:abstract=gstswitch". Getting my hands dirty I found out that the DBus module internally uses a Connection class for the actual connection to the dbus. This Connection was ultimately derived by the Bus class. The Connection class had an option for providing the "address" of the dbus. I gave the address and as expected it worked :) The gst-switch-srv too confirmed the connection. However, the main problem arose when I tried calling a method. The dbus modules have been implemented such that they seem to be looking for the path at "org.freedesktop.dbus". However, in reality such a path does not exist in the custom dbus defined by the gst-switch-srv. So, it simply gives an exception stating that it didn't find anything at "org.freedesktop.dbus". So I was left again with GDbus :) I read the C implementations and tried to make sense with the corrosponding Python classes. Finally, after a day I came across a tool "d-feet". This is a graphical reader of the dbus. It was probably the first thing that I had tried. It has an option for custom bus addresses. However, providing the address simply didn't work. But the source code of the module was indeed of lots of use. D-feet internally uses the GDbus modules for connections. The implementation of the introspect method here gave a clear idea of what I had to really do!
</p>
<h2>Today</h2>
<p>
	Using the d-feet code I tried out a test script. Its over <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/test/dbusConnect2.py">here</a>. Using this kind of a script, I can control the PIP mode of the gst-switch-srv. And, it <strong>doesn't</strong> crash the gst-swicth-srv :D The methods where I get information work perfect as they used to.
</p>
<h4>Todo</h4>
<p>
	<ul>
		<li>I need to define a class structure for these dbus interactions (the Controller class I talked about in a <a href="http://hyades.github.io/blog/Beginning-with-some-code/">previous blog</a>). 
		</li>
		<li>
			Although the above testing script is working, there are some cases where does cause some undesired results. These have to be dealt with too.
		</li>
	</ul>
	

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

