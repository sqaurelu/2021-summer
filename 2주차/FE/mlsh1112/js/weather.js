 const API_KEY = 'a242c43500287aefe950f6e82ff6c4cb'
 
 function onGeoOk(poisition){
    console.log(poisition.coords.latitude)
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+poisition.coords.latitude+'&lon='+poisition.coords.longitude+'&appid='+API_KEY
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const name= document.querySelector("#weather span:last-child")
        weather.innerText = data.weather[0].main
        name.innerText = data.name
    })
    .catch(err=>console.log(err))
 }

 function onGeoError(){
    alert("Can't find you")
 }

 navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)