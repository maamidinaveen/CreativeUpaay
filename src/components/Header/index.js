import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-input-container">
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758448254/search-normal_dhvntt.png"
          alt="searcg"
          className="search-icon"
        />
        <input
          type="search"
          className="input-search"
          placeholder="Search for anything..."
        />
      </div>
      <div className="icon-continer">
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/calendar-2_w9g9zu.png"
          alt="icon"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/message-question_h07crn.png"
          alt="icon"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/notification_azhyqm.png"
          alt="icon"
          className="header-icon"
        />
      </div>
      <div className="details-image-container">
        <div className="details-container">
          <h3 className="name">Palak Jain</h3>
          <p className="location">Rajathan, India</p>
        </div>
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434352/Mask_Group_t5xyjc.png"
          alt="profile-name"
          className="profile-img"
        />
        <img
          src="https://res.cloudinary.com/dxsq3yesd/image/upload/v1758434348/arrow-down_uckdr3.png"
          alt="down-arrow"
          className="down-arrow"
        />
      </div>
    </div>
  );
};

export default Header;
