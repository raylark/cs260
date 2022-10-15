document.getElementById("zooSubmit").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        let card = `<div class='card'>
                      <img class='card-img-top' src='${json.image_link}' alt='${json.name}'>
                      <div class='card-body'>
                        <h5 class='card-title'>${json.name}</h5>
                        <em class='card-text'>${json.latin_name}</em>
                      </div>

                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item'><strong>Type:</strong> <span class='fact'>${json.animal_type}</span></li>
                        <li class='list-group-item'><strong>Activity:</strong> <span class='fact'>${json.active_time}</span></li>
                        <li class='list-group-item'><strong>Region:</strong> <span class='fact'>${json.geo_range}</span></li>
                        <li class='list-group-item'><strong>Habitat:</strong> <span class='fact'>${json.habitat}</span></li>
                        <li class='list-group-item'><strong>Length:</strong> <span class='fact'>${json.length_min}ft - ${json.length_max}ft</span></li>
                        <li class='list-group-item'><strong>Weight:</strong> <span class='fact'>${json.weight_min}lbs - ${json.weight_max}lbs</span></li>
                      </ul>
                    </div>`
        document.getElementById("animal").innerHTML = card;
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