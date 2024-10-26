import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router";
const MainApp = () => {
  return (
    <div className="flex gap-2 ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainApp;
