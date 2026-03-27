async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    document.getElementById("result").innerText = "Loading...";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const temp = data.main.temp;
    const weather = data.weather[0].description;

    document.getElementById("result").innerText =
      `Temperature: ${temp}°C\nWeather: ${weather}`;

  } catch (error) {
    document.getElementById("result").innerText = error.message;
  }
}
