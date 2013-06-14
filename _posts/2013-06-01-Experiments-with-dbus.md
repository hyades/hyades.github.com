---
layout: post
title: Experiments with dbus
tags: dbus gsoc python
Year: 2013
Month: 06
Date: 01
---
<p>Messing around with the dbus python API. The GST-Switch controller seems to be using a non-default bus address (unix:abstract=gstswitch). Trying to connect to the given object path. I will have to find some new ways to connect to the object.</p>
<p>
	Currently using code like this for testing:
	{% highlight python %}
		#!usr/bin/env python
		import dbus
		import dbus.mainloop.glib
		import os
		import time
		import gobject

		def main():
			loop = gobject.MainLoop()
			bus = dbus.SessionBus()
			obj = bus.get_object("info.duzy.gst_switch.SwitchControllerInterface","/info/duzy/gst_switch/SwitchController")
			print obj.Introspect()
			loop.run()

		if __name__=="__main__":
			os.environ["DBUS_SESSION_BUS_ADDRESS"] = "unix:abstract=gstswitch"
			dbus.mainloop.glib.DBusGMainLoop(set_as_default=True)
			main()
	
	{% endhighlight %}

	When I try to connect getting errors like:
	{% highlight bash %}
		Traceback (most recent call last):
	  File "dbusConnect.py", line 18, in <module>
	    main()
	  File "dbusConnect.py", line 10, in main
	    bus = dbus.SessionBus()
	  File "/usr/lib/python2.7/dist-packages/dbus/_dbus.py", line 211, in __new__
	    mainloop=mainloop)
	  File "/usr/lib/python2.7/dist-packages/dbus/_dbus.py", line 100, in __new__
	    bus = BusConnection.__new__(subclass, bus_type, mainloop=mainloop)
	  File "/usr/lib/python2.7/dist-packages/dbus/bus.py", line 122, in __new__
	    bus = cls._new_for_bus(address_or_type, mainloop=mainloop)
	dbus.exceptions.DBusException: org.freedesktop.DBus.Error.UnknownMethod: No such interface `org.freedesktop.DBus' on object at path /org/freedesktop/DBus
	{% endhighlight %}

	Will have to use something more than using "dbus.SessionBus()". The dbus python documentation says they will include connection to non-default address in a later section!. Since it is supported in the latest version, trying to get a way of getting this working...
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

