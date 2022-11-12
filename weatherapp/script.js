let API_KEY = "02599a2e7873f190193e71b41455b4c5";
/*global fetch*/
/*global moment*/

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=" + API_KEY;
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let results = "";
        results += '<h2>' + json.name + "</h2>";
        let icons = "";
        for (let i=0; i < json.weather.length; i++) {
        	icons += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        let desc = ""
        for (let i=0; i < json.weather.length; i++) {
    	    desc += json.weather[i].description
        	if (i !== json.weather.length - 1)
        	  desc += ", "
        }
        let tempContainer = "<div class='temp-container'><div class='temp'>" + json.main.temp + "</div><div class='degree'>&deg;F</div></div>"
        
        let descContainer = "<div class='desc-container'><div class='icons-container'>" + icons + "</div><div class='desc'>" + desc + "</div></div>"
        
        let exHiLo = makeEntry("Hi/Lo", json.main.temp_max + "&deg;F/" + json.main.temp_min + "&deg;F");
        let exPres = makeEntry("Pressure", json.main.pressure + "mb");
        let exHum = makeEntry("Humidity", json.main.humidity + "%");
        let exFeel = makeEntry("Feels Like", json.main.feels_like + "&deg;F");
        // let exSunrise = makeEntry("Sunrise", moment(json.sys.sunrise).format('h:mm a'));
        // let exSunset = makeEntry("Sunset", moment(json.sys.sunset).format('h:mm '));
        let exWind = makeEntry("Wind Speed", json.wind.speed + " mph");
        
        let col1 = "<div class='col'>" + exFeel + exHiLo + exHum + exPres + exWind + "</div>"
        
        let extrasContainer = "<div class='extras-container'>" + col1 + "</div>"
        
        let detailsContainer = "<div class=details-container>" + descContainer + extrasContainer + "</div>";
        
        let heroContainer = "<div class='hero-container'>" + tempContainer + detailsContainer + "</div>";
        results += heroContainer;
        
        let container = document.getElementById("weather");
        container.innerHTML += "<h1>Today</h1><div id='weatherResults'>" + results + "</div>";
    });
    
    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=" + API_KEY;
    fetch(url2)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let forecast = "";
        for (let i=0; i < json.list.length; i=i+8) {
            // forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
            let t3a = "<div class='time-col'><div>" + moment(json.list[i].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i].weather[0].icon + ".png'/></div></div>";
            let t6a = "<div class='time-col'><div>" + moment(json.list[i+1].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+1].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+1].weather[0].icon + ".png'/></div></div>";
            let t9a = "<div class='time-col'><div>" + moment(json.list[i+2].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+2].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+2].weather[0].icon + ".png'/></div></div>";
            let t12p = "<div class='time-col'><div>" + moment(json.list[i+3].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+3].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+3].weather[0].icon + ".png'/></div></div>";
            let t3p = "<div class='time-col'><div>" + moment(json.list[i+4].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+4].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+4].weather[0].icon + ".png'/></div></div>";
            let t6p = "<div class='time-col'><div>" + moment(json.list[i+5].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+5].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+5].weather[0].icon + ".png'/></div></div>";
            let t9p = "<div class='time-col'><div>" + moment(json.list[i+6].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+6].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+6].weather[0].icon + ".png'/></div></div>";
            let t12a = "<div class='time-col'><div>" + moment(json.list[i+7].dt_txt).format('h:mm a') + "</div><div>" + "<p>" + json.list[i+7].main.temp + "&deg;F</p>" + "</div><div><img src='https://openweathermap.org/img/w/" + json.list[i+7].weather[0].icon + ".png'/></div></div>";
            let dayContainer = "<div class='day-container'><div class='day'>" + moment(json.list[i].dt_txt).format('dddd, MMMM Do') + "</div><div class='time-row'>" + t3a + t6a + t9a + t12p + t3p + t6p + t9p + t12a + "</div></div>";
            forecast += dayContainer;
        }
        document.getElementById("weather").innerHTML += "<h1>5-day Forecast</h1><div id='forecastResults'>" + forecast + "</div>";
    });
    
  console.log(value);
});

function makeEntry(title, detail) {
    return "<div class='detail'><strong>" + title + ":</strong> " + detail + "</div>";
}