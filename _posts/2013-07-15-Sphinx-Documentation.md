---
layout: post
title: Sphinx Documentation
tags: sphinx documentation gsoc
Year: 2013
Month: 07
Date: 15
---

<p>
	Got a bit bored from testing modules, so went into writing documentation.
</p>
<h3>What I have done</h3>
<p>
	I am writing documentation so that it can be made into nice looking HTML pages by <a href="http://sphinx-doc.org/">Sphinx</a>. I have completed documentation for controller.py, connection.py, dbus.py and server.py.
	<br>
	The commits made are:
	<ul>
		<li>test for set_compose_mode;set_encode_mode doesn't work:<a href="https://github.com/hyades/gst-switch/commit/5311985a8872aeb215aebbfa89182e8cf2b6848b">5311985a88</a></li>
		<li>Added sphinx compatible documentation - controller.py:<a href="https://github.com/hyades/gst-switch/commit/10c1e4b43402d2da5f999c9cea4605ba9cef2c1f">10c1e4b434</a></li>
		<li>Documentation - connection.py:<a href="https://github.com/hyades/gst-switch/commit/a6fafa1b71a9fd35335a0a177fd66aa595a0d13c">a6fafa1b71</a></li>
		<li>Documentation-dbus.py:<a href="https://github.com/hyades/gst-switch/commit/38c6166674af56706b7718c106fbfe26e842f27a">38c6166674</a></li>
		<li>Documentation server.py:<a href="https://github.com/hyades/gst-switch/commit/f78f8d1aa35e58996a01fceb2c26d10fc8d76c42">f78f8d1aa3</a></li>
	</ul>
</p>
<p>
	The compile the documentation by using a command like
	<script src="https://gist.github.com/hyades/6000586.js"></script>
	And then do
	<script src="https://gist.github.com/hyades/6000600.js"></script>
</p>
<p>
	The documentation looks something like this. Its present only for files I have mentioned above.
	<a href="http://hyades.github.io/gst-switch/">Gst-Switch Python API</a>
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

