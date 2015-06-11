---
layout: post
title: "Deploying a Dockerized Application to Production"
description: 
headline: 
modified: 2015-06-12 00:01:56 +0530
category: code
tags: [docker, play, deploy, nginx, load-balancer, capistrano, docker-compose, github, git, java]
imagefeature: 
mathjax: 
chart: 
comments: true
featured: false
---

Here I use a Play application , but any application can be deployed in a similar way. Your application should be designed in a way that ensures that same code can run on any number of machines without any change.

You should have an application running on local inside a Docker container. You may refer to [this](/code/Dockerizing-a-Play-Application) link on how to get this done for a Play application.



## What we wish to do?

* Deploy this application into production
* Setup Log rotation
* Setup Load Balancers
* NGINX Setup

Here I would be using a simple NGINX load balancer, and using capistrano for deployment.

## Networking Setup

1. Hosts Running the Application:
	* *server1.com*
	* *server2.com*
	* *server3.com*
2. Load Balancer Host: *loadbalancer-server.com*

The requests flow is like:<br/>
**User --> Load balancer(NGINX) --> Application Host (NGINX) --> Application Host (Application)** <br/>
Only the NGINX is exposed to the outside world on the application host.

## Setup

* capistrano: `sudo gem install capistrano` (on local)
* docker-compose: `sudo pip install docker-compose` (on host machine)
* git

The code would be cloned from Git and not from local filesystem. Deployment using Docker Registry is also possible but would consume a lot of bandwidth if you consider that Java containers might end up in range of > 2 GB.

## Setting up the Application Host

The diagram here is like

Request -> [NGINX DOCKER CONTAINER] -> [APPLICATION DOCKER CONTAINER]

With capistrano the deployment process is usually a two step process - 
1. Fetch latest code from Git
2. Run deployment scripts on pulled in code

Using *docker-compose* allows us to simplify run-time configurations a lot. We can avoid running complex `docker run` commands, and put the required information inside a file. At the time of writing *docker-compose* isn't production-ready yet. But it is a great help to have and just a matter of time. 

To use *docker-compose*, we have to define a *docker-compose.yml* file in the root folder of our application.

{% highlight yaml %}
web:
  build: .
  volumes:
    - /var/log/myapp:/var/log/myapp

nginx:
  build: nginx
  ports:
    - "8000:8000"
  volumes:
    - /var/log/nginx:/var/log/nginx
  links:
    - web
{% endhighlight %}

Here, we define two containers - *web* (the application) and *nginx*. Notice that we ***link*** the *nginx* to the *web* container. This is useful for communication between two containers. It essentially creates an entry in the */etc/hosts* file with *web* pointing to an internal IP Address.

I am assuming we already have a *Dockerfile* for our application lying the root dir of our project. We create another *Dockerfile* for the NGINX container

{% highlight docker %}
FROM nginx

WORKDIR /etc/nginx

RUN rm -rf nginx.conf

COPY nginx.conf nginx.conf

RUN sed -i 's/<app_location>/web:9000/g' nginx.conf

{% endhighlight %}

And add a *nginx.conf* file

{% highlight nginx %}
worker_processes  4;
events {
    worker_connections  1024;
}
worker_processes  4;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    client_max_body_size 550M;
    keepalive_timeout  65;
    server {
        listen       8000;
        server_name  localhost;

        location / {
	    proxy_http_version 1.1;
            proxy_pass http://<app_location>;
        }
    }
}

{% endhighlight %}

Notice, that we would be replacing the *app_location* with *web*. Remember that *web* actually creates a hosts entry. So we can directly use it here. The *sed* command does a find/replace on the *nginx.conf* file.

The setup has an advantage that the Play application though running in the same host, is completely invisible to the outside world. This is a great security advantage provided by docker. All communication must only happen through the Nginx running. 

*docker-compose* makes our lives easier and we dont have to remember the command line *docker* commands. 

* `docker-compose build`: Build the containers
* `docker-compose up -d`: Start the process defined in *RUN* commands and run as daemon
* `docker-compose stop`: Bring down the containers

We would be executing the *stop*, *build* and *up* commands in this order while deploying.

## Deployment Scripts (Capistrano)

I would be using *capistrano* for executing these commands, but you could be using just any other script for the purpose. I firstly get *capistrano* into the project - `cap install`. This would create a *Capfile* along with a *config* directory. We have stages specified in the *config/deploy* directory. We should edit the *config/deploy/production.rb* since we are dealing with production environment here. If deploying to staging or uat you can create a similar environment. In the *production.rb* define your application servers - 

{% highlight ruby %}
server 'server1.com', user: 'deploy_user', roles: %w{web}
server 'server2.com', user: 'deploy_user', roles: %w{web}
server 'server3.com', user: 'deploy_user', roles: %w{web}
{% endhighlight %}

Note that generally you would be having a DB server also. But you should keep it out of the the main application servers. Their deployments is rather straightforward.

In the *config/deploy.rb* create tasks - 

{% highlight ruby %}
desc 'Start Docker Container'
task :docker_start do
on roles(:web), in: :sequence do
  within("#{current_path}") do
    execute "sudo", "docker-compose", "stop"
    execute "sudo", "docker-compose", "build"
    execute "sudo", "docker-compose", "up", "-d"
  end
end
end

desc 'Stop Docker Container'
task :docker_stop do
on roles(:we), in: :sequence  do
  within("#{current_path}") do
    execute "sudo", "docker-compose", "stop"
  end
end
end

desc 'Restart Docker Container'
task :docker_stop do
on roles(:we), in: :sequence  do
  within("#{current_path}") do
    execute "sudo", "docker-compose", "restart"
  end
end
end
{% endhighlight %}

**One important point to note is that we run the docker_start command on each machine sequentially. This is done to ensure that your application suffers no downtime during deployment and the load balancer send the requests to other machines which are up in the period. Of course if have huge changes in which the older and newer versions are not compatible at all with each other, then you might need a different mechanism.**

Now to deploy - 

* `cap production deploy`: Fetches from git
* `cap production deploy:docker_start`: Starts the dockerized containers


## Setting up Load Balancer

This is done the usual way. I am using an Nginx docker container for this.

{% highlight nginx %}
worker_processes  4;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    client_max_body_size 550M;
    keepalive_timeout  65;

    upstream myapp {
        server server1.com:8000;
        server server2.com:8000;
        server server3.com:8000;
    }

    server {
        listen       8000;
        server_name  localhost;

        location / {
	    proxy_http_version 1.1;
            proxy_pass http://myapp;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}

{% endhighlight %}

You may refer to this project on [Github](http://github.com/hyades/docker-nginx-load-balancer).

## Conclusion

Thus we have a load balancer setup. This routes to the application hosts. The hosts have only nginx containers exposed to the outside world. The nginx container can talk to play containers.

The code is hosted on [Github](http://github.com/hyades/docker-play-prod)

(TODO - upload code to github)

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


