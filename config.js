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
        // List of stops whose depatures we want
        stops: [
            '1281155',
            '1293133'
        ]
    },
    // Configuration for weather section
    weather: {
        apikey: '1234', // Apikey for forecast.io
        latitude: '60.1756', // Latitude of desired location
        longitude: '24.9342', // Longitude of desired location
        units: 'si', // us = US format, si = international system
        timeout: '300000', // How often the data should be updated (milliseconds)
        current_h3: 'hki nyt', // Heading for current weather
    }
};