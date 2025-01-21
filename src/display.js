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

function createTodoItem(app, projectIndex, todoIndex, size = "collapsed") {
  const todoList = document.querySelector(".todo-list");

  const todoItem = createElement("div");
  addClass(todoItem, "todo-item");

  const todoText = createElement("div");
  addClass(todoText, "todo-text");

  const todoName = createElement("p");
  todoName.textContent =
    app.projects[projectIndex].todoLists[todoIndex].list.title;
  addClass(todoName, "todo-name");

  const todoDueDate = createElement("p");
  todoDueDate.textContent = `Due: ${app.projects[projectIndex].todoLists[todoIndex].list.dueDate}`;
  addClass(todoDueDate, "todo-due-date");

  const todoPriority = createElement("p");
  todoPriority.textContent = `※ ${app.projects[projectIndex].todoLists[todoIndex].list.priority}`;
  addClass(todoPriority, "todo-priority");

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

  // Add notes to todo item if expanded view is requested
  if (size === "expanded") {
    const todoNotes = createElement("p");
    addClass(todoNotes, "todo-notes");
    todoNotes.textContent =
      app.projects[projectIndex].todoLists[todoIndex].list.notes;

    todoText.append(todoName, todoNotes, todoDueDate, todoPriority);
  } else {
    todoText.append(todoName, todoDueDate, todoPriority);
  }

  todoItem.append(todoText, stateSwitchButton);
  todoList.append(todoItem);
}

function displayTodoItems(app, projectIndex, expandedIndex) {
  const projectTodos = app.projects[projectIndex].todoLists;
  projectTodos.forEach((_, index) => {
    if (index === expandedIndex) {
      createTodoItem(app, projectIndex, index, "expanded");
    } else {
      createTodoItem(app, projectIndex, index);
    }
  });
}

// function createExpandedTodoItem(app, projectIndex, todoIndex) {
//   createTodoItem(app, projectIndex, todoIndex);
// }

export { displayProjects, displayTodoItems };
