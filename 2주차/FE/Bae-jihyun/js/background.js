const image = document.querySelector(".image");
const images = ["fullHeart.png", "heart.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

image.appendChild(bgImage);
