function renderWeather(weather){

    let resultsContainer=document.querySelector('#wetherResult');
    
    
    let city =document.createElement("h2");
    city.textContent=weather.name;
    resultsContainer.append(city);

    let temp=document.createElement('p')
    temp.textContent='temp :'+weather.main.temp + 'C '
    resultsContainer.append(temp)

    let humidity=document.createElement('p')
    humidity.textContent='Humidity : '+weather.main.humidity+'%'
    resultsContainer.append(humidity)

    let wind=document.createElement('p')
    wind.textContent='wind : '+weather.wind.speed+' mph ' + weather.wind.deg + '°'
    resultsContainer.append(wind)


    

    let weatherDetails=weather.weather[0];
    if(weatherDetails&& weatherDetails.description){
        let description=document.createElement('p')
        description.textContent=weatherDetails.description
        resultsContainer.append(description)
    }
}



function fetchWeather(city){
    let url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&lang=ar&appid=07e472e214c3ceead16450bc85f53add'
    
    fetch(url) 
    .then(response => response.json())
    .then(data => renderWeather(data));
}

let City=prompt();  
fetchWeather(City);