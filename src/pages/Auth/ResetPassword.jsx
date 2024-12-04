import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/leftBg.png";
import rightBgImg from "../../assets/rightBg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle signup
    console.log("User registered:", { email });
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
            className="p-4 md:p-6 shadow-lg w-[300px] md:w-[450px] bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl md:text-3xl text-center mb-2 wallpoet-regular">
              Reset Password
            </h2>
            <div className="flex justify-center">
              <p className="border-b-[1px] border-white border-opacity-80 w-52 md:w-64"></p>
            </div>
            <p className="syne-font text-white text-opacity-70 text-xs md:text-sm mt-2">
              Please enter your Email and we will send you <br />
              to link to reset your password
            </p>
            <div className="mb-8 mt-8">
              <label className="block syne-font text-start text-white text-xs mb-1 ">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-5 rounded-md bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full syne-font px-4 py-3 bg-violet text-black text-xs md:text-sm rounded-md hover:bg-[#851FA4] focus:outline-none"
            >
              Reset
            </button>
            <p className="syne-font text-center text-white text-opacity-70 text-xs md:text-sm mt-6">
              <a href="#" className="text-white hover:underline syne-font">
                Back to<span className="text-violet"> <Link to="/login"> Login</Link></span>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
