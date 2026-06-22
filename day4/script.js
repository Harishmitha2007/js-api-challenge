async function getWeather() {
    const city = document.getElementById("city").value;

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e26bcaa7b5b685c4052f717a469c6708&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML =
            "Error fetching weather data";
    }
}