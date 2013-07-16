---
layout: post
title: Writing unittests
tags: unittest test gsoc
Year: 2013
Month: 07
Date: 16
---

<h3>
	What I am doing
</h3>
<p>
	I am beginning to get an idea of what unittests are. They try to test a particular small portion of your code and ensure that it will behave normally in all test cases.
</p>
<p> 
	For example I was writing unittests for a function - set_video_port(video_port)
	Mithro pointed out that if I give an argument like -1, my code will not work correctly. So this type of error where the port numbers are not in range should induce a <b>ValueError</b>. Similary, putting a string as an argument will should also raise an exception - <b>TypeError</b>.
</p>
<p>
	I am making a class for each function, and the functions in the class are corresponding tests
	The format is like:
	<script src="https://gist.github.com/hyades/6009468.js"></script>
</p>
<p>
	I run these tests by simply issuing a command like 
	<script src="https://gist.github.com/hyades/6009520.js"></script>
</p>
<p>
	The commits made are
	<ul>
		<li>Added unittest for BaseServer.set_video_port: <a href="https://github.com/hyades/gst-switch/commit/6963aa5bbbddbe8d25e776ca4727a509132485e5">6963aa5bbbddbe8d25e776ca4727a509132485e5</a></li>
		<li>Added unittest for BaseServer.set_audio_port: <a href="https://github.com/hyades/gst-switch/commit/761fd99c5519da82c79ee5e31f77cf07769a0b65">761fd99c5519da82c79ee5e31f77cf07769a0b65</a></li>
		<li>Added unittest for BaseServer.set_control_port: <a href="https://github.com/hyades/gst-switch/commit/761fd99c5519da82c79ee5e31f77cf07769a0b65">761fd99c5519da82c79ee5e31f77cf07769a0b65</a></li>
		<li>Added unittest for BaseServer.set_control_port: <a href="https://github.com/hyades/gst-switch/commit/b4584d1c9214a555af052b7542adfa707acc9a1b">b4584d1c9214a555af052b7542adfa707acc9a1b</a></li>
		<li>Added unittest for BaseServer.set_record_file: <a href="https://github.com/hyades/gst-switch/commit/ab2743e221b45c980a75a9e9464f6ea61f6748a0">ab2743e221b45c980a75a9e9464f6ea61f6748a0</a></li>
		<li>Added unittest for BaseServer.get_video_port: <a href="https://github.com/hyades/gst-switch/commit/a403b96a3baaab320578530b2ebfc502cf1973b3">a403b96a3baaab320578530b2ebfc502cf1973b3</a></li>
		<li>Added unittest for BaseServer.get_audio_port: <a href="https://github.com/hyades/gst-switch/commit/933598967c845f394d2744322b1063b583bb53a9">933598967c845f394d2744322b1063b583bb53a9</a></li>
		<li>Added unittest for BaseServer.get_audio_port: <a href="https://github.com/hyades/gst-switch/commit/c8f2ccdf9675dd4ce3b146e35feda6289cce307a">c8f2ccdf9675dd4ce3b146e35feda6289cce307a</a></li>
		<li>Added unittest for BaseServer.get_control_port: <a href="https://github.com/hyades/gst-switch/commit/f4ce165cb8f5d6b54c1ae3836025f1e0600ade6d">f4ce165cb8f5d6b54c1ae3836025f1e0600ade6d</a></li>
		<li>Added unittest for BaseServer.get_record_file: <a href="https://github.com/hyades/gst-switch/commit/b5e4a4002c33d9f9a2c97184e6d9eacbeaad06a3">b5e4a4002c33d9f9a2c97184e6d9eacbeaad06a3</a></li>
	</ul>
</p>
<h3>
	What I am planning to do
</h3>
<p>
	I will be continuing with writing unittests for each function of the code :)
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

