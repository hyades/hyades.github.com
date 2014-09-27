---
layout: post
title: Travis modifications and gcov coverage
tags: gcov coverage travis gsoc
Year: 2013
Month: 08
Date: 30
---

<h2>Commits:</h2>
<p>
	<ul>
<li>printing types.py file: <a href="https://github.com/hyades/gst-switch/commit/0c0179b462067356add82d49c98ba76d199f3a8f">0c0179b462067356add82d49c98ba76d199f3a8f</a></li>
<li>changed port due to conflict: <a href="https://github.com/hyades/gst-switch/commit/8c302512b527efd926e31c3f20a2cdb6ff7331a4">8c302512b527efd926e31c3f20a2cdb6ff7331a4</a></li>
<li>removed ports close to 1000 from tests: <a href="https://github.com/hyades/gst-switch/commit/9c0c2aebcc73bfd3fd79472f959ddb176ef26c03">9c0c2aebcc73bfd3fd79472f959ddb176ef26c03</a></li>
<li>Reducing intensity: <a href="https://github.com/hyades/gst-switch/commit/35c03739bdb7e1fc2b27f3bcc105cfd79ddea5f9">35c03739bdb7e1fc2b27f3bcc105cfd79ddea5f9</a></li>
<li>fixed paths: <a href="https://github.com/hyades/gst-switch/commit/04465753485829f462e02d8a144618b0ead7adce">04465753485829f462e02d8a144618b0ead7adce</a></li>
<li>Added libvpx to travis build: <a href="https://github.com/hyades/gst-switch/commit/31fa4c9577b06b04113a0903e6ec2e8a844d6b1f">31fa4c9577b06b04113a0903e6ec2e8a844d6b1f</a></li>
</ul>

</p>

<h2>Travis Build</h2>
<p>The TypeError has not been solved. The same code runs fine on my quantal machine as well as VM. I suspect two things that might be causing it:
	<ul>
		<li>Some package is missing. The package is related to </li>
		<li>There is some incomplete or difference in the Gio modules of Quantal and Precise( travis servers ) which causes the problem.</li>
	</ul>
</p>
<h2>C Coverage</h2>
<p>C coverage can be done using <a href="http://gcc.gnu.org/onlinedocs/gcc/Gcov.html">gcov</a>. <i>gcov</i> helps in collecting coverage information from the programs. For <i>gcov</i> to work the c code should be compiled with the options <code>-fprofile-arcs -ftest-coverage</code>. This will create <i>.gcno</i> file, which contains information to reconstruct the basic block graphs and assign source line numbers to blocks. When the program is run, a separate <i>.gcda</i> file is created for each object file compiled with this option. It contains arc transition counts, value profile counts, and some summary information. The <i>gcov</i> can now be run on the original object files, which uses these <i>.gcno</i> and <i>.gcda</i> files to generate <i>.c.gcov</i> files. The .gcov files contain the ‘:’ separated fields along with program source code. The format is <code>execution_count:line_number:source line text</code></p>

<p>However, gcov only produces the <i>.gcda</i> files when the process terminates through the <code>exit()</code> defined in the c code. Else, no <i>.gcda</i> file is produced. <i>gst-switch-srv</i> runs more like a infinite process which is mostly ended by <i>Control+A</i> or terminating the process by SIGKILL etc. Currently the <i>gst-switch-srv</i> supports gcov, however it has no support for handling the infinite process part.</p>
<p>A good solution to this problem can be found at <a href="https://www.osadl.org/Dumping-gcov-data-at-runtime-simple-ex.online-coverage-analysis.0.html">https://www.osadl.org/Dumping-gcov-data-at-runtime-simple-ex.online-coverage-analysis.0.html</a>. The <code>__gcov_flush();</code> method can be used to conditionally provide coverage in between program run. As described in the article, the C code is modified and a signal handler is added. Here they use SIGUSR1. Therefore, whenever SIGUSR1 is caught by the program, it calls back the __gcov_flush(); method, generating <i>.gcda</i> files. </p>
<p>So the necessary files have to be modified with the signal handlers. Also the python-api has to be modified such that it sends a SIGUSR1 signal while ending a <i>gst-switch-srv</i> process.</p>



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

