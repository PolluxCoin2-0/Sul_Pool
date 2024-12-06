import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/leftBg1.png";
import rightBgImg from "../../assets/rightBg.png";
import { useState } from "react";

const ConfirmResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle signup
    console.log("User registered:", { password });
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
          className="absolute top-60 md:top-60 h-[50%] lg:h-[50%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover"
        />
        <img
          src={rightBgImg}
          alt=""
          className="absolute top-80 md:top-20 right-0 h-[50%] md:h-[90%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center">
          <form
            className="p-4 md:p-6 shadow-lg w-[300px] md:w-[430px] bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl md:text-3xl text-center mb-2 wallpoet-regular">
              Reset Password
            </h2>
            <div className="flex justify-center">
              <p className="border-b-[1px] border-white border-opacity-80 w-52 md:w-64"></p>
            </div>
            <p className="syne-font text-[#FFFFFF] text-opacity-70 text-xs md:text-sm mt-2">
              Please enter your Email . To Login Sulmine
            </p>

            <div className="mt-6 mb-6">
              <label className="block syne-font text-start text-white text-xs mb-1 ">
                New Password
              </label>
              <input
                type="password"
                className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-5 rounded-md bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray "
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="syne-font block text-start  text-white text-xs mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-30 rounded-md bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray "
                placeholder="Enter your new password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <p className="text-end syne-font text-xs mt-2">
                Forget Password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full syne-font px-4 py-3 bg-violet text-black text-xs md:text-sm rounded-md hover:bg-[#851FA4] focus:outline-none"
            >
              Submit
            </button>
            <p className="syne-font text-center text-white text-opacity-70 text-xs md:text-sm mt-4">
              <a href="#" className="text-white hover:underline syne-font">
                Back to<span className="text-violet"> Login </span>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmResetPassword;
