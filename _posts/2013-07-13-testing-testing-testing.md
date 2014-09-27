---
layout: post
title: testing testing testing
tags: tests gsoc dbus python
Year: 2013
Month: 07
Date: 13
---

<h3>What I achieved</h3>
<p>
	The commits are:
	<ul>
		<li>Removed unncessary files:<a href="https://github.com/hyades/gst-switch/commit/d0e2cf4e001b9da785071448d56bb2a4399b1218">d0e2cf4e00</a></li>
		<li>Created separate helpers class. Removed logging:<a href="https://github.com/hyades/gst-switch/commit/9a9f2412522f711cbe648faafcb77ecdd468b020">9a9f241252</a></li>
		<li>small change:<a href="https://github.com/hyades/gst-switch/commit/14e871ad40d929c43cfcf61d2f90256c6cddc677"> 14e871ad40</a></li>
		<li>removed unneccesarry commented code:<a href="https://github.com/hyades/gst-switch/commit/aa50ca622e407df6213d8deb3b77de9d63842d8b">aa50ca622e</a></li>
		<li>DBus methods getting data working:<a href="https://github.com/hyades/gst-switch/commit/804436e8effaed7a402cf7363972825722b4be06">804436e8ef</a></li>
		<li>Fixed typos, modified tests:<a href="https://github.com/hyades/gst-switch/commit/df00cd368aadf544055ea675d9e2503d163d579e">df00cd368a</a></li>
	</ul>
</p>
<p>
	For testing the methods, I had to create a new test.py file. After these tests, all the methods which "get" information from the gst-switch-srv are working. Also the method set_compose_mode is working.
</p>
<h3>
	What problems I'm currently having.
</h3>
<p>
	<ul>
		<li>The method set_encode_mode is not working. Looking at how its implemented in the code of gst-switch, I found that its not implemented at all. <a href="https://github.com/timvideos/gst-switch/blob/master/tools/gstswitchcontroller.c#L69">https://github.com/timvideos/gst-switch/blob/master/tools/gstswitchcontroller.c#L69</a> The method table has no mention of this method <a href="https://github.com/timvideos/gst-switch/blob/master/tools/gstswitchcontroller.c#L969">https://github.com/timvideos/gst-switch/blob/master/tools/gstswitchcontroller.c#L969</a>
		</li>
	</ul>
</p>
<h3>
	What I am planning to do
</h3>
<p>
	Mithro had correctly pointed out that I will need a fully automatic test suite for testing the python api as well as the gst-switch. I am reading about how to use these. I have gone through py.test documentation. I will be using it for creating this test suite after I am done with very basic tests. Added to the to-do list :)
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

