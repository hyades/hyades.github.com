---
layout: post
title: Groupon Experiences - First Month July 2014
tags: ruby rails groupon
category: code
Year: 2014
Month: 09
Date: 29
---

<h2>Beginning things</h2>
Its been around three months at Groupon. Personally I don't like Chennai very much, owing to lack of basic infrastructure in the city like internet, public transport and much more... Office here is a much much cooler (in all ways you can think of) than rest of the city! People in office are great. Managed to make some new friends here.

In the first month in Groupon, I was a temporary part of the Tools team which works in [Ruby on Rails](http://rubyonrails.org/). RoR wasn't hard to learn for me considering that I mapped it to Django. Although Django follows the MVT concept (Model - View- Template), the MVC (Model - View - Controller) followed by RoR was very much similar. The mapping is as follows - 
<ul>
	<li>Django Model to Rails Model</li>
	<li>Django View to Rails Controller</li>
	<li>Django Template to Rails View</li>
</ul>
First of all I was a bit uneasy with Ruby and its strange looking syntax. One pain was putting the `end` tag after each and every if, 'for', 'while'.. Had to adjust the editor since Ruby follows standard indentation of two spaces opposed to four for Python. But indentation in Ruby is just for separating the content like 'i=0' and 'if i > 0', and it doesn't really seems to bother much about the indentation anyways. And Ruby also has a wierd datatype - `symbols`, which is like `:entry`. Its basically a simple string in Ruby stripped off a lot of unnecessary methods attached to it. Hence somewhat lightweight. The syntax of the `:symbol` often confused me with the Python dictionary.  
But after these initial strangeness, I started to like the Rails framework. Some good things about it were - `resources` which make things so much RESTful, the auto-generation of various paths like `new_resource_path`. Models could be created with ease and relationships like foreign keys could also be added pretty easily. 


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

