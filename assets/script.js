// var cityInputEl = document.getElementById("user-input");
var todayList = document.getElementById("todayCondition");
var fetchButton = document.getElementById('#fetch-btn');
var city = document.getElementById('user-input')
var APIkey = "694870d5dec7724f0a20d6d389e86c79"
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

//! need a function to take in cityInputEl and use it to target the lat and lon in the fetch request

// function getApi() {} 
//! will have to adjust lat and lon to be some kind of input
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=34.0901&lon=-118.4065&appid=${APIkey}`)
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
//! why error 400 wrong lat
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=lat=34.0901&lon=-118.4065&appid=${APIkey}`)
.then(response => response.json()).then(data => {console.log(data)
  
  // const theDate = data. 
  // const windyOne = data.wind.speed
  // const temperaturyOne = data.main.temp
  // const humidityOne = data.main.humidity
  
  // var theDateTomorrow = document.getElementById("the-date");
  // var windOneEl = document.getElementById("wind-one");
  // var tempOneEl = document.getElementById("temperature-one");
  // var humidOneEl = document.getElementById("humidity-one");
  
  
  // theDateTomorrow.textContent = `${theDate}`
  // windOneEl.textContent = `Wind: ${wind}`
  // tempOneEl.textContent = `Temp: ${temperaturyOne}`
  // humidOneEl.textContent = `Humidity: ${humidity}`
  
  
});  
// fetchButton.addEventListener('click', getApi);
// console.log('clicked');


// var timerInterval = setInterval(function () {
  //   var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
  //   $('#theDate').text(time);
  // }, 1000);
  
  
  {/* 
    id="the-date"
    id="temperature" 
    id="wind" 
    id="humidity"     */}





// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIkey}';
// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=city/&appid=2b8c2ba79187e44f01c2404a79e9da71';
  

  

// ! heres the url i think we're meant to use
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// ! alt if i have to include more parameters
// 
// ! we could use this to check outside the country i think. that'd be kinda cool
//https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

// next i think we should make query selectors for all of the id's we'll need
// make a function to create and append the previous city searches from local storage
// display current dates weather conditions
// display five day forecast.https://api.openweathermap.org/data/2.5/weather?q=city/&appid=${APIkey}

