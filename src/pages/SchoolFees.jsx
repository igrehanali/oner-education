import { NavLink } from "react-router-dom";
import arrow from "../../public/icons/servicebackarrow.png";
import camera from "../../public/icons/camera.png";
import { useState } from "react";
const SchoolFees = () => {
  const [selectedPdf, setSelectedPdf] = useState("");
  return (
    <div className="w-full h-full p-2">
      <div className="flex items-center md:gap-8 gap-2 ">
        <NavLink to="/app/SchoolPayments">
          <img src={arrow} className="h-[32px] w-[32px] cursor-pointer" />
        </NavLink>
        <h1 className="font-medium md:text-[36px] text-[#333333]">
          Fees & Payment Management
        </h1>
      </div>
      <div className="space-y-3 overflow-y-scroll h-[85vh]">
        <div className="space-y-1">
          <h1 className="text-[15px] ">Image</h1>
          <div className=" h-[81px] flex items-center mt-2 justify-center w-[81px] border border-[#CCCCCC] rounded-md cursor-pointer">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center "
            >
              <img src={camera} className="h-[27px] w-[27px]" />
              <span className="text-gray-500 text-lg">
                {selectedPdf ? `{${selectedPdf.name}}` : ""}
              </span>
              <input
                id="file-upload"
                type="file"
                className={`${selectedPdf !== undefined ? "hidden" : ""}`}
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="space-y-1">
            <h1 className="text-[15px] mt-2">University Name </h1>
            <input
              type="text"
              className="md:w-[451px] w-full h-[39px] px-2  rounded-md border outline-none border-[#CCCCCC]"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-[15px] mt-2">
              <u>Tution Fee</u>
            </h1>
            <input
              type="text"
              className="md:w-[451px] h-[39px] px-2 w-full outline-none rounded-md border border-[#CCCCCC]"
            />
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="space-y-1">
            <h1 className="text-[15px] mt-1">
              <u>Country</u>
            </h1>
            <div className="flex items-center md:w-[451px] w-full h-[39px] justify-center rounded-md border border-[#CCCCCC]">
              <select className=" rounded-md outline-none  w-[440px] px-2">
                <option value="option1"></option>

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
          <div className="space-y-1">
            <h1 className="text-[15px] mt-2">
              <u>Application Fees</u>
            </h1>
            <input
              type="text"
              className="md:w-[451px] h-[39px] w-full outline-none px-2 rounded-md border border-[#CCCCCC]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-[15px] mt-2">
            <u>Admission Date</u>{" "}
          </h1>
          <input
            type="text"
            className="md:w-[451px] h-[39px] w-full  outline-none px-2  rounded-md border border-[#CCCCCC]"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-[15px] mt-2">
            <u>Deposit Fees</u>{" "}
          </h1>
          <input
            type="text"
            className="md:w-[451px] h-[39px] w-full outline-none px-2 rounded-md border border-[#CCCCCC]"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-[15px] mt-2">Program Name </h1>
          <input
            type="text"
            className="md:w-[451px] h-[39px] w-full  outline-none px-2 rounded-md border border-[#CCCCCC]"
          />
        </div>
        <div className="flex gap-6 pt-7">
          <button className="w-[162px] h-[42px] rounded-md bg-[#571f6f] text-white">
            Save
          </button>

          <button className="w-[162px] h-[42px] rounded-md text-[#571f6f] bg-[#F6F6F6] border border-[#571f6f]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolFees;
