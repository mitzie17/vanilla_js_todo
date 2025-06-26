// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions

function addTodo(e) {
  e.preventDefault();
  // Create todo DIV where all todos will be listed, add the class 'todo'
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI for each new todo, change its innerText, and add the class 'todo-item'
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  // Append newTodo to the todoDiv
  todoDiv.appendChild(newTodo);
  // Create check mark button, insert icon as html, and add the class 'completed-btn'
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  // Append the completedButton to the todoDiv
  todoDiv.appendChild(completedButton);
  // Create trash mark button, insert icon as html, and add the class 'completed-btn'
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  // Append the trashButton to the todoDiv
  todoDiv.appendChild(trashButton);
  // Finally, append the todoDiv to the ul with the classname 'todo-list' (todoList variable, line 5)
  todoList.appendChild(todoDiv);
  // Clear todoInput
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
