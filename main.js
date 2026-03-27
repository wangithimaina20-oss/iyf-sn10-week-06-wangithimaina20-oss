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
// CALLBACK EXAMPLE
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sharon", sayBye);

// PROMISE EXAMPLE
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise successful!");
  } else {
    reject("Promise failed!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// ASYNC/AWAIT EXAMPLE
async function testAsync() {
  return "Async working!";
}

testAsync().then(console.log);
// FETCH WITH ERROR HANDLING
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
