---
layout: post
title: Exception Handling - connection.py
tags: exception python gsoc
Year: 2013
Month: 07
Date: 22
---

<h2>Commits</h2>
<p>
	<ul>
		<li>Added unittests for bus: <a href="https://github.com/hyades/gst-switch/commit/7c6f1ea8ed5e5f68aaa1d55fd1641a0e7a997190">7c6f1ea8ed5e5f68aaa1d55fd1641a0e7a997190</a></li>
		<li>Changed naming in test_server.py: <a href="https://github.com/hyades/gst-switch/commit/a3d31f10be8696d9f1ea0203bf5c53b0387a4e9a">a3d31f10be8696d9f1ea0203bf5c53b0387a4e9a</a></li>
		<li>Added unittests connection.py - address: <a href="https://github.com/hyades/gst-switch/commit/8c8663100f09b968c8ce678fe87e2315916abfdd">8c8663100f09b968c8ce678fe87e2315916abfdd</a></li>
		<li>Added properties and exception - connection.py: <a href="https://github.com/hyades/gst-switch/commit/76ce5337daebeefd62c9194f96abad8f7fc1054a">76ce5337daebeefd62c9194f96abad8f7fc1054a</a></li>
		<li>GError Exception Handling connection.py: <a href="https://github.com/hyades/gst-switch/commit/f1506f87654dda984772b5c9ad493a5b8414d56a">f1506f87654dda984772b5c9ad493a5b8414d56a</a></li>
	</ul>
</p>
<h2>Things I did</h2>
<p>
	<ul>
		<li>
			<b>Added exceptions in connection.py</b>
			<br>
			The functions in connection.py interact with the low level GDbus API. It is the API at gi.repository.Gio. Using this API, I am making new connection over dbus and invoking remote methods. Exception handling is done using 'GError'. This exception which occurred is sys.exc_info()[1]. lets say :
			{%highlight python%}
error = sys.exc_info()[1]
			{%endhighlight%}
			Then the error message is contained in error.message and the domain in error.domain.
			{%highlight python%}
msg = error.message
domain = error.domain
			{%endhighlight%}
		</li>
		<li><b>Added properties in connection.py</b></li>
		<li><b>Added unittests</b> based on py.test modules in connection.py. I covered a small chunk of it. Address and bus_name are done.</li>
	</ul>
</p>
<h2>Problems I faced</h2>
<p>
	The Exception of DBus (GError) are located at the file /usr/lib/python2.7/dist-packages/gi/_glib/option.py and /usr/lib/python2.7/dist-packages/gi/_glib/__init__.py. However, including in my PYTHON_PATH was a problem. Somehow doing this worked
	{%highlight python%}
from gi.repository.GLib import GError
	{%endhighlight%}

</p>
<p>
	Some good links I found are:
	<br>
	<a href="https://developer.gnome.org/glib/2.34/glib-Error-Reporting.html">https://developer.gnome.org/glib/2.34/glib-Error-Reporting.html</a>: Explains the error reporting procedure in C.
</p>
<h2>What Next..</h2>
<p>Writing unittests for connection.py. At present it covers only 5-10% of connection.py</p>
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

