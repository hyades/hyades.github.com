---
layout: post
title: Travis Build Changed
tags: travis gsoc
Year: 2013
Month: 08
Date: 30
---
<h2>Commits</h2>
<p>
	<ul>
<li>Prefix changed for travis build: <a href="https://github.com/hyades/gst-switch/commit/d7d1b8e6afc1643842fb917260c50d1b2b41daa4">d7d1b8e6afc1643842fb917260c50d1b2b41daa4</a></li>
<li>fixing travis build error: <a href="https://github.com/hyades/gst-switch/commit/ff0ff2d1754f967ba3bda1752643544ad2755a5f">ff0ff2d1754f967ba3bda1752643544ad2755a5f</a></li>
<li>travis build changed: <a href="https://github.com/hyades/gst-switch/commit/5a43e7863a60d01e650172bf91f273c814a869b6">5a43e7863a60d01e650172bf91f273c814a869b6</a></li>
<li>travis build modified: <a href="https://github.com/hyades/gst-switch/commit/021262e0d5e129bf98dee8c908d0c3820b878b85">021262e0d5e129bf98dee8c908d0c3820b878b85</a></li>
<li>removed libtoolize dependency: <a href="https://github.com/hyades/gst-switch/commit/e247c4d3e75ece4e1a0dff6755837230d6540863">e247c4d3e75ece4e1a0dff6755837230d6540863</a></li>
<li>corrected polling process: <a href="https://github.com/hyades/gst-switch/commit/9e451a473953062b865cfd4b3b5399ebea92e24e">9e451a473953062b865cfd4b3b5399ebea92e24e</a></li>
<li>modified travis build process: <a href="https://github.com/hyades/gst-switch/commit/b82f5999c4477e76d514ce1f69c0d897fe9b121f">b82f5999c4477e76d514ce1f69c0d897fe9b121f</a></li>
<li>Polling to check for segmentation faults: <a href="https://github.com/hyades/gst-switch/commit/e59d27a0d540754fe96d4424e3842c0e85bc0cb1">e59d27a0d540754fe96d4424e3842c0e85bc0cb1</a></li>
<li>removed unncessary imports: <a href="https://github.com/hyades/gst-switch/commit/71734b75fef6bbab393f82738e33777f55525883">71734b75fef6bbab393f82738e33777f55525883</a></li>
<li>travis - added girglib: <a href="https://github.com/hyades/gst-switch/commit/d23251a0c836c367f6ee69c12c622c4bbdd6addd">d23251a0c836c367f6ee69c12c622c4bbdd6addd</a></li>
</ul>

</p>

<h2>Whats done - </h2>
<p>
	<ul>
		<li><b>Detecting segmentation faults: </b> If any segmentation faults happen, they are detected by the using <code>poll()</code> method of a process created by Python. If the error code returned by this method can be matched at <a href="http://unixhelp.ed.ac.uk/CGI/man-cgi?signal+7"></a>. The signal number 11 is for segmentation fault.</li>
		<li><b>Travis build:</b> A breakthrough! Seems to be problem here at <a href="https://github.com/hyades/gst-switch/commit/d7d1b8e6afc1643842fb917260c50d1b2b41daa4">https://github.com/hyades/gst-switch/commit/d7d1b8e6afc1643842fb917260c50d1b2b41daa4</a>. The path is not updated according to the prefix given to autogen.sh as <code>./autogen.sh --prefix=/some/random/path</code>. Thus the make process ends up in a error where it will fail to find the respective directory.
		<pre>
			<code>
hyades@hyades-Inspiron-N5010:~$ whereis gst-switch-srv
gst-switch-srv: /usr/local/bin/gst-switch-srv</code>
		</pre>
		Using the procedure I have given in .travis.yml file, gst-switch-srv can be installed successully :) 
	</ul>
</p>
<h2>Todo
</h2>
<p>The path of the server have to be modified from $HOME/gst/stage/bin to /usr/local/bin in the files. A better way to assign these paths according to the prefix passed can be thought of.</p>

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

