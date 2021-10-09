
async function getWeather() {
    var user_choice = document.getElementById('area').value
    var url = 'https://api.weather.gov/gridpoints/'+ user_choice +'/47,30/forecast'
    var response = await fetch(url);
    data = await response.json();

    var temperature = data.properties.periods[0].temperature
    var shortForecast = data.properties.periods[0].shortForecast
    var windSpeed = data.properties.periods[0].windSpeed

    var temperature2 = data.properties.periods[2].temperature
    var shortForecast2 = data.properties.periods[2].shortForecast
    var windSpeed2 = data.properties.periods[2].windSpeed

    var temperature4 = data.properties.periods[4].temperature
    var shortForecast4 = data.properties.periods[4].shortForecast
    var windSpeed4 = data.properties.periods[4].windSpeed
      
    document.getElementById('todayForecast').innerHTML = temperature  + shortForecast  + windSpeed
    document.getElementById('tomorrowForecast').innerHTML = temperature2 + shortForecast2 + windSpeed2;
    document.getElementById('threeDaysForecast').innerHTML = temperature4 + shortForecast4 + windSpeed4;
}