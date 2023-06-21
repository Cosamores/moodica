

async function fetchWeatherAndVideoData(locationKey, city) {
    const WEATHER_API_URL = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${WEATHER_API_KEY}`;

    try {
        let response = await fetch(WEATHER_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let weatherData = await response.json();
        console.log(weatherData);

        const mood = `music for ${weatherData[0].WeatherText} weather`;
        const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=${mood}&type=video&videoDefinition=high&key=${YOUTUBE_API_KEY}`;

        response = await fetch(YOUTUBE_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let youtubeData = await response.json();
        console.log(youtubeData);
        console.log(`the mood is: ${mood}`);
        createCard(city, weatherData, youtubeData);
        return { weatherData, youtubeData };
    } catch (error) {
        console.log('There was a problem with the fetch operation: ' + error.message);
    }
}


function createCard(city, weatherData, youtubeData) {

    const moodLowerCase = (weatherData[0].WeatherText).toLowerCase();

    const container = document.querySelector('.card-container'); 
    var card = document.createElement("div");
    card.className = "card";
    
    if (moodLowerCase.includes('sun') && moodLowerCase.includes('clouds') || moodLowerCase.includes('sparse')) {
        card.innerHTML = `
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
            <div class="frame sun-cloud-frame">
                <div class="sun">
                    <div class="sun-core"></div>
                    <div class="sun-ray-1"></div>
                    <div class="sun-ray-2"></div>
                    <div class="sun-ray-3"></div>
                    <div class="sun-ray-4"></div>
                </div>
                <iframe width="inherit" height="inherit" class="video" src="https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="cloud">
                    <div class="cloud-part"></div>
                    <div class="cloud-part"></div>
                    <div class="cloud-part"></div>
                    <div class="cloud-part"></div>
                </div>
                <div class="hill-bg-1"></div>
                <div class="hill-bg-2"></div>
                <div class="hill-fg-1"></div>
                <div class="hill-fg-2"></div>
                <div class="hill-fg-3"></div>
            </div>
                
                <div class="sun-cloud-front front card-body">
                    <div>
                        <div class="temperature">
                        ${weatherData[0].Temperature.Metric.Value}°
                        </div>
                        <div>
                            <div class="info">
                                <div class="city">
                                    ${city}
                                </div>
                                <div class="weather-text">
                                    ${weatherData[0].WeatherText}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="proverb">“Não esqueça o casaquinho!”</div>
                </div>
                <div class="hover-menu">
                    <button class="delete-button">Excluir</button>
                    <button class="edit-button">Editar cidade</button>
                </div>
            </div>
        `
        container.appendChild(card);
        editDeleteHandler(card);
    
            }
    
                
    else if (moodLowerCase.includes('rain') || moodLowerCase.includes('rainy') || moodLowerCase.includes('storm') || moodLowerCase.includes('stormy') || moodLowerCase.includes('shower')) {
        card.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <div class="frame rain-frame">
        <div class="moon">
            <div class="moon-crater1"></div>
            <div class="moon-crater2"></div>
        </div>
        <iframe width="inherit" height="inherit" class="video" src="https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="hill-bg-1"></div>
        <div class="hill-bg-2"></div>
        <div class="hill-fg-1"></div>
        <div class="hill-fg-2"></div>
        <div class="hill-fg-3"></div>
        
        <div class="rain-front front card-body">
            <div>
                <div class="temperature">
                    ${weatherData[0].Temperature.Metric.Value}°
                </div>
            
                <div class="info">
                    <div class="city">
                        ${city}
                    </div>
                    <div class="weather-text">
                        ${weatherData[0].WeatherText}
                    </div>
                </div>
            </div>
        
            <div class="proverb">“Nada como um chá e cobertas. ”</div>
        </div>
        
        <div class="drop-big-1"></div>
        <div class="drop-big-2"></div>
        <div class="drop-big-3"></div>
        <div class="drop-big-4"></div>
        <div class="drop-big-5"></div>
        <div class="drop-big-6"></div>
        <div class="drop-big-7"></div>
        <div class="drop-big-8"></div>
        <div class="drop-big-9"></div>
        <div class="drop-big-10"></div>
        <div class="drop-medium-1"></div>
        <div class="drop-medium-2"></div>
        <div class="drop-medium-3"></div>
        <div class="drop-medium-4"></div>
        <div class="drop-medium-5"></div>
        <div class="drop-medium-6"></div>
        <div class="drop-medium-7"></div>
        <div class="drop-medium-8"></div>
        <div class="drop-medium-9"></div>
        <div class="drop-medium-10"></div>
        <div class="drop-small-1"></div>
        <div class="drop-small-2"></div>
        <div class="drop-small-3"></div>
        <div class="drop-small-4"></div>
        <div class="drop-small-5"></div>
        <div class="drop-small-6"></div>
        <div class="drop-small-7"></div>
        <div class="drop-small-8"></div>
        <div class="drop-small-9"></div>
        <div class="drop-small-10"></div>
        
        <div class="hover-menu">
            <button class="delete-button">Excluir</button>
            <button class="edit-button">Editar cidade</button>
        </div>
    </div>
    `;
    container.appendChild(card);
    editDeleteHandler(card);

}

else if (moodLowerCase.includes('sunny')|| moodLowerCase.includes('sun') || moodLowerCase.includes('clear')) {
    card.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <div class="frame sunny-frame">
            <div class="sun">
                <div class="sun-core"></div>
                <div class="sun-ray-1"></div>
                <div class="sun-ray-2"></div>
                <div class="sun-ray-3"></div>
                <div class="sun-ray-4"></div>
            </div>
            <iframe width="inherit" height="inherit" class="video" src="https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="sea">
            <div class="beach"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
            
            <div class="sunny-front front card-body">
                <div>
                    <div class="temperature">
                    ${weatherData[0].Temperature.Metric.Value}°
                    </div>
                    <div>
                        <div class="info">
                            <div class="city">
                                ${city}
                            </div>
                            <div class="weather-text">
                                ${weatherData[0].WeatherText}
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="proverb">“Vitamina D é tudo!”</div>
            </div>
            <div class="hover-menu">
                <button class="delete-button">Excluir</button>
                <button class="edit-button">Editar cidade</button>
            </div>
        </div>
    `
    container.appendChild(card);
    editDeleteHandler(card);

        }

        else if (moodLowerCase.includes('cloudy') || moodLowerCase.includes('clouds')) {
            card.innerHTML = `
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
                    <div class="frame cloudy-frame">
                        <div class="cloud">
                            <div class="cloud-part"></div>
                            <div class="cloud-part"></div>
                            <div class="cloud-part"></div>
                            <div class="cloud-part"></div>
                        </div>
                
                        <iframe width="inherit" height="inherit" class="video" src="https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="cloudy-front front card-body">
                            <div>
                                <div class="temperature">
                                ${weatherData[0].Temperature.Metric.Value}°
                                </div>
                                <div>
                                    <div class="info">
                                        <div class="city">
                                            ${city}
                                        </div>
                                        <div class="weather-text">
                                            ${weatherData[0].WeatherText}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="proverb">“Se você vier pro que der e vier...”</div>
                        </div>
                        <div class="hover-menu">
                            <button class="delete-button">Excluir</button>
                            <button class="edit-button">Editar cidade</button>
                        </div>
                    </div>
                `
                container.appendChild(card);
                editDeleteHandler(card);
    }  else {
        if (youtubeData.items.length > 0) {
            const videoElement = card.querySelector('.video');
            videoElement.src = `https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}`;
            
        } else {
            console.log('No YouTube videos found for the current mood.');
            alert('Um erro aconteceu, tente novamente mais tarde');
        }
    }
       
}
    
