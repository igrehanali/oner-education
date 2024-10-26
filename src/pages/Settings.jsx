import { useState } from "react";
import { NavLink } from "react-router-dom";

const Settings = () => {
  const [clickedButton, setClickedButton] = useState("AboutUs");
  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  const [detailsPopup, setDetailsPopup] = useState(false);
  return (
    <div className=" h-[100vh] w-[30vw] p-2 ">
      <h1 className="font-medium text-[36px]">Settings</h1>
      <div className="flex flex-col mt-3 gap-y-4   sm:w-auto  sm:mt-5 pb-5 px-3">
        <NavLink to="/app/MainSettings">
          <button
            className={`${
              clickedButton === "AboutUs"
                ? "bg-[#561f6f] text-white font-semibold px-8 text-start text-[20px] p-2 rounded-xl w-[250px] h-[54px] md:w-[350px]"
                : "text-black p-2  rounded-xl border px-8 border-[#B5B8BF] text-start text-[20px]  w-[250px] h-[54px] md:w-[350px]"
            }`}
            onClick={() => {
              handleButtonClick("AboutUs");
            }}
          >
            About Us
          </button>
        </NavLink>
        <NavLink to="/app/MainSettings/ContactUs">
          <button
            className={`${
              clickedButton === "ContactUs"
                ? "bg-[#561f6f] text-white font-semibold px-8 text-start text-[20px] p-2 rounded-xl  w-[250px] h-[54px] md:w-[350px]"
                : "text-black p-2  rounded-xl border px-8 border-[#B5B8BF] text-start text-[20px]  w-[250px] h-[54px] md:w-[350px]"
            }`}
            onClick={() => {
              handleButtonClick("ContactUs");
            }}
          >
            Contact Us
          </button>
        </NavLink>
        <NavLink to="/app/MainSettings/TermAndCondition">
          <button
            className={`${
              clickedButton === "Terms & Conditions"
                ? "bg-[#561f6f] text-white font-semibold px-8 text-start text-[20px] p-2 rounded-xl  w-[250px] h-[54px] md:w-[350px]"
                : "text-black p-2  rounded-xl border px-8 border-[#B5B8BF] text-start text-[20px]  w-[250px] h-[54px] md:w-[350px]"
            }`}
            onClick={() => {
              handleButtonClick("Terms & Conditions");
            }}
          >
            Terms & Conditions
          </button>
        </NavLink>
        <NavLink to="/app/MainSettings/PrivacyPolicy">
          <button
            className={`${
              clickedButton === "Privacy Policy"
                ? "bg-[#561f6f] text-white font-semibold px-8 text-start text-[20px] p-2 rounded-xl  w-[250px] h-[54px] md:w-[350px]"
                : "text-black p-2  rounded-xl border px-8 border-[#B5B8BF] text-start text-[20px] h-[54px]  w-[250px] md:w-[350px]"
            }`}
            onClick={() => {
              handleButtonClick("Privacy Policy");
            }}
          >
            Privacy Policy
          </button>
        </NavLink>
        <button
          className="text-[#ED0006] border border-[#b5b8bf] font-semibold px-8 text-start text-[20px] p-2 rounded-xl h-[54px]
           md:w-[350px] w-[250px]"
          onClick={() => setDetailsPopup(true)}
        >
          Logout
        </button>
      </div>
      {detailsPopup && (
        <div className="fixed top-0 left-0 inset-0 bg-black/40 w-full h-screen flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-[456px] h-auto md:h-[357px] rounded-2xl px-4 py-6">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-[#222222] font-bold text-[22px] md:text-[25.5px]">
                Log Out
              </h1>
              <p className="text-[16px] md:text-[19.5px] text-center">
                Are you sure you want to log out?
              </p>
              <button
                className="w-[255px] md:w-[388px] h-[50px] md:h-[61px] font-semibold text-[20px] md:text-[25.5px] rounded-3xl border border-[#571f6f] hover:bg-white hover:text-[#571f6f] bg-[#571f6f] text-white mt-5"
                onClick={() => setDetailsPopup(false)}
              >
                No
              </button>
              <NavLink to="/">
                <button className="w-[255px] md:w-[388px] h-[50px] md:h-[61px] font-semibold text-[20px] md:text-[25.5px] rounded-3xl border border-[#571f6f] text-[#571f6f] hover:bg-[#571f6f] hover:text-white mt-4">
                  Yes
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
