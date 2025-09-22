import { useDispatch, useSelector } from "react-redux";

import { setPriorityFilter, setDueDateFilter } from "../../redux/actions";

import "./index.css";

const Filter = () => {
  const dispatch = useDispatch();
  const priority = useSelector((state) => state.filters.priority);
  const dueDate = useSelector((state) => state.filters.dueDate);

  const handlePriorityChange = (e) => {
    console.log(e.target.value);
    dispatch(setPriorityFilter(e.target.value));
  };

  const handleDueDate = (e) => {
    dispatch(setDueDateFilter(e.target.value));
  };

  return (
    <div className="filters-container">
      <div className="filter-selection-container">
        <div className="category-filter-container">
          <label className="label">Priority</label>
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758451520/filter_xko4vd.png"
            alt="filter"
            className="filter-icon"
          />
          <select
            className="selection-container"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="all">ALL</option>
            <option value="Low">LOW</option>
            <option value="Medium">MEDIUM</option>
            <option value="High">HIGH</option>
          </select>
        </div>
        <div className="category-filter-container due-container">
          <label className="label">Due Date</label>
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/calendar-2_w9g9zu.png"
            alt="filter"
            className="filter-icon"
          />
          <select
            className="selection-container due-container"
            value={dueDate}
            onChange={handleDueDate}
          >
            <option value="all">ALL</option>
            <option value="today">TODAY</option>
            <option value="tomorrow">TOMORROW</option>
            <option value="this week">THIS WEEK</option>
            <option value="overdue">OVERDUE</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
