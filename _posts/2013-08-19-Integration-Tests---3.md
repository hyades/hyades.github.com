---
layout: post
title: Integration Tests - 3
tags: testing gsoc
category: 'GSoC-2013'
Year: 2013
Month: 08
Date: 19
---

<h2>Commits</h2>
<p>
<ul>
<li>integration tests - get_preview_ports: <a href="https://github.com/hyades/gst-switch/commit/c259a2512fa04d74f92ee3046f3c08655d522598">c259a2512fa04d74f92ee3046f3c08655d522598</a></li>
<li>integration tests get_audio_port - 2: <a href="https://github.com/hyades/gst-switch/commit/cf8c501e714cff468142b33343ed93a370492aaf">cf8c501e714cff468142b33343ed93a370492aaf</a></li>
<li>integration tests get_audio_port: <a href="https://github.com/hyades/gst-switch/commit/ceb322d2129ec1345a4e066c325b01d83eeaeb6c">ceb322d2129ec1345a4e066c325b01d83eeaeb6c</a></li>
<li>Merge remote-tracking branch 'upstream/speaker-tracking' into python-api

merge upstream: <a href="https://github.com/hyades/gst-switch/commit/b52978dfe479ddaa1c0808a21614a67f1c6d20bc">b52978dfe479ddaa1c0808a21614a67f1c6d20bc</a></li>
</ul>

</p>


<h2>Things completed</h2>
<p>
	<ul>
		<li>
			Integration tests. This turned out to be a bit tricky. The <code>get_audio_port()</code> function returns the first preview audio port. The default ports assigned according to these rules:
			<ul>
				<li><i>Compose Port:</i> video_port + 1</li>
				<li><i>Encode Port:</i> video_port + 2</li>
				<li><i>Audio Port:</i> Depends on which position the first audio stream is input to the gst-switch-srv. The first one will be at port 3003. So if the first stream to enter is an audio stream <code>get_audio_port()</code> will return 3003. If a video stream is added before the audio one, the <code>get_audio_port</code> will return 3004.</li>
				<li><i>Preview Ports</i>: It returns a list of all the preview ports who are streaming into the gst-switch-srv - audio and video. </li>
			</ul>
		</li>
		<li>Integration tests for get_audio_port</li>
		<li>Integration tests for get_preview_ports</li>
	</ul>
</p>
<h2>How to run these tests</h2>
<p>Issue py.test command like <code>py.test test_controller.h</code></p>
<p>Or you can also use the Makefile <code>make integration</code></p>
<h2>Under progress..</h2>
<p>I am working out a reliable way to compare the outputs of two runs of the program. Problem seems that sometimes an extra black frame may be captured (it is captured as a key-frame). This causes some problems in the comparison process, since the zero-norm of the comparison states that the two frames are absolutely dissimilar.</p>
<p>The current set of tests shows <b>PASSED</b> 19 out of 20 times. However almost once it fails, the reason is mostly a <i>Connection Closed</i> or <i>Connection Reset</i> message from the DBus. This indicates that something went wrong in the server side.</p>

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

