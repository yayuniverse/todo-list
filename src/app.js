import { newProject, moveList } from "./project";

function initializeApp() {
  const _projects = [];

  function createProject(projectName) {
    const project = newProject(projectName);
    _projects.push(project);
  }

  createProject("Default Project");

  function createTodo(projectIndex, { title, priority, notes, dueDate, state } = {}) {
    _projects[projectIndex].createList({ title, priority, notes, dueDate, state });
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

export { initializeApp };