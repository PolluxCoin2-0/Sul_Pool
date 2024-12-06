import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/leftBg1.png";
import rightBgImg from "../../assets/rightBg.png";

const Dashboard = () => {
  return (
    <div className="overflow-y-hidden h-auto">
      <div>
        <Navbar />
      </div>
      <div className="">
        <img
          src={leftBgImg}
          alt=""
          className="absolute top-60 md:top-60 h-[50%] lg:h-[50%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover "
        />

        <img
          src={rightBgImg}
          alt=""
          className="absolute top-80 md:top-20 right-0 h-[50%] md:h-[90%] w-48 md:w-72 lg:w-80 xl:w-auto object-cover"
        />

        {/* Text content centered between both images */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center px-2 md:px-28 mt-12">
          <p
            className="text-4xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-purpleGradient wallpoet-regular drop-shadow-lg tracking-wide"
            aria-label="Sulpool"
          >
            SULPOOL
          </p>

          <p className="text-sm md:text-lg lg:text-xl syne-font text-white">
            Non-Custodial Sul Staking
          </p>
          <p className="text-2xl md:text-3xl wallpoet-regular pt-6">APR</p>
          <p className="text-2xl md:text-3xl lg:text-4xl bg-violet px-8 py-3 text-black rounded-xl wallpoet-regular mt-2">
            21.00%
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-5 lg:space-x-8 pt-8">
            <div className="bg-white bg-opacity-10 px-12 md:px-16 lg:px-20 py-4 md:py-5 rounded-xl">
              <p className="syne-font">REQUIRED</p>
              <p className="wallpoet-regular text-violet">100 SUL</p>
            </div>

            <div className="bg-white bg-opacity-10 px-20 md:px-24 lg:px-28 py-4 md:py-5 rounded-xl mt-4 md:mt-0">
              <p className="syne-font">FEE</p>
              <p className="wallpoet-regular text-violet">1%</p>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="bg-darkGray px-4 md:px-8 lg:px-12 py-7 text-lg md:text-xl lg:text-2xl rounded-xl mt-8 syne-font"
            >
              START STAKING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
