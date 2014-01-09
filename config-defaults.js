// DO NOT MODIFY THIS FILE
// this file purpose is to be backup for default configuration
// and place where you can get it if something breaks.
var config = {
    // General configuration
    general: {
        log: true, // If set to false, log will not be written to the screen
    },
    // Configuration for timetables section
    timetable: {
        blink_color: 'red', // What color to use in blink
        blink_speed: '650', // How fast should blink (milliseconds)
        blink_range: 900, // Add blink to depatures departing inside this time range (seconds)
        max_departures: '9', // How many departures we want for each stop
        timeout: '150000', // How often the data should be updated (milliseconds)
        // List of stop codes whose depatures we want
        stops: [
            '1040141',
            '1040139'
        ]
    },
    // Configuration for weather section
    weather: {
        apikey: '1234', // Apikey for forecast.io
        latitude: '60.173324', // Latitude of desired location
        longitude: '24.941025', // Longitude of desired location
        units: 'si', // us = US format, si = international system
        timeout: '300000', // How often the data should be updated (milliseconds)
        current_h3: 'now', // Heading for current weather
    }
};