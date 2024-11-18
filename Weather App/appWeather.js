
// taking inputs of input text and search bar
const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

const weatherInfoSection = document.querySelector('.weather-info')
const notFoundSection = document.querySelector('.not-found')
const searchCitySection = document.querySelector('.search-city')


// for matching with API data imported
const countryTxt = document.querySelector('.country-txt')
const tempTxt = document.querySelector('.temp-txt')
const conditionTxt = document.querySelector('.condition-txt')
const humidityValueTxt = document.querySelector('.humidity-value-txt')
const windValueTxt = document.querySelector('.wind-value-txt')
const weatherSummaryImg = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelector('.current-date-txt')

const forecastItemsContainer = document.querySelector('.forecast-items-container')

const apiKey = '3c0b807e7a1c1c032bf73ae6dfe40880'

searchBtn.addEventListener("click", () => {
    // console.log("Search btn is clicked");
    if (cityInput.value.trim() != '') { //removes extra spaces
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''; //after clicking search btn input box will be empty 
        cityInput.blur();
    }
})

// for tracking every key entred into input field
cityInput.addEventListener("keydown", (event) => {
    // console.log(event);
    if (event.key == 'Enter' && cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value) //takes input and invokes the function passes the input value to function
        cityInput.value = ''
        cityInput.blur()
    }

})

async function getFetchData(endPoint, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`; //by adding  units= merics we get temperature
    const response = await fetch(apiUrl)
    return response.json()
}

// for getting icons based onthier id from API 
function getWeatherIcon(id) {
    console.log(id);
    if (id <= 232) return `thunderstorm.svg`
    if (id <= 321) return `drizzle.svg`
    if (id <= 531) return `rain.svg`
    if (id <= 622) return `snow.svg`
    if (id <= 781) return `atmosphere.svg`
    if (id <= 781) return `atmosphere.svg`
    if (id <= 800) return `clear.svg`
    else return `clouds.svg`
}

function getCurrentDate() {
    const currentDate = new Date()
    console.log(currentDate);

    const options = {
        weekday: `short`,
        day: '2-digit',
        month: 'short'
    }

    return currentDate.toLocaleDateString('en-GB', options)

}

async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('weather', city);
    // console.log(weatherData);

    if (weatherData.cod !== 200) {
        showDisplaySection(notFoundSection)
        return
    }
    console.log(weatherData, weatherData.cod);

    // lets take each impoted value from API & store it into a varible
    // destructing the values to the weather data, SO, we can get one-by-one value to display in UI
    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData
    // here, we get weather data, So, all detilas will gather here
    // then passed to showDisplaySection()
    countryTxt.textContent = `${country}`
    tempTxt.textContent = `${Math.round(temp)} °C`
    conditionTxt.textContent = `${main}`
    humidityValueTxt.textContent = `${humidity} %`
    weatherSummaryImg.src = `media/assets/weather/${getWeatherIcon(id)}`
    windValueTxt.textContent = `${speed} M/s`


    currentDateTxt.textContent = getCurrentDate() //displlays date using function getCurrentDate()
    console.log(currentDateTxt);

    showDisplaySection(weatherInfoSection)

    // Now list of weather to display
    // await updateWeatherInfo(city)
}


//list of data, i think rendering problem. 
// async function updateWeatherInfo(city) {
//     const forecastData = await getFetchData('forecast', city)
//     const timeTaken = '12:00:00'
//     const todayDate = new Date().toISOString().split('T')[0]


//     forecastItemsContainer.innerHTML = ''
//     forecastData.list.forEach(forecastWeather => {
//         if (forecastWeather.dt_txt.includes(timeTaken)
//             && forecastWeather.dt_txt.includes(todayDate)) {
//             updateForecastItems(forecastWeather)
//             console.log(forecastWeather);
//         }

//     })
//     console.log(todayDate);
//     console.log(forecastData); // displays list of dadta

// }

function updateForecastItems(weatherData) {
    console.log(weatherData);
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp },
    } = weatherData

    //seting date for cards
    const dateTaken = new Date()
    const dateOption = {
        day: '2-digit',
        month: 'short'
    }

    const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

    const forecastItem = `    
    <div class="forecast-item">
        <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
        <img src="./media/assets/weather/${getWeatherIcon(id)}" alt="thunderstorm-img" class="forecast-item-img">
        <h5 class="forecast-item-temp">${Math.round(temp)}°C</h5>
    </div>`

    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
}

function showDisplaySection(section) {
    [weatherInfoSection, searchCitySection, notFoundSection].forEach(section => section.style.display = "none")
    section.style.display = 'flex'
    console.log("Displayed section");

}
