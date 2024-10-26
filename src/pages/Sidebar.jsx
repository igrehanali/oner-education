// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// import dash from "../../public/icons/dashboard.png";
// import dash2 from "../../public/icons/dashboardselected.png";
// import Application from "../../public/icons/Application.png";
// import Application2 from "../../public/icons/Applicationselected2.png";
// import users from "../../public/icons/users.png";
// import users2 from "../../public/icons/userselected.png";
// import settings from "../../public/icons/settings.png";
// import settings2 from "../../public/icons/settingsselected.png";
// import logo from "../../public/icons/logouni.png";
// import logout from "../../public/icons/logout.png";
// import payment from "../../public/icons/payment.png";
// import payment2 from "../../public/icons/paymentselected.png";
// import document from "../../public/icons/document.png";
// import document2 from "../../public/icons/documentselected.png";
// const Sidebar = () => {
//   const [detailsPopup, setDetailsPopup] = useState(false);

//   const [selectedOption, setSelectedOption] = useState("option1");

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const iconForOption1 = selectedOption === "option1" ? dash2 : dash;
//   const iconForOption2 = selectedOption === "option2" ? users2 : users;
//   const iconForOption3 =
//     selectedOption === "option3" ? Application2 : Application;
//   const iconForOption4 = selectedOption === "option4" ? payment2 : payment;
//   const iconForOption5 = selectedOption === "option5" ? document2 : document;

//   const iconForOption6 = selectedOption === "option6" ? settings2 : settings;

//   const iconForOption7 = selectedOption === "option7" ? logout : logout;
//   return (
//     <div className=" md:h-screen h- w-[80px] flex flex-col relative shadow-xl bg-[#561f6f] ">
//       <div className="flex justify-between  ml-3 ">
//         <img src={logo} className="h-[27.91px] w-[37.78px]  mt-2 " />
//       </div>
//       <ul className="flex flex-col gap-y-4 mt-10 px-3">
//         <NavLink
//           to="/app/Dashboard"
//           className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ${
//             selectedOption === "option1"
//               ? "font-medium bg-white w-[48px] h-[45px] rounded-lg "
//               : "h-[45px] w-[50px]"
//           }`}
//           onClick={() => handleOptionClick("option1")}
//         >
//           <img src={iconForOption1} className="h-[24px] w-[40px]" />
//         </NavLink>

//         <NavLink
//           to="/app/Users"
//           className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ${
//             selectedOption === "option2"
//               ? "font-medium  bg-white  w-[48px] h-[45px]  rounded-lg "
//               : " w-[50px] h-[45px]"
//           }`}
//           onClick={() => handleOptionClick("option2")}
//         >
//           <img src={iconForOption2} className="h-[24px] w-[50px]" />
//         </NavLink>

//         <NavLink
//           to="/app/Services"
//           className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ${
//             selectedOption === "option3"
//               ? "font-medium  w-[48px] h-[45px]  bg-white rounded-lg "
//               : "w-[50px] h-[45px]"
//           }`}
//           onClick={() => handleOptionClick("option3")}
//         >
//           <img src={iconForOption3} className="w-[50px] h-[24px]" />
//         </NavLink>

//         <NavLink
//           to="/app/Payments"
//           className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ${
//             selectedOption === "option4"
//               ? "font-medium  w-[48px] h-[45px]  bg-white rounded-lg "
//               : " w-[50px] h-[45px]"
//           }`}
//           onClick={() => handleOptionClick("option4")}
//         >
//           <img src={iconForOption4} className=" w-[50px] h-[24px]" />
//         </NavLink>

//         <NavLink
//           to="/app/Document"
//           className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ${
//             selectedOption === "option5"
//               ? "font-medium  w-[48px] h-[45px]  bg-white rounded-lg "
//               : " w-[50px] h-[45px]"
//           }`}
//           onClick={() => handleOptionClick("option5")}
//         >
//           <img src={iconForOption5} className=" w-[50px] h-[24px]" />
//         </NavLink>

//         <NavLink
//           to="/app/MainSettings"
//           className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ${
//             selectedOption === "option6"
//               ? "font-medium w-[48px] h-[45px]  bg-white rounded-lg "
//               : "h-[44px] w-[50px]"
//           }`}
//           onClick={() => handleOptionClick("option6")}
//         >
//           <img src={iconForOption6} className="h-[24px] w-[50px]" />
//         </NavLink>

