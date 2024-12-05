import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import HomeBg from "../../assets/HomeBg.png";
import HomeImg from "../../assets/homeImg.png";

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${HomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: " top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Content (expandable) */}
      <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-28 ">
        {/* intro */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-16 md:mt-12 lg:mt-0">
          <div className="w-full md:w-[50%] lg:w-[40%]">
            <p className="text-white syne-font text-md md:text-lg lg:text-2xl">
              SULMINE STAKING MADE EASY
            </p>
            <p className="text-4xl md:text-5xl lg:text-7xl lg:text-[110px] text-transparent bg-clip-text bg-purpleGradient wallpoet-regular drop-shadow-lg tracking-wide mt-1">
              SULPOOL
            </p>
            <p className="text-white syne-font text-xs md:text-sm lg:text-xl mt-1">
              Sulaana staking service that allows users to <br />
              run validators easily and earn rewards while <br />
              retaining access to their Ether.
            </p>
            <button
              type="button"
              className="syne-font text-xs lg:text-sm bg-voiletGradient p-3 md:p-4 rounded-full text-black mt-4"
            >
              LEARN MORE
            </button>
          </div>

          <div className="w-full md:w-[50%] lg:w-[60%] mr-12 md:-mt-16">
            <img src={HomeImg} alt="" className="w-full" />
          </div>
        </div>

        {/* balance */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center space-x-0 md:space-x-6 lg:space-x-12 w-full">
          <div className="w-[60%] md:w-[25%] lg:w-[20%]">
            <p className="text-white syne-font text-md lg:text-lg pb-1 md:pb-2 mt-6 lg:mt-0">Pool Balance</p>
            <p className="text-lightVoilet syne-font bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl text-xl lg:text-2xl py-5 lg:py-7">
              $10100
            </p>
          </div>

          <div className="w-[60%] md:w-[25%] lg:w-[20%] mt-6 lg:mt-0">
            <p className="text-white syne-font text-md lg:text-lg pb-1 md:pb-2">APR</p>
            <p className="text-lightVoilet syne-font bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl text-xl lg:text-2xl py-5 lg:py-7">
              21%
            </p>
          </div>

          <div className="w-[60%] md:w-[25%] lg:w-[20%] mt-6 lg:mt-0">
            <p className="text-white syne-font text-md lg:text-lg pb-1 md:pb-2">Validator</p>
            <p className="text-lightVoilet syne-font bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl text-xl lg:text-2xl py-5 lg:py-7">
              3112
            </p>
          </div>

          <div className="w-[60%] md:w-[25%] lg:w-[20%] mt-6 lg:mt-0">
            <p className="text-white syne-font text-md lg:text-lg pb-1 md:pb-2">Sul Price</p>
            <p className="text-lightVoilet syne-font bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl text-xl lg:text-2xl py-5 lg:py-7">
              $1.65
            </p>
          </div>
        </div>

        {/* sulpool stake */}
        <div className="bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl mt-10 md:mt-20 text-center pt-6 md:pt-8 lg:pt-12 pb-6 md:pb-8 lg:pb-12">
          <p className="text-white wallpoet-regular text-3xl md:text-4xl lg:text-5xl">SULPOOL STAKE</p>

          {/*STAKING PLANS */}
          <div className="flex flex-col md:flex-row justify-around mt-6 md:mt-8 lg:mt-12 w-full space-x-0 md:space-x-4 lg:space-x-12 px-6 lg:px-20">

            <div className="bg-darkGray shadow-custom rounded-xl w-full md:w-[20%] pt-4 lg:pt-8 hover:bg-revpurpleGradient ">
              <p className="syne-font text-white text-xl lg:text-2xl">3 Month</p>
              <p className="syne-font text-white text-md lg:text-lg pt-2 lg:pt-4 pb-2 lg:pb-4">APR</p>
              <p className="syne-font text-black bg-violet px-8 md:px-6 lg:px-8 py-3 rounded-xl inline">9%</p>
              <p className="syne-font text-white pt-4 md:pt-8 text-sm">
                SulPool <br />Staking <br />
                Subscription
              </p>
              <p className="syne-font text-white pt-4 md:pt-6 text-sm">Referral</p>
              <p className="syne-font text-white text-md md:text-lg">6% APR</p>
              <p className="bg-[#313131] rounded-b-xl syne-font text-white mt-4 md:mt-6 py-3 md:py-4 hover:bg-voiletGradient">
                <button type="button">Stake</button>
              </p>
            </div>

            <div className="bg-darkGray  shadow-custom rounded-xl w-full md:w-[20%] pt-4 lg:pt-8 hover:bg-revpurpleGradient mt-4 md:mt-0">
              <p className="syne-font text-white text-xl lg:text-2xl">6 Month</p>
              <p className="syne-font text-white text-md lg:text-lg pt-2 lg:pt-4 pb-2 lg:pb-4">APR</p>
              <p className="syne-font text-black bg-violet  px-8 md:px-6 lg:px-8 py-3 rounded-xl inline">12.00%</p>
              <p className="syne-font text-white pt-4 md:pt-8 text-sm">
                SulPool <br />Staking <br />
                Subscription
              </p>
              <p className="syne-font text-white pt-4 md:pt-6 text-sm">Referral</p>
              <p className="syne-font text-white text-md md:text-lg">7% APR</p>
              <p className="bg-[#313131] rounded-b-xl syne-font text-white mt-4 md:mt-6 py-3 md:py-4 hover:bg-voiletGradient">
                <button type="button">Stake</button>
              </p>
            </div>

            <div className="bg-darkGray  shadow-custom rounded-xl w-full md:w-[20%] pt-4 lg:pt-8 hover:bg-revpurpleGradient mt-4 md:mt-0">
              <p className="syne-font text-white text-xl lg:text-2xl">12 Month</p>
              <p className="syne-font text-white text-md lg:text-lg pt-2 lg:pt-4 pb-2 lg:pb-4">APR</p>
              <p className="syne-font text-black bg-violet  px-8 md:px-6 lg:px-8 py-3 rounded-xl inline">15.00%</p>
              <p className="syne-font text-white pt-4 md:pt-8 text-sm">
                SulPool <br />Staking <br />
                Subscription
              </p>
              <p className="syne-font text-white pt-4 md:pt-6 text-sm">Referral</p>
              <p className="syne-font text-white text-md md:text-lg">8% APR</p>
              <p className="bg-[#313131] rounded-b-xl syne-font text-white mt-4 md:mt-6 py-3 md:py-4 hover:bg-voiletGradient">
                <button type="button">Stake</button>
              </p>
            </div>

            <div className="bg-darkGray  shadow-custom rounded-xl w-full md:w-[20%] pt-4 lg:pt-8 hover:bg-revpurpleGradient mt-4 md:mt-0">
              <p className="syne-font text-white text-xl lg:text-2xl">24 Month</p>
              <p className="syne-font text-white text-md lg:text-lg pt-2 lg:pt-4 pb-2 lg:pb-4">APR</p>
              <p className="syne-font text-black bg-violet px-8 md:px-6 lg:px-8 py-3 rounded-xl inline">18.00%</p>
              <p className="syne-font text-white pt-4 md:pt-8 text-sm">
                SulPool <br />Staking <br />
                Subscription
              </p>
              <p className="syne-font text-white pt-4 md:pt-6 text-sm">Referral</p>
              <p className="syne-font text-white text-md md:text-lg">9% APR</p>
              <p className="bg-[#313131] rounded-b-xl syne-font text-white mt-4 md:mt-6 py-3 md:py-4 hover:bg-voiletGradient">
                <button type="button">Stake</button>
              </p>
            </div>

            <div className="bg-darkGray  shadow-custom rounded-xl w-full md:w-[20%] pt-4 lg:pt-8 hover:bg-revpurpleGradient mt-4 md:mt-0">
              <p className="syne-font text-white text-xl lg:text-2xll">36 Month</p>
              <p className="syne-font text-white text-md lg:text-lg pt-2 lg:pt-4 pb-2 lg:pb-4">APR</p>
              <p className="syne-font text-black bg-violet px-8 md:px-6 lg:px-8 py-3 rounded-xl inline">21.00%</p>
              <p className="syne-font text-white pt-4 md:pt-8 text-sm">
                SulPool <br />Staking <br />
                Subscription
              </p>
              <p className="syne-font text-white pt-4 md:pt-6 text-sm">Referral</p>
              <p className="syne-font text-white text-md md:text-lg">10% APR</p>
              <p className="bg-[#313131] rounded-b-xl syne-font text-white mt-4 md:mt-6 py-3 md:py-4 hover:bg-voiletGradient">
                <button type="button">Stake</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
