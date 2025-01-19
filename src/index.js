import { initializeApp } from "./app";
import { displayProjects, displayTodoItems } from "./display";

import "./reset.css";
import "./global.css";

const app = initializeApp();

app.createTodo(0, {
  title: "Create first todo item",
  dueDate: "15/02/2025"
});

app.createProject("Work Tasks");

app.createTodo(1, {
  title: "Weekly Report",
  priority: "High",
  dueDate: "18/12/2023"
});

app.createTodo(1, {
  title: "Team Meeting",
  priority: "Medium", 
  dueDate: "19/12/2023"
});

app.createTodo(1, {
  title: "Review Documentation",
  priority: "Low",
  dueDate: "20/12/2023"
});

displayProjects(app);

displayTodoItems(app, 1)

window.app = app;

