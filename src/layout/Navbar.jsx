import { useState } from "react";
import SulpoolLogo from "../assets/sulpoolLogo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-28 pt-6">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row justify-between items-center">
        <Link to="/dashboard">
        <div>
          <img
            src={SulpoolLogo}
            alt="Sulpool Logo"
            className="md:w-[50%] lg:w-[60%] xl:w-full"
          />
        </div>
        </Link>

        <div className="flex flex-row justify-center items-center md:space-x-8 lg:space-x-12 xl:space-x-20 -ml-48">
          <Link to="/home">
          <p className="text-gray wallpoet-regular md:text-md lg:text-xl cursor-pointer">
            HOME
          </p>
          </Link>

          <Link to="/faq">
          <p className="text-gray wallpoet-regular md:text-md lg:text-xl">
            FAQ
          </p>
          </Link>
          <p className="text-gray wallpoet-regular md:text-md lg:text-xl">
            Twitter
          </p>
          <p className="text-gray wallpoet-regular md:text-md lg:text-xl">
            Telegram
          </p>
        </div>
         
        <div>
          <Link to="/login">
          <button
            type="button"
            className="text-black bg-white font-syne md:px-6 lg:px-8 md:py-2 lg:py-3 rounded-lg syne-font cursor-pointer"
          >
            LOGIN
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}

      <div className="md:hidden flex justify-between items-center ">
        <div>
          <img src={SulpoolLogo} alt="Sulpool Logo" className="w-[50%]" />
        </div>

        {/* Hamburger Icon or Close Icon */}
        <div>
          {openMenu ? (
            <CgClose
              onClick={() => setOpenMenu(false)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <CgMenuRight
              onClick={() => setOpenMenu(true)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black  shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link to="/home">
            <li>
              <p className="text-gray wallpoet-regular text-md font-bold">
                HOME
              </p>
            </li>
            </Link>

            <Link to="/faq">
            <li>
              <p className="text-gray wallpoet-regular text-md font-bold">
                FAQ
              </p>
            </li>
            </Link>
            <li>
              <p className="text-gray wallpoet-regular text-md font-bold">
                Twitter
              </p>
            </li>
            <li>
              <p className="text-gray wallpoet-regular text-md font-bold">
                Telegram
              </p>
            </li>
            
            <Link to="/login">
            <li>
              <button
                type="button"
                className="text-black bg-white font-syne px-6 py-2 rounded-lg text-md syne-font border border-gray-300 hover:bg-gray-100"
              >
                LOGIN
              </button>
            </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
