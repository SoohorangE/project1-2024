# project1-2024

2024-2학기 캡스톤 프로젝트 수업

#openai


#openweathermap
서울의 현재 날씨 표시
[실습해보기](https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35)

```
function get_weather()
{
    let city = document.getElementById('city')
    let cityname = city.value;

    document.getElementById("country").innerText=city.value

    let temperature = document.getElementById("temperature").value;
    let temperature_sign;
     
    let weather_url = "https://api.openweathermap.org/data/2.5/find?"
    let appid = "&appid=7d96bc5108f52b80e2d9075a369b9f35&lang=kr"

    let final_url = weather_url + "q=" + cityname + "&units="+ temperature + appid

    // alert(final_url)
    axios.get(final_url)
    .then(function(response) {
        console.log(response.data);
        let wdata = response.data.list[0];
        let exdata = response.data.list[0].weather[0];

        if(!temperature) temperature_sign = "°K"
        else if(temperature == "imperial") temperature_sign = "°F"
        else if(temperature == "metric") temperature_sign = "°C"

        temp.innerText = wdata.main.temp + temperature_sign;
        min.innerText = wdata.main.temp_min + temperature_sign;
        max.innerText = wdata.main.temp_max + temperature_sign;
        wind.innerText = wdata.wind.speed;

        weather.innerText = exdata.main + "," + exdata.description;
        icon.setAttribute('src', icon_url + exdata.icon + ".png");
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {});
}
```

#google cloud vision
![캡처](https://github.com/user-attachments/assets/9b463231-ae78-490b-9a50-24fe8795f143)

[소스코드 및 설명](https://github.com/SoohorangE/2_1term_capstone_assignment)

