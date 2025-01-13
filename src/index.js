import { newProject } from "./project";
import "./reset.css";
import "./global.css";

const defaultProject = newProject("project1");
defaultProject.createList({ title: "Pick Laundry", dueDate: "11/01/2025" });
defaultProject.createList({ title: "Touch grass", dueDate: "14/02/2025" });

window.defaultProject = defaultProject;
