import { newProject } from "./project";

const defaultProject = newProject("project1")
defaultProject.createNewList("Pick Laundry", "High")
defaultProject.createNewList("Touch grass", "Highest")


window.defaultProject = defaultProject