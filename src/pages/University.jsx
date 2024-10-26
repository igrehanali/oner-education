import arrow from "../../public/icons/servicebackarrow.png";
// import search from "../../public/icons/search.png";
// import unisetting from "../../public/icons/unisetting.png";
import uni from "../../public/Images/uni.png";
import logouni from "../../public/icons/signinlogo.png";
// import checklist from "../../public/icons/checklist.png";
import calender from "../../public/Images/calendar.png";
import ILETS from "../../public/Images/IELETS.png";
import dollar from "../../public/Images/dollar.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const University = () => {
  const [clickedButton, setClickedButton] = useState("All");

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  const Unidata = [
    {
      name: "Stevens Insitute of Technology",
    },
    {
      name: "Stevens Insitute of Technology",
    },
    {
      name: "Stevens Insitute of Technology",
    },
    {
      name: "Stevens Insitute of Technology",
    },
    {
      name: "Stevens Insitute of Technology",
    },
    {
      name: "Stevens Insitute of Technology",
    },
  ];

  return (
    <div className="w-full p-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 md:gap-8">
        <NavLink to="/app/Services">
          <img
            src={arrow}
            className="h-8 w-8 md:h-[32px] md:w-[32px] cursor-pointer"
          />
        </NavLink>
        <h1 className="font-medium text-[24px] md:text-[36px] text-[#333333]">
          Universities
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <div className="flex justify-between border-[#B5B8BF] border w-full max-w-[399px] h-[42px] rounded-lg">
          <button
            className={`${
              clickedButton === "All"
                ? "bg-[#571F6F] text-white p-2 font-medium text-[14px] md:text-[16px] w-[60px] md:w-[66px] rounded-lg"
                : "text-[#571f6f] p-2 bg-[#fff] font-medium text-[14px] md:text-[16px] w-[60px] md:w-[66px] rounded-lg"
            }`}
            onClick={() => {
              handleButtonClick("All");
            }}
          >
            All
          </button>
          <button
            className={`${
              clickedButton === "Pending"
                ? "bg-[#571F6F] text-white p-2 font-medium text-[14px] md:text-[16px] w-[80px] md:w-[88px] rounded-lg"
                : "text-[#571f6f] p-2 bg-[#fff] font-medium text-[14px] md:text-[16px] w-[80px] md:w-[88px] rounded-lg"
            }`}
            onClick={() => {
              handleButtonClick("Pending");
            }}
          >
            Pending
          </button>
          <button
            className={`${
              clickedButton === "Approved"
                ? "bg-[#571F6F] text-white p-2 font-medium text-[14px] md:text-[16px] w-[95px] md:w-[100px] rounded-lg"
                : "text-[#571f6f] p-2 bg-[#fff] font-medium text-[14px] md:text-[16px] w-[95px] md:w-[100px] rounded-lg"
            }`}
            onClick={() => {
              handleButtonClick("Approved");
            }}
          >
            Approved
          </button>
          <button
            className={`${
              clickedButton === "Reject"
                ? "bg-[#571F6F] text-white p-2 font-medium text-[14px] md:text-[16px] w-[90px] md:w-[93px] rounded-lg"
                : "text-[#571f6f] p-2 bg-[#fff] font-medium text-[14px] md:text-[16px] w-[90px] md:w-[93px] rounded-lg"
            }`}
            onClick={() => {
              handleButtonClick("Reject");
            }}
          >
            Reject
          </button>
        </div>

        {/* Dropdown Section */}
        <div className="flex items-center justify-center mt-4 md:mt-0 rounded-md">
          <select className="w-[120px] md:w-[130px] h-[36px] bg-[#561f6f] rounded-md outline-none text-white px-2">
            <option value="option1">All Country</option>
            <option value="AF">Afghanistan</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AR">Argentina</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="BD">Bangladesh</option>
            <option value="BE">Belgium</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="EG">Egypt</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="NG">Nigeria</option>
            <option value="PK">Pakistan</option>
            <option value="RU">Russia</option>
            <option value="SA">Saudi Arabia</option>
            <option value="ZA">South Africa</option>
            <option value="ES">Spain</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
          </select>
        </div>
      </div>

      {/* University Cards Section */}
      <div className="flex flex-wrap gap-4 md:gap-8 mt-5 overflow-y-scroll h-[65vh]">
        {Unidata.map((Unidata, index) => (
          <div
            className="w-full md:w-[376px] h-auto border border-[#B5B8BF] rounded-xl p-4"
            key={index}
          >
            <img
              src={uni}
              className="w-full md:w-[376px] h-auto md:h-[189px] object-cover rounded-t-xl"
            />
            <div className="w-full p-2">
              <div className="flex items-center justify-center gap-2 mt-2">
                <img
                  src={logouni}
                  className="w-6 h-6 md:w-[26px] md:h-[26px]"
                />
                <h1 className="font-semibold text-[16px] md:text-[20px]">
                  {Unidata.name}
                </h1>
              </div>
              <h2 className="text-[#571F6F] font-bold text-[12px] md:text-[14px] text-center mt-1">
                BS Computer Science
              </h2>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img src={dollar} className="h-5 w-5" />
                  <p className="text-[12px]">
                    Tution Fee:{" "}
                    <span className="text-[#561f6f] font-semibold">$500</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={dollar} className="h-5 w-5" />
                  <p className="text-[12px]">
                    Deposit:{" "}
                    <span className="text-[#561f6f] font-semibold">$500</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img src={dollar} className="h-5 w-5" />
                  <p className="text-[12px]">
                    Application Fee:{" "}
                    <span className="text-[#561f6f] font-semibold">$400</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={calender} className="h-5 w-5" />
                  <p className="text-[12px]">Fall 15 Feb / 202 days</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img src={ILETS} className="h-5 w-5" />
                  <p className="text-[12px]">
                    Gre:{" "}
                    <span className="text-[#561f6f] font-semibold">
                      Required
                    </span>
                  </p>
                </div>
                <p className="text-[12px]">
                  Status: <span className="text-[#44944F]">Approved</span>
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <select className="w-[120px] md:w-[154px] h-[36px] bg-[#561f6f] text-white text-[12px] md:text-[14px] font-semibold rounded-md">
                  <option value="option1">Approved</option>
                  <option value="option2">Pending</option>
                  <option value="option3">Reject</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default University;
