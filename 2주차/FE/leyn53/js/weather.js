const API_KEY = "5659a5ae0503b2afdeb2ea9af193f497";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {   
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = "현재날씨 : " + `${data.weather[0].main} / ${data.main.temp} ℃ `;
    });
}

function onGeoError(){
    alert("날씨 정보를 받으려면 \"내 위치 확인\" 권한을 허용해 주세요.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);