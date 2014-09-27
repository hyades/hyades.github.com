---
layout: post
title: Problems building gst-switch
tags: build gsoc problems
Year: 2013
Month: 09
Date: 12
---

<h2>The Build Process I follow</h2>
<p>
	Gst-switch requires:
</p>
<p>
	<ul>
		<li>gstreamer 6c11da1</li>
		<li>gst-plugins-base a8df760</li>
		<li>gst-plugins-good d14d4c4</li>
		<li>gst-plugins-ugly  68985ba</li>
		<li>gst-plugins-bad from https://github.com/duzy/gst-plugins-bad checkout to speakertrack_new branch</li>
	</ul>
<p>
	Along with some other dependencies. 
</p>
<p>
	The build runs on travis using the config file <a href="https://github.com/hyades/gst-switch/blob/master/.travis.yml">.travis.yml</a>. To install gst-switch this file runs the script <a href="https://github.com/hyades/gst-switch/blob/master/.travis-setup.sh">.travis-setup.sh</a>. This file contains the list of dependencies. An almost same script which can be used for the process on non-travis environments is <a href="https://github.com/hyades/gst-switch/blob/master/scripts/install.sh">install.sh</a>
</p>
<h2>Problems:</h2>
<p>
	The installation is completed without any errors. The latest travis log is <a href="https://s3.amazonaws.com/archive.travis-ci.org/jobs/11281421/log.txt">here</a>. The problem comes when gst-switch-srv is run. The output on running it is: 
<pre>
<code>
./tools/gstswitchserver.c:130:info: gst_switch_server init 0x1683000
./tools/gstswitchserver.c:1523:info: Compose sink to 3001, 3002
./tools/gstcomposite.c:88:info: gst_composite init 0x1686060
./tools/gstcomposite.c:155:warning: ignore changing mode in transition
./tools/gstworker.c:270:error: missing: faac
./tools/gstworker.c:784:error: recorder: failed to create new pipeline
./tools/gstswitchserver.c:712:info: Listening on localhost (::1:5000)
./tools/gstswitchcontroller.c:484:info: Controller is listening at: unix:abstract=gstswitch
./tools/gstswitchserver.c:712:info: Listening on localhost (::1:3000)
./tools/gstswitchserver.c:712:info: Listening on localhost (::1:4000)
./tools/gstswitchcontroller.c:626:warning: set_compose_port: no connections
online: composite @1780530214768
./tools/gstswitchcontroller.c:626:warning: new_mode_online: no connections
./tools/gstswitchcontroller.c:449:info: authorize: GCredentials:linux-ucred:pid=25145,uid=1000,gid=1000
./tools/gstswitchcontroller.c:327:warning: close: Underlying GIOStream returned 0 bytes on an async read
./tools/gstswitchcontroller.c:337:info: closed: 0x16ad5c0, 1 (0 uis)
</code>
</pre>

This suggests that <code>faac</code> is missing. However on closer look at the log, it can also be seen that whiule doing <code>./autogen.sh</code> in gst-plugins-bad, the configure lists faac:
<pre>
<code>
configure: *** Plug-ins with dependencies that will be built:
	bz2
	curl
	decklink
	dvb
	faac
	faad
	fbdevsink
	hls
	mfc
	mpeg2enc
	mplex
	opencv
	rsvg
	rtmp
	shm
</code>
</pre>
Also <code>libfaac-dev</code>  is installed on the system by the script. 
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

