const images = ["0.jpg","1.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgimg=document.createElement("img")
const imageUrl = 'img/'+chosenImage
bgimg.src='img/'+chosenImage//"background-image: url("+imageUrl+")"
bgimg.style='width:1000px'
//'img/'+chosenImage

document.body.appendChild(bgimg)