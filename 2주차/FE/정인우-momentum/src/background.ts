export default function bgImage() {
    const images: string[] = ["a.jpeg", "b.jpeg", "c.jpeg", "0.jpeg", "1.jpeg", "2.jpeg"]
    const todaysimage: string = images[Math.floor(Math.random() * images.length)];
    const img = document.createElement('img');
    img.src = `img/${todaysimage}`;
    document.body.appendChild(img);
}
