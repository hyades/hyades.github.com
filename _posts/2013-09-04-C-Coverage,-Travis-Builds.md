---
layout: post
title: C Coverage, Travis Builds
tags: travis gsoc
Year: 2013
Month: 09
Date: 04
---
<h2>Commits</h2>
<p>
	<ul>
<li>relaxing image comparison factor, modified build process: <a href="https://github.com/hyades/gst-switch/commit/cebbb8accbfc821e4d156bfbc4185f873e8969ab">cebbb8accbfc821e4d156bfbc4185f873e8969ab</a></li>
<li>printing ffmpeg output: <a href="https://github.com/hyades/gst-switch/commit/18ba4174afb68f00906d2eb0c431e17bf85cc4a3">18ba4174afb68f00906d2eb0c431e17bf85cc4a3</a></li>
<li>fixed reference frame path: <a href="https://github.com/hyades/gst-switch/commit/37dc95893949b021c3e8d1cce15baa4e522ca87d">37dc95893949b021c3e8d1cce15baa4e522ca87d</a></li>
<li>Pushing - doing linting: <a href="https://github.com/hyades/gst-switch/commit/ec5705bfe40ad1136faaa714653d43cc43737465">ec5705bfe40ad1136faaa714653d43cc43737465</a></li>
<li>add ffmpeg to dependencies, lint and docs for server.py: <a href="https://github.com/hyades/gst-switch/commit/c6c05391136d1282d0342df196aa77d149e389cd">c6c05391136d1282d0342df196aa77d149e389cd</a></li>
<li>lint and docs for helpers.py: <a href="https://github.com/hyades/gst-switch/commit/ae6a2b2cc3e87b57ba81dadc383d003b3d3265bc">ae6a2b2cc3e87b57ba81dadc383d003b3d3265bc</a></li>
<li>provided bus_name for precise GDbus: <a href="https://github.com/hyades/gst-switch/commit/1ad1c6b93381443987f6d16fa6305b5e7d1b5c80">1ad1c6b93381443987f6d16fa6305b5e7d1b5c80</a></li>
<li>lint corrected: <a href="https://github.com/hyades/gst-switch/commit/562daf9fb7494f20f6116df4f32b76e620ef8a9e">562daf9fb7494f20f6116df4f32b76e620ef8a9e</a></li>
<li>updated gitignore: <a href="https://github.com/hyades/gst-switch/commit/ab946ebc307e888ae61b1605760dfb3be4e4c588">ab946ebc307e888ae61b1605760dfb3be4e4c588</a></li>
<li>lint and docs for connection.py, modified travis scripts: <a href="https://github.com/hyades/gst-switch/commit/f22fcbbb1f13810a692790f3ac44badb3973c2e8">f22fcbbb1f13810a692790f3ac44badb3973c2e8</a></li>
<li>lint and docs - controller.py: <a href="https://github.com/hyades/gst-switch/commit/808797d2ae8a5373a3d81cf4c5f4f6fbc1b926b0">808797d2ae8a5373a3d81cf4c5f4f6fbc1b926b0</a></li>
<li>Renamed unittest files, include tests in linting: <a href="https://github.com/hyades/gst-switch/commit/b5fc7ef741ff700bae4aa8e639d80ea11f22b999">b5fc7ef741ff700bae4aa8e639d80ea11f22b999</a></li>
<li>unittests for make coverage: <a href="https://github.com/hyades/gst-switch/commit/653e3c4d370475fb9d8f22c209929be91c31507e">653e3c4d370475fb9d8f22c209929be91c31507e</a></li>
<li>running coveralls only in root dir: <a href="https://github.com/hyades/gst-switch/commit/1f3a4b465b221310ec092e8644e600f8202116eb">1f3a4b465b221310ec092e8644e600f8202116eb</a></li>
<li>pushing output to pastebin: <a href="https://github.com/hyades/gst-switch/commit/218e07ed47d390a986f72c042de3fe21f68d54d7">218e07ed47d390a986f72c042de3fe21f68d54d7</a></li>
<li>corrected setup of coveralls: <a href="https://github.com/hyades/gst-switch/commit/7616b5597c30e044478e257407ee89e20a3878a4">7616b5597c30e044478e257407ee89e20a3878a4</a></li>
<li>correcting excludes: <a href="https://github.com/hyades/gst-switch/commit/b0d6f72e4733bb8eb9f3a167c78290d88a941b41">b0d6f72e4733bb8eb9f3a167c78290d88a941b41</a></li>
<li>printing repr coverage: <a href="https://github.com/hyades/gst-switch/commit/b38ef9f54981a63005558fc469f537326e53a1f2">b38ef9f54981a63005558fc469f537326e53a1f2</a></li>
<li>excluding libs from gcov: <a href="https://github.com/hyades/gst-switch/commit/a453f875c4a5aa0be6d0977d609b493b15926418">a453f875c4a5aa0be6d0977d609b493b15926418</a></li>
<li>checking encoding of files: <a href="https://github.com/hyades/gst-switch/commit/b6230be1fade5174ba9e336a58168579d8d263f4">b6230be1fade5174ba9e336a58168579d8d263f4</a></li>
<li>modified conf.py for sphinx: <a href="https://github.com/hyades/gst-switch/commit/669c9c72ff65a98b51469b11f59bf93d3c432ba2">669c9c72ff65a98b51469b11f59bf93d3c432ba2</a></li>
<li>modified conf.py for sphinx: <a href="https://github.com/hyades/gst-switch/commit/9fa90a562360fcd8e3b42280af7df77a089670f4">9fa90a562360fcd8e3b42280af7df77a089670f4</a></li>
<li>fixed cd problem: <a href="https://github.com/hyades/gst-switch/commit/77667143e9f3f6eef73c8413ef29926ef5caf989">77667143e9f3f6eef73c8413ef29926ef5caf989</a></li>
<li>mock objects for docs: <a href="https://github.com/hyades/gst-switch/commit/ea7746c869fd124962f31239ceb67a1a5bb21c15">ea7746c869fd124962f31239ceb67a1a5bb21c15</a></li>
<li>made a fakelib: <a href="https://github.com/hyades/gst-switch/commit/78446ea712cdfe88bd62b61b216012a35ec228a3">78446ea712cdfe88bd62b61b216012a35ec228a3</a></li>
<li>testing new travis: <a href="https://github.com/hyades/gst-switch/commit/603d5427d8d0cc4541f5d03276f901b336736fc6">603d5427d8d0cc4541f5d03276f901b336736fc6</a></li>
<li>testing new travis: <a href="https://github.com/hyades/gst-switch/commit/e5adc59c8ca3bc714d50b97c4f8151bac88506fd">e5adc59c8ca3bc714d50b97c4f8151bac88506fd</a></li>
<li>testing new travis: <a href="https://github.com/hyades/gst-switch/commit/687baa3270ac31f7538eb39f5bafe87520906f78">687baa3270ac31f7538eb39f5bafe87520906f78</a></li>
<li>gcov now generated in .gcov files in tools directory: <a href="https://github.com/hyades/gst-switch/commit/2ae929f719e0a26baa9644a0b28594b3c05c838b">2ae929f719e0a26baa9644a0b28594b3c05c838b</a></li>
<li>flushing when killing: <a href="https://github.com/hyades/gst-switch/commit/cc7013028e698d6c1b6f71c5297860d428c00690">cc7013028e698d6c1b6f71c5297860d428c00690</a></li>
</ul>

