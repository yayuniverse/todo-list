import { newProject, moveList } from "./project";
import { createTodoList } from "./todo-list";

function initializeApp() {
  const _projects = [];

  function createProject(projectName) {
    const project = newProject(projectName);
    _projects.push(project);
  }

  createProject("Default Project");

  function createList(projectIndex, title, priority) {
    _projects[projectIndex].createList(title, priority);
  }

  function deleteList(projectIndex, listIndex) {
    _projects[projectIndex].deleteList(listIndex);
  }

  return {
    get projects() {
      return [..._projects];
    },

    createProject,
    createList,
    deleteList,
  };
}
