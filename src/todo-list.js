import { format } from "date-fns";

function createTodoList(
  title,
  // priority = "",
  // description = "",
  // notes = "",
  // checklist,
  dueDate,
  state = "not done"
) {
// convert dueDate to "Mon, 1 Month Year" format
  let [d, mm, yyyy] = dueDate.split("/");
  d = parseInt(d);
  mm = parseInt(mm) - 1;
  yyyy = parseInt(yyyy);

  dueDate = format(new Date(yyyy, mm, d), "EEEE, d MMMM y");

  return {
    title,
    // priority,
    // description,
    // notes,
    // checklist,
    dueDate,
    state,
  };
}

export { createTodoList };
