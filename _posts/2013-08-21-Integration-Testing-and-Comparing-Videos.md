---
layout: post
title: Integration Testing and Comparing Videos
tags: compare testing gsoc
category: 'GSoC-2013'
Year: 2013
Month: 08
Date: 21
---
<h2>Commits:</h2>
<p>
	<ul>
<li>Video comparison module added: <a href="https://github.com/hyades/gst-switch/commit/68b9f299377af86acdf00b2f2ef38bfea53127bb">68b9f299377af86acdf00b2f2ef38bfea53127bb</a></li>
<li>Added a file sink element and frame comparison: <a href="https://github.com/hyades/gst-switch/commit/aa91fe142b5970997db86ee542524b7414da0b7b">aa91fe142b5970997db86ee542524b7414da0b7b</a></li>
<li>video comparison on key frames: <a href="https://github.com/hyades/gst-switch/commit/eddb97074cf113ae040e6f10a5bdec269a416f6e">eddb97074cf113ae040e6f10a5bdec269a416f6e</a></li>
<li>Fixed test.py: <a href="https://github.com/hyades/gst-switch/commit/a9c7e39fbcb01e95ce68fcc68b1465526fa21a3e">a9c7e39fbcb01e95ce68fcc68b1465526fa21a3e</a></li>
<li>integration tests - set_compose_mode - passing: <a href="https://github.com/hyades/gst-switch/commit/f019ff38e9e3b752e0ed99e774db21277f32a518">f019ff38e9e3b752e0ed99e774db21277f32a518</a></li>
<li>integration tests - set_compose_mode - failing: <a href="https://github.com/hyades/gst-switch/commit/7bdeefc5b2fffb98be9331d9660ab9d7545d31c8">7bdeefc5b2fffb98be9331d9660ab9d7545d31c8</a></li>
<li>Reduced intensity of tests and removed sleeps: <a href="https://github.com/hyades/gst-switch/commit/b935c2bd55e5c15a80b6fa1e5a9bf9a41dbed49a">b935c2bd55e5c15a80b6fa1e5a9bf9a41dbed49a</a></li>
<li>Reduced intensity of tests and removed sleeps: <a href="https://github.com/hyades/gst-switch/commit/a588256f5cb2ab385bef27bea570fdbfe0232d95">a588256f5cb2ab385bef27bea570fdbfe0232d95</a></li>
<li>Makefile: <a href="https://github.com/hyades/gst-switch/commit/8ad4ffbad029db57d8157d0cfa2ec87bd88237bb">8ad4ffbad029db57d8157d0cfa2ec87bd88237bb</a></li>
</ul>

</p>

<h2>Integration Tests:</h2>
<p>
	I added an extra module which tests the <code>set_compose_mode</code>. This is the first one in the series of tests in which the output video has to be compared to ensure that everything goes as it is expected. i.e. If a PIP mode change has to occur, the test should ensure that it occurs. 
</p>
<h2>Comparing the Output Video</h2>
<p>
	For each test I do the following:
	<ul>
		<li>I compare key frames of a video to pre-stored frames. eg. If I am testing for changing PIP mode, I will have a two frames - one before the change and one after it. Now if the code which generates these frames from the video is run over the test video, it should generate same frames.</li>
		<li>For generating key frames, I use ffmpeg. Using ffmpeg's inbuilt key frame selector produces black frames in between which makes comparison difficult. So I conduct the test for 6 seconds. First 3 seconds original video is present. At 3 second exact time from start, the change is made. So the next 3 seconds have the modified output refecting the change. So I take frames at 1.5 and 4.5 second marks. Doing this ensures that I get only those which are indeed needed. </li>
		<li>After I have both the frames, I use scipy to calculate the zero norm of the two images. Zero norm is difference of the number of zeroes in the images. If the images are identical, the difference of will be exactly 0. Zero norm can take values between 0.0 and 1.0, with 1.0 being the case where the images are not at all similar.</li>
	</ul>
</p>
<h2>Things to do-</h2>
<p>
	<ul>
		<li>Integrate this video comparison into the integration tests</li>
		<li>Complete tests for all other methods.</li>
		<li>Add running tests through <a href="https://travis-ci.org/">Travis CI</a></li>
		<li>Coverage with <a href="https://coveralls.io/">coveralls</a></li>
		<li>Documentation with <a href="https://readthedocs.org/">readthedocs</a></li>
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

