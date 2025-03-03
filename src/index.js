import { initializeApp } from "./app";
import { addClass } from "./utilities";
import { displayProjects, displayAllTodoItems, newProjectDialog, makeTabsInteractive } from "./display";

import "@phosphor-icons/web/duotone";
import "@phosphor-icons/web/fill";
import "@phosphor-icons/web/bold";
import "@phosphor-icons/web/regular";
import "./reset.css";
import "./global.css";

const app = initializeApp();

app.createProject("Work Tasks");

app.createTodo(0, {
  title: "Create first todo item",
  dueDate: "15/02/2025",
});

displayAllTodoItems(app, 0)

app.createTodo(1, {
  title: "Weekly Report",
  priority: "High",
  dueDate: "18/12/2023",
  notes: "Include sales metrics and team performance stats",
});

app.createTodo(1, {
  title: "Team Meeting",
  priority: "Medium",
  dueDate: "19/12/2023",
  notes: "Discuss project updates and deadlines",
});

app.createTodo(1, {
  title: "Review Documentation",
  priority: "Low",
  dueDate: "20/12/2023",
  notes: "Focus on API documentation and user guides",
});

displayProjects(app);
makeTabsInteractive(app)

document.querySelector(".new-project-btn").addEventListener("click", () => {
  newProjectDialog(app)
})