---
layout: post
title: Makefile, Unittests and Lint
tags: makefile gsoc unittests
Year: 2013
Month: 07
Date: 27
---

<h2>Commits</h2>
<p>
<ul>
<li>Coverage and unittests - test_controller.py: <a href="https://github.com/hyades/gst-switch/commit/28a2e3b72629870e2ff43d59205d992168a5ecb5">28a2e3b72629870e2ff43d59205d992168a5ecb5</a></li>
<li>Pylint-testsource.py: <a href="https://github.com/hyades/gst-switch/commit/c62fd9be3e276497125f44fe92b492c96b5aec86">c62fd9be3e276497125f44fe92b492c96b5aec86</a></li>
<li>Modified Makefile: <a href="https://github.com/hyades/gst-switch/commit/836e41f953fe99419f0e913d6ba5cdf19d043a69">836e41f953fe99419f0e913d6ba5cdf19d043a69</a></li>
<li>Pylint helpers: <a href="https://github.com/hyades/gst-switch/commit/1761c8006e4c2a06b820c9f6f3a40cc82911b1f8">1761c8006e4c2a06b820c9f6f3a40cc82911b1f8</a></li>
<li>Pylint controller.py: <a href="https://github.com/hyades/gst-switch/commit/8094c21e4a578559e2bdcc1dc4960314393ad63d">8094c21e4a578559e2bdcc1dc4960314393ad63d</a></li>
<li>Pylint connection.py: <a href="https://github.com/hyades/gst-switch/commit/df03803b679192a3535cc798332ce4080e6790b6">df03803b679192a3535cc798332ce4080e6790b6</a></li>
<li>modified .gitignore: <a href="https://github.com/hyades/gst-switch/commit/e4c0e9d9f990f7469375ae4050e190481858d911">e4c0e9d9f990f7469375ae4050e190481858d911</a></li>
<li>Added Makefile - pylint: <a href="https://github.com/hyades/gst-switch/commit/f3f119ed86ed8dc19a3d40978f31e19c3e73f599">f3f119ed86ed8dc19a3d40978f31e19c3e73f599</a></li>
<li>improved syntax - pylint: <a href="https://github.com/hyades/gst-switch/commit/828d5b06566e27043b0cfe3a2f679fed9b7e718a">828d5b06566e27043b0cfe3a2f679fed9b7e718a</a></li>
<li>pylint: <a href="https://github.com/hyades/gst-switch/commit/deea82673be84ce1db99add6a9fc507ec1201b70">deea82673be84ce1db99add6a9fc507ec1201b70</a></li>
<li>A bit of pylint - -server.py: <a href="https://github.com/hyades/gst-switch/commit/c3b73951b0e0795b1ae860442f08877a21af4330">c3b73951b0e0795b1ae860442f08877a21af4330</a></li>
<li>Added __init__.py. Added __all__ to all files. Added a test.py file: <a href="https://github.com/hyades/gst-switch/commit/7dc299753b194a8ea5e78a1c40f0c35354174fe7">7dc299753b194a8ea5e78a1c40f0c35354174fe7</a></li>
<li>meaningful names to call_sync parameters: <a href="https://github.com/hyades/gst-switch/commit/ef2b4a490f1dc6a3b46fe1a1d5cb60902521d824">ef2b4a490f1dc6a3b46fe1a1d5cb60902521d824</a></li>
<li>Modified MockConnection() and its usage: <a href="https://github.com/hyades/gst-switch/commit/53c9a0c5cb420749be6c87feeab4e0c145bc62ed">53c9a0c5cb420749be6c87feeab4e0c145bc62ed</a></li>
<li>properties and doc string in place: <a href="https://github.com/hyades/gst-switch/commit/07c3348c13a2025a5373e4cd7a5f7c9a2b1cc8ec">07c3348c13a2025a5373e4cd7a5f7c9a2b1cc8ec</a></li>
</ul>
</p>

<h2>Makefile</h2>
<p>
I made a makefile to automate running py.test, coverage and pylint on the code. This is first time I am writing one :) The one i wrote assumes that py.test (with coverage.py plugin) and pylint is installed on your system. 
</p>
<p>For running py.test along with coverage:
</p>
<p>
	{%highlight bash%}
make coverage
	{%endhighlight%}
</p>	
<p>
	For running pylint over the code:
</p>
<p>
	{%highlight bash%}
make lint
	{%endhighlight%}
</p>
<p>The result is generated as html files in a folder <b>reports</b> in the present working directory.</p>
<h2>Linting the code</h2>
<p>I ran pylint on my code. Ofc it gave a very huge list of warning/errors! Slowly, they were solved. I tried my best to remove those, but some of those just cannot be removed :) Running pylint using Makefile gives a better estimate of the situation.</p>

<h2>Exceptions and Unittests</h2>
<p>I also added exceptions and unittests for helper.py and testsource.py. Now the unittests part is almost complete with 100% coverage.</p>
<h2>Others..</h2>
<p>Some small changes were also made which are reflected from the git commit message history.</p>
<h2>TODO:</h2>
<ul>
	<li>Integration tests</li>
</ul>

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

