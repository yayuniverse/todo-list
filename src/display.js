import { createElement, addClass } from "./utilities";
// import { initializeApp } from "./app";

function createProjectTab(app, index) {
  const buttonGroup = document.querySelector(".btn-group");
  const projectTab = createElement("button");
  addClass(projectTab, "project-tab");
  projectTab.textContent = `📁 ${app.projects[index].name}`;
  buttonGroup.append(projectTab);
}

function displayProjects(app) {
  app.projects.forEach((_, index) => createProjectTab(app, index));
}

function createTodoItem(app, projectIndex, todoIndex) {
  const todoList = document.querySelector(".todo-list");

  const todoItem = createElement("div");
  addClass(todoItem, "todo-item");

  const todoText = createElement("div");
  addClass(todoText, "todo-text");

  const todoName = createElement("p");
  todoName.textContent =
    app.projects[projectIndex].todoLists[todoIndex].list.title;
  const todoDueDate = createElement("p");
  todoDueDate.textContent = `Due: ${app.projects[projectIndex].todoLists[todoIndex].list.dueDate}`;
  const todoPriority = createElement("p");
  todoPriority.textContent = `※ ${app.projects[projectIndex].todoLists[todoIndex].list.priority}`;

  if (todoPriority.textContent === "※ High") {
    addClass(todoPriority, "high-priority");
  } else if (todoPriority.textContent === "※ Medium") {
    addClass(todoPriority, "medium-priority");
  } else if (todoPriority.textContent === "※ Low") {
    addClass(todoPriority, "low-priority");
  }

  const stateSwitchButton = createElement("button");
  addClass(stateSwitchButton, "state-btn");
  stateSwitchButton.textContent = "Done";

  todoText.append(todoName, todoDueDate, todoPriority);
  todoItem.append(todoText, stateSwitchButton);
  todoList.append(todoItem);
}

function displayTodoItems(app, projectIndex) {
  const projectTodos = app.projects[projectIndex].todoLists;
  projectTodos.forEach((_, todoIndex) =>
    createTodoItem(app, projectIndex, todoIndex)
  );
}

export { displayProjects, displayTodoItems };
