 


    
    const loginInput = document.querySelector<HTMLInputElement>("#login-form input") as HTMLInputElement;
    const greeting = document.querySelector<HTMLHeadingElement>("#greeting") as HTMLHeadingElement;
export default function Greeting() {

    const HIDDEN_CLASSNAME: string = "hidden"; 
    const USERNAME_KEY: string = 'username';
    const $login = document.querySelector('#login') as HTMLDivElement;
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    const username: string = localStorage.getItem(USERNAME_KEY) as string;

    const render = () => {
        $login.innerHTML = `
        <form id="login-form" ${savedUsername? `class="hidden"`: "" }  >
            <input
            required
            maxlength = "15"
            type = "text"
            placeholder = "What is your name?"
            />
            <input type="submit" value = "log in" />
        </form>
        <h1 id="greeting" ${savedUsername ? ""  : `class="hidden"`} >
        ${savedUsername? `Hello ${username}`:""}
        </h1>
        `
        const loginForm = $login.querySelector('#login-form') as HTMLFormElement;
        loginForm.addEventListener("submit", onLoginSubmit);
     
      
    }
  
    function onLoginSubmit(event: Event) {
        event.preventDefault(); //event의 기본 행동을 방지함
        (event.target as HTMLFormElement).classList.add(HIDDEN_CLASSNAME);
        const loginInput = $login.querySelector('input') as HTMLInputElement;
        const username: string = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);// 백틱임!!!!! 1 왼쪽에 있는거 
        render();
    
    }
    render();
}

    //eventListner로 호출하는 함수는 default event 객체를 매개변수로 호출한다
    // eventListner로 함수를 주면 자바스크립트가 함수를 실행시키는 것
    //이때 매개변수인 이벤트 객체로 이벤트의 조건을 막거나 변경할 수 있음
