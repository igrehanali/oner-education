import arrow from "../../public/icons/servicebackarrow.png";
import User1 from "../../public/Images/userimg.png";
import screenshoot from "../../public/icons/screenshoot.png";
import emoji from "../../public/icons/emoji.png";
import add from "../../public/icons/add.png";
import sendvector from "../../public/icons/button.png";
import { NavLink } from "react-router-dom";
const Chats = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex items-center gap-4">
        <NavLink to="/app/UsersDetails">
          <img src={arrow} className="h-[36px] w-[36px]" />
        </NavLink>
        <h1 className="font-medium text-[36px]">Chats</h1>
      </div>
      <div className="md:flex gap-4">
        <div className="bg-white w-[300px] px-6 rounded-3xl shadow-lg mt-4 overflow-y-scroll h-[87vh] ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={User1}
              alt="User"
              className="rounded-full h-[113px] w-[113px] mt-6"
            />

            <h2 className="text-[20px] font-semibold">Tom Riddle</h2>
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
              <p className="text-[12.68px] ">Chelmsford, United Kingdom</p>
            </div>
            <div>
              <p className="text-[16.49px] font-medium ">Request Date</p>
              <p className="text-[12.68px] t">10/10/2024</p>
              <p className="text-[15.68px] mt-4">
                Status:<span className="text-[#44944F]"> Approved</span>{" "}
              </p>
            </div>
          </div>
          <div className="flex pt-14 pb-6  gap-4 items-center justify-center">
            <div>
              <button className="bg-[#571f6f] text-white font-semibold text-[12px] rounded-md h-[31.29px] w-[95.99px] ">
                Chat
              </button>
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

        <div className="flex flex-col p-4 bg-white  w-full mt-5 md:fit">
          <div className="mb-4">
            <div className="text-[#2E2C34] cursor-pointer">
              <h1 className="font-medium text-[22.25px]">Riley Cooper</h1>
              <h1 className="text-[15.55px]">Online</h1>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:overflow-y-scroll h-[90vh] md:h-[68vh]">
            <div className="">
              <div className="px-4 mt-10 flex gap-4">
                <img src={User1} alt="" className="h-9 w-9" />
                <p className="bg-white shadow-md border h-16 py-4 px-6 text-[#2E2C34] relative">
                  Hello! I think I found a bug!
                </p>
              </div>
              <span className="text-sm px-1 text-gray-500 ml-16">
                Today 11:52
              </span>
            </div>

            <div className="self-end bg-[#571f6f] rounded-md text-white relative p-4 max-w-[80%] md:max-w-[60%]">
              <p>
                Hello! I am sorry to hear this. Could you show me a screenshot
                about what happens?
              </p>
              <span className="text-sm text-gray-500 absolute md:-bottom-8 -bottom-8 right-0 p-2">
                Today 11:54
              </span>
            </div>

            <div className="self-start rounded-lg p-4 gap-4 flex">
              <img src={User1} alt="" className="h-9 w-9" />
              <div className="shadow-md border flex flex-col">
                <p className="p-4 relative text-[#2E2C34]">
                  Sure. Taking a screenshot<br></br> right now.<br></br>
                  <span className="">Your text goes here</span>
                </p>
                <img src={screenshoot} alt="" className="h-56 w-56" />
              </div>
            </div>
            <span className="text-sm px-1 text-gray-500  ml-16">
              Today 11:59
            </span>

            <div className="self-end bg-[#571f6f] rounded-md text-white relative p-4 max-w-[80%] md:max-w-[60%]">
              <p>Thanks! I am reporting this internally</p>
              <span className="text-sm text-gray-500 absolute md:-bottom-8 -bottom-8 right-0 p-2">
                Today 11:59
              </span>
            </div>
          </div>

          <div className="flex items-center shadow-md p-2 w-full md:w-fit fixed bottom-0 bg-white">
            <img src={emoji} alt="" className="h-6 w-6" />
            <input
              type="text"
              placeholder="Send your message..."
              className="flex-1 py-3 px-2 outline-none md:w-[730px] text-gray-900 placeholder:text-[#571f6f]"
            />
            <img src={add} alt="" className="h-6 w-6 mr-2" />
            <img
              src={sendvector}
              alt=""
              className="h-[40px] w-[40px] rounded-md p-2 mr-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
