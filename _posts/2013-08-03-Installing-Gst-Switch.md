---
layout: post
title: Installing Gst-Switch
tags: install gsoc gst-switch
Year: 2013
Month: 08
Date: 03
---

<p>Using this method I was able to correctly install gst-switch (builds as of now) </p>
<h2>Dependencies</h2>
<p>The later parts of this post will take care of most of the dependencies. However, one has to be still fixed.</p>
<p><script src="https://gist.github.com/hyades/6146073.js"></script></p>

<h2>Clone Repositories</h2>
<p><script src="https://gist.github.com/hyades/6146097.js"></script></p>

<h2>Setup Config Paths</h2>
<p><script src="https://gist.github.com/hyades/6146078.js"></script></p>

<h2>Build gst-switch</h2>
<p><script src="https://gist.github.com/hyades/6146103.js"></script></p>

<h2>Checking if it built correctly</h2>
<p><script src="https://gist.github.com/hyades/6146110.js"></script></p>

<h2>Python API</h2>
<p>Since some recent changes were made into the gst-switch speaker-tracking branch, my repository is not currently updated with it. As of now the API will work even if gst-switch is installed. The path to the gst-switch installation has to be provided while starting the server. The path is given as an argument to the Server.</p>
<p>For getting the Python-API code you can do this in any directory of your system (Not in ~/gst/)</p>
<p><script src="https://gist.github.com/hyades/6146121.js"></script></p>
<br>

<p>Now we are ready. Hope this works :)</p>

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

