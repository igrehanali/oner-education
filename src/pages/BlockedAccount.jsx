import { NavLink } from "react-router-dom";
import creditcard from "../../public/icons/creditcard.png";
import vertical from "../../public/icons/Morevertical.png";
import deleteicon from "../../public/icons/delete.png";
import arrow from "../../public/icons/servicebackarrow.png";
import { useState } from "react";
const BlockedAccount = () => {
  const BlockedAccount = [
    {
      img: vertical,
      img2: creditcard,
      title: "Blocked Account",
      button: "View Request",
    },

    {
      img: vertical,
      img2: creditcard,
      title: "Blocked Account",
      button: "View Request",
    },

    {
      img: vertical,
      img2: creditcard,
      title: "Blocked Account",
      button: "View Request",
    },
    {
      img: vertical,
      img2: creditcard,
      title: "Blocked Account",
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
    <div className="w-full h-full">
      <div className="flex items-center mt-4 p-2 gap-8 ">
        <NavLink to="/app/Services">
          <img src={arrow} className="h-[32px] w-[32px] cursor-pointer" />
        </NavLink>
        <h1 className="font-medium text-[36px] ">Blocked Account</h1>
      </div>
      <div className="flex flex-wrap gap-2 p-2">
        {BlockedAccount.map((blocked, index) => (
          <div
            className="w-[276px] h-[248px] mt-4 bg-[#F5F5F5] rounded-xl  cursor-pointer"
            key={index}
          >
            <div className="flex  justify-end p-2">
              <img
                src={blocked.img}
                title={blocked.title}
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
                src={blocked.img2}
                title={blocked.title}
                className="h-[100px] w-[108px]"
              />
              <h2 className="text-[16px]">{blocked.title}</h2>
              <NavLink to="/app/BlockedViewDetails">
                <button className="w-[108px] h-[43px] bg-[#561f6f] rounded-xl mt-4 text-white text-[14.43px] font-medium">
                  {blocked.button}
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedAccount;
