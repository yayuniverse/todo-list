import { format } from "date-fns";

function createTodoList({
  title,
  priority = "",
  description = "",
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


  
  return {
    title,
    priority,
    description,
    notes,
    dueDate,
    state,
  };
}

export { createTodoList };
