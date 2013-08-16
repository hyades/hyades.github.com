---
layout: post
title: Integration Tests - 2
tags: testing gsoc
Year: 2013
Month: 08
Date: 17
---


<h2>Commits</h2>
<p>
	<ul>
<li>integration tests - get_encode_port: <a href="https://github.com/hyades/gst-switch/commit/80da75070f0c0c0d3c7a3f32e3a6350804a60984">80da75070f0c0c0d3c7a3f32e3a6350804a60984</a></li>
<li>fixed problems in comparing lists: <a href="https://github.com/hyades/gst-switch/commit/749a3e35a9938a67d09734ec3d303ce49f7ea35c">749a3e35a9938a67d09734ec3d303ce49f7ea35c</a></li>
<li>fixed problems in comparing lists: <a href="https://github.com/hyades/gst-switch/commit/00dfafe4f0999aa446d517d73027aed1e4f3ac96">00dfafe4f0999aa446d517d73027aed1e4f3ac96</a></li>
<li>Added Integration tests for get_compose_port: <a href="https://github.com/hyades/gst-switch/commit/7c4e616dfa0ebb9eb65d09aeecc16458dac219a7">7c4e616dfa0ebb9eb65d09aeecc16458dac219a7</a></li>
<li>establish_connection tests: <a href="https://github.com/hyades/gst-switch/commit/e4ee184a72e8534854bbdb8105442edc66f178e3">e4ee184a72e8534854bbdb8105442edc66f178e3</a></li>
</ul>
</p>

<h2>Things completed - </h2>
<p>
	<ul>
		<li>
			<b>Integration tests for getting the current compose port of gst-switch.</b> The compose port is returned as an integer when <code>gst_compose_port</code> method is called on the Controller. I observed that its value is one greater than the video_port paramater of the gst-switch-srv. So if the value of <code>video_port</code> is 3000, <code>get_compose_port</code> should return 3001. The tests are run for multiple values of <code>video_port</code>. For each of these ports, the <code>get_compose-port</code> method is called multiple times. For the test, I have two constants, NUM and FACTOR. These can be found <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/tests/integrationtests/test_controller.py#L75">here</a>. NUM denotes the number of <code>video_port</code> (testcases) values that are taken. NUM*FACTOR is the number of times the <code>get_compose_port</code> method is called in each test case. After trying out multiple values of NUM and FACTOR, I found that after a product value of NUM*FACTOR greater than about 400, I get an exception - <code>ConnectionError: unix:abstract=gstswitch (Could not connect: Connection refused)</code>. 
		</li>
		<li>
			<b>Integration test for getting current encode port</b>. The encode port works the same as <code>get_compose_port</code> method. Here the encode port is generally 2 ports more than <code>video_port</code>. The test cases were made similar to <code>get_compose_port</code>.
		</li>
	</ul>
</p>
<h2>Working on</h2>
<p>The rest of the methods of gst-switch</p>

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

