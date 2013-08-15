---
layout: post
title: Integration Testing
tags: testing gsoc
Year: 2013
Month: 08
Date: 16
---
<h2>Commits</h2>
<p>
	<ul>
		<li>Bug fixes for audio sources, integration test for audio sources: <a href="https://github.com/hyades/gst-switch/commit/7d2795f400bde81cdbea2e94847408a847839e3e">7d2795f400bde81cdbea2e94847408a847839e3e</a></li>
		<li>test high number of input sources: <a href="https://github.com/hyades/gst-switch/commit/6b05f5890ebe1cd339796c9b04e682aca3ca90a7">6b05f5890ebe1cd339796c9b04e682aca3ca90a7</a></li>
		<li>Video comparison script: <a href="https://github.com/hyades/gst-switch/commit/77b7a08af88fa761f578be0d6609883c159d9c4d">77b7a08af88fa761f578be0d6609883c159d9c4d</a></li>
		<li>test adding multiple input video streams: <a href="https://github.com/hyades/gst-switch/commit/f45c872a8c93daf1146718f0f48166ce8816e41d">f45c872a8c93daf1146718f0f48166ce8816e41d</a></li>
		<li>add driver file for integration tests: <a href="https://github.com/hyades/gst-switch/commit/748bbad5de2aab5742288b5e5506454093218de7">748bbad5de2aab5742288b5e5506454093218de7</a></li>
		<li>integration test for starting and stopping the server: <a href="https://github.com/hyades/gst-switch/commit/8fbc7b1dd874158043b2ce92f818428d53efdf15">8fbc7b1dd874158043b2ce92f818428d53efdf15</a></li>
		<li>Improved unittests for AudioSrc: <a href="https://github.com/hyades/gst-switch/commit/a066418a68df91b4522ab33d75734da12455fcb7">a066418a68df91b4522ab33d75734da12455fcb7</a></li>
		<li>Test Audio Sources: <a href="https://github.com/hyades/gst-switch/commit/b9cbd2efb9ae23cdb1ced4cf431b4998ec462490">b9cbd2efb9ae23cdb1ced4cf431b4998ec462490</a></li>
		<li>Made TestSources video specific: <a href="https://github.com/hyades/gst-switch/commit/cb63c635c2c21c976bd164d427ddd35f0d2fd14b">cb63c635c2c21c976bd164d427ddd35f0d2fd14b</a></li>
	</ul>

</p>

<h2>Completed Things</h2>
<p>
	<ul>
		<li><b>Added Audio Sources</b>: No the API allows adding audio sources. These are added through the TestSources class. Audio has behaviour similar to video sources like they are added using function new_test_audio and have properties similar to them. All audio sources have two important properties: the frequency and wave. The wave can take integral values from 0 and 12.</li>
		<li>
			<b>Beginning with integration testing</b>: The integration tests I have done till now are:
			<ul>
				<li><b>Server:</b> Starting and Stopping the server multiple times.</li>
				<li>
					<b>Input Sources:</b> Adding input video and audio sources to the server using the API. I tried adding huge number of video sources. I also connected a preview to view the output. On my machine, on adding more than 50 sources, it seemed that the output was hanging up a bit due to slight stops in the video output. These hangs become much more severe as the number of sources are increased. Around 100 the video was almost frozen. Audio sources were also added.
				</li>
				<li><b>Controller: </b> I am currently implementing this part. Till now I was checking if the establish_connection method, which makes a DBus connection to the server is working. Refering to code at <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/tests/integrationtests/test_controller.py#L14">https://github.com/hyades/gst-switch/blob/python-api/python-api/tests/integrationtests/test_controller.py#L14</a> - I tried starting the server once, and then repeatedly trying to establish a new connection. I have set the NUM value to 3. This was the maximum value possible without any exceptions coming in the code. With NUM=4, the exception is like this: {% gist 6244425%} </li>
			</ul>
		</li>
	</ul>
</p>
<h2>Other things going on</h2>
<p>To proceed with integration tests, I need a method which can compare a video's key frames with pre-defined ones. This is done to ensure that methods like switch, change PIP works as they should. For extracting key frames, I am using <a href="http://www.ffmpeg.org/">ffmpeg</a>. Then I use scipy for calculating zero-norm between images.</p>
<p>
	References:
</p>
<p>
	<ul>
		<li><a href="http://stackoverflow.com/questions/12100072/how-to-extract-slides-from-a-video-using-python">http://stackoverflow.com/questions/12100072/how-to-extract-slides-from-a-video-using-python</a></li>
		<li><a href="http://trac.ffmpeg.org/wiki/Create%20a%20thumbnail%20image%20every%20X%20seconds%20of%20the%20video">http://trac.ffmpeg.org/wiki/Create%20a%20thumbnail%20image%20every%20X%20seconds%20of%20the%20video</a></li>
		<li><a href="http://stackoverflow.com/questions/189943/how-can-i-quantify-difference-between-two-images#answer-3935002">http://stackoverflow.com/questions/189943/how-can-i-quantify-difference-between-two-images#answer-3935002</a></li>
	</ul>
</p>
<p>There are two methods for extracting frames using ffmpeg, the one in the first link. However the problem here is that even if I have two videos which were generated using the same code, the number of key frames of the two videos is not the same. I observed that some extra black frames were added. This makes it very difficult to compare the two sets of key frames. The second method is that I take frames after every few seconds. This works on the assumption that I am bringing about a change in the video in a time which is greater than this time. </p>

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

