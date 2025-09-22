import "./index.css";

const TaskCard = (props) => {
  const { task } = props;
  const { title, status, priority, dueDate } = task;

  return (
    <div className="task-card">
      <div className="top-container">
        <p className="priority">{priority}</p>
        <p className="dots">...</p>
      </div>
      <h1 className="task-title">{title}</h1>
      <p className="task-description">
        Brainstorming brings team members' diverse experience into play.{" "}
      </p>
      <div className="group-container">
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434350/Group_633_bejz1q.png"
          alt="group"
          className="avatar-icon"
        />
        <div className="numbers-container">
          <div className="num-container">
            <img
              src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/message_s0hnxj.png"
              alt="message"
              className="message-icon"
            />
            <p className="message-count">12 comments</p>
          </div>
          <div className="num-container">
            <img
              src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758461069/Group_628_sfo010.png"
              alt="message"
              className="message-icon"
            />
            <p className="message-count">0 files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
