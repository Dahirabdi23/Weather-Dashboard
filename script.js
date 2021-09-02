var cityname = document.querySelector('#cityname')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humidity = document.querySelector('#humidity')
var Uvindex = document.querySelector('#UVindex')
var city;
var button = document.querySelector("#search-button")
function handlesearchinput(event) {
    event.preventDefault();
    var searchinputval =document.querySelector("#search-input");
    
    if (!searchinputval) {
        alert("pls search a city")
        return;
    }
}
var searchinputval =document.querySelector("#search-input");
button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchinputval.value+'&appid=e5ce6a94e5d16a0e40da8ab1f7da8b25')
    .then(response => response.json())
    .then(data => {
        var nameval = data['name'];
        var tempval = data['main']['temp'];
        var humidityval = data['main']['humidity'];
        var windval = data['wind']['speed'];
        
        cityname.innerHTML= nameval;
        temp.innerHTML = tempval;
        wind.innerHTML = windval;
        humidity.innerHTML = humidityval;
    })
});