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
    });
});