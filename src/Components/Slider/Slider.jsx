import { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import "./Slider.css";
import "./Button.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const backgroundsImg = [
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === backgroundsImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgroundsImg.length - 1 : prevIndex - 1
    );
  };

  /* *************** item start  *************** */

  return (
    <div className="container1 ">
      <div
        className="slider  bg_image_all"
        style={{
          backgroundImage: `url(${backgroundsImg[currentIndex]})`,
        }}
      >
        <button className="prev-btn " onClick={handlePrevious}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="inner-container">
          <img src="/images/logo1.png" alt="Slider Logo" />
          <section>
            <h1 className="italic text-gray-500 md:text-5xl font-semibold uppercase mt-[-30px]">
              We Serve Quality Food
            </h1>
            <hr className="border py-1.5 border-collapse mt-1 bg-[#68ab9f] rounded-md" />
          </section>

          <p
            id="slide_des"
            className="px-7 sm:px-10 md:px-0 md:w-2/4 font-semibold italic text-justify mt-6 text-gray-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit esse quo is this body Lorem ipsum dolor sit. incidunt
            alias fugit totam corporis eaque this consectetur repudiandae est.
            <Link>
              <span className="ml-2 font-bold text-orange-600"> See more</span>
            </Link>
          </p>
          <button className="btn after:bg-[#68ab9f]">Learn More</button>
        </div>

        <button className="next-btn" onClick={handleNext}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
