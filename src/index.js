import { newProject } from "./project";
import "./reset.css"
import "./global.css"

const defaultProject = newProject("project1")
defaultProject.createNewList("Pick Laundry", "11/01/2025")
defaultProject.createNewList("Touch grass", "14/02/2025")


window.defaultProject = defaultProject