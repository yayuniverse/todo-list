import { createElement, addClass } from "./utilities";
// import { initializeApp } from "./app";

function createProjectTab(app, index) {
  const buttonGroup = document.querySelector(".btn-group");

  const projectTab = createElement("button");
  addClass(projectTab, "project-tab");

  const projectIcon = createElement("i");
  addClass(projectIcon, "ph-duotone", "ph-folder");

  if (index === 0) {
    addClass(projectTab, "active");
    projectIcon.classList.replace("ph-folder", "ph-folder-open");
  }

  const projectName = document.createTextNode(`${app.projects[index].name}`);
  
  projectTab.dataset.projectIndex = index
  projectTab.append(projectIcon, projectName);

  buttonGroup.append(projectTab);
}

function displayProjects(app) {
  app.projects.forEach((_, index) => createProjectTab(app, index));
}

// Creates a new todo item and displays it in the todo list
// Parameters:
// - app: contains all the projects and todos
// - projectIndex: which project the todo belongs to
// - todoIndex: which todo we're creating
// - size: whether to show the todo in 'collapsed' or 'expanded' view
function createTodoItem(app, projectIndex, todoIndex, size = "collapsed") {
  const todoList = document.querySelector(".todo-list");

  // Create the main container for the todo item
  const todoItem = createElement("div");
  addClass(todoItem, "todo-item");

  // Create the section that will hold all the todo's text content
  const todoText = createElement("div");
  addClass(todoText, "todo-text");

  // Create and set the todo's title
  const todoName = createElement("p");
  todoName.textContent =
    app.projects[projectIndex].todoLists[todoIndex].list.title;
  addClass(todoName, "todo-name");

  // Add the due date
  const todoDueDate = createElement("p");
  todoDueDate.textContent = `Due: ${app.projects[projectIndex].todoLists[todoIndex].list.dueDate}`;
  addClass(todoDueDate, "todo-due-date");

  // Add and style the priority level (High, Medium, or Low)
  const todoPriority = createElement("p");
  const priorityValue =
    app.projects[projectIndex].todoLists[todoIndex].list.priority;
  if (priorityValue) todoPriority.textContent = `※ ${priorityValue}`;
  addClass(todoPriority, "todo-priority");

  if (todoPriority.textContent === "※ High") {
    addClass(todoPriority, "high-priority");
  } else if (todoPriority.textContent === "※ Medium") {
    addClass(todoPriority, "medium-priority");
  } else if (todoPriority.textContent === "※ Low") {
    addClass(todoPriority, "low-priority");
  }

  // Add a button to mark the todo as done
  const stateSwitchButton = createElement("button");
  addClass(stateSwitchButton, "state-btn");
  stateSwitchButton.textContent = "Done";

  // If we're in expanded view, show the todo's notes too
  if (size === "expanded") {
    const todoNotes = createElement("p");
    addClass(todoNotes, "todo-notes");
    todoNotes.textContent =
      app.projects[projectIndex].todoLists[todoIndex].list.notes;

    todoText.append(todoName, todoNotes, todoDueDate, todoPriority);
  } else {
    // In collapsed view, show everything except notes
    todoText.append(todoName, todoDueDate, todoPriority);
  }

  // Put all the pieces together and add the todo to the list
  todoItem.append(todoText, stateSwitchButton);
  todoList.append(todoItem);
}

function displayTodoItems(app, projectIndex, expandedIndex = "") {
  document.querySelector(".todo-list").innerHTML = "";
  const projectTodos = app.projects[projectIndex].todoLists;
  projectTodos.forEach((_, index) => {
    if (index === expandedIndex) {
      createTodoItem(app, projectIndex, index, "expanded");
    } else {
      createTodoItem(app, projectIndex, index);
    }
  });
}

export { displayProjects, displayTodoItems };