//         <div className="flex items-center gap-4 py-3 px-3 cursor-pointer text-sm md:text-lg font-normal rounded-lg transition-all duration-300 ">
//           <img
//             src={iconForOption7}
//             className="h-[38px] w-[41px]  left-3 absolute bottom-4 "
//             onClick={() => setDetailsPopup(true)}
//           />
//         </div>
//       </ul>

//       {detailsPopup && (
//         <div className=" fixed top-0 left-0 inset-0 bg-black/40 w-full h-screen   flex justify-center items-center">
//           <div className=" bg-white w-[456px] h-[357px] rounded-2xl px-2 py-1 ">
//             <div className="flex flex-col justify-center items-center p-4 gap-0">
//               <h1 className="text-[#222222] font-bold text-[25.5px]">
//                 Log Out
//               </h1>
//               <p className="text-[19.5px] pt-4">
//                 Are you sure you wanted to log out?
//               </p>
//               <button
//                 className="w-[388px] h-[61px] font-semibold text-[25.5px] rounded-3xl border border-[#571f6f] hover:bg-white hover:text-[#571f6f] bg-[#571f6f] text-white mt-7"
//                 onClick={() => setDetailsPopup(false)}
//               >
//                 No
//               </button>
//               <NavLink to="/">
//                 <button className="w-[388px] h-[61px] font-semibold text-[25.5px] rounded-3xl border border-[#571f6f] text-[#571f6f] hover:bg-[#571f6f] hover:text-white mt-7">
//                   Yes
//                 </button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import { useState } from "react";

import dash from "../../public/icons/dashboard.png";
import dash2 from "../../public/icons/dashboardselected.png";
import Application from "../../public/icons/Application.png";
import Application2 from "../../public/icons/Applicationselected2.png";
import users from "../../public/icons/users.png";
import users2 from "../../public/icons/userselected.png";
import settings from "../../public/icons/settings.png";
import settings2 from "../../public/icons/settingsselected.png";
import logo from "../../public/icons/logouni.png";
import logout from "../../public/icons/logout.png";
import payment from "../../public/icons/payment.png";
import payment2 from "../../public/icons/paymentselected.png";
import document from "../../public/icons/document.png";
import document2 from "../../public/icons/documentselected.png";

