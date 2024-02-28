const cardPageInformation = document.querySelector('.pageInformation')

const lat = -25.49;
const long = -49.34;
const key = "3fd567ec38f593abe6ddc29dd6159dcd";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const creatingDivWeather = document.createElement('div')
    creatingDivWeather.classList.add('divWeather')
    cardPageInformation.appendChild(creatingDivWeather)

    const pWeatherInformation = document.createElement('h4')
    pWeatherInformation.classList.add('textInformationWeather')

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    weatherIcon.setAttribute('width', 50);

    pWeatherInformation.appendChild(weatherIcon);
    pWeatherInformation.innerHTML += ` ${data.main.temp.toFixed(1)}°F - ${capitalizeFirstLetter(data.weather[0].description)}`;

    creatingDivWeather.appendChild(pWeatherInformation);
    


}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

apiFetch();
