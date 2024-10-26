// Import your images
import uni from "../../public/Images/university.png";
import language from "../../public/Images/language.png";
import school from "../../public/Images/school.png";
import sport from "../../public/Images/sport.png";
// import creditcard from "../../public/icons/creditcard.png";
// import health from "../../public/icons/health.png";
// import esim from "../../public/icons/esim.png";
// import taxi from "../../public/icons/taxi.png";
// import home from "../../public/icons/home.png";
// import visa from "../../public/icons/passport.png";
// import banner from "../../public/images/banner.png";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Services = () => {
  const Application = [
    {
      img: uni,
      title: "University",
      link: "/app/University",
    },
    {
      img: school,
      title: "School",
      link: "/app/HighSchool",
    },
    {
      img: language,
      title: "Language",
      link: "/app/Languages",
    },
    {
      img: sport,
      title: "Sport",
      link: "/app/Sports",
    },
  ];

  return (
    <div className="bg-[#ffff] w-[100vw] h-[100vh] p-2  ">
      <h1 className="md:text-[36px] text-[20px] font-medium px-1">
        Application Management
      </h1>
      <div className="">
        <div className=" md:flex md:gap-4  pt-2 ">
          {Application.map((data, index) => (
            <NavLink to={`${data?.link}`} key={index}>
              <div className="w-[260px] h-[267px] mb-4 bg-[#F5F5F5] shadow-[#f5f5f5] flex flex-col items-center justify-center cursor-pointer ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[197px] h-[176px]"
                />
                <h1 className="text-[24px] font-medium">{data.title}</h1>{" "}
              </div>
            </NavLink>
          ))}
        </div>
        {/* <div>
          <h1 className="text-[20px] font-semibold ">Additional Services</h1>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/app/BlockedAccount">
              <div className="w-[109.32px] h-[100px] mt-4 bg-[#F5F5F5] rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <img src={creditcard} className="h-[50.12px] w-[50.12px]" />
                <h2 className="text-[10.86px]">Blocked Account</h2>
              </div>
            </NavLink>
            <NavLink to="/app/HealthAndTravelInsurance">
              <div className="w-[109.32px] h-[100px] mt-4 bg-[#F5F5F5] rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <img src={health} className="h-[50.12px] w-[50.12px]" />
                <h2 className="text-[10.86px] text-center">
                  Health & Travel Insurance
                </h2>
              </div>
            </NavLink>
            <NavLink to="/app/ESimPlans">
              <div className="w-[109.32px] h-[100px] mt-4 bg-[#F5F5F5] rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <img src={esim} className="h-[50.12px] w-[50.12px]" />
                <h2 className="text-[10.86px]">eSim Plans</h2>
              </div>
            </NavLink>
            <NavLink to="/app/AirportPickup">
              <div className="w-[109.32px] h-[100px] mt-4 bg-[#F5F5F5] rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <img src={taxi} className="h-[50.12px] w-[50.12px]" />
                <h2 className="text-[10.86px]">Airport Pickup</h2>
              </div>
            </NavLink>
            <NavLink to="/app/DormitoryPlacement">
              <div className="w-[109.32px] h-[100px] mt-4 bg-[#F5F5F5] rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <img src={home} className="h-[50.12px] w-[50.12px]" />
                <h2 className="text-[10.86px]">Dormitory Placement</h2>
              </div>
            </NavLink>
            <NavLink to="/app/VisaConsultation">
              <div className="w-[109.32px] h-[100px] mt-4 bg-[#F5F5F5] rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <img src={visa} className="h-[50.12px] w-[50.12px]" />
                <h2 className="text-[10.86px]">Visa Consultation</h2>
              </div>
            </NavLink>
          </div>
        </div> */}
        <div className="  ">
          <h1 className="text-[20px] md:text-[24px] font-semibold">Banners</h1>
          <div className="h-[178px] w-full max-w-[648px] rounded-xl bg-gradient-to-r from-[#561f7f] from-10% via-purple-400 via-50% to-[#65558f] to-90% ">
            <div className="p-4 font-medium text-[14px] md:text-[16px] text-white w-full md:w-[571px]">
              <p>Add Your Banner Here!</p>
              <p className="mt-2">
                Click here to upload and display your banner. Perfect for
                promoting events, products, or services!
              </p>
            </div>
            <div className="flex items-center justify-center  mt-5">
              <NavLink to="/app/banner">
                <button className="w-[140px] h-[30px] md:w-[161px] md:h-[32px] text-white rounded-md bg-[#571f6f] text-[11px] md:text-[12px] font-medium">
                  Add Your Banner Here!
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
