import { NavLink } from "react-router-dom";
import plus from "../../public/icons/plus.png";
import arrow from "../../public/icons/servicebackarrow.png";
import language from "../../public/icons/language.png";
import dollar from "../../public/Images/dollar.png";
import calender from "../../public/Images/calendar.png";
import time from "../../public/Images/time.png";
const LanguagePayments = () => {
  const Unidata = [
    {
      uni: "General intensive (English)",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
    {
      uni: "General intensive (English)",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
    {
      uni: "General intensive (English)",
      program: " Ms Doctor Of Philosophy - Bs Computer Science",
    },
  ];
  return (
    <div className="w-full h-full p-2 ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center  md:gap-8 gap-1 ">
          <NavLink to="/app/Payments">
            <img src={arrow} className="h-[32px] w-[32px] cursor-pointer" />
          </NavLink>
          <h1 className="font-medium md:text-[36px]  ">
            Language Program Payments
          </h1>
        </div>
        <NavLink to="/app/LanguageFees">
          <div className="w-[43px] h-[39.16px] rounded-md md:mr-4 bg-[#571f6f] flex items-center justify-center">
            <img src={plus} className="w-[18px] h-[18px] cursor-pointer" />
          </div>
        </NavLink>
      </div>
      <div className=" mt-2  rounded-md">
        <select className="w-[162px] h-[42.29px] bg-[#561f6f] rounded-md outline-none text-white px-2">
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
      <div className="flex flex-wrap gap-4 mt-4 w-full">
        {Unidata.map((unidata, index) => (
          <div
            className=" border border-[#B5B8BF] rounded-2xl w-[359px] h-[336px] "
            key={index}
          >
            <div className="flex  items-center gap-4 mt-4 ml-5 ">
              <img src={language} className="w-[41px] h-[41px]" />
              <div className="flex flex-col">
                <h1 className="text-[16px] font-semibold">{unidata.uni}</h1>
                <h3 className="text-[#571F6F] text-[10px]">
                  {unidata.program}
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
            <div className="flex justify-center gap-6 py-14">
              <button className="bg-[#571f6f] text-white text-[11.57px] font-medium w-[119px] h-[31px] rounded-md">
                Update
              </button>
              <button className="bg-white text-[#571f6f] border border-[#571f6f] text-[11.57px] font-medium w-[119px] h-[31px] rounded-md">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagePayments;
