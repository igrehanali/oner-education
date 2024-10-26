import vertical from "../../public/icons/Morevertical.png";
import deleteicon from "../../public/icons/delete.png";
// import unibuilding from "../../public/Images/unibuilding.png";
import creditcard from "../../public/icons/creditcard.png";
import { useEffect, useRef, useState } from "react";
import health from "../../public/icons/health.png";
import esim from "../../public/icons/esim.png";
import arrow from "../../public/icons/servicebackarrow.png";
import home from "../../public/icons/home.png";
const PaymentAdditionalServices = () => {
  const services = [
    {
      img: vertical,
      img2: creditcard,
      title: "Blocked Account",
      button: "Add Services",
    },
    {
      img: vertical,
      img2: health,
      title: "Health & Travel Insurance",
      button: "Add Services",
    },
    {
      img: vertical,
      img2: esim,
      title: "E-Sim",
      button: "Add Services",
    },
    {
      img: vertical,
      img2: home,
      title: "Dormitory Placement",
      button: "Add Services",
    },
  ];

  const [visiblePopover, setVisiblePopover] = useState(null);
  const popoverRef = useRef([]);

  const togglePopover = (index) => {
    setVisiblePopover(visiblePopover === index ? null : index);
  };

  const [detailsPopup, setDetailsPopup] = useState(false);

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
    <div>
      <div className="px-2">
        <h1 className="font-semibold px-1 mt-2 text-[20px]">
          Additional Services Payments
        </h1>
        <div className="flex flex-wrap justify-start gap-6 p-1">
          {services.map((service, index) => (
            <div
              className="w-[258px] h-[248px] mt-2 bg-[#F5F5F5] rounded-xl cursor-pointer relative"
              key={index}
            >
              <div className="flex justify-end p-2">
                <img
                  src={service.img}
                  title={service.title}
                  className="w-[29px] h-[22px]"
                  onClick={() => togglePopover(index)} // Toggle the popover on click
                />
                {visiblePopover === index && (
                  <div
                    ref={(el) => (popoverRef.current[index] = el)} // Store each popover's ref
                    className="absolute top-6 right-8 rounded-md flex justify-center items-center shadow-md w-[90px] h-[35px] bg-[#FFFFFF]"
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

              <div className="flex flex-col items-center justify-center">
                <img
                  src={service.img2}
                  title={service.title}
                  className="h-[99px] w-[100px]"
                />
                <h2 className="text-[20px] mt-2 font-medium">
                  {service.title}
                </h2>
                <button
                  className="w-[108px] h-[43px] bg-[#561f6f] rounded-xl mt-4 text-white text-[11.57px] font-bold"
                  onClick={() => setDetailsPopup(true)}
                >
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {detailsPopup && (
          <div className="fixed top-0 left-0 inset-0 bg-black/40 flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-[464px] h-auto rounded-2xl px-4 py-2">
              <div className="p-4 flex flex-col gap-0">
                <div className="flex gap-4 items-center">
                  <img
                    src={arrow}
                    className="cursor-pointer h-[36px] w-[36px]"
                    onClick={() => setDetailsPopup(false)}
                    alt="Close"
                  />
                  <h1 className="font-medium text-lg md:text-[25px]">
                    Blocked Account
                  </h1>
                </div>
                <div className="flex justify-center">
                  <input
                    type="url"
                    placeholder="Enter URL here"
                    className="w-full h-[52.63px] mt-8 border border-[#571F6F] px-3 outline-none rounded-md placeholder:text-[#571F6F] placeholder:text-[16px] md:placeholder:text-[20px]"
                  />
                </div>
                <div className="flex gap-4 justify-center mt-10 flex-wrap">
                  <button className="w-full md:w-[162px] h-[42px] rounded-md bg-[#571f6f] text-white">
                    Save
                  </button>
                  <button
                    className="w-full md:w-[162px] h-[42px] rounded-md text-[#571f6f] bg-white border border-[#571f6f]"
                    onClick={() => setDetailsPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentAdditionalServices;
