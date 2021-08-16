const loginForm = document.getElementById("name-form");
const loginInput = document.querySelector('#name-form input');
const greeting = document.querySelector('#greeting');

const HIIDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIIDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIIDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIIDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}