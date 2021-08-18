

interface toDoobj {
    text: string,
    id: number,
}
interface IState{
    toDos:toDoobj[]
}




    let toDos: toDoobj[] = [];
    function render() {
        const $app = document.querySelector("#todo") as HTMLDivElement;
        $app.innerHTML = `
    <form id="todo-form">
        <input type="text" placeholder="Write a To do and Press Enter" required />
    </form>
    <ul id="todo-list">
        ${toDos.map(obj =>
            `<li id=${obj.id.toString()}>
        <span>
        ${obj.text}
        </span>
        <button>"❌"</button>
        </li>
    `).join('')}
    </ul>`;
        
        const todoForm = document.querySelector<HTMLFormElement>("#todo-form") as HTMLFormElement;
        const todoInput = todoForm.querySelector<HTMLInputElement>("input") as HTMLInputElement;
        const todoList = document.querySelector<HTMLUListElement>("#todo-list") as HTMLUListElement;
        todoForm.addEventListener("submit", handleToDoSubmit);
        todoList.querySelectorAll('button').forEach(btn => btn
            .addEventListener("click", deleteTodo))
    }

    const TODOS_KEY = "todos";

    function saveTodos() {
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }
    const deleteTodo = function (this: HTMLButtonElement, event: MouseEvent) {
        const li = (event.target as HTMLButtonElement).closest('li') as HTMLLIElement;
        toDos = toDos.filter((item) => item.id !== parseInt(li.id));
        saveTodos();
        render();
    }

    const handleToDoSubmit = function (this: HTMLFormElement, event: Event) {
        event.preventDefault();
        const todoInput = (event.target as HTMLFormElement).querySelector("input") as HTMLInputElement;
        const newTodo: toDoobj = {
            text: todoInput.value,
            id: Date.now(),//Date.now로 random seed
        }
        toDos.push(newTodo); //empty todoInput.value
        todoInput.value = "";
        saveTodos();
        render();
    }


export default function Todo() {
   

    const savedtoDos = localStorage.getItem(TODOS_KEY);

    if (savedtoDos) {
        const parsedToDos = JSON.parse(savedtoDos);
        toDos = parsedToDos;
        render();
    }
    render();
}
