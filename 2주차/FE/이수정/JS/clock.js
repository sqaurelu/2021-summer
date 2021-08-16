const clock = document.querySelector("p#clock");

function getClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}` 
};

getClock(); // 이걸 안쓰면 처음에는 00:00:00이 된다.
setInterval(getClock, 1000);