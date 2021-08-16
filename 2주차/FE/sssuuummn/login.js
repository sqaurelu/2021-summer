let inputTag = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

let inputId = inputTag[0];
let inputPassword = inputTag[1];

let ordinaryButton = buttonArray[0];

ordinaryButton.addEventListener('click', () => {
    if(inputId.value === "lsm@naver.com" && inputPassword.value === "snmn"){
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }
})
