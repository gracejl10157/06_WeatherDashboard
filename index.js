let request = require('request');

const API_KEY = process.env['API_KEY'];
let cityName = 'Portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

request(url, function (err, response, body) {
    if(err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});
