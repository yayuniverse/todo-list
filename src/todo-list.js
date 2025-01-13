import { format } from "date-fns";

function createTodoList({
  title,
  priority = "",
  notes = "",
  dueDate = "",
  state = "not done",
} = {}) {
  // convert dueDate to "Day, Day# Month Year" format
  let [d, mm, yyyy] = dueDate.split("/");
  d = parseInt(d);
  mm = parseInt(mm) - 1;
  yyyy = parseInt(yyyy);

  dueDate = format(new Date(yyyy, mm, d), "EEEE, d MMMM y");

  //internal list state
  const _list = { title, priority, notes, dueDate, state };

  //modification function
  function changeListProp(property, newValue) {
    _list[property] = newValue;
  }

  return {
    get list() {
      return { ..._list };
    },
    
    changeListProp,
  };
}

export { createTodoList };
