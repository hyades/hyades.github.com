---
layout: post
title: SoC Midterm Evaluations
tags: gsoc
Year: 2013
Month: 07
Date: 28
---

<p>
	<b>TARGET:</b> Create a Python API for gst-switch
</p>
<p>
	<a href="https://github.com/hyades/gst-switch">Gst-switch</a> is a replacement of <a href="http://dvswitch.alioth.debian.org/wiki/">DVswitch</a>. Gst-switch has a huge advantage that it is capable of using gstreamer elements and pipelines. A Python API is needed not only to control the gst-switch, but to also allow extensive testing of gst-switch components.
</p>


<h2>A (Quick) Recap</h2>



<p>
	The GSoC started from 28th May and the coding period officially started on 17th June. The intermediate time was "Community Bonding Period". It was an excellent time to think over the things to do ahead, along with trying them out a bit, and understanding difficulties.
</p>
<p>
	The Community Bonding period also served as a great time to read up existing code and figure how things work out. I mainly concentrated on reading the files: gstswitchserver.c, gstswitchcontroller.c, gstswitchclient.c and test_switch_server.c. 
</p>


<h2>Installing</h2>



<p>
	  The first task was to explore gst-switch and also learn how to get it working. Gst-switch uses <a href="http://gstreamer.freedesktop.org/">gstreamer-1.0</a>. In the start, I installed gstreamer-1.0 from ubuntu's repository (which is wrong). Then I did something like this:
</p>
<p><script src="https://gist.github.com/hyades/6105352.js"></script></p>
<p>
	Here, I my mistake was that I did not include any arguments to the <b>./autogen</b>
</p>
<p>
	Initially, I was not aware of this. By executing the above lines, some executables - gst-switch-srv, gst-switch-ui were created in the gst-switch/tools/ directory. 
	Since building gst-switch was done, I could learn how to play around with it. I figured how the gst-switch-ui causes changes in the output. The only page of documentation of gst-switch is perhaps the Readme file :)
</p>
<p>The above things worked fine for the master branch. I tried to build the speakertrack branch of gst-switch by doing:</p>
<p><script src="https://gist.github.com/hyades/6105669.js"></script></p>
<p>This time running the executables made me realize that I was on the wrong path.</p>
<p>I realized that the the speakertrack branch needs a custom version of gstreamer's gst-plugins-bad. This is hosted at <a href="https://github.com/duzy/gst-plugins-bad.git">https://github.com/duzy/gst-plugins-bad.git</a></p>.
<p>I followed installation instructions which I have posted at <a href="http://hyades.github.io/blog/Speakertrack-working">http://hyades.github.io/blog/Speakertrack-working</a>. I use gstreamer's uninstalled script for this.
</p>


<h2>The components of gst-switch</h2>
<p>
	Gst-switch works something like this:
	<ul>
		<li>First the gst-switch-srv is run and input sources are added to it</li>
		<li>Then the UI/output is connected.</li>
		<li>The communication between the server and the UI/output occurs over <a href="http://www.freedesktop.org/wiki/Software/dbus/">DBus</a>.</li>
	</ul>
</p>

<p>DBus is a system of inter-process communication. DBus has two components: the dbus daemon and dbus library. The dbus daemon runs an actual bus over which messages can be transported. Any number of processes can connect to the daemon using the library. Mutiple buses can be active at the same time on any system. In a GNOME environment, two buses - <i>System Bus</i>: for 	 miscellaneous system-wide communication and <i>Session Bus</i>: used by a single user's ongoing GNOME session. A bus has some properties. A very nice analogy is given <a href="http://www.freedesktop.org/wiki/Software/DBusAnalogy">here</a>.</p>

<p>Gst-switch uses a custom dbus for communication. The address of this bus is <i>unix:abstract=gstswitch</i>.</p>

<p>
	Interacting through DBus is one of the most important and challenging part of making API. My first step towards learning dbus was through command-line tools namely <i>dbus-monitor</i> and <i>dbus-send</i>. <i>dbus-monitor</i> is used to view all messages over a specified bus. <i>dbus-call</i> can be used to send a message over dbus. These tools work great while interacting with <i>session bus</i> and <i>system bus</i>. However on a custom message bus, these methods require an object at path <i>/org/freedesktop/DBus</i>. It gives an error:
</p>
<p><script src="https://gist.github.com/hyades/6106323.js"></script></p>
<p>These dbus modules also have a higher level <a href="http://dbus.freedesktop.org/doc/dbus-python/">Python API</a>. But this also results in same problem. I have mentioned these <a href="http://hyades.github.io/blog/Experiments-with-dbus/">here</a>.</p>
<p>
	Along with doing all these I also started writing code for creating gst-switch processes. Initially this code could simply run the gst-switch-srv and gst-switch-ui and then later kill them off.
