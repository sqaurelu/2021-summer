function onGeoOK(position:GeolocationPosition): void {
    console.log(position);
    const lat:number = position.coords.latitude;
    const lon:number = position.coords.longitude; //onGeoOk는 success함수로 GeoLocationPosition을 매개변수로 받음(사용자 위치)
    const url:string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    const $weather = document.querySelector('#weather') as HTMLDivElement;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            $weather.innerHTML = `
                <span>${data.weather[0].main}/${data.main.temp}C</span>
                <span>${data.name}</span>
            `
    });
}

const API_KEY:string = "62f27fd8cff1aa3ca7a71b8c520163be"



function onGeoError():void {
    alert("Can't find you. No weather available")
}

export default function weather() {
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
}