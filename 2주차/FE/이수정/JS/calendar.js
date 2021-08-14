const nowdate = document.querySelector("p#calendar");

function getCalendar() {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth()+1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    nowdate.innerText = `${years}.${months}.${dates}` 
};

getCalendar();