import download from "../../public/icons/download.png";
import { useState } from "react";
import file from "../../public/icons/file.png";
import Eye from "../../public/icons/Eye.png";
import backarrow from "../../public/icons/servicebackarrow.png";
import { NavLink } from "react-router-dom";
import cross from "../../public/Images/cross.png";
import cv from "../../public/Images/usercv.png";
const ViewDetails = () => {
  const document = [
    {
      img: "download.png",

      img1: "file.png",
      id: "Document 1",
      id1: "8 MB",
    },

    {
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

  const [detailsPopup, setDetailsPopup] = useState(false);
  return (
    <div className="w-full h-full px-5 py-4">
      <div className="flex items-center gap-4 ">
        <NavLink to="/app/UsersDetails">
          <img
            src={backarrow}
            className="w-[36.03px] h-[36.43px] cursor-pointer"
          />
        </NavLink>
        <h1 className="font-medium text-black text-[36px] ">Users</h1>
      </div>
      <div className="md:flex gap-2 ">
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
              <div
                className="flex justify-center items-center mt-5 gap-2 border border-[#571f6f] rounded-lg w-[79px] h-[40px] cursor-pointer"
                onClick={() => setDetailsPopup(true)}
              >
                <img src={Eye} className="w-[20px] h-[20px]" />
                <button className="text-[#571f6f] text-[14px] font-medium">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {detailsPopup && (
        <div className=" fixed top-0 left-0 inset-0 bg-black/40 w-full h-screen   flex justify-center items-center">
          <div className=" bg-[#561f6f] md:w-[464px] md:h-[464px] rounded-2xl px-2 py-1 ">
            <div className="flex justify-center p-4 gap-0">
              <img src={cv} />
              <img
                src={cross}
                className="h-[36px] w-[36px] cursor-pointer  "
                onClick={() => setDetailsPopup(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
