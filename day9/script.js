const api = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const todoList = document.getElementById("todoList");

async function fetchTodos() {

    const response = await fetch(api);
    const todos = await response.json();

    displayTodos(todos);
}

function displayTodos(todos){

    todoList.innerHTML = "";

    todos.forEach(todo=>{

        const div=document.createElement("div");
        div.className="todo";

        div.innerHTML=`
            <span class="${todo.completed ? 'completed' : ''}">
                ${todo.title}
            </span>

            <button onclick="markCompleted(${todo.id}, this)">
                ${todo.completed ? "Completed" : "Complete"}
            </button>
        `;

        todoList.appendChild(div);

    });

}

async function markCompleted(id, button){

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                completed:true
            })
        }
    );

    const data = await response.json();

    button.previousElementSibling.classList.add("completed");
    button.innerText="Completed";
    button.disabled=true;

    console.log(data);

}

fetchTodos();