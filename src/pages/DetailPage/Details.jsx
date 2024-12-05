import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import HomeBg from "../../assets/HomeBg.png";
import sulLogo from "../../assets/sulLogo.png";

const tableData = [
  {
    program: "90 Days",
    startDate: "1 Jan 24/ 10:10:53",
    amount: "100 SUL",
    maturityDate: "31 Mar 24/ 10:10:53",
    timeLeft: "Done",
  },
  {
    program: "120 Days",
    startDate: "1 Jan 24/ 10:10:53",
    amount: "1000 SUL",
    maturityDate: "31 Mar 24/ 10:10:53",
    timeLeft: "30 /120",
  },
  {
    program: "80 Days",
    startDate: "1 Jan 24/ 10:10:53",
    amount: "100 SUL",
    maturityDate: "31 Mar 24/ 10:10:53",
    timeLeft: "Done",
  },
  {
    program: "100 Days",
    startDate: "1 Jan 24/ 10:10:53",
    amount: "1000 SUL",
    maturityDate: "31 Mar 24/ 10:10:53",
    timeLeft: "30 /120",
  },
];

const Details = () => {
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
      <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-28 mt-12 ">
        {/* refferal link */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-[1px] border-white border-opacity-20 rounded-2xl px-4 md:px-6 lg:px-8 py-5 md:py-4 lg:py-5">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 items-start md:items-center truncate">
            <p className="text-white opacity-60 syne-font text-sm md:text-[16px]">
              Referral Link:{" "}
            </p>
            <p className="text-white opacity-60 syne-font text-xs md:text-[16px] mt-2 md:mt-0">
              dvlkjvflsdkjvjkssderbh4dnbsfnd54sn5fb4g4
            </p>
          </div>
          <p className="text-white opacity-60 text-sm md:text-lg mt-2 md:mt-0">
            Copy
          </p>
        </div>

        {/* Deposit/Withdraw */}
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-6 lg:space-x-8 xl:space-x-16 w-full mt-10">
          <div className="w-full md:w-[50%] bg-white bg-opacity-15 border-[1px] border-white border-opacity-5 rounded-2xl">
            <p className="text-white text-center bg-lightGray rounded-t-2xl bg-opacity-20 py-3 lg:py-4 syne-font text-lg lg:text-xl">
              Deposit
            </p>
            <div className="flex flex-row items-center space-x-2 lg:space-x-4 justify-center px-2 lg:px-6 pt-6 md:pt-10 w-full">
              <input
                type="number"
                placeholder="Enter Amount"
                className=" border-[1px] border-white border-opacity-15 rounded-xl p-4 bg-darkGray outline-none w-[75%] placeholder:text-lightVoilet syne-font text-xs md:text-sm lg:text-[16px]"
              />
              <div
                className="flex flex-row items-center space-x-1 lg:space-x-2 xl:space-x-3 w-[25%] border-[1px] p-1 md:p-2 border-white border-opacity-15 rounded-xl bg-darkGray outline-none 
             placeholder:text-lightVoilet syne-font pt-2 pb-2 lg:pt-1 lg:pb-1 "
              >
                <img src={sulLogo} alt="" className="w-7 md:w-8 lg:w-10" />
                <p className="text-lightVoilet text-xs md:text-sm lg:text-[16px]">
                  SUL
                </p>
              </div>
            </div>
            <div className="flex justify-center m-3 md:m-4 lg:m-6">
              <button
                type="button"
                className="bg-voiletGradient w-full rounded-xl py-2 md:py-3 lg:py-4 syne-font text-lg md:text-xl font-bold"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="w-full md:w-[50%] bg-white bg-opacity-10 border-[1px] border-white border-opacity-5 rounded-2xl mt-8 md:mt-0">
            <p className="text-white text-center bg-lightGray rounded-t-2xl bg-opacity-30 py-3 lg:py-4 syne-font text-lg lg:text-xl">
              Withdraw
            </p>

            <div className="px-2 lg:px-6 pt-5 w-full">
              {/* Available Balance */}
              <p className="text-white syne-font">100000 Avl</p>
              <div className="flex flex-row items-center space-x-2 lg:space-x-4 justify-center ">
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className=" border-[1px] border-white border-opacity-15 rounded-xl p-4 bg-darkGray outline-none w-[75%] placeholder:text-lightVoilet syne-font text-xs md:text-sm lg:text-[16px]"
                />
                <div
                  className="flex flex-row items-center space-x-1 lg:space-x-2 xl:space-x-3 w-[25%] border-[1px] p-1 md:p-2 border-white border-opacity-15 rounded-xl bg-darkGray outline-none 
             placeholder:text-lightVoilet syne-font pt-2 pb-2 lg:pt-1 lg:pb-1 "
                >
                  <img src={sulLogo} alt="" className="w-7 md:w-8 lg:w-10" />
                  <p className="text-lightVoilet text-xs md:text-sm lg:text-[16px]">
                    SUL
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center m-3 md:m-4 lg:m-6">
              <button
                type="button"
                className="bg-voiletGradient w-full rounded-xl py-2 md:py-3 lg:py-4 syne-font text-lg md:text-xl font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* table */}
        <div
          className="bg-darkGray border-[1px] border-white border-opacity-5 rounded-2xl p-2 md:p-6 mt-10 overflow-x-scroll md:overflow-hidden"
          style={{
            backdropFilter: "blur(34px)", // Optional: Adds a blur effect
            opacity: "0.7",
          }}
        >
          <ul className="flex flex-row bg-blue justify-between space-x-8 p-3 md:p-4 rounded-md min-w-[600px]">
            <li className="text-white syne-font text-nowrap text-sm md:text-[16px]">
              Program
            </li>
            <li className="text-white syne-font text-nowrap text-sm md:text-[16px]">
              Start Date
            </li>
            <li className="text-white syne-font text-nowrap text-sm md:text-[16px]">
              Amount
            </li>
            <li className="text-white syne-font text-nowrap text-sm md:text-[16px]">
              Maturity Date
            </li>
            <li className="text-white syne-font text-nowrap text-sm md:text-[16px]">
              Time Left
            </li>
          </ul>

          {tableData.map((data, index) => {
            return (
              <div key={index} className="">
                <ul className="flex flex-row justify-between space-x-8 p-4 min-w-[600px]">
                  <li className="text-white syne-font text-nowrap text-xs md:text-[12px]">
                    {data.program}
                  </li>
                  <li className="text-white syne-font text-nowrap text-xs md:text-[12px]">
                    {data.startDate}
                  </li>
                  <li className="text-white syne-font text-nowrap text-xs md:text-[12px]">
                    {data.amount}
                  </li>
                  <li className="text-white syne-font text-nowrap text-xs md:text-[12px]">
                    {data.maturityDate}
                  </li>
                  <li className="text-white syne-font text-nowrap text-xs md:text-[12px]">
                    {data.timeLeft}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Details;
