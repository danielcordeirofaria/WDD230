
// const lat = -25.49;
// const long = -49.34;
// const key = "3fd567ec38f593abe6ddc29dd6159dcd";

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;

// async function apiFetch() {
//     try {
//         let response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             displayResults(data);
//         } else {
//             throw new Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function displayResults(data) {
//     const weatherImg = document.querySelector('.weatherImg');
//     const temperature = document.querySelector('.temperature');
//     const weatherDescription = document.querySelector('.weatherDescription');
//     const humidityNumber = document.querySelector('.humidityNumber');
//     const windSpeed = data.wind.speed
//     console.log(windSpeed)

//     weatherImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     weatherImg.setAttribute('alt', 'Weather Icon');
//     weatherImg.setAttribute('width', 100);

//     temperature.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;

//     weatherDescription.innerHTML = `${capitalizeFirstLetter(data.weather[0].description)}`

//     humidityNumber.innerHTML = `${data.main.humidity}%`


//     const windChillParameter = document.querySelector(".windChillParameter");

//     windChillParameter.textContent = calculateWindChill(temperature.innerHTML, windSpeed);
    
    
// }


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     apiFetch();
// });


const key = "3fd567ec38f593abe6ddc29dd6159dcd";

async function apiFetch(lat, long) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`;
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
    const weatherImg = document.querySelector('.weatherImg');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weatherDescription');
    const humidityNumber = document.querySelector('.humidityNumber');
    const windSpeed = data.wind.speed;

    weatherImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherImg.setAttribute('alt', 'Weather Icon');
    weatherImg.setAttribute('width', 100);

    temperature.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;

    weatherDescription.innerHTML = `${capitalizeFirstLetter(data.weather[0].description)}`;

    humidityNumber.innerHTML = `${data.main.humidity}%`;

    const windChillParameter = document.querySelector(".windChillParameter");

    windChillParameter.textContent = calculateWindChill(temperature.innerHTML, windSpeed);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function calculateWindChill(temperature, windSpeed) {
    // Implement your wind chill calculation logic here
}

document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            apiFetch(lat, long);
        }, function (error) {
            if (error.code === error.PERMISSION_DENIED) {
                alert("You denied the geo-location request. The weather that will be rendered will be the default location.");
                const lat = -25.49;
                const long = -49.34;
                apiFetch(lat, long);
            } else {
                alert("An error occurred while trying to get your location.");
            }
        });
    } else {
        alert("Geolocation is not supported by this browser. The weather that will be rendered will be the default location.");
        const lat = -25.49;
        const long = -49.34;
        apiFetch(lat, long);
    }
});

