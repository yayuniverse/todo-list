import { initializeApp } from "./app";
import { displayProjects } from "./display";

import "./reset.css";
import "./global.css";

const app = initializeApp();
// app.createProject("Default Project");
// app.createTodo(0, { 
//   title: "Pick laundry", 
//   dueDate: "11/01/2025"
// })
// app.createTodo(0, { 
//   title: "Touch grass", 
//   dueDate: "14/02/2025"
// })

window.app = app;

displayProjects(app)