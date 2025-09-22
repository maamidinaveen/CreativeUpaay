import {
  ADD_TASK,
  MOVE_TASK,
  SET_PRIORITY_FILTER,
  SET_DUE_DATE_FILTER,
} from "./actions";

const initialState = {
  tasks: {
    todo: [
      {
        id: 2,
        title: "Buy groceries",
        status: "todo",
        priority: "Low",
        dueDate: "2025-09-22",
      },
      {
        id: 3,
        title: "Doctor appointment",
        status: "todo",
        priority: "Medium",
        dueDate: "2025-09-23",
      },
      {
        id: 6,
        title: "Call with client",
        status: "todo",
        priority: "High",
        dueDate: "2025-09-24",
      },
      {
        id: 7,
        title: "Clean the house",
        status: "todo",
        priority: "Low",
        dueDate: null,
      },
      {
        id: 10,
        title: "Plan weekend trip",
        status: "todo",
        priority: "Low",
        dueDate: "2025-09-30",
      },
      {
        id: 13,
        title: "Team stand-up meeting",
        status: "todo",
        priority: "Medium",
        dueDate: "2025-09-22",
      },
      {
        id: 15,
        title: "Backup project files",
        status: "todo",
        priority: "High",
        dueDate: "2025-09-29",
      },
    ],
    inProgress: [
      {
        id: 1,
        title: "Finish React project",
        status: "inProgress",
        priority: "High",
        dueDate: "2025-09-25",
      },
      {
        id: 5,
        title: "Prepare presentation slides",
        status: "inProgress",
        priority: "High",
        dueDate: "2025-09-28",
      },
      {
        id: 9,
        title: "Submit expense report",
        status: "inProgress",
        priority: "Medium",
        dueDate: "2025-09-27",
      },
      {
        id: 12,
        title: "Code review for PR #42",
        status: "inProgress",
        priority: "High",
        dueDate: "2025-09-26",
      },
    ],
    done: [
      {
        id: 4,
        title: "Watch JavaScript tutorial",
        status: "done",
        priority: "Low",
        dueDate: null,
      },
      {
        id: 8,
        title: "Update GitHub README",
        status: "done",
        priority: "Medium",
        dueDate: "2025-09-18",
      },
      {
        id: 11,
        title: "Renew gym membership",
        status: "done",
        priority: "Low",
        dueDate: "2025-09-15",
      },
      {
        id: 14,
        title: "Read new design article",
        status: "done",
        priority: "Low",
        dueDate: null,
      },
    ],
  },
  filters: {
    priority: "all",
    dueDate: "all",
  },
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { section, task } = action.payload;
      const updatedTasks = {
        ...state.tasks,
        [section]: [task, ...state.tasks[section]],
      };
      return { ...state, tasks: updatedTasks };
    }

    case MOVE_TASK: {
      const { from, to, taskIndex } = action.payload;
      const movedTask = state.tasks[from][taskIndex];

      const updatedFrom = state.tasks[from].filter(
        (_, idx) => idx !== taskIndex
      );

      const updatedTo = [...state.tasks[to], movedTask];

      const updatedTasks = {
        ...state.tasks,
        [from]: updatedFrom,
        [to]: updatedTo,
      };

      return { ...state, tasks: updatedTasks };
    }

    case SET_PRIORITY_FILTER:
      return {
        ...state,
        filters: { ...state.filters, priority: action.payload },
      };

    case SET_DUE_DATE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, dueDate: action.payload },
      };
    default:
      return state;
  }
};

export default tasksReducer;
