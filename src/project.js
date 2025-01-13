import { createTodoList } from "./todo-list";

function newProject(name) {
  const _todoLists = [];
  let _name = name;

  function createNewList(title, priority) {
    const newList = createTodoList(title, priority);
    _todoLists.push(newList);
  }

  function deleteList(index) {
    // console.log(`${_todoLists[index].title} deleted`)
    _todoLists.splice(index, 1);
  }

  return {
    createNewList,
    deleteList,

    get todoLists() {
      return [..._todoLists];
    },

    get name() {
      return _name;
    },

    set name(value) {
      this._name = value;
    },
  };
}

export { newProject };
