import { NavLink } from "react-router-dom";
import backarrow from "../../public/icons/servicebackarrow.png";
import user from "../../public/Images/userimg.png";
const Notification = () => {
  const Chat = [
    {
      name: "Brian Tylor",
      last_message:
        "Change an issues from “In progress” to “Review” 📁Substance Digital Branding",
      time: "a minute ago",
    },
    {
      name: "Roye Marker",
      last_message: "Joined the Substance group. ",
      time: "about 3 hours ago",
    },
    {
      name: "Charlotte long",
      last_message: "Joined the Substance group. ",
      time: "about 3 hours ago",
    },
    {
      name: "Hi, Max",
      last_message: " Here is some tips to “Getting started with Substance",
      time: "a minute ago",
    },
    {
      name: "Mittie Thomas",
      last_message: "Change an issues from “In progress” to “Review”",
      time: "a minute ago",
    },
  ];
  return (
    <div>
      <div className="w-[93vw] p-4  mx-auto">
        <div className="   ">
          <div className="flex items-center gap-4">
            <NavLink to="/app/Dashboard">
              <img
                src={backarrow}
                className="w-[36.03px] h-[36.43px] cursor-pointer"
              />
            </NavLink>
            <h1 className="font-medium text-black text-[36px]">
              Notifications
            </h1>
          </div>
          <span className=" text-black font-semibold text-[20px] cursor-pointer">
            Mark all read
          </span>
        </div>
        <div className="overflow-y-scroll h-[79vh] ">
          {Chat.map((chat, index) => (
            <div
              className="flex py-2 mt-5  w-[845px] h-[90px] p-4 bg-[#F6F6F6] rounded-lg gap-4 items-center justify-start relative"
              key={index}
            >
              <div className="relative">
                <img src={user} alt="" className="h-12 w-12 " />
                <p className="h-3 w-3 rounded-full bg-[#14B13B] absolute top-0 right-0"></p>
              </div>
              <div className="">
                <h1 className="">{chat.name}</h1>
                <p className="text-[#84818A] ">{chat.last_message}</p>
              </div>
              <p className="text-[#84818A] absolute top-7 right-2">
                {chat.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
