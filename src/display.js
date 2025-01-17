import { createElement, addClass } from "./utility";
// import { initializeApp } from "./app";

function createProjectTab(app, index) {
  const buttonGroup = document.querySelector('.btn-group')
  const projectTab = createElement('button')
  addClass(projectTab, "project-tab")
  projectTab.textContent = `📁 ${app.projects[index].name}`
  buttonGroup.append(projectTab)
}

function displayProjects(app) {
  app.projects.forEach((project, index) => createProjectTab(app, index))
}

export { displayProjects }