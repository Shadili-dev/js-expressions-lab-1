// JavaScript Expressions Lab

// Temperature data from test file
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

// Convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsiusTemps.map(c => (c * 9/5) + 32);

// Convert Fahrenheit to Celsius  
const fahrenheitToCelsius = fahrenheitTemps.map(f => (f - 32) * 5/9);

// Combine all temperatures
const allFahrenheit = fahrenheitTemps.concat(celsiusToFahrenheit);
const allCelsius = celsiusTemps.concat(fahrenheitToCelsius);

// Calculate totals
let tot_temperature_in_fahrenheit = 0;
for (let temp of allFahrenheit) {
    tot_temperature_in_fahrenheit += temp;
}

let tot_temperature_in_celsius = 0;
for (let temp of allCelsius) {
    tot_temperature_in_celsius += temp;
}

// Calculate averages
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allFahrenheit.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / allCelsius.length;

// Export for testing
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
