import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import "./Slider.css";
import "./Button.css";
const Slider = () => {
  return (
    <div className="container">
      {/* <---------------- Start Item->1 ------------------> */}
      <div className="slider bg_image_1 bg_image_all relative ">
        <span className="left-icon absolute md:top-80 top-40 left-5 text-5xl text-[#68ab9f] z-10 icon">
          <FaCircleChevronLeft></FaCircleChevronLeft>
        </span>
        <div className="inner-container ">
          <img src="/public/images/logo1.png" alt="" />
          <section>
            <h1 className="italic md:text-5xl font-semibold uppercase mt-[-30px] ">
              we serve quality food
            </h1>
            <hr className="border py-1.5 border-collapse mt-1 bg-[#68ab9f] rounded-md" />
          </section>
          <p className="w-3/4 italic text-justify mt-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit esse quo incidunt alias fugit totam corporis eaque
            consectetur repudiandae est. ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit esse quo incidunt alias fugit totam
            corporis eaque consectetur repudiandae est.
          </p>
          <button className="btn after:bg-blue-[#68ab9f] ">Learn more </button>
        </div>
        <span className="left-icon absolute md:top-80 top-40 right-5 text-5xl text-[#68ab9f] z-10 icon">
          <FaCircleChevronRight></FaCircleChevronRight>
        </span>
      </div>
      {/* <---------------- End Item->1 ------------------> */}
      {/* <---------------- Start Item->2 ------------------> */}
      <div className="slider bg_image_2 bg_image_all relative">
        <span className="left-icon absolute md:top-80 top-40 left-5 text-5xl text-[#68ab9f] z-10">
          <FaCircleChevronLeft></FaCircleChevronLeft>
        </span>
        <div className="inner-container">
          <img src="/public/images/logo1.png" alt="" />
          <section>
            <h1 className="italic md:text-5xl font-semibold uppercase mt-[-30px] ">
              we serve quality food
            </h1>
            <hr className="border py-1.5 border-collapse mt-1 bg-[#68ab9f] rounded-md" />
          </section>
          <p className="w-3/4 italic text-justify mt-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit esse quo incidunt alias fugit totam corporis eaque
            consectetur repudiandae est. ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit esse quo incidunt alias fugit totam
            corporis eaque consectetur repudiandae est.
          </p>
          <button className="btn after:bg-blue-[#68ab9f] ">Learn more </button>
        </div>
        <span className="left-icon absolute md:top-80 top-40 right-5 text-5xl text-[#68ab9f] z-10">
          <FaCircleChevronRight></FaCircleChevronRight>
        </span>
      </div>
      {/* <---------------- End Item->2 ------------------> */}
      {/* <---------------- Start Item->3 ------------------> */}
      <div className="slider bg_image_3 bg_image_all relative">
        <span className="left-icon absolute md:top-80 top-40 left-5 text-5xl text-[#68ab9f] z-10">
          <FaCircleChevronLeft></FaCircleChevronLeft>
        </span>
        <div className="inner-container">
          <img src="/public/images/logo1.png" alt="" />
          <section>
            <h1 className="italic md:text-5xl font-semibold uppercase mt-[-30px] ">
              we serve quality food
            </h1>
            <hr className="border py-1.5 border-collapse mt-1 bg-[#68ab9f] rounded-md" />
          </section>
          <p className="w-3/4 italic text-justify mt-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit esse quo incidunt alias fugit totam corporis eaque
            consectetur repudiandae est. ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit esse quo incidunt alias fugit totam
            corporis eaque consectetur repudiandae est.
          </p>
          <button className="btn after:bg-blue-[#68ab9f] ">Learn more </button>
        </div>
        <span className="left-icon absolute md:top-80 top-40 right-5 text-5xl text-[#68ab9f] z-10">
          <FaCircleChevronRight></FaCircleChevronRight>
        </span>
      </div>
      {/* <---------------- End Item->3 ------------------> */}
      {/* <---------------- Start Item->4 ------------------> */}
      <div className="slider bg_image_4 bg_image_all relative">
        <span className="left-icon absolute md:top-80 top-40 left-5 text-5xl text-[#68ab9f] z-10">
          <FaCircleChevronLeft></FaCircleChevronLeft>
        </span>
        <div className="inner-container">
          <img src="/public/images/logo1.png" alt="" />
          <section>
            <h1 className="italic md:text-5xl font-semibold uppercase mt-[-30px] ">
              we serve quality food
            </h1>
            <hr className="border py-1.5 border-collapse mt-1 bg-[#68ab9f] rounded-md" />
          </section>
          <p className="w-3/4 italic text-justify mt-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit esse quo incidunt alias fugit totam corporis eaque
            consectetur repudiandae est. ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit esse quo incidunt alias fugit totam
            corporis eaque consectetur repudiandae est.
          </p>
          <button className="btn after:bg-blue-[#68ab9f] ">Learn more </button>
        </div>
        <span className="left-icon absolute md:top-80 top-40 right-5 text-5xl text-[#68ab9f] z-10">
          <FaCircleChevronRight></FaCircleChevronRight>
        </span>
      </div>
      {/* <---------------- End Item->4 ------------------> */}
    </div>
  );
};

export default Slider;
