#!/usr/bin/python
from time import strftime
import os

path = "_posts"
cwd = os.getcwd()
newpath = cwd + '/' + path

n = raw_input("Enter the name of the post: ")
name = n.split()
tags = raw_input("""Enter tags if any["n" if No](put spaces in between): """).split()
if tags[0] == 'n':
    tagline = ""
else:
    tagline = ''
    for x in tags:
        tagline += " " + x
category = raw_input("Enter the Category of the Post: ")
os.chdir(newpath)
filename = strftime("%Y-%m-%d")
z = ''
for x in name:
    z += x + '-'
filename += '-' + z[0:-1]
filename += '.md'
f = open(filename, "w")

f.write("---\n")
f.write("layout: post\n")
f.write("title: %s\n" % (n))
f.write("tags:" + tagline + '\n')
f.write("category:" + category + '\n')
f.write("Year: " + strftime("%Y") + '\n')
f.write("Month: " + strftime("%m") + '\n')
f.write("Date: " + strftime("%d") + '\n')
f.write("---\n")

bigtext = """
<div class="row">	
	<div class="span9 column">
			<p class="pull-right">{%% if page.previous.url %%} <a href="{{page.previous.url}}" title="Previous Post: {{page.previous.title}}"><i class="icon-chevron-left"></i></a> 	{%% endif %%}   {%% if page.next.url %%} 	<a href="{{page.next.url}}" title="Next Post: {{page.next.title}}"><i class="icon-chevron-right"></i></a> 	{%% endif %%} </p>  
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
""" % ()
f.write(bigtext + "\n")
f.close()
