import "./index.css";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div className="project-container">
        <div className="image-profile-container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434351/Group_7_u7mrkk.png"
            alt="profile"
            className="profile"
          />
          <h1 className="project-name">Project M.</h1>
        </div>
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434351/Group_639_wd8urr.png"
          alt="left_arrow"
          className="left-arrow"
        />
      </div>
      <div className="options-container">
        <div className="option-container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/category_rz4hem.png"
            alt="home"
            className="category-image"
          />
          <p className="option-name">Home</p>
        </div>
        <div className="option-container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/message_s0hnxj.png"
            alt="home"
            className="category-image"
          />
          <p className="option-name">Messages</p>
        </div>
        <div className="option-container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434353/task-square_hnzirn.png"
            alt="home"
            className="category-image"
          />
          <p className="option-name">Tasks</p>
        </div>
        <div className="option-container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/profile-2user_sjr1mu.png"
            alt="home"
            className="category-image"
          />
          <p className="option-name">Members</p>
        </div>
        <div className="option-container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434353/setting-2_bice6z.png"
            alt="home"
            className="category-image"
          />
          <p className="option-name">Settings</p>
        </div>
      </div>
      <hr className="line" />
      <div className="my-projects-container">
        <div className="projects-heading-container">
          <h3 className="myprojects-heading">MY PROJECTS</h3>
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/add-square_zgstcw.png"
            alt="plus"
            className="plus-icon"
          />
        </div>
        <div className="project-name-container">
          <div className="project-name-image-container">
            <img
              src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_8_bnkfel.png"
              alt="ellipse"
              className="ellipse"
            />
            <h1 className="project-name">Mobile App</h1>
          </div>
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/_.._hnt2xr.png"
            alt="thee-dots"
            className="three-dots-icon"
          />
        </div>
        <div className="project-name-image-container container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_9_o0b1hl.png"
            alt="ellipse"
            className="ellipse"
          />
          <h1 className="name">Website Redesign</h1>
        </div>
        <div className="project-name-image-container container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_10_gdt6sm.png"
            alt="ellipse"
            className="ellipse"
          />
          <h1 className="name">Design System</h1>
        </div>
        <div className="project-name-image-container container">
          <img
            src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434349/Ellipse_11_1_qjvsed.png"
            alt="ellipse"
            className="ellipse"
          />
          <h1 className="name">Wireframes</h1>
        </div>
        <div className="footer-card">
          <div className="lamp-container">
            <img
              src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434351/lamp-on_ggk4fo.png"
              alt="lamp"
              className="lamp-image"
            />
          </div>
          <h2 className="footer-name">Thoughts Time</h2>
          <p className="description">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <h3 className="write-message">Write a message</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
