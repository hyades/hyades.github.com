# generates commits from last date into a "commits.html" file
# now date is stored in date.txt

import urllib, json
from datetime import *

f = open("date.txt", 'r')
f1 = open("commits.html", "w")

prev_time = f.readline().split()[0]
f.close()
f = open("date.txt", "w")
url = 'https://api.github.com/repos/hyades/gst-switch/commits' + "?since=" + prev_time
data = urllib.urlopen(url)
current_time = datetime.utcnow().isoformat()[:19] + 'Z'
f.write(current_time)
data = json.load(data)
c = 0
f1.write("<ul>\n")
while 1:
    try:
        sha = data[c]["sha"]
        url = "https://github.com/hyades/gst-switch/commit/" + sha
        msg = data[c]["commit"]["message"]
        s = """<li>%s: <a href="%s">%s</a></li>\n""" % (msg, url, sha)
        f1.write(s)
        c += 1
    except:
        f1.write("</ul>\n")
        f1.close()
