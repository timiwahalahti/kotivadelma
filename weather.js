function weather(){
	$.ajax({
	  dataType: "json",
	  url: "https://api.forecast.io/forecast/"+config.weather.apikey+"/"+config.weather.latitude+","+config.weather.longitude+"?units="+config.weather.units+"&callback=?",
	  success: function(data) {
	  	//console.log(data);

	  	// Write to screen log
	  	if (config.general.log) {
	  		$( "#log" ).prepend( "<p>"+logstamp+" weather updated</p>" );
	  	};

	  	// Empty things for new data
	  	$('#sun').find('span').empty();
	  	$('#weather .now').find('span').empty();
	  	$('#weather .forecast').find('span').empty();

	  	// Calculate sunrise and sunset
	  	var sunrise = new Date(data.daily.data[0].sunriseTime*1000);
	  	var sunrise = (sunrise.getHours()<10 ? '0' : '')+sunrise.getHours()+':'+(sunrise.getMinutes()<10 ? '0' : '')+sunrise.getMinutes();
	  	var sunset = new Date(data.daily.data[0].sunsetTime*1000);
		var sunset = (sunset.getHours()<10 ? '0' : '')+sunset.getHours()+':'+(sunset.getMinutes()<10 ? '0' : '')+sunset.getMinutes();

		// Append sun
		$('#sun').find('span.rise').append(sunrise)
		$('#sun').find('span.set').append(sunset)

		// Append current weather
		$('#weather .now').find('span.time').append(config.weather.current_h3)
		$('#weather .now').find('span.temp').append(data.currently.apparentTemperature)
		$('#weather .now').find('span.summary').append(data.currently.summary)
		$('#weather .now').find('span.icon').append('<img src="icons/'+data.currently.icon+'.svg">')

		// Get timestamp for first forecast
	  	var timestamp = new Date(data.hourly.data[4].time*1000);
		var shorttimestamp = (timestamp.getHours()<10 ? '0' : '')+timestamp.getHours()+':'+(timestamp.getMinutes()<10 ? '0' : '')+timestamp.getMinutes();

		// Append first forecast
		$('#weather .forecast.first').find('span.time').append(shorttimestamp)
		$('#weather .forecast.first').find('span.temp').append(data.hourly.data[4].apparentTemperature)
		$('#weather .forecast.first').find('span.summary').append(data.hourly.data[4].summary)
		$('#weather .forecast.first').find('span.icon').append('<img src="icons/'+data.hourly.data[4].icon+'.svg">')

	  	// Get timestamp for second forecast
	  	var timestamp = new Date(data.hourly.data[9].time*1000);
		var shorttimestamp = (timestamp.getHours()<10 ? '0' : '')+timestamp.getHours()+':'+(timestamp.getMinutes()<10 ? '0' : '')+timestamp.getMinutes();

		// Append second forecast
		$('#weather .forecast.second').find('span.time').append(shorttimestamp)
		$('#weather .forecast.second').find('span.temp').append(data.hourly.data[9].apparentTemperature)
		$('#weather .forecast.second').find('span.summary').append(data.hourly.data[9].summary)
		$('#weather .forecast.second').find('span.icon').append('<img src="icons/'+data.hourly.data[9].icon+'.svg">')

		// Get timestamp for third forecast
	  	var timestamp = new Date(data.hourly.data[14].time*1000);
		var shorttimestamp = (timestamp.getHours()<10 ? '0' : '')+timestamp.getHours()+':'+(timestamp.getMinutes()<10 ? '0' : '')+timestamp.getMinutes();

		// Append third forecast
		$('#weather .forecast.third').find('span.time').append(shorttimestamp)
		$('#weather .forecast.third').find('span.temp').append(data.hourly.data[14].apparentTemperature)
		$('#weather .forecast.third').find('span.summary').append(data.hourly.data[14].summary)
		$('#weather .forecast.third').find('span.icon').append('<img src="icons/'+data.hourly.data[14].icon+'.svg">')

		// Timeout for new call
		setTimeout(function() {weather()}, config.weather.timeout)
	  },
	  error: function(jqXHR, textStatus) {

	  	// Empty our weather
	  	$('#weather .now').find('span').empty();

	  	// Append error text
	  	$('#weather .now').find('span.error').append('ERROR')

	  	// Write to console log for debugging
	  	console.log('weather update failed '+textStatus)

	  	// Write to screen log
	  	if (config.general.log) {
	  		$( "#log" ).prepend( "<p>"+logstamp+" weather update failed</p>" );
	  	};

	  	// Timeout for new call
	  	setTimeout(function() {weather()}, 60000)
	  },
	  timeout: 2000
	  })
};