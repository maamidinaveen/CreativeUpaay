import SideBar from "../SideBar";
import Header from "../Header";
import Content from "../Content";

import "./index.css";

const Home = () => {
  return (
    <div className="bg-container">
      <div className="app-container">
        <SideBar />
        <div className="header-content-container">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;
