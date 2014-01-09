// All random and small custom shit

// Function to get log timestamp
function logStamp() {
	var now = new Date(jQuery.now());
	return (now.getHours()<10 ? '0' : '')+now.getHours()+':'+(now.getMinutes()<10 ? '0' : '')+now.getMinutes()+':'+(now.getSeconds()<10 ? '0' : '')+now.getSeconds();
}

// Function for getting, updating and appending date
function today(options){
	setInterval(
		function(){
			var d = new Date();
			var month = d.getMonth()+1;
			var day = d.getDate();
			var date = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + d.getFullYear();
			$('#clock').find('.date').html(date);
		},
	1000)
};

// Get stops from config and make string to use when calling pubtrans.it
function getStops(data){
	var stops = '';
	$.each(data, function( index, value ) {
		stops += 'stops%5B%5D='+value+'&';
		if(value == data) {
			return true;
		}   
	});
	return stops;
}

// Blink departing departures
$(function() {
	var x;
	setInterval(function() {
			if(x == 0) {
				$('.soon').css('color', config.timetable.blink_color);
				x = 1;
			} else  {
				if(x = 1) {
					$('.soon').css('color', 'inherit');
					x = 0;
				}
			}
	}, config.timetable.blink_speed);
});