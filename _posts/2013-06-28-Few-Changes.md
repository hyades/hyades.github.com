---
layout: post
title: Few Changes
tags: gsoc pep8 python
Year: 2013
Month: 06
Date: 28
---

<p>
	The entire code is now PEP8 compliant maing it a lot easier to view. I found out a plugin for my text editor and all my future code will surely be the same.
</p>
<p>
	Earlier i wrote about how I was not getting output correctly. The video was not "pretty" and clear. I had given a screenshot for comparison. This was due to a typo in the caps. Now, the video is perfect.
</p>
<p>
	You can have a look <a href="/video/record 2013-06-27 201241.data">here</a>. This file opens fine with vlc for me.
</p>
<p>
	I have also made some changes in the code so that the major variables are distinguished from the unimportant ones. This will be helpful especially when debugging code.
</p>
<p>
	Also as mithro pointed out, the path of executables is now passed as parameter to the Server. This path can also be made an optional argument in case all the executables are in some default location after build and install.
</p>
<p>
	Also now with everything installed correctly in place, I get warnings both in the gst-switch-srv and gst-switch-ui like:
	{% highlight bash %}
(gst-switch-ui:11231): GStreamer-WARNING **: gstpad.c:3677:gst_pad_chain_data_unchecked:<overlay:sink> Got data flow before stream-start event
 
(gst-switch-ui:11231): GStreamer-WARNING **: gstpad.c:3908:gst_pad_push_data:<overlay:src> Got data flow before stream-start event
	{% endhighlight %}
</p>
<p>
	Audio is another problem. I ran gst-switch-srv followed by gst-switch-ui. I then added a audio test source on port 4000. This resulted in crashing the gst-switch-ui. The log looks something like this. 
	<script src="https://gist.github.com/hyades/5884014.js"></script>
	It seems that an element <b>monoscope</b> is missing. However according to <a href="http://gstreamer.freedesktop.org/documentation/plugins.html">http://gstreamer.freedesktop.org/documentation/plugins.html</a> monoscope is a part of gst-plugins-good which is already installed.
</p>
<br>
<h5>
	Some things to do:
</h5>
<p>
	There is a need for a error reporting mechanism. This will be utilizing python's Exception class. Presently, I have little knowledge of using this. I am learning how to make use of this Exception class. I have a file <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/gstswitch/exception.py">exception.py</a> where I will be defining some common exceptions. These will be raised at appropriate places. Work needs to be done here.
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

