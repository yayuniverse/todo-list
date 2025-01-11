import { createTodoList } from "./todo-list";

function newProject(name) {
  const todoLists = [];

  function createNewList(title, priority) {
    const newList = createTodoList(title, priority);
    todoLists.push(newList);
  }

  function deleteList(index) {
    // console.log(`${todoLists[index].title} deleted`)
    todoLists.splice(index, 1);
  }

  return {
    name,
    createNewList,
    deleteList,

    get todoLists() {
      return [...todoLists];
    },
  };
}

export { newProject };