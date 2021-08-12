const loginform = document.querySelector('#login-form')
const logininput = loginform.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY="username"

function onLoginSubmit(event){
    event.preventDefault()
    const username = logininput.value
    loginform.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY,username)
    paintGreetings(username)
}
 
function paintGreetings(username){
    greeting.innerText="hello "+username
    greeting.classList.remove(HIDDEN_CLASSNAME)

}

const saveUsername = localStorage.getItem(USERNAME_KEY)
if(saveUsername === null){
    loginform.classList.remove(HIDDEN_CLASSNAME)
    loginform.addEventListener("submit",onLoginSubmit )     
}
else{
    paintGreetings(saveUsername)
}