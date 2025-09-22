import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter";
import TaskCard from "../TaskCard";
import "./index.css";

const Content = () => {
  const tasks = useSelector((state) => state.tasks);

  const navigate = useNavigate();

  const filters = useSelector((state) => state.filters);

  const filterTasks = (taskList) => {
    let filtered = [...taskList];

    if (filters.priority !== "all") {
      filtered = filtered.filter(
        (task) => task.priority.toLowerCase() === filters.priority.toLowerCase()
      );
    }

    if (filters.dueDate !== "all") {
      const today = new Date();
      const startOfToday = new Date(today.setHours(0, 0, 0, 0));

      filtered = filtered.filter((task) => {
        if (!task.dueDate) return false;

        const due = new Date(task.dueDate);

        switch (filters.dueDate) {
          case "today":
            return due.toDateString() === new Date().toDateString();

          case "tomorrow":
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return due.toDateString() === tomorrow.toDateString();

          case "this week":
            const startOfWeek = new Date(startOfToday);
            const endOfWeek = new Date(startOfToday);
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
            endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
            return due >= startOfWeek && due <= endOfWeek;

          case "overdue":
            return due < startOfToday;

          default:
            return true;
        }
      });
    }

    return filtered;
  };

  const filteredTodo = filterTasks(tasks.todo);
  const filteredInProgress = filterTasks(tasks.inProgress);
  const filteredDone = filterTasks(tasks.done);

  return (
    <div className="content-container">
      <div className="content-header-container">
        <div className="content-header">
          <h1 className="content-heading">Mobile App</h1>
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/arrow-square-up_qq4s9i.png"
            alt="arrow-square-up"
            className="arrow-square-up"
          />
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758450819/link_1_bvyz3z.png"
            alt="link"
            className="link"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758450429/Group_646_vbs7qc.png"
          alt="group"
        />
      </div>

      <div className="filter-header-container">
        <Filter />
        <div className="filter-right-side-container">
          <div className="share-container">
            <img
              src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/profile-2user_sjr1mu.png"
              alt="share"
              className="share-icon"
            />
            <p className="share-text">Share</p>
          </div>
          <hr className="center-line" />
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758453924/blue-icon_yzj4hw.png"
            alt="blue-icon"
            className="blue-icon"
          />
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758454104/menu_suaxra.png"
            alt="menu"
          />
        </div>
      </div>

      <div className="tasks-cards-container">
        <div className="task-container">
          <div className="task-name-container">
            <div className="icon-name-container">
              <img
                src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_11_1_qjvsed.png"
                alt="ellipse"
                className="ellipse"
              />
              <h1 className="task-name">To Do</h1>
              <p className="count">{filteredTodo.length}</p>
            </div>
            <img
              src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758459663/2_add_square_hi7ivf.png"
              alt="add-square"
              className="add-square"
              onClick={() => navigate("/add-task")}
            />
          </div>
          <hr className="seperator" />
          {filteredTodo.map((each) => (
            <TaskCard key={each.id} task={each} />
          ))}
        </div>

        <div className="task-container">
          <div className="task-name-container">
            <div className="icon-name-container">
              <img
                src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_9_o0b1hl.png"
                alt="ellipse"
                className="ellipse"
              />
              <h1 className="task-name">On Progress</h1>
              <p className="count">{filteredInProgress.length}</p>
            </div>
          </div>
          <hr className="seperator yellow" />
          {filteredInProgress.map((each) => (
            <TaskCard key={each.id} task={each} />
          ))}
        </div>

        <div className="task-container">
          <div className="task-name-container">
            <div className="icon-name-container">
              <img
                src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_11_wv2bka.png"
                alt="ellipse"
                className="ellipse"
              />
              <h1 className="task-name">Done</h1>
              <p className="count">{filteredDone.length}</p>
            </div>
          </div>
          <hr className="seperator green" />
          {filteredDone.map((each) => (
            <TaskCard key={each.id} task={each} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
