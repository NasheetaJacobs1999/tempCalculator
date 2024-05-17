document.addEventListener("DOMContentLoaded", function() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    let celsiusButton = document.getElementById("convertToCelsius");
    let fahrenheitButton = document.getElementById("convertToFahrenheit");

    celsiusButton.addEventListener("click", function() {
        let fahrenheit = parseFloat(fahrenheitInput.value);
        let celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
    });

    fahrenheitButton.addEventListener("click", function() {
        let celsius = parseFloat(celsiusInput.value);
        let fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    });
});