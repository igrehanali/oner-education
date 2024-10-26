// import { NavLink } from "react-router-dom";
// import arrow from "../../public/icons/servicebackarrow.png";
import vertical from "../../public/icons/Morevertical.png";
import deleteicon from "../../public/icons/delete.png";
import unibuilding from "../../public/Images/unibuilding.png";
import school from "../../public/icons/school.png";
import sport from "../../public/icons/sports.png";
import language from "../../public/icons/language.png";
// import plus from "../../public/icons/plus.png";
// import creditcard from "../../public/icons/creditcard.png";
import { useEffect, useRef, useState } from "react";
import PaymentAdditionalServices from "./paymentAdditionalServices";
import { NavLink } from "react-router-dom";
const Payments = () => {
  const payments = [
    {
      img: vertical,
      img2: unibuilding,
      title: "Universities ",
      button: "View Details",
      link: "/app/UniPayments",
    },

    {
      img: vertical,
      img2: school,
      title: "High Schools",
      button: "View Details",
      link: "/app/SchoolPayments",
    },

    {
      img: vertical,
      img2: sport,
      title: "Sports Program",
      button: "View Details",
      link: "/app/SportsPayments",
    },
    {
      img: vertical,
      img2: language,
      title: "Language Program",
      button: "View Details",
      link: "/app/LanguagePayments",
    },
  ];

  const [visiblePopover, setVisiblePopover] = useState(null);
  const popoverRef = useRef([]);

  const togglePopover = (index) => {
    setVisiblePopover(visiblePopover === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        visiblePopover !== null &&
        popoverRef.current[visiblePopover] &&
        !popoverRef.current[visiblePopover].contains(event.target)
      ) {
        setVisiblePopover(null); // Hide popover if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visiblePopover]);

  return (
    <div className="w-full h-full ">
      <h1 className="font-medium px-2 md:text-[36px] text-[20px] text-[#333333]">
        Fees & Payment Management
      </h1>

      <div className="overflow-y-scroll h-[85vh]">
        <div className="flex flex-wrap justify-start gap-6 px-2 ">
          {payments.map((payment, index) => (
            <div
              className="w-[258px] h-[248px] mt-4 bg-[#F5F5F5] shadow-[#F5F5F5] rounded-xl  cursor-pointer"
              key={index}
            >
              <div className="flex  justify-end p-2 relative">
                <img
                  src={payment.img}
                  title={payment.title}
                  className="w-[29px] h-[22px]"
                  onClick={() => togglePopover(index)}
                />
                {visiblePopover === index && (
                  <div
                    ref={(el) => (popoverRef.current[index] = el)} // Store each popover's ref
                    className="absolute top-6 right-8 rounded-md  flex justify-center items-center shadow-md w-[90px] h-[35px] bg-[#FFFFFF]"
                  >
                    <div className="p-1">
                      <button
                        className="w-full py-2 text-left px-4  flex justify-center items-center gap-x-1 text-[#2D286B]"
                        onClick={() => {
                          // Handle delete logic here
                          console.log("Delete service", index);
                          togglePopover(null); // Hide popover after action
                        }}
                      >
                        <img
                          src={deleteicon}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center  justify-center ">
                <img
                  src={payment.img2}
                  title={payment.title}
                  className="h-[99px] w-[100px]"
                />
                <h2 className="text-[20px] mt-2 font-medium">
                  {payment.title}
                </h2>
                {/* <NavLink to="/app/BlockedViewDetails"> */}
                <NavLink to={`${payment?.link}`}>
                  <button className="w-[108px] h-[43px] bg-[#561f6f] rounded-xl mt-4 text-white text-[11.57px] font-bold">
                    {payment.button}
                  </button>
                </NavLink>
                {/* </NavLink> */}
              </div>
            </div>
          ))}
        </div>

        <PaymentAdditionalServices />
      </div>
    </div>
  );
};

export default Payments;
