const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
document.getElementsByClassName
const TODOS_KEY = 'todos';

let toDos = [];

function saveTpDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // 지우고 싶은 item을 "새 배열"에 넣어준다.
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTpDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo)
    li.appendChild(span); // span을 li의 자식 요소로
    li.appendChild(button); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // Enter을 누를 때마다 빈값으로 만들고 싶을 때
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTpDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}