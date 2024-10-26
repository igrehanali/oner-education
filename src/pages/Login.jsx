// import { NavLink } from "react-router-dom";
// import login from "../../public/icons/signinlogo.png";
// import { UserAuth } from "../contexts/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const { emailSignIn } = UserAuth();
//   // const navigate = useNavigate();
//   // const location = useLocation();
//   // const from = location.state?.from?.pathname || "/app"; // Default to /app if no original route

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setError("");

//     if (!email || !password) {
//       setError("Please fill in all fields.");

//       return;
//     }

//     try {
//       await emailSignIn(email, password);

//       navigate(from, { replace: true }); // Redirect to the original route, replacing login route in history
//     } catch (err) {
//       setError("Failed to sign in. Please check your email and password.");

//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-[#561f6f] px-4">
//       <div className="flex flex-col items-center justify-center h-[513px] w-full max-w-lg bg-white rounded-3xl p-8 lg:p-12 mx-auto">
//         {/* Login Image */}
//         <img
//           src={login}
//           alt="login"
//           className="h-36 w-36 lg:h-40 lg:w-44 object-cover "
//         />

//         {/* Title */}
//         <h1 className="font-semibold text-2xl lg:text-3xl mb-6 text-center">
//           Oner Education
//         </h1>

//         {/* Input Fields */}
//         <div className="w-full">
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             required
//             className="w-full border border-[#B5B8BF] rounded-2xl py-2.5 mb-4 text-black text-lg lg:text-xl px-4 placeholder:text-black shadow-sm outline-none"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             required
//             className="w-full border border-[#B5B8BF] rounded-2xl py-2.5 mb-4 text-black text-lg lg:text-xl px-4 placeholder:text-black shadow-sm outline-none"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />

//           {/* Forgot Password Link */}
//           <NavLink to="/ResetLink">
//             <p className="text-sm lg:text-base text-[#571f6f] text-right mb-6 cursor-pointer">
//               Forgot Password?
//             </p>
//           </NavLink>
//         </div>

//         {/* Login Button */}
//         <NavLink to="/app">
//           <button className="md:w-[406px] sm:w-[406px] w-[200px] bg-[#571f6f] text-white rounded-2xl font-medium text-xl lg:text-2xl py-3 transition-all hover:bg-[#451451]">
//             LOGIN
//           </button>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import login from "../../public/icons/signinlogo.png";
import { UserAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { emailSignIn } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/app";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await emailSignIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Failed to sign in. Please check your email and password.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#561f6f] px-4">
      <div className="flex flex-col items-center justify-center h-[513px] w-full max-w-lg bg-white rounded-3xl p-8 lg:p-12 mx-auto">
        {/* Login Image */}
        <img
          src={login}
          alt="login"
          className="h-36 w-36 lg:h-40 lg:w-44 object-cover"
        />

        {/* Title */}
        <h1 className="font-semibold text-2xl lg:text-3xl mb-6 text-center">
          Oner Education
        </h1>

        {/* Input Fields */}
        <div className="w-full">
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="w-full border border-[#B5B8BF] rounded-2xl py-2.5 mb-4 text-black text-lg lg:text-xl px-4 placeholder:text-black shadow-sm outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="w-full border border-[#B5B8BF] rounded-2xl py-2.5 mb-4 text-black text-lg lg:text-xl px-4 placeholder:text-black shadow-sm outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          {/* Forgot Password Link */}
          <NavLink to="/ResetLink">
            <p className="text-sm lg:text-base text-[#571f6f] text-right mb-6 cursor-pointer">
              Forgot Password?
            </p>
          </NavLink>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="md:w-[406px] sm:w-[406px] w-[200px] bg-[#571f6f] text-white rounded-2xl font-medium text-xl lg:text-2xl py-3 transition-all hover:bg-[#451451]"
        >
          LOGIN
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
