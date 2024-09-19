let WeatherObject = {
	getWeather: function() {
		let city = document.getElementById('city')
		let cityname = city.value;
	
		document.getElementById("country").innerText=city.value
	
		let temperature = document.getElementById("temperature").value;
		let temperature_sign;
		 
		let weather_url = "https://api.openweathermap.org/data/2.5/find?"
		let appid = "&appid=7d96bc5108f52b80e2d9075a369b9f35&lang=kr"
	
		let final_url = weather_url + "q=" + cityname + "&units="+ temperature + appid

		$.ajax({
			type: "GET",
			url: final_url,
		}).done(function(response) {
			
            let wdata = response.list[0]
            let exdata = response.list[0].weather[0];
        
			let icon_url = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";

			if(!temperature) temperature_sign = "°K"
			else if(temperature == "imperial") temperature_sign = "°F"
			else if(temperature == "metric") temperature_sign = "°C"
	
			temp.innerText = wdata.main.temp + temperature_sign;
			min.innerText = wdata.main.temp_min + temperature_sign;
			max.innerText = wdata.main.temp_max + temperature_sign;
			wind.innerText = wdata.wind.speed;
        
            weather.innerText = exdata.main + "," + exdata.description;
            icon.setAttribute('src', icon_url + exdata.icon + ".png");
		}).fail(function(error) {
			alert("!/weatherjquery.js에서 에러발생: " + error.statusText);
		});
	},
 }

 WeatherObject.getWeather();