import { NavLink } from "react-router-dom";
import visa from "../../public/icons/passport.png";
import vertical from "../../public/icons/Morevertical.png";
import User1 from "../../public/Images/userimg.png";
import arrow from "../../public/icons/servicebackarrow.png";
import deleteicon from "../../public/icons/delete.png";
import { useState } from "react";
const VisaViewDetails = () => {
  const VisaCunSultation = [
    {
      img: vertical,
      img2: visa,
      title: "Visa Cunsultation",
      button: "View Request",
    },

    {
      img: vertical,
      img2: visa,
      title: "Visa Cunsultation",
      button: "View Request",
    },
    {
      img: vertical,
      img2: visa,
      title: "Visa Cunsultation",
      button: "View Request",
    },
  ];
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleDropdownDiv = (index) => {
    if (dropdownVisible === index) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(index);
    }
  };
  return (
    <div>
      <div className="flex items-center mt-4 p-2 gap-8 ">
        <NavLink to="/app/VisaConSultation">
          <img src={arrow} className="h-[32px] w-[32px] cursor-pointer" />
        </NavLink>
        <h1 className="font-medium text-[36px] text-[#333333]">
          Visa Cunsultation
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="bg-white w-[241px] h-[80vh] p-6 rounded-3xl shadow-lg mt-4  overflow-y-scroll h-[84vh]">
          <div className="flex flex-col justify-center items-center">
            <h1>Request Overview</h1>

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
            <div className="flex items-center justify-center py-20 cursor-pointer rounded-md">
              <select className="w-[110.99px] h-[36.29px] bg-[#561f6f] rounded-md cursor-pointer outline-none text-white px-2">
                <option value="option1">Approved</option>
                <option value="option1">Pending</option>
                <option value="option1">Reject</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 p-2">
          {VisaCunSultation.map((visa, index) => (
            <div
              className="w-[276px] h-[248px] mt-4 bg-[#F5F5F5] rounded-xl  cursor-pointer"
              key={index}
            >
              <div className="flex  justify-end p-2">
                <img
                  src={visa.img}
                  title={visa.title}
                  className="w-[29px] h-[22px]"
                  onClick={() => handleDropdownDiv(index)}
                />
                {dropdownVisible === index && (
                  <div className="absolute top-32 rounded-[10px]  shadow-md w-[120px] h-[52px] bg-[#FFFFFF]">
                    <div className="p-1">
                      <button className="w-full py-2 text-left px-4 hover:bg-gray-100 flex justify-center items-center gap-x-3 text-[#2D286B]">
                        <img
                          src={deleteicon}
                          alt=""
                          className="w-[20px] h-[20px] "
                        />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={visa.img2}
                  title={visa.title}
                  className="h-[82px] w-[77.98px]"
                />
                <h2 className="text-[16px]">{visa.title}</h2>
                <NavLink to="/app/VisaViewDetails">
                  <button className="w-[108px] h-[43px] bg-[#561f6f] rounded-xl mt-4 text-white text-[14.43px] font-medium">
                    {visa.button}
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaViewDetails;
