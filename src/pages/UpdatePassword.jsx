import { NavLink } from "react-router-dom";
import backarrow from "../../public/icons/servicebackarrow.png";

const UpdatePassword = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#561f6f] px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 mx-auto">
        {/* Back Arrow */}
        <div className="flex items-start">
          <NavLink to="/ChangePassword">
            <img
              src={backarrow}
              alt="back"
              className="w-5 h-5 cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Form Content */}
        <div className="flex flex-col items-center mt-4">
          {/* New Password Input */}
          <input
            type="password"
            id="new-password"
            placeholder="Enter New Password"
            required
            className="block w-full max-w-md border border-[#B5B8BF] rounded-2xl py-3 mb-6 text-black text-lg lg:text-xl shadow-sm outline-none px-4 placeholder:text-black"
          />

          {/* Confirm Password Input */}
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
            className="block w-full max-w-md border border-[#B5B8BF] rounded-2xl py-3 mb-6 text-black text-lg lg:text-xl shadow-sm outline-none px-4 placeholder:text-black"
          />

          {/* Update Button */}
          <NavLink to="/">
            <button className="w-[200px] md:w-[406px] max-w-md bg-[#571f6f] text-white rounded-2xl font-medium text-lg lg:text-xl py-3 transition-all hover:bg-[#451451]">
              Update
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
