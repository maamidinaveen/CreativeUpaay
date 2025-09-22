import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AddTaskPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("todo");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      status,
      priority,
      dueDate: dueDate || null,
    };

    dispatch(addTask(status, newTask));

    setTitle("");
    setPriority("Low");
    setStatus("todo");
    setDueDate("");
    navigate("/");
  };

  return (
    <div className="add-task-page">
      <h2>Add New Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>

        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskPage;
