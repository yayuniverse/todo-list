import { createTodoList } from "./todo-list";

function newProject(name) {
  let _name = name;
  const _todoLists = [];

  function createNewList(title, priority) {
    const newList = createTodoList(title, priority);
    _todoLists.push(newList);
  }

  function deleteList(index) {
    // console.log(`${_todoLists[index].title} deleted`)
    _todoLists.splice(index, 1);
  }

  return {
    get name() {
      return _name;
    },

    set name(value) {
      this._name = value;
    },

    createNewList,
    deleteList,

    get todoLists() {
      return [..._todoLists];
    },
  };
}

export { newProject };
