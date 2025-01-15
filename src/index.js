import { initializeApp } from "./app";
import "./reset.css";
import "./global.css";

// const defaultProject = newProject("project1");
// defaultProject.createList({ title: "Pick Laundry", dueDate: "11/01/2025" });
// defaultProject.createList({ title: "Touch grass", dueDate: "14/02/2025" });

const app = initializeApp();
app.createProject("Default Project");
app.createTodo(0, { 
  title: "Pick laundry", 
  dueDate: "11/01/2025"
})
app.createTodo(0, { 
  title: "Touch grass", 
  dueDate: "14/02/2025"
})

window.app = app;

//utility functions
function addClass(element, ...className) {
  element.classList.add(...className);
}

function createElement(elementType) {
  return document.createElement(elementType);
}

export { addClass, createElement };