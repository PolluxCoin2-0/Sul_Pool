import sulmineLogo from "../assets/SulmineLogo.svg";
const Footer = () => {
  return (
    <div className="px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-28 p-10 flex flex-col md:flex-row justify-between mt-16 bg-darkGray  "
    style={{
      backdropFilter: "blur(34px)", // Optional: Adds a blur effect
      opacity: "0.7",
    }}>
      <div>
        <img src={sulmineLogo} alt="" className="w-12 lg:w-20 xl:w-32"/>
      </div>

      <div>
        <ul>
          <li className="text-white syne-font text-lg lg:text-xl mt-6 md:mt-0">Legal Documents</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">Legal Notice</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">Privacy Policy</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">Terms of Operation</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-white syne-font text-lg lg:text-xl mt-6 md:mt-0">Resources</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">Help Desk</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-white syne-font text-lg lg:text-xl mt-6 md:mt-0">Services</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">xyz.....</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">xyz.....</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-white syne-font text-lg lg:text-xl mt-6 md:mt-0">Other Platforms</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">xyz.....</li>
          <li className="text-white syne-font pt-2 md:pt-5 text-sm lg:text-[16px]">xyz.....</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