function editDeleteHandler(card) {
    const deleteButton = card.querySelector('.delete-button');
    const editButton = card.querySelector('.edit-button');

    card.addEventListener('mouseenter', () => {
        deleteButton.style.display = 'block';
        editButton.style.display = 'block';
        card.classList.add('glow');
    });

    card.addEventListener('mouseleave', () => {
        deleteButton.style.display = 'none';
        editButton.style.display = 'none';
        card.classList.remove('glow');

    });

    deleteButton.addEventListener('click', () => {
        card.remove();
    });

    editButton.addEventListener('click', () => {
        const cityName = prompt('Enter the new city name:');
        if (cityName) {
            const cityElement = card.querySelector('.city');
            cityElement.textContent = cityName;
            updateCard(cityName, card);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById("modal");
const btn = document.getElementById("addCardBtn");
const closeX = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => {
  modal.style.display = "block";
});

closeX.addEventListener('click',() => {
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
generateFooter()


var form = document.getElementById("card-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var city = document.getElementById("city-input").value;
  const LOCATION_API_URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${WEATHER_API_KEY}&q=${city}&language=pt-br&details=true`; // https://cors-anywhere.herokuapp.com/
  fetch(LOCATION_API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        const locationKey = data[0].Key;
        console.log(`location key: ${locationKey}`);
        fetchWeatherAndVideoData(locationKey, city);
        modal.style.display = "none";
    })
    
    .catch(error => {
      console.log('There was a problem with the fetch operation: ' + error.message);
    });
});

})

const updateCard = async (city, card) => {
    card.remove();
    const LOCATION_API_URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${WEATHER_API_KEY}&q=${city}&language=pt-br&details=true`;
    fetch(LOCATION_API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(async data => {
        const locationKey = data[0].Key;
        console.log(`location key: ${locationKey}`);
        const { weatherData, youtubeData } = await fetchWeatherAndVideoData(locationKey, city);
        const wtext = weatherData[0].WeatherText;
        const temp = weatherData[0].Temperature.Metric.Value;
        updateCardContents(card, city, temp, wtext, youtubeData);
    })
    .catch(error => {
        console.log('There was a problem with the fetch operation: ' + error.message);
    });
}

function updateCardContents(card, city, temp, wtext, youtubeData) {
    const cityElement = card.querySelector('.city');
    cityElement.textContent = city;

    const temperatureElement = card.querySelector('.temperature');
    temperatureElement.textContent = `${temp}°`;

    const weatherTextElement = card.querySelector('.weather-text');
    weatherTextElement.textContent = wtext;

    const videoElement = card.querySelector('.video');
    videoElement.src = `https://www.youtube.com/embed/${youtubeData.items[0].id.videoId}`;
}

const generateFooter = () => {
    const footerContent = document.querySelector('.footer-content');
    const date = new Date();
    footerContent.appendChild(document.createTextNode(`Caraguatatuba,  ${date}`))
}
