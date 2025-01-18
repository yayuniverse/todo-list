import { initializeApp } from "./app";
import { displayProjects, displayTodoItems } from "./display";

import "./reset.css";
import "./global.css";

const app = initializeApp();

app.createTodo(0, {
  title: "Learn JavaScript",
  priority: "high",
  dueDate: "15/12/2023"
});

app.createProject("Work Tasks");

app.createTodo(1, {
  title: "Weekly Report",
  priority: "high",
  dueDate: "18/12/2023"
});

app.createTodo(1, {
  title: "Team Meeting",
  priority: "medium", 
  dueDate: "19/12/2023"
});

displayProjects(app);

displayTodoItems(app, 1)

window.app = app;

