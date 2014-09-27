---
layout: post
title: Exception Handling and Unittests
tags: exceptions unittest python gsoc
category: 'GSoC-2013'
Year: 2013
Month: 07
Date: 20
---

<h2>
	Commits:
</h2>
<p>
	<ul>
		<li>Added unittests for server.py: <a href="https://github.com/hyades/gst-switch/commit/e93df29e12b92c87cfbdf2878682920fb0513437">e93df29e12b92c87cfbdf2878682920fb0513437</a></li>
		<li>Added properties for server.py: <a href="https://github.com/hyades/gst-switch/commit/b1fb7f1bd5226f666c47555b360a97c208951499">b1fb7f1bd5226f666c47555b360a97c208951499</a></li>
		<li>Documentation: server.py: <a href="https://github.com/hyades/gst-switch/commit/be12843f29839b6f9875b71c59c386e044256170">be12843f29839b6f9875b71c59c386e044256170</a></li>
	</ul>
</p>
<h3>
	What I Did Today..
</h3>
<p>
	<ul>
		<li>I modified <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/gstswitch/server.py">server.py</a>. I finally learnt what the decorator operator in Python does. I added properties for path, video_port, audio_port, control_port and record_file. This allowed me to add exception handlers. Also detection of errors and raising is possible.</li>
		<li>I wrote unittests <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/gstswitch/test_server.py">test_server.py</a></li>. These cover almost all errors that may come up in server.py
	</ul>
</p>
<h3>Problems I Faced..</h3>
<ul>
	<li>
		Using properties: Very nicely explained at:
		<ul>
			<li><a href="http://stackoverflow.com/questions/6618002/python-property-versus-getters-and-setters#answer-6618176">http://stackoverflow.com/questions/6618002/python-property-versus-getters-and-setters#answer-6618176</a></li>
			<li><a href="http://stackoverflow.com/questions/6304040/real-world-example-about-how-to-use-property-feature-in-python">http://stackoverflow.com/questions/6304040/real-world-example-about-how-to-use-property-feature-in-python</a></li>
		</ul>
	</li>
</ul>
<h3>Next What..</h3>
<p>
	Do the same for all other files (Write properties wherever required and unittests)
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

