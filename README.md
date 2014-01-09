Kotivadelma
========

Kotivadelma is simple, lightweight, portable and easily customizable lobby information screen system build with jQuery. It can be used example at home, schools, in the workplace and public places. Kotivadelma is designed to run in browser, so no package installations needed.

#### Kotivadelma shows
* next public transport depatures from nearby stops
* date and time
* sunrise and sunset
* current weather
* weather forecast

[Picture of Kotivadelma in use at my vestibule](http://i.imgur.com/Pcdj1B5.jpg), running in Raspberry Pi. Check [instructions](#make-raspberry-pi-run-kotivadelma) howto make Raspberry Pi run lobby information system.

Installation
--------
1. Download Kotivadelma [master.zip](https://github.com/SipuliSopuli/kotivadelma/archive/master.zip)

2. Move master.zip to lobby screen computer or some server and unzip it to some reasonable directory. If you placed Kotivadelma to server, I recommend to add .htaccess file and allow only certain ip addresses.

3. Configure your installation in config.js. File is well commented so you should get along without step-to-step configuration guide, but here is some usefull stuff
	* Get stop code(s) from Helsinki Region Transport (hsl) website. This is explained more detailed [later](#get-stop-codes)
	* Get forecast.io apikey from [here](https://developer.forecast.io/)
	* Get latitude and longitude from [here](http://www.latlong.net/)

4. Open index.html in browser and enjoy, everything should work now

Get stop code(s)
--------
You need stop code(s) to display next public transport depatures from desired stop(s). It is very easy and simple to get these codes.

First go to hsl [journey planner](http://aikataulut.reittiopas.fi/pysakit/en/) and search stops or select stop list by locality. On the page that opens next, search desired stop from list and open the timetable for it by clicking stop name. Now you see timetable to desired stop. At the end of this site url, there is string like _1173101.html_. Those numbers are stop code that you want, so in this example stop code is _1173101_.

Make Raspberry Pi run Kotivadelma
--------
Coming soon!

Contact
--------
**Report bug [here](https://github.com/SipuliSopuli/kotivadelma/issues)**

[Timi Wahalahti](http://wahalahti.fi) (Finnish)   
timi.wahalahti[a]sange.fi   
sippis / IRCnet   
[Twitter](https://twitter.com/sipulisopuli)

License
--------
[GNU GENERAL PUBLIC LICENSE Version 2](http://www.gnu.org/licenses/gpl-2.0.html)