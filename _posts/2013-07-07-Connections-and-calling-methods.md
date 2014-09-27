---
layout: post
title: Connections and calling methods
tags: dbus python connection gsoc
category: 'GSoC-2013'
Year: 2013
Month: 07
Date: 07
---
<p>
Blog post after a few days now. Moved on to a new city, and sadly I don't have a reliable internet connection here.Hopefully my new 3G SIM gets activated really fast! (im realizing life without fast internet is so hard :( )
</p>
<p>
	Working mostly offline, for past few days I am trying to implement to Controller class I had earlier just made and left there. 
</p>
<p>
	The remote methods allowed to interact with the gst-switch-srv through  dbus are:
	<ul>
		<li>get_compose_port: Returns compose port (default is 3001)</li>
		<li>get_encode_port: Returns encode port</li>
		<li>get_audio_port: Returns audio port</li>
		<li>get_preview_ports: Returns a string of all preview ports</li>
		<li>set_composite_mode: Sets the PIP mode (0 to 3). Returns true/false</li>
		<li>set_encode_mode: Sets the encode mode (A or B). Returns true/false</li>
		<li>new_record</li>
		<li>adjust_pip: Inputs are dx, dy, dw, dh</li>
		<li>switch: Inputs are channel and port</li>
		<li>click_video: Inputs are x, y, fw, fh</li>
		<li>mark_face: Input is dictionary (a, b, c, d) of faces</li>
		<li>mark_tracking: Inputs is faces(dictionary)</li>
	</ul>
</p>
<p>
	The main controller class uses a dbus Connection class. This Connection class provides the low level interaction with the dbus. The Controller class is majorly a top level interface which hides all the dbus interactions from the user. 
</p>
<p>
	The functons defined in the Controller class are almost stubs, but each of them have different parsers based on what the function does. Giving defination of each and every method will be too long, so I have tried to put some in-line documentation.
</p>
<p>
	The Connection class handles making connection to the dbus and then calling remote functions. Each function has a different type of calling and objects returned are different and have to be parsed accordingly. I have implemented most of these functions, though still some are left. The interesting functions which will require more attention are adjust_pip, switch, click_video, mark_face, and mark_tracking. 
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

