import { useState } from "react";
import backarrow from "../../public/icons/servicebackarrow.png";
import tick from "../../public/icons/tick.png";
import unibuilding from "../../public/Images/unibuilding.png";
import dollar from "../../public/Images/dollar.png";
import calender from "../../public/Images/calendar.png";
import time from "../../public/Images/time.png";
const SchoolApplication = () => {
  const [clickedButton, setClickedButton] = useState("Applied 1");
  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="h-[100vh] w-[100vw] p-4">
      <div className="flex gap-6">
        <img src={backarrow} className="h-[32px] w-[32px] cursor-pointer" />
        <h1 className="text-[24px] font-semibold">Applications</h1>
      </div>

      <div className="flex  gap-6  py-4">
        <button
          className={`${
            clickedButton === "Applied 1"
              ? "bg-[#571F6F] text-white p-2  rounded-lg h-[43px] w-[136px]"
              : "text-[#571f6f] p-2 bg-[#ffff] border border-[#B5B8BF] rounded-lg h-[43px] w-[136px]"
          }`}
          onClick={() => {
            handleButtonClick("Applied 1");
          }}
        >
          Applied 1
        </button>

        <button
          className={`${
            clickedButton === "Admitted 0"
              ? "bg-[#571F6F] text-white p-2  rounded-lg h-[43px] w-[136px]"
              : "text-[#571f6f] p-2 bg-[#ffff] border border-[#B5B8BF] rounded-lg h-[43px] w-[136px]"
          }`}
          onClick={() => {
            handleButtonClick("Admitted 0");
          }}
        >
          Admitted 0
        </button>

        <button
          className={`${
            clickedButton === "Enrolled 0"
              ? "bg-[#571F6F] text-white p-2  rounded-lg h-[43px] w-[136px]"
              : "text-[#571f6f] p-2 bg-[#ffff] border border-[#B5B8BF] rounded-lg h-[43px] w-[136px]"
          }`}
          onClick={() => {
            handleButtonClick("Enrolled 0");
          }}
        >
          Enrolled 0
        </button>

        <button
          className={`${
            clickedButton === "Denied 0"
              ? "bg-[#571F6F] text-white p-2  rounded-lg h-[43px] w-[136px]"
              : "text-[#571f6f] p-2 bg-[#ffff] border border-[#B5B8BF] rounded-lg h-[43px] w-[136px]"
          }`}
          onClick={() => {
            handleButtonClick("Denied 0");
          }}
        >
          Denied 0
        </button>
      </div>

      <div className="h-[430px] w-[360px] border-2 border-[#B5B8BF] rounded-xl  ">
        <div className="bg-[#F5F5F5] h-[110px] flex flex-col justify-center  items-center border-2 rounded-xl">
          <div className="flex justify-center  items-center">
            <div className="h-[34px] w-[34px] rounded-full border-2 flex justify-center bg-[#B787CB] items-center border-[#561f6f]">
              <img src={tick} className=" w-[14px] h-[11px] " />
            </div>
            <hr className="border-[#561f6f] w-[56px]"></hr>
            <div className="h-[34px] w-[34px] rounded-full border-2 border-[#B5B8BF] flex justify-center items-center">
              <div className="bg-[#B5B8BF] w-[9px] h-[8px] rounded-full"> </div>
            </div>
            <hr className="border-[#561f6f]  w-[56px]"></hr>
            <div className="h-[34px] w-[34px] rounded-full border-2 border-[#B5B8BF] flex justify-center items-center">
              <div className="bg-[#B5B8BF] w-[9px] h-[8px] rounded-full"> </div>
            </div>
            <hr className="border-[#561f6f]  w-[56px]"></hr>
            <div className="h-[34px] w-[34px] rounded-full border-2 border-[#B5B8BF] flex justify-center items-center">
              <div className="bg-[#B5B8BF] w-[9px] h-[8px] rounded-full"> </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 mt-2">
            <h1 className="text-[12px] font-semibold">Falling</h1>
            <h1 className="text-[12px] font-semibold">Reviews</h1>
            <h1 className="text-[12px] font-semibold">Deposit Due</h1>
            <h1 className="text-[12px] font-semibold">Visa</h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mr-8 mt-4 ">
          <img src={unibuilding} className="w-[41px] h-[41px]" />
          <div className="flex flex-col">
            <h1 className="text-[16px] font-semibold">IACE Downtown SCHOOL</h1>
            <h3 className="text-[#571F6F] text-[10px]">ARTS And DIY</h3>
          </div>
        </div>
        <div className="flex gap-4 mt-4 ml-8 items-center">
          <img src={dollar} className="h-[21px] w-[21px]" />
          <h1 className="text-[15px] ">
            Tution Fee:
            <span className="text-[#561f6f] font-semibold">$500</span>
          </h1>
        </div>
        <div className="flex gap-6">
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
        <div className="flex justify-between p-8 mt-8">
          <h1 className="text-[16px]">View your application</h1>
          <a href="#" className="text-[#561f6f] text-[16px]">
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchoolApplication;