</p>
<p>
	Another command line tool is <p>gdbus</p>. This also interacts with dbus, but does so at a lower level. Using this tool one can do the same things as dbus-monitor and dbus-call. Every message bus should have a <i>introspect</i> interface. The introspect is an XML containing interfaces and property values for the remote object. Gst-switch's introspection is available at <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/test/introspect.txt">introspect.txt</a>.
</p>
<p><script src="https://gist.github.com/hyades/6106616.js"></script></p>
<p>
	 Since it has low level interactions, most of the usage and documentation for this is available in C <a href="https://developer.gnome.org/glibmm/stable/group__DBus.html">here</a>. Similar thing for python is also available. It can be accessed using <i>from gi.repository import Gio</i>. The only problem here was the lack of any proper documentation or examples. The only page regarding this is <a href="http://developer.ubuntu.com/api/ubuntu-12.10/python/Gio-2.0.html">http://developer.ubuntu.com/api/ubuntu-12.10/python/Gio-2.0.html</a>. The Python API for Gio is merly a wrapper over the C code. Thus almost all functions perform the same task. For example
</p>
<p><script src="https://gist.github.com/hyades/6107208.js"></script></p>
<p>becomes:</p>
<p><script src="https://gist.github.com/hyades/6107229.js"></script></p>
<p>
	Help also came from reading the D-Feet source code. D-Feet is a GUI based DBus debugger written in python. The file <a href="https://git.gnome.org/browse/d-feet/tree/src/dfeet/bus_watch.py">bus_watch.py</a> was very uselful to me in understanding how to interact using the python bindings of Gio.
</p>
<p>
	This served as a base for writing modules which provide access to remote methods for the gst-switch. Currently I have two files: <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/gstswitch/connection.py">connection.py</a> and <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/gstswitch/controller.py">controller.py</a> which have almost the same function names defined inside them. The difference here is that the functions mentioned in connection.py interact at the low-level. They ensure things like making a dbus connection and how to call a remote method. I would also like to add information about GVariants here. There is very very less information on this available in python. In python GVariants are used like this:
</p>
<p><script src="https://gist.github.com/hyades/6107403.js"></script></p>
<p>Note that each remote object call also returns a GVariant which can be parsed using __str__ method of GVariant. Thus one can simply do <i>str(variant)</i> to obtain a tuple containing the desired information. The format of this information can be obtained from the introspection of the method.</p>



<h2>Exception Handling & Unittests</h2>



<p>
	This is perhaps the part which I personally don't like. It is boring but is hugely <i>important</i>. I was completely new to the concept of exception handling in python before this. In beginning I was putting <i>bare</i> exception statements everywhere. Now, I am catching the possible exceptions and raising appropriate messages. I have covered most of the exceptions, but one or two are still left, and I am still thinking what to do with them.
</p>
<p>
	<b>Unittests and Integration Tests</b>
</p>
<p>
	<i>Unittests</i> are tests which check the functionality of a small portion or code. For example, if a particular code does some calculation and finally returns a value, an exception might occur while doing the computation. Thus we need to check if the exception is raised properly. For this a unit test is run where only this particular part of the code is executed. Any external methods are generally mocked. This can be done in two ways - use <a href="https://pypi.python.org/pypi/pymock">pymock</a> or create your own mocking objects and functions. Some functions which require external libraries can be mocked using <a href="http://pytest.org/latest/monkeypatch.html">monkeypatch</a>. For running unittests I am using <a href="http://pytest.org/latest/">py.test</a>. ANother important point about unittests is that it should always have 100% coverage. Coverage is the percentage of statements executed in the code. 
</p>
<p>
	<i>Integration Tests</i> are tests which check if modules of the software work well together as a group. This may not have 100% coverage. However one must aim to get a higher percentage.
</p>
<p>I have also added a Makefile for generating pylint, py.test and coverage reports. The commands are <i>make lint</i> and <i>make coverage</i>.</p>
<p>Pylint report can be viewed at <a href="http://hyades.github.io/gst-switch/reports/pylint/pylint_global.html">http://hyades.github.io/gst-switch/reports/pylint/pylint_global.html</a>. The <i>pylint_global</i> term in the url can be replaced by filename from <a href="https://github.com/hyades/gst-switch/tree/gh-pages/reports/pylint">https://github.com/hyades/gst-switch/tree/gh-pages/reports/pylint</a>.</p>
<p>The coverage part can be viewed at <a href="http://hyades.github.io/gst-switch/reports/coverage/">http://hyades.github.io/gst-switch/reports/coverage/</a>. The testsource file requires some work here.</p>
<p>Currently, a partial integration test is <a href="https://github.com/hyades/gst-switch/blob/python-api/python-api/test.py">test.py</a>. This is not exactly an integration test, but it demonstrates how the API works.</p>


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

