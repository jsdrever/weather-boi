
var todayList = document.getElementById("todayCondition");
var fetchButton = document.getElementById('button-addon1');
var city = document.getElementById('user-input')
var APIkey = "694870d5dec7724f0a20d6d389e86c79"
var recentCitySearch = document.getElementById('recent-city');
var cityList = JSON.parse(localStorage.getItem('cityList')) || [];


fetchButton.addEventListener('click', getApi);


function getApi() { 
  cityList.push(city.value)
  localStorage.setItem('cityList', JSON.stringify(cityList));
  var button = document.createElement('button')
  button.textContent = city.value
  recentCitySearch.appendChild(button);
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=1&appid=${APIkey}`)
  
  .then(response => response.json()).then(data => {
    console.log(data)

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIkey}`)
.then(response => response.json()).then(data => {console.log(data)
  const cityName = data.name
  const wind = data.wind.speed
  const temperature = data.main.temp
  const humidity = data.main.humidity
  
  var cityNameEl = document.getElementById("city-display"); 
  var windEl = document.getElementById("wind");
  var tempEl = document.getElementById("temperature");
  var humidEl = document.getElementById("humidity");
  
  
  cityNameEl.textContent = `${cityName}`
  windEl.textContent = `Wind: ${wind}`
  tempEl.textContent = `Temp: ${temperature}`
  humidEl.textContent = `Humidity: ${humidity}`
});


//five day forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIkey}`)

.then(response => response.json()).then(data => {console.log(data)
  
  const theDate = data.list[0].dt_txt
  const windyOne = data.list[0].wind.speed
  const temperaturyOne = data.list[0].main.temp
  const humidityOne = data.list[0].weather[0].description
  
  var theDateTomorrow = document.getElementById("the-date");
  var windOneEl = document.getElementById("wind-one");
  var tempOneEl = document.getElementById("temperature-one");
  var humidOneEl = document.getElementById("humidity-one");
  
  
  theDateTomorrow.textContent = `${theDate}`
  windOneEl.textContent = `Wind: ${windyOne}`
  tempOneEl.textContent = `Temp: ${temperaturyOne}`
  humidOneEl.textContent = ` ${humidityOne}`
  
  //! next day
  const theDateSecond = data.list[1].dt_txt 
  const windyTwo = data.list[1].wind.speed
  const temperaturyTwo = data.list[1].main.temp
  const humidityTwo = data.list[1].weather[0].description
  
  var theDateTwo = document.getElementById("the-date-two");
  var windTwoEl = document.getElementById("windTwo");
  var tempTwoEl = document.getElementById("temperatureTwo");
  var humidTwoEl = document.getElementById("humidityTwo");
  
  
  theDateTwo.textContent = `${theDateSecond}`
  windTwoEl.textContent = `Wind: ${windyTwo}`
  tempTwoEl.textContent = `Temp: ${temperaturyTwo}`
  humidTwoEl.textContent = `${humidityTwo}`
  
  //! third day of five forecast
  const theDateThird = data.list[2].dt_txt
  const windyThree = data.list[2].wind.speed
  const temperaturyThree = data.list[2].main.temp
  const humidityThree = data.list[2].weather[0].description
  
  var theDateThree = document.getElementById("the-date-three");
  var windThreeEl = document.getElementById("windTwo");
  var tempThreeEl = document.getElementById("temperatureTwo");
  var humidThreeEl = document.getElementById("humidityTwo");
  
  
  theDateThree.textContent = `${theDateThird}`
  windThreeEl.textContent = `Wind: ${windyThree}`
  tempThreeEl.textContent = `Temp: ${temperaturyThree}`
  humidThreeEl.textContent = `${humidityThree}`
  
  //! fourth day of five day forecast
  const theDateFourth = data.list[3].dt_txt
  const windyFour = data.list[3].wind.speed
  const temperaturyFour = data.list[3].main.temp
  const humidityFour = data.list[3].weather[0].description
  
  var theDateFour = document.getElementById("the-date-three");
  var windFourEl = document.getElementById("windTwo");
  var tempFourEl = document.getElementById("temperatureTwo");
  var humidFourEl = document.getElementById("humidityTwo");
  
  
  theDateFour.textContent = `${theDateFourth}`
  windFourEl.textContent = `Wind: ${windyFour}`
  tempFourEl.textContent = `Temp: ${temperaturyFour}`
  humidFourEl.textContent = `${humidityFour}`
  
  //! fifth day of five day forecast
  const theDateFifth = data.list[4].dt_txt
  const windyFive = data.list[4].wind.speed
  const temperaturyFive = data.list[4].main.temp
  const humidityFive = data.list[4].weather[0].description
  
  var theDateFive = document.getElementById("the-date-five");
  var windFiveEl = document.getElementById("windFive");
  var tempFiveEl = document.getElementById("temperatureFive");
  var humidFiveEl = document.getElementById("humidityFive");
  
  
  theDateFive.textContent = `${theDateFifth}`
  windFiveEl.textContent = `Wind: ${windyFive}`
  tempFiveEl.textContent = `Temp: ${temperaturyFive}`
  humidFiveEl.textContent = `${humidityFive}`
});  
})
}



// ! we could use this to check outside the country i think. that'd be kinda cool
//https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}



