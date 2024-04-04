
const lat = -25.49;
const long = -49.34;
const key = "3fd567ec38f593abe6ddc29dd6159dcd";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;

const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=3fd567ec38f593abe6ddc29dd6159dcd`

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            fetchForecast();
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    try {
        let response = await fetch(urlForecast);
        if (response.ok) {
            const dataForecast = await response.json();
            calculateForecast(dataForecast);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const weatherImg = document.querySelector('.weatherImg');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weatherDescription');


    weatherImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherImg.setAttribute('alt', 'Weather Icon');
    weatherImg.setAttribute('width', 100);

    temperature.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;

    weatherDescription.innerHTML = `${capitalizeFirstLetter(data.weather[0].description)}`  
    
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function calculateForecast(data) {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 2);

    let tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    let nextDayFormatted = nextDay.toISOString().split('T')[0];

    let tomorrowItems = data.list.filter(item => item.dt_txt.includes(tomorrowFormatted));
    let nextDayItems = data.list.filter(item => item.dt_txt.includes(nextDayFormatted));

    let minTemperatureTomorrow = Math.min(...tomorrowItems.map(item => item.main.temp_min));
    let maxTemperatureTomorrow = Math.max(...tomorrowItems.map(item => item.main.temp_max));

    let minTemperatureNextDay = Math.min(...nextDayItems.map(item => item.main.temp_min));
    let maxTemperatureNextDay = Math.max(...nextDayItems.map(item => item.main.temp_max));

    const dataTomorrow = document.querySelector('.dataTomorrow');
    const minTempTomorrow = document.querySelector('.minTempTomorrow');
    const maxTempTomorrow = document.querySelector('.maxTempTomorrow');

    const dataNextDay = document.querySelector('.dataNextDay');
    const minTempNextDay = document.querySelector('.minTempNextDay');
    const maxTempNextDay = document.querySelector('.maxTempNextDay');

    function formatDateAmericanStyle(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`;
    }

    let tomorrowFormattedNewMode = formatDateAmericanStyle(tomorrow);
    tomorrowFormattedNewMode = "Date: " + tomorrowFormattedNewMode

    let nextDayFormattedNewMode = formatDateAmericanStyle(nextDay);
    nextDayFormattedNewMode =  "Date: " + nextDayFormattedNewMode
    
    let minTempTomorrowformatted = `Min. Temp.: ${minTemperatureTomorrow}&deg;F`
    let maxTemperatureTomorrowFormatted = `Max. Temp.:  ${maxTemperatureTomorrow}&deg;F`

    let minTemperatureNextDayformatted = `Min. Temp.: ${minTemperatureNextDay}&deg;F`
    let maxTemperatureNextDayFormatted = `Max. Temp.:  ${maxTemperatureNextDay}&deg;F`


    dataTomorrow.innerHTML = tomorrowFormattedNewMode;
    minTempTomorrow.innerHTML = minTempTomorrowformatted;
    maxTempTomorrow.innerHTML = maxTemperatureTomorrowFormatted;

    dataNextDay.innerHTML = nextDayFormattedNewMode;
    minTempNextDay.innerHTML = minTemperatureNextDayformatted;
    maxTempNextDay.innerHTML = maxTemperatureNextDayFormatted;
}

document.addEventListener('DOMContentLoaded', function () {
    apiFetch();
    fetchForecast();
});