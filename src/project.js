function newProject(name) {
  const todoLists = [];

  function createNewList(title, priority) {
    const newList = { title, priority };
    todoLists.push(newList);
  }

  function deleteList(index) {
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