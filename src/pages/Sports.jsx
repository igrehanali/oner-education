import arrow from "../../public/icons/servicebackarrow.png";

import sportsbanner from "../../public/Images/sportsbanner.png";

import logouni from "../../public/icons/signinlogo.png";
// import checklist from "../../public/icons/checklist.png";
import calender from "../../public/Images/calendar.png";
// import ILETS from "../../public/Images/IELETS.png";
import dollar from "../../public/Images/dollar.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";
const Sports = () => {
  // const [backArrow, setBackArrow] = useState(false);

  const [clickedButton, setClickedButton] = useState("All");
  const handleButtonClick = (button) => {
    setClickedButton(button);
  };
  const Sportsdata = [
    {
      name: "IACE Downtown SCHOOL",
    },
    {
      name: "IACE Downtown SCHOOL",
    },
    {
      name: "IACE Downtown SCHOOL",
    },
    {
      name: "IACE Downtown SCHOOL",
    },
    {
      name: "IACE Downtown SCHOOL",
    },
    {
      name: "IACE Downtown SCHOOL",
    },
  ];

  return (
    <div className="w-[100vw] h-[100vh] p-4">
      <div className="flex items-center gap-8 ">
        <NavLink to="/app/Services">
          <img
            src={arrow}
            className="h-[32px] w-[32px] cursor-pointer"
            // onClick={() => setBackArrow(true)}
          />
        </NavLink>
        <h1 className="font-medium md:text-[36px] text-xl text-[#333333]">
          Sports Program
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <div className="flex justify-between border border-[#B5B8BF] w-full max-w-[400px] h-[42px] rounded-lg">
          {["All", "Pending", "Approved", "Reject"].map((status) => (
            <button
              key={status}
              className={`${
                clickedButton === status
                  ? "bg-[#571F6F] text-white"
                  : "text-[#571f6f] bg-white"
              } p-2 font-medium text-sm md:text-base w-1/4 rounded-lg`}
              onClick={() => handleButtonClick(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <select className="w-[130px] h-[36px] bg-[#561f6f] text-white rounded-md px-2">
          <option value="option1">All Country</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AR">Argentina</option>
          {/* Add more options here */}
        </select>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-8 mt-5 overflow-y-scroll h-[65vh]">
        {Sportsdata.map((sport, index) => (
          // <div
          //   className="w-full md:w-[376px] h-auto border border-[#B5B8BF] rounded-xl"
          //   key={index}
          // >
          //   <img
          //     src={sportsbanner}
          //     className=" w-[376px] h-[189px] rounded-t-xl"
          //   />
          //   <div className=" gap-2   w-[376px] h-[200px] ">
          //     <div className="flex flex-col items-center justify-center">
          //       <div className="flex items-center justify-center ml-3 mt-2 gap-3">
          //         <img src={logouni} className="w-[26.24px] h-[25.29px]" />
          //         <h1 className="font-semibold ttext-[20px]">{sport.name}</h1>
          //       </div>
          //       <h1 className="text-[#571F6F]  font-bold text-[10px] ">
          //         ARTS And DIY
          //       </h1>
          //     </div>
          //     <div className="flex gap-11 ">
          //       <div className="flex gap-2 mt-4 ml-4 items-center">
          //         <img src={dollar} className="h-[21px] w-[21px]" />
          //         <h1 className="text-[12px] ">
          //           Tution Fee:
          //           <span className="text-[#561f6f] font-semibold ml-1">
          //             $500
          //           </span>
          //         </h1>
          //       </div>
          //       <div className="flex gap-2 mt-4 ml-8 items-center">
          //         <img src={dollar} className="h-[21px] w-[21px]" />
          //         <h1 className="text-[12px] ">
          //           Deposit:
          //           <span className="text-[#561f6f] font-semibold ml-1">
          //             $500
          //           </span>
          //         </h1>
          //       </div>
          //     </div>

          //     <div className="flex gap-12 ">
          //       <div className="flex gap-2 mt-4 ml-4 items-center">
          //         <img src={dollar} className="h-[21px] w-[21px]" />
          //         <h1 className="text-[12px] ">
          //           Application Fee:
          //           <span className="text-[#561f6f] font-semibold ml-1">
          //             $400
          //           </span>
          //         </h1>
          //       </div>
          //       <div className="flex gap-2 mt-4  items-center">
          //         <img src={calender} className="h-[21px] w-[21px]" />
          //         <h1 className="text-[12px] ">Fall 15 Feb / 202 days</h1>
          //       </div>
          //     </div>

          //     <div className="flex  mt-4 items-center">
          //       <h1 className="ml-5 text-[12px]">
          //         Status:<span className="text-[#44944F] ml-1">Approved</span>
          //       </h1>
          //     </div>

          //     <div className="flex items-center justify-center  mt-7 ml-24 gap-2 cursor-pointer bg-[#561f6f] w-[154px] h-[35.63px] rounded-md ">
          //       <select className=" bg-[#561f6f] rounded-md cursor-pointer w-[119px] h-[35.63px]  outline-none font-semibold text-[12px] text-white px-1">
          //         <option value="option1">Approved</option>
          //         <option value="option1">Pending</option>
          //         <option value="option1">Reject</option>
          //       </select>
          //     </div>
          //   </div>
          // </div>

          <div
            className="w-full md:w-[376px] h-auto border border-[#B5B8BF] rounded-xl"
            key={index}
          >
            {/* Language Banner */}
            <img
              src={sportsbanner}
              className="w-full h-auto md:h-[189px] object-cover rounded-t-xl"
              alt="Language Banner"
            />

            <div className="p-4">
              {/* Program Name */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src={logouni} className="w-6 h-6" alt="Logo" />
                  <h1 className="font-semibold text-base md:text-lg">
                    {sport.name}
                  </h1>
                </div>
              </div>

              {/* Fees and Info */}
              <div className="flex justify-between mt-4 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <img src={dollar} className="w-5 h-5" alt="Dollar" />
                  <p>
                    Tution Fee:{" "}
                    <span className="text-[#561f6f] font-semibold">$500</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={dollar} className="w-5 h-5" alt="Dollar" />
                  <p>
                    Deposit:{" "}
                    <span className="text-[#561f6f] font-semibold">$500</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-4 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <img src={dollar} className="w-5 h-5" alt="Dollar" />
                  <p>
                    Application Fee:{" "}
                    <span className="text-[#561f6f] font-semibold">$400</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={calender} className="w-5 h-5" alt="Calendar" />
                  <p>Fall 15 Feb / 202 days</p>
                </div>
              </div>

              {/* Status */}
              <div className="mt-4 text-xs md:text-sm">
                <p>
                  Status:{" "}
                  <span className="text-[#44944F] font-semibold">Approved</span>
                </p>
              </div>

              {/* Dropdown Action */}
              <div className="flex justify-center mt-6">
                <select className="w-[154px] h-[36px] bg-[#561f6f] text-white text-sm font-semibold rounded-md">
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Reject">Reject</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
