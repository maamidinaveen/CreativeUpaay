import { legacy_createStore as createStore } from "redux";
import tasksReducer from "./reducer";

let persistedState;
try {
  const stored = localStorage.getItem("tasksState");
  persistedState = stored ? JSON.parse(stored) : undefined;
} catch (e) {
  console.error("Failed to load persisted state:", e);
  persistedState = undefined;
}

const store = createStore(
  tasksReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  try {
    localStorage.setItem("tasksState", JSON.stringify(store.getState()));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
});

export default store;
