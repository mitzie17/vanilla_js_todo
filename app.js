// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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
    // Animation
    todo.classList.add("fall");
    // Here an event listener is called so that when the transition ends, the function to remove the todo runs
    // else if remove is called outside this function then it would run almost at the same time as the transition
    // and it wouldn't be noticeable
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
