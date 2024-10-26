import EChart from "./EChart";
import user from "../../public/Images/userimg.png";

import notification2 from "../../public/icons/notificationselected.png";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const Application = [
    {
      heading: "Total Applications",
      color: "#4ECDC4",
      emoji: "📚",
      value: "1,841",
      totalpercent: "+20.1% ",
      lastmsg: "from last month",
    },
    {
      heading: "Pending Applications",
      color: "#FF6B6B",
      emoji: "⏳",
      value: 345,
      totalpercent: "+4.75%",
      lastmsg: "from last month",
    },
    {
      heading: "Incomplete Applications",
      color: "#45B7D1",
      emoji: "📝",
      value: 127,
      totalpercent: "-3.2%",
      lastmsg: "from last month",
    },
    {
      heading: "Revenue from Fees",
      color: "#561f6f",
      emoji: "💰",
      value: "$24,565",
      totalpercent: "+14.1%",
      lastmsg: "from last month",
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full px-4 py-4  overflow-x-hidden overflow-y-scroll h-[80vh]">
      <div className="md:flex md:justify-between">
        <h1 className="font-medium  md:text-[36px] mb-4">
          Application Dashboard
        </h1>

        <div className="flex flex-end items-center mb-2 gap-2">
          <NavLink to="/app/Notification">
            <img
              src={notification2}
              className="w-[40px] h-[40px] mr-3 cursor-pointer"
            />
          </NavLink>
          <p className="w-[132px] h-[40px] rounded-lg flex text-sm items-center justify-center border border-[#571f6f] bg-[#F6F6F6] text-[#571f6f] hover:bg-[#571f6f] hover:text-white cursor pointer">
            Admin Name
          </p>
          <img src={user} className="h-[62px] w-[62px] rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Application.map((application, index) => (
          <div
            className="w-full shadow-lg rounded-xl p-4 bg-[#561f6f]"
            // style={{
            //   background: `linear-gradient(135deg, ${application.color}22, ${application.color}11)`,
            // }}
            key={index}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-white text-[16px] font-semibold">
                {application.heading}
              </h1>
              <h6>{application.emoji}</h6>
            </div>
            <h1 className="text-white font-bold text-[20px] mt-4">
              {application.value}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <h3 className="w-[72px] h-[24px] text-sm rounded-3xl bg-white text-[#561f6f] flex justify-center items-center">
                {application.totalpercent}
              </h3>
              <p className="text-white text-[12px]">{application.lastmsg}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:flex sm:flex gap-6 mt-8 ">
        <div className="w-full bg-white border border-[#B5B8BF] shadow-lg p-4 rounded-xl">
          <h1 className="text-xl text-black font-semibold">
            Applications by Program Type
          </h1>
          <div className="">
            <EChart />
          </div>
        </div>

        <div className="w-full bg-white border border-[#B5B8BF] shadow-lg p-4 mt-4 lg:mt-0 rounded-xl">
          <h1 className="text-xl text-black font-semibold">
            Additional Services Requested
          </h1>
          <p className="text-sm text-black mt-2">
            Breakdown of extra services applicants have requested.
          </p>
          <div className="mt-6">
            <span className="text-lg text-[#561f6f] font-semibold">
              Blocked Account
            </span>
            <div className="flex items-center gap-2 ">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-400 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <span className="text-sm text-[#561f6f]">423</span>
            </div>

            <div className="mt-2">
              <span className="text-lg text-[#561f6f] font-semibold">
                Dormitory Placement
              </span>
              <div className="flex items-center gap-2 ">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#03fcf8] h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span className="text-sm text-[#561f6f]">387</span>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-lg text-[#561f6f] font-semibold">
                Airport Pickup
              </span>
              <div className="flex items-center gap-2 ">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#03c2fc] h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <span className="text-sm text-[#561f6f]">275</span>
              </div>
            </div>

            <div className="">
              <span className="text-lg text-[#561f6f] font-semibold">
                Visa Consultation
              </span>
              <div className="flex items-center gap-2 ">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <span className="text-sm text-[#561f6f]">198</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
