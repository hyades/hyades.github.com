---
layout: post
title: Working on previews and plans ahead
tags: plans previews gsoc
Year: 2013
Month: 07
Date: 10
---

<h3>
	What I achieved
</h3>
<p>
	Today I spent most of the time debugging the previously written code for preview outputs. I had written this module a week back but did not test it. I was using the alternate method of creating separate processes and dealing with them. A few tweaks were needed to get it to work. The commit link is <a href="https://github.com/hyades/gst-switch/commit/fbbf832e887834964d306053a02839d380f9c16f">fbbf832e88</a>. I have also made a few changes to the Controller class. Till now I have just coded the Controller class but not tested till now. So these changes were needed for this purpose.
</p>

<h3>
	Problems that will mostly arise and things that need to be done
</h3>
<p>
	Trying to jot down whatever is coming to my mind. This list is surely not complete and I will add whatever will comes to mind later.
	<ul>
	<li>In my <a href="http://hyades.github.io/blog/Connections-and-calling-methods">last post</a> I had talked about what methods will be implemented over the dbus. Some of these are pretty easy and straight-forward. These are the methods: get_compose_port, get_encode_port, get_audio_port, get_preview_ports. These are very simple and give simple return values.The method set_composite_mode has been tested by me in a separate script, so I don't expect any problems with that. Four methods: set_encode_mode, adjust_pip, switch and click_video will surely require some amount of testing before they are working good. I got no idea on how speakertracking related methods: mark_face and mark_tracking. I am expecting that the speakertrack system integration will take time.</li>
	<li>Preview ports for viewing outputs is done. However previews for inputs are still remaining.</li>
	<li>Exception handling is fully left.</li>
	<li>Logging is partially implemented.</li>
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

