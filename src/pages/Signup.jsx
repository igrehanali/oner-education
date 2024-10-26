import { NavLink } from "react-router-dom";
import login from "../../public/Images/login.png";
import user from "../../public/Images/signupuser.png";

const Signup = () => {
  return (
    <div className="h-[100vh] w-screen flex flex-col-reverse lg:flex-row mx-auto">
      <div className="w-full flex flex-col lg:h-[100vh] justify-center h-1/2 items-center bg-white ">
        <img
          src={login}
          alt="login"
          className="lg:h-[240px] lg:w-[343px] h-[150px] w-[150px] object-cover  overflow-hidden "
        />
      </div>

      <div className=" flex flex-col items-center justify-center lg:h-[100vh] h-1/2  lg:px-20 bg-[#f6f6f6]  w-full ">
        <h1 className="text-3xl font-bold text-[#561f6f] mt-6 "> Sign UP </h1>
        {/* <div className="rounded-full border-2 border-[#B5B8BF] h-[100px] w-[100px] flex justify-center items-center">
          {/* <img src={user} className="w-[100px] h-[100px]" /> */}
        {/* </div>  */}
        <input
          type="text"
          id="text"
          placeholder="Name"
          required
          className="block lg:w-[406px] rounded-xl w-[90vw] py-2.5 mb-4 mt-6 h-[55px] text-black shadow-sm outline-none   sm:text-sm sm:leading-6 px-3 "
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          className="block lg:w-[406px] w-[90vw] rounded-xl py-2.5 mb-4 h-[55px] text-black shadow-sm  outline-none  sm:text-sm sm:leading-6 px-3"
        />

        <input
          type="tel"
          id="number"
          placeholder="Phone Number"
          required
          className="block lg:w-[406px] rounded-xl w-[90vw] py-2.5 mb-4 h-[55px] text-black shadow-sm outline-none   sm:text-sm sm:leading-6 px-3 "
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          className="block lg:w-[406px] rounded-xl w-[90vw] py-2.5 mb-4 h-[55px] text-black shadow-sm outline-none   sm:text-sm sm:leading-6 px-3 "
        />

        <input
          type="password"
          id="password"
          placeholder="Confirm Password"
          required
          className="block lg:w-[406px] rounded-xl w-[90vw] py-2.5 mb-8 h-[55px] text-black shadow-sm outline-none   sm:text-sm sm:leading-6 px-3 "
        />
        <p className="text-[#561f6f]  mb-8 w-[390px] text-sm">
          By signing up you will agree to the{" "}
          <u className="cursor-pointer">Terms of Use</u> and{" "}
          <u className="cursor-pointer">Privacy Policy</u> of OurApp
        </p>
        <NavLink to="/">
          <button className="lg:w-[406px] w-[90vw] bg-[#561f6f] text-white rounded-xl h-[55px] py-2.5 px-3">
            Sign UP
          </button>
        </NavLink>

        <h2 className="py-10">
          Already have an account?
          <NavLink to="/">
            <button className="text-[#561f6f]">Login</button>
          </NavLink>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
