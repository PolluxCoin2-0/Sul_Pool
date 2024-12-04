
import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/leftBg.png";
import rightBgImg from "../../assets/rightBg.png";

const Faq = () => {
  return (
    <div>
      <div>
        <Navbar/>
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

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center px-2 md:px-28">
          <p className="text-4xl md:text-7xl lg:text-4xl text-transparent bg-clip-text bg-purpleGradient wallpoet-regular drop-shadow-lg tracking-wide">Frequently Asked Questions</p>
          
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
