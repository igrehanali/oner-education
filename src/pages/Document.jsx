import { useState } from "react";
import download from "../../public/icons/download.png";
import file from "../../public/icons/file.png";
import Eye from "../../public/icons/Eye.png";
import { NavLink } from "react-router-dom";
const Document = () => {
  const [clickedButton, setClickedButton] = useState("All");
  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  const document = [
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },

    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },

    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },
  ];

  return (
    <div className="px-4 w-full h-full">
      <h1 className="font-medium text-[36px] text-[#333333]">Documents</h1>
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
      <div className="flex flex-wrap gap-4 md:overflow-y-scroll md:h-[80vh]">
        {document.map((doc, index) => (
          <div
            className="h-[266px] w-[230px] border border-[#E8E8E9] mt-7 rounded-lg bg-white "
            key={index}
          >
            <div className="flex justify-end p-2">
              <img
                src={download}
                className="h-[20px] w-[20px] cursor-pointer "
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <img src={file} className="w-[100px] h-[100px]" />
              <h1 className="text-[16px] font-semibold text-[#1A1C21]">
                {doc.id}
              </h1>
              <h3 className="text-[14px] text-[#667085] mt-1">{doc.id1}</h3>
              <NavLink to="/app/DocumentView">
                <div className="flex justify-center items-center mt-5 gap-2  border border-[#571f6f] rounded-lg w-[79px] h-[40px] cursor-pointer">
                  <img src={Eye} className="w-[20px] h-[20px]" />
                  <button className="text-[#571f6f] text-[14px] font-medium">
                    View
                  </button>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
