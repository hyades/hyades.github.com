---
layout: post
title: Speakertrack working
tags: speakertrack build gsoc gstreamer
Year: 2013
Month: 06
Date: 25
---

<h2>Gstreamer Uninstalled Script</h2>
<p>
	I was earlier experiencing many problems installing the gstreamer package for running the speakertrack modules. This task was made easy by the gst-uninstalled script (<a href="http://cgit.freedesktop.org/gstreamer/gstreamer/plain/scripts/create-uninstalled-setup.sh">http://cgit.freedesktop.org/gstreamer/gstreamer/plain/scripts/create-uninstalled-setup.sh</a>). I downloaded the script and ran it. This script clones the gstreamer git modules (gstreamer, gst-plugins-base, gst-plugins-good, gst-plugins-bad, gst-plugins-ugly) into "~/gst/master". I replaced the gst-plugins-bad module by <a href="https://github.com/duzy/gst-plugins-bad.git">Duzy's</a> one from speakertrack_new branch. The gst-uninstalled script generates a script gst-master at "~/gst". This script is useful in setting the environment variables correctly. These environment variables are needed to install gstreamer in a custom location so that the plugins know where the gstreamer package was installed.
	Now after doing this I followed the setting up instructions. I built like this:
</p>
<p><script src="https://gist.github.com/hyades/6107999.js"></script></p>
<p>
	Doing this builds the gstreamer WITHOUT any build errors. The executables - gst-launch-1.0, gst-inpect-1.0 etc are now located at ~/gst/master/gstreamer/tools/.libs/ or ~/gst/master/gstreamer/tools/ Now, I built the gst-switch in speakertrack branch doing ./autogen and then make and copied the executables from /tools/ - gst-switch-srv, gst-switch-ui and gst-switch-cap to the previous location. Now, running gst-switch-srv and gst-switch-cap worked perfectly with the modules capable of detecting my face :)
</p>
<p>
	The environment variables can also be set using a script like this:
	{% gist 6176137 %}
</p>
<h2>
	The Code
</h2>
<p>
	I have made some edits. 
	<ol>
		<li>The path of the executables now needs to be specified. This will be set to some default value later.</li>
		<li>Earlier if the server was running and while testing I get a python exception. Now since server.end() call is made afterwards, the gst-switch-srv would have kept on running in the background. Running "ps -ef | grep gst-switch-srv" will confirm it. Now, there is a function which can be called like server.brute_end(). This should be added to except portion in the test script like this script:
			{% gist 6176144 %}
		</li>
	</ol>
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

