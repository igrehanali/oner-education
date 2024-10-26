import { NavLink } from "react-router-dom";
import taxi from "../../public/icons/taxi.png";
import vertical from "../../public/icons/Morevertical.png";
import arrow from "../../public/icons/servicebackarrow.png";
import deleteicon from "../../public/icons/delete.png";
import { useState } from "react";

const AirportPickup = () => {
  const Airport = [
    {
      img: vertical,
      img2: taxi,
      title: "Air port Pickup",
      button: "View Request",
    },

    {
      img: vertical,
      img2: taxi,
      title: "Air port Pickup",
      button: "View Request",
    },

    {
      img: vertical,
      img2: taxi,
      title: "Air port Pickup",
      button: "View Request",
    },
    {
      img: vertical,
      img2: taxi,
      title: "Air port Pickup",
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
        <NavLink to="/app/Services">
          <img src={arrow} className="h-[32px] w-[32px] cursor-pointer" />
        </NavLink>
        <h1 className="font-medium text-[36px] text-[#333333]">
          Airport Pickup
        </h1>
      </div>
      <div className="flex flex-wrap gap-2 p-2">
        {Airport.map((port, index) => (
          <div
            className="w-[276px] h-[248px] mt-4 bg-[#F5F5F5] rounded-xl  cursor-pointer"
            key={index}
          >
            <div className="flex  justify-end p-2">
              <img
                src={port.img}
                title={port.title}
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
                src={port.img2}
                title={port.title}
                className="h-[82px] w-[77.98px]"
              />
              <h2 className="text-[16px]">{port.title}</h2>
              <NavLink to="/app/AirportViewDetails">
                <button className="w-[108px] h-[43px] bg-[#561f6f] rounded-xl mt-4 text-white text-[14.43px] font-medium">
                  {port.button}
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirportPickup;
