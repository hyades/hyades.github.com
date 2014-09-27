---
layout: post
title: Installation and Changes in Structure
tags: install gstreamer python
category: 'GSoC-2013'
Year: 2013
Month: 06
Date: 23
---

<h2>
	Installation
</h2>
<p>
	Installation of the gst-switch from master branch works good. However I am unable to install gst-switch for the speaker-track branch. 
</p>
<p>
	I am running Quantal and had gstreamer-1.0 installed along with all the plugins (good, bad, ugly) installed through the ubuntu repository. The version of gstreamer was 1.0.6. However, gst-switch requires the latest development version-1.1.1 to be installed. 
</p>
<p>
	Also I would mention that installing the speakertrack branch of gst-switch does not work out correctly. Firstly the gstreamer plugins were not installed correctly. Also, I did not find the file gst-switch-cap in ~/gst/stage/bin indicating that the installation process actually installed the master branch instead of installing the speakertrack branch.
	<br>
	I have installed all the git packages of gstreamer and its plugin from duzy repo at <a href="https://github.com/duzy">https://github.com/duzy</a>. I installed the following packages:
	<ul>
		<li>gstreamer <a href="https://github.com/duzy/gstreamer">https://github.com/duzy/gstreamer</a></li>
		<li>gst-plugins-base <a href="https://github.com/duzy/gst-plugins-base">https://github.com/duzy/gst-plugins-base</a></li>
		<li>gst-plugins-good <a href="https://github.com/duzy/gst-plugins-good">https://github.com/duzy/gst-plugins-good</a></li>
		<li>gst-plugins-ugly <a href="https://github.com/duzy/gst-plugins-ugly">https://github.com/duzy/gst-plugins-ugly</a></li>
		<li>gst-plugin-bad <a href="https://github.com/duzy/gst-plugins-bad">https://github.com/duzy/gst-plugins-bad</a></li>
	</ul>
</p>
<p>
	Installing the gst-plugins-bad gives errors. First I try installing from the master branch. I encountered this error while doing make:
	{% highlight bash %}
		make[4]: Entering directory `/home/hyades/Github/test/duzy/gst-plugins-bad/gst-libs/gst/basecamerabinsrc'
		  CC     libgstbasecamerabinsrc_1.0_la-gstcamerabinpreview.lo
		In file included from gstcamerabinpreview.c:31:0:
		../../../gst-libs/gst/glib-compat-private.h:84:30: error: unknown type name 'GStaticRecMutex'
		make[4]: *** [libgstbasecamerabinsrc_1.0_la-gstcamerabinpreview.lo] Error 1
		make[4]: Leaving directory `/home/hyades/Github/test/duzy/gst-plugins-bad/gst-libs/gst/basecamerabinsrc'
	{% endhighlight%}

	Didn't work out well. So I did a checkout to the speakertrack branch, ran the ./autogen. So I get this now:
	{% highlight bash %}
		libtoolize: rerunning libtoolize, to keep the correct libtool macros in-tree.
		+ running aclocal -I m4 -I common/m4 ...
		+ running autoheader ...
		+ running autoconf ...
		configure.ac:204: error: possibly undefined macro: AG_GST_CHECK_GST_PLUGINS_LIBAV
		      If this token and others are legitimate, please use m4_pattern_allow.
		      See the Autoconf documentation.

		autoconf failed
	{% endhighlight %}

	I also tried out the speakertrack_new branch, ran the ./autogen and then did make. This time I get this:
	{% highlight bash %}
		make[3]: Entering directory `/home/hyades/Github/test/duzy/gst-plugins-bad/gst/dvbsuboverlay'
		  CC     libgstdvbsuboverlay_la-gstdvbsuboverlay.lo
		gstdvbsuboverlay.c:71:43: error: expected '}' before 'GST_VIDEO_OVERLAY_COMPOSITION_BLEND_FORMATS'
		gstdvbsuboverlay.c:78:1: error: expected '}' before 'GST_VIDEO_OVERLAY_COMPOSITION_BLEND_FORMATS'
		make[3]: *** [libgstdvbsuboverlay_la-gstdvbsuboverlay.lo] Error 1
		make[3]: Leaving directory `/home/hyades/Github/test/duzy/gst-plugins-bad/gst/dvbsuboverlay'
	{% endhighlight %}
</p>

<h2>
	Code Improvements
</h2>
<p>
	I have tried to bring some new improvements to the code. I have made a new structure for the server class so that it is extensible. Now, the main Server class is derived from three classes:
	<ol>
		<li>
			BaseServer : Handles the various properties of the Server.
		</li>
		<li>ServerProcess : Handles all processes created by the Server. These include both controlling the server process as well as the various test sources which can be created to test the server.</li>
		<li>ServerDBusController : Handles all interactions of the Server with the DBus</li>
	</ol>
</p>
<p>
	I have added two files:
	<ol>
		<li>connection.py : This file will have classes which will take care of the various connections which have to be made with the gst-switch-srv over dbus.</li>
		<li>dbus.py : This file will have classes which will help in interaction with the remote objects present on the gst-switch-srv. This will be utilizing the methods defined in connection.py.</li>
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

