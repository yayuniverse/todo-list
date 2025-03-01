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

  projectTab.dataset.projectIndex = index;
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
function createTodoItem(app, projectIndex, todoIndex) {
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
  todoDueDate.textContent = `${app.projects[projectIndex].todoLists[todoIndex].list.dueDate}`;
  addClass(todoDueDate, "todo-due-date");

  // Add and style the priority level (High, Medium, or Low)
  const todoPriority = createElement("p");
  const priorityValue =
    app.projects[projectIndex].todoLists[todoIndex].list.priority;
  if (priorityValue) todoPriority.textContent = `※ ${priorityValue}`;
  else todoPriority.textContent = "※";
  addClass(todoPriority, "todo-priority");

  if (todoPriority.textContent === "※ High") {
    addClass(todoPriority, "high-priority");
  } else if (todoPriority.textContent === "※ Medium") {
    addClass(todoPriority, "medium-priority");
  } else if (todoPriority.textContent === "※ Low") {
    addClass(todoPriority, "low-priority");
  }

  const todoDueDatePlusPriority = createElement("span");
  addClass(todoDueDatePlusPriority, "due-date-priority");
  if (todoPriority.textContent === "※") {
    addClass(todoDueDatePlusPriority, "no-priority");
  }
  todoDueDatePlusPriority.append(todoPriority, todoDueDate);

  // Add a button to mark the todo as done
  const stateSwitchButton = createElement("button");
  addClass(stateSwitchButton, "state-btn");
  stateSwitchButton.textContent = "Done";

  // Add all elements to the todo item
  todoText.append(todoName, todoDueDatePlusPriority);

  // Put all the pieces together and add the todo to the list
  todoItem.append(todoText, stateSwitchButton);
  todoList.append(todoItem);
}

function displayTodoItems(app, projectIndex) {
  document.querySelector(".todo-list").innerHTML = "";
  const projectTodos = app.projects[projectIndex].todoLists;
  projectTodos.forEach((_, index) => {
    createTodoItem(app, projectIndex, index);
  });
}

function displayTodoDialog(app, projectIndex, todoIndex) {
  const dialog = createElement("dialog")
  
  const title = createElement("h2")
  title.textContent = app.projects[projectIndex].todoLists[todoIndex].list.title;
  addClass(title, "title-expanded")

  const notes = createElement("p");
  notes.textContent = `${app.projects[projectIndex].todoLists[todoIndex].list.notes || "No notes"}`;
  addClass(notes, "notes-expanded");

  const dueDate = createElement("p");
  const dueDateIcon = createElement("i");
  addClass(dueDateIcon, "ph-duotone", "ph-calendar");
  dueDate.textContent = ` Due ${app.projects[projectIndex].todoLists[todoIndex].list.dueDate}`;
  dueDate.prepend(dueDateIcon);
  addClass(dueDate, "due-date-expanded")

  const priority = createElement("p");
  const priorityValue = app.projects[projectIndex].todoLists[todoIndex].list.priority;
  const priorityIcon = createElement("i");
  addClass(priorityIcon, "ph-duotone", "ph-flag");
  priority.textContent = ` ${priorityValue || "No"} priority`;
  priority.prepend(priorityIcon);
  addClass(priority, "priority-expanded")
  
  if (priorityValue === "High") {
    addClass(priority, "high-priority");
    priorityIcon.classList.add("high-priority");
  } else if (priorityValue === "Medium") {
    addClass(priority, "medium-priority");
    priorityIcon.classList.add("medium-priority");
  } else if (priorityValue === "Low") {
    addClass(priority, "low-priority");
    priorityIcon.classList.add("low-priority");
  }
  
  const state = createElement("p");
  const stateIcon = createElement("i");
  addClass(stateIcon, "ph-duotone", "ph-check-circle");
  state.textContent = ` ${app.projects[projectIndex].todoLists[todoIndex].list.state}`;
  state.prepend(stateIcon);
  addClass(state, "state-expanded")
  
  const closeButton = createElement("button")
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    dialog.close();
  })
  
  dialog.append(title, notes, dueDate, priority, state, closeButton);
  document.body.appendChild(dialog)
  dialog.showModal()
}

function unstyleProjectTabs(projectTabs) {
  projectTabs.forEach((tab) => {
    tab.classList.remove("active");
    const tabIcon = tab.querySelector("i");
    tabIcon.className = "";
    addClass(tabIcon, "ph-duotone", "ph-folder");
  });
}

function makeTabsInteractive(projectTabs, app) {
  projectTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      unstyleProjectTabs(projectTabs);
      tab.classList.add("active");
      const tabIcon = tab.querySelector("i");
      addClass(tabIcon, "ph-duotone", "ph-folder-open");
      const tabProjectIndex = parseInt(tab.dataset.projectIndex);
      displayTodoItems(app, tabProjectIndex);
    });
  });
}
export { displayProjects, displayTodoItems, displayTodoDialog, unstyleProjectTabs, makeTabsInteractive };
