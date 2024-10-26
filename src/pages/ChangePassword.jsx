import { NavLink } from "react-router-dom";
import backarrow from "../../public/icons/servicebackarrow.png";

const ChangePassword = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#561f6f] px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 mx-auto">
        {/* Back Arrow */}
        <div className="flex items-start">
          <NavLink to="/ResetLink">
            <img
              src={backarrow}
              alt="back"
              className="w-5 h-5 cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Form Content */}
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-lg lg:text-xl text-center mb-8 w-full lg:w-[429px]">
            Code has been successfully sent to your email. Verify your code
            below to change the password.
          </h1>

          {/* Verification Code Inputs */}
          <div className="flex justify-center gap-4 mb-6">
            <input
              type="text"
              id="code1"
              required
              maxLength={1}
              className="w-14 h-14 lg:w-16 lg:h-16 border border-[#D9D9D9] rounded-xl text-center text-lg lg:text-xl shadow-sm outline-none"
            />
            <input
              type="text"
              id="code2"
              required
              maxLength={1}
              className="w-14 h-14 lg:w-16 lg:h-16 border border-[#D9D9D9] rounded-xl text-center text-lg lg:text-xl shadow-sm outline-none"
            />
            <input
              type="text"
              id="code3"
              required
              maxLength={1}
              className="w-14 h-14 lg:w-16 lg:h-16 border border-[#D9D9D9] rounded-xl text-center text-lg lg:text-xl shadow-sm outline-none"
            />
            <input
              type="text"
              id="code4"
              required
              maxLength={1}
              className="w-14 h-14 lg:w-16 lg:h-16 border border-[#D9D9D9] rounded-xl text-center text-lg lg:text-xl shadow-sm outline-none"
            />
          </div>

          {/* Verify Button */}
          <NavLink to="/UpdatePassword">
            <button className="w-[200px] md:w-[406px]  max-w-md bg-[#571f6f] text-white rounded-2xl font-medium text-lg lg:text-xl py-3 transition-all hover:bg-[#451451]">
              Verify
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
