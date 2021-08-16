const todoform = document.getElementById("todoform")
const todolist = document.getElementById("todo-list")
const todoinput = todoform.querySelector("input")

let todos = []
const TODOS_KEY="todos"
function savetodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))

}

function deletetodo(event){
    const li = event.target.parentElement
    todos=todos.filter(todo=>todo.id!==parseInt(li.id))
    savetodos()
    li.remove()
}
 

function paintTodo(newtodoobj){
    const li = document.createElement("li")
    li.id=newtodoobj.id
    const span = document.createElement("span")
    span.innerText=newtodoobj.text
    const button = document.createElement("button")
    button.innerText="X"
    button.addEventListener("click",deletetodo)
    
    li.appendChild(span)
    li.appendChild(button)
    todolist.appendChild(li)
}


function handletodosubmit(event){
    event.preventDefault()
    const newTodo = todoinput.value
    todoinput.value=""
    const newtodoobj = {
        text:newTodo,
        id:Date.now()
    }
    todos.push(newtodoobj)
    paintTodo(newtodoobj)
    savetodos()
}

todoform.addEventListener("submit",handletodosubmit)


const saveTodos = localStorage.getItem(TODOS_KEY)
if(saveTodos !== null){
    const parseSavetodos = JSON.parse(saveTodos)
    todos=parseSavetodos
    parseSavetodos.forEach(paintTodo)
}