</p>


<h2>Thinsg done:</h2>
<p>
	<ul>
		<li>
			<b>Coverage of c files: </b>The <code>terminate()</code> and <code>kill()</code> methods to the server now have a parameter <i>cov</i>. Setting its value as True, leads to dumping of coverage data in the tools directory (alternatively environment variable GCOV_PREFIX can be set to dump it elsewhere). Internally the gst-switch-srv calls <code>__gcov_flush()</code> when it receives the signal SIGUSR1. This signal can also be sent like <code>killall -USR1 gst-switch-srv</code>. Note that sending SIGUSR1 does not kill the server. Everytime the coverage data is dumped in the form of .gcda files, <code>make coverage</code> is run. This turns it into .gcov files. The gcov files can be appended together unlike gcda files. Thus results of multiple runs of gcov can be seen by running <code>make coverage</code> after each run.
		</li>
		<li>
			<b>Enabled documentation at readthedocs: </b> <a href="http://gst-switch.readthedocs.org/en/latest/">http://gst-switch.readthedocs.org/en/latest/</a>
		</li>
		<li>
			<b>Setup coveralls for C code: </b> Coverage of C code over coveralls is done through <a href="https://github.com/eddyxu/cpp-coveralls">cpp-coveralls</a>. However, just running the command <code>coveralls</code> was a problem. Running it caused it to search for all .o files including the ones generated by gstreamer and gst-plugins which were installed earlier. These files had some strange characters like /0xe9 which gave a <code>UnicodeDecodeError</code> internally. The problem was solved by specifying the exact root directory where to find the coverage data (i.e tools directory) using the -r option. The overall coverage is at <a href="https://coveralls.io/r/hyades/gst-switch">https://coveralls.io/r/hyades/gst-switch</a>
		</li>
		<li>
			<b>Precise builds: </b>Precise has Gio modules different from Quantal. My machine is quantal, thus running it in precise gave <code>TypeError</code>. In my <code>call_sync</code> function, I was giving <code>bus_name</code> a <code>None</code> value. This had a problem in Precise since it does not allow None values. Providing this value solved the issue.
		</li>
		<li>
			<b>Liniting the code</b>
		</li>
	</ul>
</p>

<h2>Current Issues</h2>
<p>Even though the build runs on travis, some parts need attention.</p>
<p>
	<ul>
		<li>Unittests had 100% coverage</li>
		<li>6 out of 13 integration tests Failed</li>
		<li>
			Running gst-switch-srv gave an error
<pre>
<code>
./tools/gstworker.c:270:error: missing: faac
./tools/gstworker.c:784:error: recorder: failed to create new pipeline
</code>
</pre>
		</li>
		<li>Seems an issue with the libvpx installation.</li>
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

