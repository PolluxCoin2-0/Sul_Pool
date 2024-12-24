import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/bgImage.png";
import rightBgImg from "../../assets/rightBg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
          className="absolute top-60 md:top-60 h-[50%] lg:h-[48%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover -left-[400px]"
          style={{rotate: "-45deg"}}
        />
        <img
          src={rightBgImg}
          alt=""
          className="absolute top-80 md:top-20 right-0 h-[50%] md:h-[90%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center mt-12">
          <form
            className="p-4 md:p-6 shadow-lg w-[300px] md:w-[450px] bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl md:text-3xl text-center mb-2 wallpoet-regular">
              Login
            </h2>
            <div className="flex justify-center">
              <p className="border-b-[1px] border-white border-opacity-80 w-24 md:w-28"></p>
            </div>
            <p className="syne-font text-white text-opacity-70 text-xs md:text-sm mt-2">
              Please enter your Email . To Login Sulmine
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
            <div className="mb-6">
              <label className="block syne-font text-start text-white text-xs mb-1 ">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 syne-font text-xs border-[1px] border-white border-opacity-5 rounded-md bg-blackGradient bg-transparent bg-opacity-5 placeholder:text-lightGray"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Link to="/resetpassword">
              <p className="text-end syne-font text-xs mt-2 mb-2 cursor-pointer">
                Forget Password?
              </p>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full syne-font px-4 py-3 bg-violet text-black text-sm rounded-md hover:bg-[#851FA4] focus:outline-none"
            >
              Submit
            </button>
            <p className="syne-font text-center text-white text-opacity-70 text-xs md:text-sm mt-6">
              Dont have an account?{" "}
              <a href="#" className="text-[#ffffff] hover:underline syne-font">
                <Link to="/signup"><span className="text-violet cursor-pointer">Register </span></Link>
                here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
