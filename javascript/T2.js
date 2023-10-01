let input = document.querySelector("#get-input");
input.addEventListener("keypress", function (input) {
  if (input.key === "Enter") {
    input.preventDefault();
    checkWeather();
  }
});

let checkWeather = async () => {
  const div = document.querySelector(".card");
  const city_name = document.getElementById("get-input").value;
  const img = document.createElement("img");
  div.removeAttribute("hidden");
  div.prepend(img);
  const temperature = document.getElementById("temp");
  const humidity = document.getElementById("humidity");
  const wind_speed = document.getElementById("wind-speed");
  const time_zone = document.getElementById("time-zone");
  const temp_desc = document.getElementById("temp-desc");

  const api_key = "05c78ae37efde1c7a22f7805bd2cf124";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

  const data = await fetch(`${url}`).then((response) => response.json());
  console.log(data);
  switch (data.weather[0].main) {
    case "Clouds":
      img.src = "./cloud.png";
      break;
    case "Snow":
      img.src = "./snow.png";
      break;
    case "Rain":
      img.src = "./rain.png";
      break;
    case "Clear":
      img.src = "./clear.png";
      break;
    case "Mist":
      img.src = "./mist.png";
  }
  temperature.textContent = `Weather Condition \n ${Math.round(
    data.main.temp - 273.16
  )}°C`;
  temp_desc.textContent = `(${data.weather[0].description})`;
  humidity.textContent = `Humidity ${data.main.humidity}%`;
  wind_speed.textContent = `Wind Speed ${data.wind.speed} km/h`;
  time_zone.textContent = `Time Zone ${data.timezone}`;
};
