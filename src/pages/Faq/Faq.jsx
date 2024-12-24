import Navbar from "../../layout/Navbar";
import leftBgImg from "../../assets/bgImage.png";
import rightBgImg from "../../assets/rightBg.png";
import { MdOutlineArrowCircleDown, MdOutlineArrowCircleUp } from "react-icons/md";
import { useState } from "react";

const Faq = () => {
    const [faqState, setFaqState] = useState({}); // State to manage each FAQ's open/close state

    const toggleFaq = (index) => {
        setFaqState((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the state of the specific FAQ
        }));
    };

    const faqData = [
        {
            question: "What is user testing?",
            answer:
                "User testing is a process in which real users evaluate a product or service by using it to find usability issues. Participants should represent the target audience of the product or service being tested.",
        },
        {
            question: "Why is user testing important?",
            answer:
                "User testing helps identify issues with your product early, improving user satisfaction and reducing development costs. Participants should represent the target audience of the product or service being tested.",
        },
        {
            question: "Who should participate in user testing?",
            answer:
                "Participants should represent the target audience of the product or service being tested. Participants should represent the target audience of the product or service being tested.",
        },
        {
            question: "What is the difference between UX and UI design?",
            answer:
                "Participants should represent the target audience of the product or service being tested. Participants should represent the target audience of the product or service being tested.",
        },
        {
            question: "What are the key principles of UX design?",
            answer:
                "Participants should represent the target audience of the product or service being tested. Participants should represent the target audience of the product or service being tested.",
        },
        
    ];

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

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col justify-center items-center px-2 md:px-28 mt-8   ">
                    <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-purpleGradient wallpoet-regular drop-shadow-lg tracking-wide">
                        Frequently Asked Questions
                    </p>

                    <div className="mt-8 space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#FFFFFF] bg-opacity-5 border-[1px] border-[#D9D9D9] border-opacity-30 px-2 md:px-6 py-4 lg:py-6 rounded-2xl w-[300px] md:w-[500px] lg:w-[600px] xl:w-[900px]"
                            >
                                <div
                                    className="flex flex-row items-center justify-between cursor-pointer"
                                    onClick={() => toggleFaq(index)} // Toggle FAQ on click
                                >
                                    <p className="syne-font text-sm md:text-lg lg:text-xl text-start">{faq.question}</p>
                                    {faqState[index] ? (
                                        <MdOutlineArrowCircleUp size={28} />
                                    ) : (
                                        <MdOutlineArrowCircleDown size={28} />
                                    )}
                                </div>
                                <div
                                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                                        faqState[index] ? "max-h-40" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-start syne-font text-xs md:text-sm mt-3">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
