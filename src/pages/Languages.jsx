import arrow from "../../public/icons/servicebackarrow.png";
import languagebanner from "../../public/Images/languagebanner.png";
import logouni from "../../public/icons/signinlogo.png";
import calender from "../../public/Images/calendar.png";
import dollar from "../../public/Images/dollar.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Languages = () => {
  const [clickedButton, setClickedButton] = useState("All");

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  const languagedata = [
    { name: "General intensive (English)" },
    { name: "General intensive (English)" },
    { name: "General intensive (English)" },
    { name: "General intensive (English)" },
    { name: "General intensive (English)" },
    { name: "General intensive (English)" },
  ];

  return (
    <div className="w-full h-full p-4">
      {/* Header */}
      <div className="flex gap-4 items-center">
        <NavLink to="/app/Services">
          <img src={arrow} className="h-8 w-8 md:h-10 md:w-10 cursor-pointer" />
        </NavLink>
        <h1 className="font-medium text-xl md:text-3xl text-[#333333]">
          Language Program
        </h1>
      </div>

      {/* Filter Section */}
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

      {/* Language Program Cards */}
      <div className="flex flex-wrap gap-4 md:gap-8 mt-5 overflow-y-scroll h-[65vh]">
        {languagedata.map((language, index) => (
          <div
            className="w-full md:w-[376px] h-auto border border-[#B5B8BF] rounded-xl"
            key={index}
          >
            {/* Language Banner */}
            <img
              src={languagebanner}
              className="w-full h-auto md:h-[189px] object-cover rounded-t-xl"
              alt="Language Banner"
            />

            <div className="p-4">
              {/* Program Name */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src={logouni} className="w-6 h-6" alt="Logo" />
                  <h1 className="font-semibold text-base md:text-lg">
                    {language.name}
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

export default Languages;
