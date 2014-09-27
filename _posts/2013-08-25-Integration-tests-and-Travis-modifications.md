---
layout: post
title: Integration tests and Travis modifications
tags: travis testing gsoc
Year: 2013
Month: 08
Date: 25
---

<h2>Commits:</h2>
<p>


<ul>
<li>Revert "Revert "Integration tests for mark_faces""

This reverts commit 37a8db8d0ff302377daff63a8c3dcc159f2484ab.: <a href="https://github.com/hyades/gst-switch/commit/25dee2f9746b52ef339f27fd2a6d46fb09048cf9">25dee2f9746b52ef339f27fd2a6d46fb09048cf9</a></li>
<li>modified travis: <a href="https://github.com/hyades/gst-switch/commit/c5fbff1872b3722e013b5d583f10572d7a04e386">c5fbff1872b3722e013b5d583f10572d7a04e386</a></li>
<li>Revert "Integration tests for mark_faces"

This reverts commit 2130ea8b6559b4d7a6524edd14426cd374cf3959.: <a href="https://github.com/hyades/gst-switch/commit/37a8db8d0ff302377daff63a8c3dcc159f2484ab">37a8db8d0ff302377daff63a8c3dcc159f2484ab</a></li>
<li>Revert "travis modifies"

This reverts commit d18d57cf816dabff1ef79dcbb50d3255e47d66e4.: <a href="https://github.com/hyades/gst-switch/commit/e106f2e960069ccaae4d06cbd83d43e67fdaf3c9">e106f2e960069ccaae4d06cbd83d43e67fdaf3c9</a></li>
<li>Revert "Revert "Revert "Revert "Removed underscores""""

This reverts commit 47bc4a5fe385118f2ec919c76fb0266c6bc2199f.: <a href="https://github.com/hyades/gst-switch/commit/71ac82f4adeb2262317abfc1f4980764e149b1e6">71ac82f4adeb2262317abfc1f4980764e149b1e6</a></li>
<li>travis modifies: <a href="https://github.com/hyades/gst-switch/commit/d18d57cf816dabff1ef79dcbb50d3255e47d66e4">d18d57cf816dabff1ef79dcbb50d3255e47d66e4</a></li>
<li>Revert "Revert "Revert "Removed underscores"""

This reverts commit 17944235e218c2069138b3d73b89fefc23ed4326.: <a href="https://github.com/hyades/gst-switch/commit/47bc4a5fe385118f2ec919c76fb0266c6bc2199f">47bc4a5fe385118f2ec919c76fb0266c6bc2199f</a></li>
<li>Revert "travis"

This reverts commit c39501b15e8f7bbbe0362dde653b712c62e47bed.: <a href="https://github.com/hyades/gst-switch/commit/7365704cd7fe4ea0496dac4e2e446a1eeb6c5fdc">7365704cd7fe4ea0496dac4e2e446a1eeb6c5fdc</a></li>
<li>Revert "Revert "Removed underscores""

This reverts commit bf2898ceeb976a1b446f4045efbbeba0951f5a04.: <a href="https://github.com/hyades/gst-switch/commit/17944235e218c2069138b3d73b89fefc23ed4326">17944235e218c2069138b3d73b89fefc23ed4326</a></li>
<li>travis: <a href="https://github.com/hyades/gst-switch/commit/c39501b15e8f7bbbe0362dde653b712c62e47bed">c39501b15e8f7bbbe0362dde653b712c62e47bed</a></li>
<li>Revert "Removed underscores"

This reverts commit 9fca986dff0dc2b797218de575485b178cd9a636.: <a href="https://github.com/hyades/gst-switch/commit/bf2898ceeb976a1b446f4045efbbeba0951f5a04">bf2898ceeb976a1b446f4045efbbeba0951f5a04</a></li>
<li>modifies travis: <a href="https://github.com/hyades/gst-switch/commit/29d4ecaf875bfa04498a0a5dbc07f60b0a92830b">29d4ecaf875bfa04498a0a5dbc07f60b0a92830b</a></li>
<li>Removed underscores: <a href="https://github.com/hyades/gst-switch/commit/9fca986dff0dc2b797218de575485b178cd9a636">9fca986dff0dc2b797218de575485b178cd9a636</a></li>
<li>Integration tests for mark_faces: <a href="https://github.com/hyades/gst-switch/commit/2130ea8b6559b4d7a6524edd14426cd374cf3959">2130ea8b6559b4d7a6524edd14426cd374cf3959</a></li>
<li>Integration tests for click_video: <a href="https://github.com/hyades/gst-switch/commit/6e049dd57e0e6f800b8ac1ef03daf1e846774c1e">6e049dd57e0e6f800b8ac1ef03daf1e846774c1e</a></li>
<li>modified travis-ci: <a href="https://github.com/hyades/gst-switch/commit/8e200657f1d351df6dc6c48aed707e7b14217888">8e200657f1d351df6dc6c48aed707e7b14217888</a></li>
<li>added scipy to travis-ci: <a href="https://github.com/hyades/gst-switch/commit/19b721b1b059707c5357ce63c6eeb32f730107e4">19b721b1b059707c5357ce63c6eeb32f730107e4</a></li>
<li>modified travis: <a href="https://github.com/hyades/gst-switch/commit/a40c23742d0e8a0e971f957d504ba60b4488522e">a40c23742d0e8a0e971f957d504ba60b4488522e</a></li>
<li>Modified Makefile and improved paths: <a href="https://github.com/hyades/gst-switch/commit/a2c5603d0def0387aaad53ecf5d0beb22c7b535f">a2c5603d0def0387aaad53ecf5d0beb22c7b535f</a></li>
</ul>

</p>

<h2>Integration Tests</h2>
<p>I added methods which test the controller for <code>click_video</code> and <code>mark_face</code>.</p>
<p><code>click_video</code> is described as <i>User click on the video</i>. It takes four parameters - <i>dx, dy, dw and dh</i> and returns a boolean <i>True</i> or <i>False</i>. Currently I am testing using some combinations of these four parameters, but I get the result always as <i>False</i>. I will probably need some information on what this function exactly does.</p>

<p><code>nark_face</code> marks faces on the output video. This takes an argument <i>faces</i> which is a list of four element tuple, each tuple representing probably a face. This method unluckily gives no output and I am unable to figure out from the output video.</p>

<p>The method <code>mark_tracking</code> is a similar function, which takes <i>faces</i> as parameter and doesn't have a return type.</p>

<p>For the method <i>adjust_pip </i>, I am still unable to change the size of the PIP using <i>dw and dh</i> parameters, as it gives a black screen output.(TODO)</p>

<h2>Travis-CI</h2>
<p>Some modifications to .travis.yml. Currently the build fails due to since the gst-switch-srv gives a segmentation fault, and all functions which require it (all integration tests except ones which test helper functions) fail (TODO)</p>






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

