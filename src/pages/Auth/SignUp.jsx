import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/leftBg.png";
import rightBgImg from "../../assets/rightBg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSendOtp = () => {
    // Add logic to send OTP
    console.log("OTP sent to:", email);
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!privacyChecked) {
      alert("You must agree to the privacy policy!");
      return;
    }
    // Add logic to handle signup
    console.log("User registered:", { email, password });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <img
          src={leftBgImg}
          alt=""
          className="h-[50%] lg:h-full w-48 md:w-72 lg:w-80 xl:w-auto object-cover"
        />
        <img
          src={rightBgImg}
          alt=""
          className="absolute top-80 md:top-20 right-0 h-[50%] md:h-[90%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center">
          <form
            className="p-4 md:p-6 shadow-lg w-[300px] md:w-[430px] bg-[#FFFFFF] bg-opacity-5 border-[1px] border-[#D9D9D9] border-opacity-30 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl md:text-3xl text-center mb-2 wallpoet-regular">
              Sign Up
            </h2>
            <div className="flex justify-center">
              <p className="border-b-[1px] border-white border-opacity-80 w-24 md:w-28"></p>
            </div>
            <p className="syne-font text-white text-opacity-70 text-xs md:text-sm mt-2">
              Welcome to SULMINE!
            </p>
            <div className="mb-6 mt-4">
              <label className="block syne-font text-start text-white text-xs mb-1 ">
                Email
              </label>
              <div className="flex flex-row items-center space-x-2 md:space-x-4 ">
                <input
                  type="email"
                  className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-5 rounded-lg bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="syne-font px-4 py-3 bg-violet text-black text-xs md:text-sm rounded-md hover:bg-[#851FA4] focus:outline-none text-nowrap "
                  onClick={handleSendOtp}
                >
                  {otpSent ? "Resend OTP" : "Send OTP"}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block syne-font text-start text-white text-xs mb-1 ">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-5 rounded-lg bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray "
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="syne-font block text-start  text-white text-xs mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-5 rounded-lg bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray"
                placeholder="Enter your confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded-2xl"
                checked={privacyChecked}
                onChange={() => setPrivacyChecked(!privacyChecked)}
                required
              />
              <label className="syne-font ml-1 text-[9px] md:text-xs text-[#FFFFFF] text-nowrap">
                I agree to the Terms and Conditions and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full syne-font px-4 py-3 bg-violet text-black text-xs md:text-sm rounded-md hover:bg-[#851FA4] focus:outline-none"
            >
              Register
            </button>
            <p className="syne-font text-center text-[#FFFFFF] text-opacity-70 text-xs md:text-sm mt-4">
              Already registered?{" "}
              <a href="#" className="text-[#ffffff] hover:underline syne-font">
                <Link to="/login"><span className="text-violet cursor-pointer">Login </span></Link>
                here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
