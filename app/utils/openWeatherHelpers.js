var axios = require('axios');

var API_KEY = 'be957e14285dec605c510812c974628d'

var helpers = {
    getCurrentWeather: function(city) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + API_KEY)
    },

    getFiveDayForecast: function(city){
        return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&cnt=5&APPID=' + API_KEY);
    },
};

module.exports = helpers;

// Current Weather:
// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

// 5 Day Forecast:
// http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
