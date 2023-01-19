var cityInputEl = document.getElementsByClassName("user-input");
var repoList = document.querySelector('ul');

var city;
var APIkey = "2b8c2ba79187e44f01c2404a79e9da71"

//! fix this eventually
var printCityConditions = function (city) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(skillsListEl);
  };
//! fix this eventually (3rd party api activity 24)
var handleFormSubmit = function (event) {
    event.preventDefault();

    var cityInput = cityInputEl.val();

    if(!cityInput) {
        window.alert("Try typing in a city name before clicking mouse maniac");
        return;
    }

    printCityConditions(cityInput);

    cityInputEl.val('');
}


function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIkey}';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          repoList.appendChild(listItem);
        }
      });
  }
  
  fetchButton.addEventListener('submit', getApi);
  

// ! heres the url i think we're meant to use
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// ! alt if i have to include more parameters
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// ! we could use this to check outside the country i think. that'd be kinda cool
//https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}


// ToDo make a fetch function. Idk what the data will even look like.
// next i think we should make query selectors for all of the id's we'll need
// make a function to create and append the previous city searches from local storage
// display current dates weather conditions
// display five day forecast.