const Sidebar = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSidebarOpen(false); // Close sidebar when an option is clicked on mobile
  };

  const iconForOption1 = selectedOption === "option1" ? dash2 : dash;
  const iconForOption2 = selectedOption === "option2" ? users2 : users;
  const iconForOption3 =
    selectedOption === "option3" ? Application2 : Application;
  const iconForOption4 = selectedOption === "option4" ? payment2 : payment;
  const iconForOption5 = selectedOption === "option5" ? document2 : document;
  const iconForOption6 = selectedOption === "option6" ? settings2 : settings;
  const iconForOption7 = selectedOption === "option7" ? logout : logout;

  return (
    <div className="">
      {/* Toggle button for mobile */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-black font-bold"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "X" : "Menu"}
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-fit bg-[#561f6f] shadow-xl transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-[80px] md:h-screen`}
      >
        {/* <div className=" md:h-screen h- w-[80px] flex flex-col relative shadow-xl bg-[#561f6f] "> */}
        <div className="flex justify-between ml-3">
          <img src={logo} className="h-[27.91px] w-[37.78px] mt-2" />
        </div>
        <ul className="flex flex-col md:gap-y-4 md:mt-10 gap-y-2 mt-4 px-3">
          <NavLink
            to="/app/Dashboard"
            className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ${
              selectedOption === "option1"
                ? "font-medium bg-white w-[48px] h-[45px] rounded-lg "
                : "h-[45px] w-[50px]"
            }`}
            onClick={() => handleOptionClick("option1")}
          >
            <img src={iconForOption1} className="h-[24px] w-[40px]" />
          </NavLink>

          <NavLink
            to="/app/Users"
            className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ${
              selectedOption === "option2"
                ? "font-medium  bg-white  w-[48px] h-[45px]  rounded-lg "
                : " w-[50px] h-[45px]"
            }`}
            onClick={() => handleOptionClick("option2")}
          >
            <img src={iconForOption2} className="h-[24px] w-[50px]" />
          </NavLink>

          <NavLink
            to="/app/Services"
            className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ${
              selectedOption === "option3"
                ? "font-medium  w-[48px] h-[45px]  bg-white rounded-lg "
                : "w-[50px] h-[45px]"
            }`}
            onClick={() => handleOptionClick("option3")}
          >
            <img src={iconForOption3} className="w-[50px] h-[24px]" />
          </NavLink>

          <NavLink
            to="/app/Payments"
            className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ${
              selectedOption === "option4"
                ? "font-medium  w-[48px] h-[45px]  bg-white rounded-lg "
                : " w-[50px] h-[45px]"
            }`}
            onClick={() => handleOptionClick("option4")}
          >
            <img src={iconForOption4} className=" w-[50px] h-[24px]" />
          </NavLink>

          <NavLink
            to="/app/Document"
            className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ${
              selectedOption === "option5"
                ? "font-medium  w-[48px] h-[45px]  bg-white rounded-lg "
                : " w-[50px] h-[45px]"
            }`}
            onClick={() => handleOptionClick("option5")}
          >
            <img src={iconForOption5} className=" w-[50px] h-[24px]" />
          </NavLink>

          <NavLink
            to="/app/MainSettings"
            className={`flex items-center gap-4 py-3 px-3 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ${
              selectedOption === "option6"
                ? "font-medium w-[48px] h-[45px]  bg-white rounded-lg "
                : "h-[44px] w-[50px]"
            }`}
            onClick={() => handleOptionClick("option6")}
          >
            <img src={iconForOption6} className="h-[24px] w-[50px]" />
          </NavLink>

          <div className="flex items-center gap-4 py-3 px-1 cursor-pointer text-sm font-normal rounded-lg transition-all duration-300 ">
            <img
              src={iconForOption7}
              className="h-[38px] w-[41px] absolute bottom-4"
              onClick={() => setDetailsPopup(true)}
            />
          </div>
        </ul>
        {/* 
        {detailsPopup && (
          <div className="fixed top-0 left-0 inset-0 bg-black/40 w-full h-screen flex justify-center items-center">
            <div className="bg-white w-[90%] max-w-[456px] h-auto md:h-[357px] rounded-2xl px-4 py-6">
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-[#222222] font-bold text-[22px] md:text-[25.5px]">
                  Log Out
                </h1>
                <p className="text-[16px] md:text-[19.5px] text-center">
                  Are you sure you want to log out?
                </p>
                <button
                  className="w-[255px] md:w-[388px] h-[50px] md:h-[61px] font-semibold text-[20px] md:text-[25.5px] rounded-3xl border border-[#571f6f] hover:bg-white hover:text-[#571f6f] bg-[#571f6f] text-white mt-5"
                  onClick={() => setDetailsPopup(false)}
                >
                  No
                </button>
                <NavLink to="/">
                  <button className="w-[255px] md:w-[388px] h-[50px] md:h-[61px] font-semibold text-[20px] md:text-[25.5px] rounded-3xl border border-[#571f6f] text-[#571f6f] hover:bg-[#571f6f] hover:text-white mt-4">
                    Yes
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        )} */}

        {detailsPopup && (
          <div className="fixed top-0 left-0 inset-0 bg-black/40 w-screen h-screen flex justify-center items-center">
            <div className="bg-white w-[90%] max-w-[456px] h-auto md:h-[357px] rounded-2xl px-4 py-6">
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-[#222222] font-bold text-[22px] md:text-[25.5px]">
                  Log Out
                </h1>
                <p className="text-[16px] md:text-[19.5px] text-center">
                  Are you sure you want to log out?
                </p>
                <button
                  className="w-[255px] md:w-[388px] h-[50px] md:h-[61px] font-semibold text-[20px] md:text-[25.5px] rounded-3xl border border-[#571f6f] hover:bg-white hover:text-[#571f6f] bg-[#571f6f] text-white mt-5"
                  onClick={() => setDetailsPopup(false)}
                >
                  No
                </button>
                <NavLink to="/">
                  <button className="w-[255px] md:w-[388px] h-[50px] md:h-[61px] font-semibold text-[20px] md:text-[25.5px] rounded-3xl border border-[#571f6f] text-[#571f6f] hover:bg-[#571f6f] hover:text-white mt-4">
                    Yes
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
