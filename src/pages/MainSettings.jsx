import Settings from "./Settings.jsx";
import { Outlet } from "react-router";
const MainSettings = () => {
  return (
    <div className="w-full flex  md:flex-row flex-col gap-2">
      {/* <div className=""> */}
      <Settings />
      {/* </div> */}

      {/* <div className=" mt-14 "> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default MainSettings;
