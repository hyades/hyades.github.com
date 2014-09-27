---
layout: post
title: Unittests Mocking and Coverage
tags: unittests mock coverage
Year: 2013
Month: 07
Date: 24
---

<h2>Commits</h2>
<p>
	<ul>
		<li>Added properties - controller.py: <a href="https://github.com/hyades/gst-switch/commit/0c75a0590a0e683bfbaaba55488fb780e33579b5">0c75a0590a0e683bfbaaba55488fb780e33579b5</a></li>
		<li>Unittests for connection.py - 100%coverage: <a href="https://github.com/hyades/gst-switch/commit/2a5086326b8a72ed406b6a61ccf33b09d02345a5">2a5086326b8a72ed406b6a61ccf33b09d02345a5</a></li>
		<li>Changes in connection.py. Added unittests for connection.py: <a href="https://github.com/hyades/gst-switch/commit/9ad1ed7e21dcec56b54e4a53e32d075db9c2dcf3">9ad1ed7e21dcec56b54e4a53e32d075db9c2dcf3</a></li>
		<li>Added unittests server.py - 100% coverage: <a href="https://github.com/hyades/gst-switch/commit/9c74a37a24e7704973427cd939111b740a492fc8">9c74a37a24e7704973427cd939111b740a492fc8</a></li>
		<li>test for OSError in terminate: <a href="https://github.com/hyades/gst-switch/commit/fab6c53deafb1bc5b5005a9fdccacd763972e51f">fab6c53deafb1bc5b5005a9fdccacd763972e51f</a></li>
		<li>remove unnecessarry: <a href="https://github.com/hyades/gst-switch/commit/e8c38b7a7e6a82e3d1d235214b0255642aa3256a">e8c38b7a7e6a82e3d1d235214b0255642aa3256a</a></li>
		<li>modify gitignore: <a href="https://github.com/hyades/gst-switch/commit/7a4db71936352e6e51a9f27f38ca22f70abb608b">7a4db71936352e6e51a9f27f38ca22f70abb608b</a></li>
		<li>modify gitignore: <a href="https://github.com/hyades/gst-switch/commit/b7d83a907598b77df7ee1927907c814e615ede63">b7d83a907598b77df7ee1927907c814e615ede63</a></li>
		<li>Removed os.devnull exception: <a href="https://github.com/hyades/gst-switch/commit/bafe6905dfceed7870087bd95152ae0f2e89f7de">bafe6905dfceed7870087bd95152ae0f2e89f7de</a></li>
		<li>Removed os.devnull exception: <a href="https://github.com/hyades/gst-switch/commit/eb0895dbb0625b9b58d01bcd815607b0abc1aacf">eb0895dbb0625b9b58d01bcd815607b0abc1aacf</a></li>
		<li>Removed os.devnull exception: <a href="https://github.com/hyades/gst-switch/commit/03895c871a61f5c0ed4a930d7a69802a5d927a3c">03895c871a61f5c0ed4a930d7a69802a5d927a3c</a></li>
		<li>Removed os.devnull exception: <a href="https://github.com/hyades/gst-switch/commit/d74829c50a8aa1f3e61f1d6211ee20ac2f619fe5">d74829c50a8aa1f3e61f1d6211ee20ac2f619fe5</a></li>
	</ul>

</p>
<h2>Things done</h2>
<p>
	Last two days were almost devoted to unittests. I learnt how to use pytest-cov. The command issued by me is
	{%highlight bash%}
py.test --cov-report html --cov [file/files to be checked] [file having unittests]
py.test --cov-report html --cov server.py test_server.py
	{%endhighlight%}
</p>
<p>
	I also learnt how to make mock classes and functions. I also learnt about monkeypatch techniques. Some links about these are:
</p>
<p>
	<ul>
		<li><a href="http://holgerkrekel.net/2009/03/03/monkeypatching-in-unit-tests-done-right/
">http://holgerkrekel.net/2009/03/03/monkeypatching-in-unit-tests-done-right/
</a></li>
		<li><a href="http://pytest.org/latest/monkeypatch.html#_pytest.monkeypatch.monkeypatch.setattr
">http://pytest.org/latest/monkeypatch.html#_pytest.monkeypatch.monkeypatch.setattr
</a></li>
		<li><a href="http://stackoverflow.com/questions/6018040/py-test-use-monkeypatch-in-custom-funcargs">http://stackoverflow.com/questions/6018040/py-test-use-monkeypatch-in-custom-funcargs</a></li>
	</ul>
</p>
<p>
	I have achieved 100% coverage for server.py and connection
</p>

<h2>Next..</h2>
<p>
	<ul>
		<li>Write Makefile for pylint and pep8</li>
		<li>100% coverage for rest files</li>
		<li>Integration tests</li>
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

