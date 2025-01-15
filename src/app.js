import { newProject, moveList } from "./project";

function initializeApp() {
  const _projects = [];

  function createProject(projectName) {
    const project = newProject(projectName);
    _projects.push(project);
  }

  createProject("Default Project");

  function createTodo(projectIndex, title, priority) {
    _projects[projectIndex].createList(title, priority);
  }

  function deleteTodo(projectIndex, listIndex) {
    _projects[projectIndex].deleteList(listIndex);
  }

  function changeTodoProp(property, value, projectIndex, todoIndex) {
    _projects[projectIndex].changeListProp(property, value, todoIndex);
  }

  return {
    get projects() {
      return [..._projects];
    },

    createProject,
    createTodo,
    deleteTodo,
    changeTodoProp,
  };
}
