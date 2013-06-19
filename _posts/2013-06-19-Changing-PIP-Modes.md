---
layout: post
title: Changing PIP Modes
tags: pip gsoc python dbus
Year: 2013
Month: 06
Date: 19
---

<h2>
	A few changes to the executables firstly
</h2>
<p>
	I also made a few modifications to the way gst-switch is installed. The process puts a copy of gst-switch-srv and gst-switch-ui at /usr/local/bin. These are from the master branch of gst-switch. But, I needed these executables from the speaker-track branch. So I just copied these to the folder replacing the already placed ones. Thus, now I am able to shoot off gst-switch-srv (from the speaker-track branch) just by doing it in the terminal. 
</p>
<h2>
	Changing PIPs
</h2>
<p>
	I have been testing the dbus connection so that it works properly. I concertrated mostly on changing PIP modes. For testing the modules that I made earlier were a LOT of help. It surely saved me the headache of starting gst-switch-srv along with 3 to 4 more processes to feed video input as well as to view the processes. My test script looks simple enough like this
	{% highlight python %}
		from gstswitch import *
		from time import sleep
		import subprocess

		s = Server()
		sleep(0.5)
		cmd = "gst-launch-1.0 tcpclientsrc port=3001 ! gdpdepay ! autovideosink"
		proc = subprocess.Popen(cmd.split(), stdout=subprocess.PIPE, bufsize=-1, shell=False)
		s.new_test_video()
		s.new_test_video(clockoverlay=True)
		raw_input()
		proc.kill()
		s.end()
	{% endhighlight %}
	Here I avoided attaching the gst-switch-ui and directly connected a gst-launch element to the output port.
</p>

<p>
	In another terminal I am running my other script interacting with the gst-switch-srv module over dbus. I added a few screenshots to show these:
	<br>
	Firstly I start off my testing script which turns on the gst-switch-srv and adds some input test sources to it. The video output of the gst-switch is shown in the gst-launch windows in the left bottom corner. In the left terminal, I am running this script. This is the default output of gst-switch
</p>
<p>
	<a href="/img/screenshots/Screenshot from 2013-06-19 20:22:07.png"><img src="/img/screenshots/Screenshot from 2013-06-19 20:22:07.png" width="300" height="200"></a>
</p>
<p>
	Now, I run my script which does the work of communicating messages over dbus. Setting Mode 0
</p>
<p>
	<a href="/img/screenshots/Screenshot from 2013-06-19 20:22:23.png"><img src="/img/screenshots/Screenshot from 2013-06-19 20:22:23.png" width="300" height="200"></a>
</p>
<p>
	Now, Mode 1
</p>
<p>
	<a href="/img/screenshots/Screenshot from 2013-06-19 20:22:28.png"><img src="/img/screenshots/Screenshot from 2013-06-19 20:22:28.png" width="300" height="200"></a>
	<br>
</p>
<p>
	Ah, now Mode 2
</p>
<p>
	<a href="/img/screenshots/Screenshot from 2013-06-19 20:22:32.png"><img src="/img/screenshots/Screenshot from 2013-06-19 20:22:32.png" width="300" height="200"></a>
	<br>
</p>
<p>
	Mode 3
</p>
<p>
	<a href="/img/screenshots/Screenshot from 2013-06-19 20:22:37.png"><img src="/img/screenshots/Screenshot from 2013-06-19 20:22:37.png" width="300" height="200"></a>
	<br>
</p>
<p>
	And now back to Mode 0 :D
</p>
<p>
	<a href="/img/screenshots/Screenshot from 2013-06-19 20:22:42.png"><img src="/img/screenshots/Screenshot from 2013-06-19 20:22:42.png" width="300" height="200"></a>
</p>
<h2>
	Things left
</h2>
<p>
	<ul>
		<li>As you can see the sources don't look pretty. This is evident from the first screenshot. This indicates that there is some problem in the pipelines feeding into the gst-switch-srv</li>
		<li>Make an object structure out of this crude script which turns communicates over the dbus with the gst-switch.</li>
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

