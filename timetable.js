function timetable(){
	$.ajax({
	  dataType: "json",
	  url: "http://www.pubtrans.it/hsl/reittiopas/departure-api?"+getStops(config.timetable.stops)+"max="+config.timetable.max_departures,
	  success: function(data) {
	  	//console.log(data);

	  	// Write to screen log
	  	if (config.general.log) {
	  		$( "#log" ).prepend( "<p>"+logstamp+" timetable updated</p>" );
	  	};

	  	// Empty our timetable for new data
	  	$('#timetable .departures').empty();

	  	// Sort departures so that they are in order by depature time
	  	data.sort(function(obj1, obj2) {
			return obj1.time - obj2.time;
		});

	  	// Loop depatures
	  	$.each( data, function( intValue, currentElement ) {

	  		// Get time now and add our blink time range
	  		var currentTime = Math.round(new Date().getTime() / 1000+config.timetable.blink_range);

	  		// Get time for depature
	  		var departure = new Date(currentElement.time*1000);
	  		var departure = (departure.getHours()<10 ? '0' : '')+departure.getHours()+':'+(departure.getMinutes()<10 ? '0' : '')+departure.getMinutes();
			
			// Make depature table element and append it
			$( "#timetable .departures" ).append( "<tr class='departure "+currentElement.id+"'><td class='time' width='125'>"+departure+"</td><td class='line' width='125'>"+currentElement.line+"</td><td class='dest' width='350'>"+currentElement.dest+"</td></tr>" );

			// Add class for blink if depature leaves within the specified time
			if (currentTime > currentElement.time) {
				$( "#timetable .departures ."+currentElement.id+" td.time" ).addClass( "soon" );
			};
		});

		// Timeout for next call
		setTimeout(function() {timetable()}, config.timetable.timeout);
	  },
	  error: function(jqXHR, textStatus) {

	  	// Empty our timetable
	  	$('#timetable .departures').empty();

	  	// Append error text
	  	$('#timetable .departures').append("<tr><td>ERROR</td></tr>");

	  	// Write to console log for debugging
	  	console.log('timetable update failed '+textStatus);

	  	// Write to screen log
	  	if (config.general.log) {
	  		$( "#log" ).prepend( "<p>"+logstamp+" timetable update failed</p>" );
	  	};

	  	// Timeout for new call
	  	setTimeout(function() {timetable()}, 60000)
	  },
	  timeout: 2000
	  })
};