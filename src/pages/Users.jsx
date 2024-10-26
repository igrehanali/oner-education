import User1 from "../../public/Images/userimg.png";
import cross from "../../public/icons/blockcross.png";
import tick from "../../public/icons/blocktick.png";
import BlockedUsers from "./BlockedUsers";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  const UsersData = [
    {
      name: "Tom Riddle",
      email: "riddle345@gmail.com",
      phone: 123456789,
      program: "University",
      status: "View Details",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: 123456789,
      program: "University",
      status: "View Details",
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: 123456789,
      program: "High School",
      status: "View Details",
    },
    {
      name: "Emily Blunt",
      email: "emily.blunt@example.com",
      phone: 123456789,
      program: "High School",
      status: "View Details",
    },
    {
      name: "Michael Scott",
      email: "m.scott@dundermifflin.com",
      phone: 123456789,
      program: "High School",
      status: "View Details",
    },
    {
      name: "Sarah Connor",
      email: "sarah.connor@example.com",
      phone: 123456789,
      program: "University",
      status: "View Details",
    },
    {
      name: "Bruce Wayne",
      email: "b.wayne@wayneenterprises.com",
      phone: 123456789,
      program: "High School",
      status: "View Details",
    },
    {
      name: "Clark Kent",
      email: "clark.kent@dailyplanet.com",
      phone: 123456789,
      program: "University",
      status: "View Details",
    },
  ];

  const [clickedButton, setClickedButton] = useState("Active");
  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  const [showBlockedData, setShowBlockedData] = useState("");

  return (
    <div className="bg-[#FFFFFF] w-full md:px-5 md:py-4 px-3 py-3">
      <div className="md:flex md:justify-between items-center mb-4">
        <div className="md:flex gap-2 items-center">
          <h1 className="font-medium text-black text-[24px] md:text-[36px]">
            Users
          </h1>
          <input
            type="search"
            placeholder="Search"
            className="w-full md:w-[550px] h-[44px] px-4 py-2 rounded-xl border border-[#561f6f] outline-none text-[#561f6f] mt-2 md:mt-0"
          />
        </div>
        <div className="flex  gap-6 mt-2 md:mt-0">
          <button
            className={`${
              clickedButton === "Active"
                ? "bg-[#561f6f] text-white p-2 rounded-lg h-[43px] w-[110px] md:w-[136px]"
                : "text-black p-2 bg-[#ECECEC] rounded-lg h-[43px] w-[110px] md:w-[136px]"
            }`}
            onClick={() => {
              handleButtonClick("Active");
            }}
          >
            Active
          </button>
          <button
            className={`${
              clickedButton === "blocked"
                ? "bg-[#561f6f] text-white p-2 rounded-lg h-[43px] w-[110px] md:w-[136px]"
                : "text-black p-2 bg-[#ECECEC] rounded-lg h-[43px] w-[110px] md:w-[136px]"
            }`}
            onClick={() => {
              handleButtonClick("blocked");
            }}
          >
            Blocked
          </button>
        </div>
      </div>

      {/* Make table responsive */}
      <div className="md:overflow-y-scroll md:h-[80vh] mt-5">
        {showBlockedData || (
          <div className="overflow-x-scroll w-full">
            <table className="bg-white shadow-xl w-full rounded-lg table-auto">
              <thead className="text-center">
                <tr>
                  <th className="font-medium text-[12px] md:text-[16px] text-left p-2 md:p-4">
                    Users
                  </th>
                  <th className="font-medium text-[12px] md:text-[16px] p-2 md:p-4">
                    Name
                  </th>
                  <th className="font-medium text-[12px] md:text-[16px] p-2 md:p-4">
                    Email
                  </th>
                  <th className="font-medium text-[12px] md:text-[16px] p-2 md:p-4">
                    Phone
                  </th>
                  <th className="font-medium text-[12px] md:text-[16px] p-2 md:p-4">
                    Program
                  </th>
                  <th className="font-medium text-[12px] md:text-[16px] p-2 md:p-4">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="text-center">
                {UsersData.map((user, index) => (
                  <tr className="border-t-black border-t" key={index}>
                    <td className="p-2">
                      <img
                        src={User1}
                        alt="User"
                        className="rounded-full h-[30px] w-[30px] md:h-[55.75px] md:w-[55.75px]"
                      />
                    </td>
                    <td className="font-light text-[10px] md:text-[14px] p-2">
                      {user.name}
                    </td>
                    <td className="font-light text-[10px] md:text-[14px] p-2">
                      {user.email}
                    </td>
                    <td className="font-light text-[10px] md:text-[14px] p-2">
                      {user.phone}
                    </td>
                    <td className="font-light text-[10px] md:text-[14px] p-2">
                      {user.program}
                    </td>
                    <td className="font-light text-[10px] md:text-[14px] p-2 flex items-center justify-center gap-2 md:mt-4 mt-2">
                      <h3 className="bg-[#561f6f] h-[20px] w-[56px] md:h-[26px] md:w-[56px] text-white rounded-lg flex items-center justify-center">
                        12
                      </h3>
                      <img
                        src={cross}
                        className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
                      />
                      <img
                        src={tick}
                        className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
                      />
                      <NavLink to="/app/UsersDetails">
                        <button className="hover:bg-[#561f6f] bg-white border-[#561f6f] border-2 hover:text-white w-[70px] h-[25px] md:w-[110px] md:h-[35px] rounded-lg text-[#571f6f] font-semibold">
                          {user.status}
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {setShowBlockedData || <BlockedUsers />}
    </div>
  );
};

export default Users;
