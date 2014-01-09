Kotivadelma
========

Kotivadelma is simple, lightweight and easily customizable lobby information display system. It can be used at home, schools, in the workplace, public places and really anyplace where information needs to be displayed.

#### Kotivadelma shows
* next public transport depatures from nearby stops
* date and time
* sunrise and sunset
* current weather
* weather forecast

[Picture of Kotivadelma in use at my vestibule](http://i.imgur.com/Pcdj1B5.jpg)

Installation
--------
1. Download Kotivadelma [master.zip](https://github.com/SipuliSopuli/kotivadelma/archive/master.zip)

2. Move master.zip to lobby screen computer or some server and unzip it to some reasonable directory. If you placed Kotivadelma to server, I recommend to add .htaccess file and allow only certain ip addresses.

3. Configure your installation in config.js, File is well commented so you should get along without step-to-step configuration guide, but here is some usefull stuff
	* Get stop codes from Helsinki Region Transport (hsl) website. This is explained more detailed [later](#)
	* Get forecast.io apikey from [here](https://developer.forecast.io/)
	* Get latitude and longitude from [here](http://www.latlong.net/)
