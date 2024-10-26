import User1 from "../../public/Images/userimg.png";
// import backarrow from "../../public/icons/backarrow.png";

import backarrow from "../../public/icons/servicebackarrow.png";
// import tick from "../../public/icons/tick.png";
import unibuilding from "../../public/Images/unibuilding.png";
import dollar from "../../public/Images/dollar.png";
import calender from "../../public/Images/calendar.png";
import time from "../../public/Images/time.png";
import { NavLink } from "react-router-dom";

// import Airpods from "../../public/Images/Airpods.png";
// import { useState } from "react";
const UsersDetails = () => {
  const userdata = [
    {
      uni: "Stevens Insitute of Technology",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
    {
      uni: "Stevens Insitute of Technology",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
    {
      uni: "Stevens Insitute of Technology",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
    {
      uni: "Stevens Insitute of Technology",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
  ];
  // const [backArrow, setBackArrow] = useState(false);

  return (
    <div className="bg-white w-[100vw] h-[100vh] px-5 py-4">
      <div className="flex items-center gap-4">
        <NavLink to="/app/Users">
          <img
            src={backarrow}
            className="w-[36.03px] h-[36.43px] cursor-pointer"
          />
        </NavLink>
        <h1 className="font-medium text-black text-[36px]">Users</h1>
      </div>

      <div className=" md:flex gap-4 ">
        <div className="bg-white md:uniw-[300px] px-6 rounded-3xl shadow-lg mt-4  overflow-y-scroll h-[85vh]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={User1}
              alt="User"
              className="rounded-full h-[113px] w-[113px] mt-6"
            />

            <h2 className="text-[20px] font-medium">Tom Riddle</h2>
          </div>

          <div className="mt-6 space-y-3">
            <div>
              <p className="text-[16.49px] font-medium ">Email</p>
              <p className="text-[12.68px] ">riddle345@gmail.com</p>
            </div>
            <div>
              <p className="text-[16.49px] font-medium ">Phone No</p>
              <p className="text-[12.68px] ">+ (44) 3483 9768</p>
            </div>
            <div>
              <p className="text-[16.49px] font-medium ">Location</p>
              <p className="text-[12.68px] t">Chelmsford, United Kingdom</p>
            </div>
            <div>
              <p className="text-[16.49px] font-medium ">Request Date</p>
              <p className="text-[12.68px] t">10/10/2024</p>
              <p className="text-[15.68px]">
                Status:<span className="text-[#44944F]"> Approved</span>{" "}
              </p>
            </div>
          </div>
          <div className="flex pt-10 pb-6  gap-4 items-center justify-center">
            <div>
              <NavLink to="/app/Chats">
                <button className="bg-[#571f6f] text-white font-semibold text-[12px] rounded-md h-[31.29px] w-[95.99px] ">
                  Chat
                </button>
              </NavLink>
            </div>
            {/* <div className="flex items-center justify-center cursor-pointer rounded-md w-[95.99px] h-[31.29px]"> */}
            <select className="w-[95.99px] h-[31.29px] bg-[#561f6f] rounded-md cursor-pointer outline-none font-semibold text-[12px] text-white px-1">
              <option value="option1">Approved</option>
              <option value="option1">Pending</option>
              <option value="option1">Reject</option>
            </select>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-5 overflow-y-scroll w-full h-[85vh]">
          {userdata.map((user, index) => (
            <div
              className=" border border-[#B5B8BF] rounded-2xl md:w-[359px] md:h-[336px] "
              key={index}
            >
              <div className="flex  items-center gap-4 mt-4 ml-5 ">
                <img src={unibuilding} className="w-[41px] h-[41px]" />
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">
                    Stevens Insitute of Technology
                  </h1>
                  <h3 className="text-[#571F6F] text-[10px]">
                    Ms Doctor Of Philosophy - Bs Computer Science
                  </h3>
                </div>
              </div>
              <div className="flex gap-4 mt-4 ml-8 items-center">
                <img src={dollar} className="h-[21px] w-[21px]" />
                <h1 className="text-[15px] ">
                  Tution Fee:
                  <span className="text-[#561f6f] font-semibold">$500</span>
                </h1>
              </div>
              <div className="md:flex md:gap-6">
                <div className="flex gap-4 mt-4 ml-8 items-center">
                  <img src={calender} className="h-[21px] w-[21px]" />
                  <h1 className="text-[15px] ">Fall 15 Feb</h1>
                </div>
                <div className="flex gap-4 mt-4 ml-8 items-center">
                  <img src={time} className="h-[21px] w-[21px]" />
                  <h1 className="text-[15px] ">202 days</h1>
                </div>
              </div>
              <div className="flex gap-4  mt-4 ml-8 items-center">
                <img src={dollar} className="h-[21px] w-[21px]" />
                <h1 className="text-[15px] ">
                  Application Fee:
                  <span className="text-[#561f6f] font-semibold">$400</span>
                </h1>
              </div>

              <div className="flex gap-4 mt-4 ml-8 items-center">
                <img src={dollar} className="h-[21px] w-[21px]" />
                <h1 className="text-[15px] ">
                  Deposit:
                  <span className="text-[#561f6f] font-semibold">$500</span>
                </h1>
              </div>
              <div className="flex justify-center items-center py-14">
                <NavLink to="/app/ViewDetails">
                  <button className="w-[226px] h-[36px] border rounded-xl font-semibold hover:bg-[#571f6f] hover:text-white border-[#561f6f] text-[#561f6f] bg-[#F6F6F6] transition-colors">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default UsersDetails;
