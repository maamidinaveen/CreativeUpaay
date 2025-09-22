import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddTaskPage from "./components/AddTaskPage";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
