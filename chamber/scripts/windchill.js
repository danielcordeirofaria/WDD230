
function calculateWindChill(temperature, windSpeed) {
    var temperatureValue = parseFloat(temperature.replace("°F", ""));
    if (temperatureValue <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + (0.6215 * temperatureValue) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperatureValue * Math.pow(windSpeed, 0.16)
        return windChill.toFixed(2) + " °F"; 
    } else {
        return "N/A";
    }
}
