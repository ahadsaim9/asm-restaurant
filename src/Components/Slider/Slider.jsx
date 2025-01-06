import "./Slider.css";
import "./Button.css";
const Slider = () => {
  // *********** slider.js ************

  return (
    <div className="container">
      <div className="slider">
        {/* <---------------- Start Item->1 ------------------> */}
        <div className="item  bg_image_1 bg_image_all relative ">
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
              adipisicing elit. Reprehenderit esse quo incidunt alias fugit
              totam corporis eaque consectetur repudiandae est.
            </p>
            <button className="btn after:bg-blue-[#68ab9f] ">Learn more</button>
          </div>
        </div>
        {/* <---------------- End Item->1 ------------------> */}
        {/* <---------------- Start Item->2 ------------------> */}
        <div className="item bg_image_2 bg_image_all relative">
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
              adipisicing elit. Reprehenderit esse quo incidunt alias fugit
              totam corporis eaque consectetur repudiandae est.
            </p>
            <button className="btn after:bg-blue-[#68ab9f] ">Learn more</button>
          </div>
        </div>
        {/* <---------------- End Item->2 ------------------> */}
        {/* <---------------- Start Item->3 ------------------> */}
        <div className="item bg_image_3 bg_image_all relative">
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
              adipisicing elit. Reprehenderit esse quo incidunt alias fugit
              totam corporis eaque consectetur repudiandae est.
            </p>
            <button className="btn after:bg-blue-[#68ab9f] ">Learn more</button>
          </div>
        </div>
        {/* <---------------- End Item->3 ------------------> */}
        {/* <---------------- Start Item->4 ------------------> */}
        <div className="item bg_image_4 bg_image_all relative">
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
              adipisicing elit. Reprehenderit esse quo incidunt alias fugit
              totam corporis eaque consectetur repudiandae est.
            </p>
            <button className="btn after:bg-blue-[#68ab9f] ">Learn more</button>
          </div>
        </div>
        {/* <---------------- End Item->4 ------------------> */}
      </div>
    </div>
  );
};

export default Slider;
