import { createTodoList } from "./todo-list";

function newProject(name) {
  let _name = name;
  const _todoLists = [];

  function createList({
    title,
    priority,
    notes,
    dueDate,
    state,
  } = {}) {
    const newList = createTodoList(
      ({
        title,
        priority,
        notes,
        dueDate,
        state,
      })
    );
    _todoLists.push(newList);
  }

  function deleteList(index) {
    // console.log(`${_todoLists[index].title} deleted`)
    _todoLists.splice(index, 1);
  }

  // function cutListItem(index) {
  //   const removedTodoArray = _todoLists.splice(index, 1);
  //   return removedTodoArray[0];
  // }

  // function pasteListItem(list) {
  //   _todoLists.push(list);
  // }

  function changeListProp(property, newValue, todoIndex) {
    _todoLists[todoIndex].changeProp(property, newValue);
  }

  return {
    get name() {
      return _name;
    },

    set name(value) {
      _name = value;
    },
    
    get todoLists() {
      return [..._todoLists];
    },

    createList,
    deleteList,
    // cutListItem,
    // pasteListItem,
    changeListProp,
  };
}

// function moveList(index, sourceProject, destinationProject) {
//   destinationProject.pasteListItem(sourceProject.cutListItem(index));
// }

export { newProject };
