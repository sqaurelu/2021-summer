const clock = document.querySelector<HTMLDivElement>("#clock") as HTMLDivElement;

function getClock() {
    
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `
    <h2 id="clock">${hours}:${minutes}:${seconds}</h2>`;
}
export default function Clock() {
    getClock();
    setInterval<[void]>(getClock, 1000);
}

