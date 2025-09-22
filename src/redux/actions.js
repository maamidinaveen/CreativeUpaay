export const ADD_TASK = "ADD_TASK";
export const MOVE_TASK = "MOVE_TASK";
export const SET_PRIORITY_FILTER = "SET_PRIORITY_FILTER";
export const SET_DUE_DATE_FILTER = "SET_DUE_DATE_FILTER";

export const addTask = (section, task) => ({
  type: ADD_TASK,
  payload: { section, task },
});

export const moveTask = (from, to, taskIndex) => ({
  type: MOVE_TASK,
  payload: { from, to, taskIndex },
});

export const setPriorityFilter = (priority) => ({
  type: SET_PRIORITY_FILTER,
  payload: priority,
});

export const setDueDateFilter = (dueDate) => ({
  type: SET_DUE_DATE_FILTER,
  payload: dueDate,
});
