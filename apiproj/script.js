let API_KEY = "02599a2e7873f190193e71b41455b4c5";
/*global fetch*/
/*global moment*/

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
//   if (value === "")
//     return;

  const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        // let results = "";
        // results += '<h2>' + json.name + "</h2>";
        // let icons = "";
        // for (let i=0; i < json.weather.length; i++) {
        // 	icons += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        // }
        // let desc = ""
        // for (let i=0; i < json.weather.length; i++) {
    	   // desc += json.weather[i].description
        // 	if (i !== json.weather.length - 1)
        // 	  desc += ", "
        // }
        // let tempContainer = "<div class='temp-container'><div class='temp'>" + json.main.temp + "</div><div class='degree'>&deg;F</div></div>"
        
        // let descContainer = "<div class='desc-container'><div class='icons-container'>" + icons + "</div><div class='desc'>" + desc + "</div></div>"
        
        // let exHiLo = makeEntry("Hi/Lo", json.main.temp_max + "&deg;F/" + json.main.temp_min + "&deg;F");
        // let exPres = makeEntry("Pressure", json.main.pressure + "mb");
        // let exHum = makeEntry("Humidity", json.main.humidity + "%");
        // let exFeel = makeEntry("Feels Like", json.main.feels_like + "&deg;F");
        // // let exSunrise = makeEntry("Sunrise", moment(json.sys.sunrise).format('h:mm a'));
        // // let exSunset = makeEntry("Sunset", moment(json.sys.sunset).format('h:mm '));
        // let exWind = makeEntry("Wind Speed", json.wind.speed + " mph");
        
        // let col1 = "<div class='col'>" + exFeel + exHiLo + exHum + exPres + exWind + "</div>"
        
        // let extrasContainer = "<div class='extras-container'>" + col1 + "</div>"
        
        // let detailsContainer = "<div class=details-container>" + descContainer + extrasContainer + "</div>";
        
        // let heroContainer = "<div class='hero-container'>" + tempContainer + detailsContainer + "</div>";
        // results += heroContainer;
        
        // let container = document.getElementById("weather");
        // container.innerHTML += "<h1>Today</h1><div id='weatherResults'>" + results + "</div>";
    });
});