import { NavLink } from "react-router-dom";
import backarrow from "../../public/icons/servicebackarrow.png";

const ResetLink = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#561f6f] px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 mx-auto">
        {/* Back Arrow */}
        <div className="flex items-start">
          <NavLink to="/">
            <img
              src={backarrow}
              alt="back"
              className="w-5 h-5 cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Form Content */}
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-lg lg:text-xl text-center mb-8 w-full lg:w-[310px]">
            Enter your email so we can share with you a password reset link
          </h1>

          {/* Email Input */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="block w-full max-w-md border border-[#B5B8BF] rounded-2xl py-2.5 mb-6 text-black text-lg lg:text-xl px-4 shadow-sm outline-none placeholder:text-black"
          />

          {/* Send Link Button */}
          <NavLink to="/ChangePassword">
            <button className="w-[200px] max-w-md md:w-[406px] bg-[#571f6f] text-white rounded-2xl font-medium text-lg lg:text-xl py-3 transition-all hover:bg-[#451451]">
              Send Link
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResetLink;
