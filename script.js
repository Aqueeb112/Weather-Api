
let inputbox = document.querySelector(".input-box")
let seatchBtn = document.getElementById("searchBtn")
let weather_img = document.querySelector(".weather-img")
let temperature = document.querySelector(".temperature")
let description = document.querySelector(".description")
let humidity = document.getElementById("humidity")
let wind_speed = document.getElementById("wind-speed")
let location_not_found = document.querySelector(".location-not-found")
let weather_body = document.querySelector(".weather-body")
let city_name = document.getElementById("city_name")


searchWeather = async (city)=>{
    const api_key = "909d37137e3d8ef71c3496dd4a37b350";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());


            if(weather_data.cod === "404"){
                weather_body.style.display = "none"
                location_not_found.style.display = "flex"
                console.log("error")
            }
            else{
                weather_body.style.display = "flex"
                location_not_found.style.display = "none"

            }

            console.log(weather_data)

    temperature.innerHTML =  `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`  
      city_name.innerHTML = `${weather_data.name}`   
     humidity.innerHTML = `${weather_data.main.humidity}%`
     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case "Clouds":
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/main/Weather%20App/assets/cloud.png";
            break;

        case "Clear":
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/main/Weather%20App/assets/clear.png";
            break;

        case "Rain":
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/main/Weather%20App/assets/rain.png";
            break;

        case "Mist":
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/main/Weather%20App/assets/mist.png";
            break;

        case "Snow":
            weather_img.src = "hhttps://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/main/Weather%20App/assets/snow.png";
            break;
    }
  
}

searchWeather()

seatchBtn.addEventListener("click", ()=>{
    searchWeather(inputbox.value)     
})
