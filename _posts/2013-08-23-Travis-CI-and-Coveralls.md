---
layout: post
title: Travis CI and Coveralls
tags: travis coveralls readthedocs gsoc python
category: 'GSoC-2013'
Year: 2013
Month: 08
Date: 23
---

<h2>Commits</h2>
<p>
	<ul>
<li>modified README: <a href="https://github.com/hyades/gst-switch/commit/04920218485e5c134bb9a1acf58778c11a2220da">04920218485e5c134bb9a1acf58778c11a2220da</a></li>
<li>Added python-gi packages: <a href="https://github.com/hyades/gst-switch/commit/ea2eafb8879e33476c1b815838b7c4d3cf730fea">ea2eafb8879e33476c1b815838b7c4d3cf730fea</a></li>
<li>update: <a href="https://github.com/hyades/gst-switch/commit/b2c8e3fca27af41672c5d0ac75b70c04a3e33ecf">b2c8e3fca27af41672c5d0ac75b70c04a3e33ecf</a></li>
<li>added paths to conf.py: <a href="https://github.com/hyades/gst-switch/commit/504511d21c42f61832d4efb93ffc1bd5a6123327">504511d21c42f61832d4efb93ffc1bd5a6123327</a></li>
<li>conf.py for sphinx docs: <a href="https://github.com/hyades/gst-switch/commit/ba24d0604763471b58a0c23b5fead8ab5dcf5fee">ba24d0604763471b58a0c23b5fead8ab5dcf5fee</a></li>
<li>modified requirements.txt: <a href="https://github.com/hyades/gst-switch/commit/fc7143c65ba82ac07cd9dfb571e2804162cde2ea">fc7143c65ba82ac07cd9dfb571e2804162cde2ea</a></li>
<li>modified requirements.txt: <a href="https://github.com/hyades/gst-switch/commit/941d36147cd7a05e24af10255b94ecac73d2ddc4">941d36147cd7a05e24af10255b94ecac73d2ddc4</a></li>
<li>modified requirements.txt: <a href="https://github.com/hyades/gst-switch/commit/ecf56c9e9e7e7454961eb3bc4c6a78346fbad4ce">ecf56c9e9e7e7454961eb3bc4c6a78346fbad4ce</a></li>
<li>added requirements.txt: <a href="https://github.com/hyades/gst-switch/commit/37f64cfd99598b2b454544c3e3896fb7fd080310">37f64cfd99598b2b454544c3e3896fb7fd080310</a></li>
<li>modified travis and makefile: <a href="https://github.com/hyades/gst-switch/commit/4ba5d82a639403cf7a85b33d3cf4cb019ee32146">4ba5d82a639403cf7a85b33d3cf4cb019ee32146</a></li>
<li>added missing unittests for Audio: <a href="https://github.com/hyades/gst-switch/commit/3f3714bb89351e31641e84c7b3977ddbc1e990d2">3f3714bb89351e31641e84c7b3977ddbc1e990d2</a></li>
<li>added missing unittests for Audio: <a href="https://github.com/hyades/gst-switch/commit/811502e58cee70e7e32132ac0c3ce5bef6770879">811502e58cee70e7e32132ac0c3ce5bef6770879</a></li>
<li>Added PKG_CONFIG_PATH: <a href="https://github.com/hyades/gst-switch/commit/47cec77f3749f69ebc880da9f85ccebaf712e957">47cec77f3749f69ebc880da9f85ccebaf712e957</a></li>
<li>Travis file back to normal: <a href="https://github.com/hyades/gst-switch/commit/9d43a0920f1924bd02b6fcc124b0a6e0854ea3e1">9d43a0920f1924bd02b6fcc124b0a6e0854ea3e1</a></li>
<li>playing around with travis.yml: <a href="https://github.com/hyades/gst-switch/commit/20bca943d519cc2044c54ea341f71b1b1152cb7f">20bca943d519cc2044c54ea341f71b1b1152cb7f</a></li>
<li>switch integration tests - initial switching done: <a href="https://github.com/hyades/gst-switch/commit/1913c6e9bc46cc7ebcde0e25593af80544b5534a">1913c6e9bc46cc7ebcde0e25593af80544b5534a</a></li>
<li>switch integration tests - initial switching done: <a href="https://github.com/hyades/gst-switch/commit/d74577dd121f426a7bc90c5a1d31a4afda713f68">d74577dd121f426a7bc90c5a1d31a4afda713f68</a></li>
<li>reference frame comparison for adjust_pip: <a href="https://github.com/hyades/gst-switch/commit/2a32fce193b503d4a8d822992b629b01d3f4a3f6">2a32fce193b503d4a8d822992b629b01d3f4a3f6</a></li>
<li>adjust_pip integration test: <a href="https://github.com/hyades/gst-switch/commit/e128b0051747f772b1ee5cceb2537f8fdd9668b0">e128b0051747f772b1ee5cceb2537f8fdd9668b0</a></li>
</ul>

</p>

<h2>Integration Tests</h2>
<p>Some of the things mentioned in the edit section of my last post are some of the commits mentioned above. I was able to achieve moving around the PIP in the x and y direction successfully.</p>

<h2>Travis CI</h2>
<p>I made a few edits to the .travis.yml. The travis page is at <a href="https://travis-ci.org/hyades/gst-switch">https://travis-ci.org/hyades/gst-switch</a>. Indeed travis-ci is the best thing ever :)  </p>
<p>The PKG_CONFIG_PATH was set to point to the correct location.</p>
<p>Note: Even though the build is successfully, I currently have no tests to check if the build was indeed successful. So cannot say if the build was indeed successful. Only thing which is sure is that there process completed without any errors.</p>

<h2>Coveralls</h2>

<p>I configured python-coveralls to run py.test along with coverage on the code. I use my existing Makefile to conduct these tests. Unittests are currently conducted. I was able to get 100% coverage. The results can been seen on my repos' page <a href="https://github.com/hyades/gst-switch">https://github.com/hyades/gst-switch</a>. The full coverage is at <a href="https://coveralls.io/r/hyades/gst-switch?branch=python-api">https://coveralls.io/r/hyades/gst-switch?branch=python-api</a>. The unittests coverage is at 100%. </p>



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

