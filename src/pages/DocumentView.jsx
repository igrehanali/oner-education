import User1 from "../../public/Images/userimg.png";
import download from "../../public/icons/download.png";
import file from "../../public/icons/file.png";
import Eye from "../../public/icons/Eye.png";
import backarrow from "../../public/icons/servicebackarrow.png";
import { NavLink } from "react-router-dom";
const DocumentView = () => {
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
  ];
  return (
    <div className="h-full w-full">
      <div className="flex items-center gap-4">
        <NavLink to="/app/Document">
          <img
            src={backarrow}
            className="w-[36.03px] h-[36.43px] cursor-pointer"
          />
        </NavLink>
        <h1 className="font-medium text-black text-[36px]">Documents</h1>
      </div>
      <div className="md:flex gap-4">
        <div className="bg-white md:w-[350px] w-fit px-6 rounded-3xl shadow-lg mt-4 md:overflow-y-scroll md:h-[85vh] ">
          <div className="flex flex-col justify-center items-center">
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
          </div>
          <div className="flex pt-10 pb-6  gap-4 items-center justify-center">
            <div>
              <NavLink to="/app/Chats">
                <button className="bg-[#571f6f] text-white font-semibold text-[12px] rounded-md h-[31.29px] w-[95.99px] ">
                  Chat
                </button>
              </NavLink>
            </div>
            <div className="flex items-center justify-center cursor-pointer rounded-md">
              <select className="w-[95.99px] h-[31.29px] bg-[#561f6f] rounded-md cursor-pointer outline-none font-semibold text-[12px] text-white px-2">
                <option value="option1">Approved</option>
                <option value="option1">Pending</option>
                <option value="option1">Reject</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 overflow-y-scroll h-[90vh]">
          {document.map((doc, index) => (
            <div
              className="h-[266px] w-[230px] border border-[#E8E8E9] mt-4 rounded-lg bg-white "
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

                <div className="flex justify-center items-center mt-5 gap-2  border border-[#571f6f] rounded-lg w-[79px] h-[40px] cursor-pointer">
                  <img src={Eye} className="w-[20px] h-[20px]" />
                  <button className="text-[#571f6f] text-[14px] font-medium">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentView;
