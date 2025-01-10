import "./AboutUs.css";
import img1 from "/public/images/bg-image-3.jpg";
import img2 from "/public/images/bg-image-3.jpg";
import img3 from "/public/images/underline_1.png";
const AboutUs = () => {
  return (
    <div className="container1 h-svh w-full md:grid grid-cols-12  ">
      <div className="col-span-6  flex justify-center md:px-16 px-8   flex-col relative image-box ">
        <img className="image1" src={img1} alt="" />
        <img className="image2" src={img2} alt="" />
      </div>
      <div className=" col-span-6 flex justify-center md:px-16 px-8   flex-col">
        <h2 className="pl-4 font-[Pacifico] text-2xl mb-6 text-red-700    ">
          About Us
        </h2>
        <div className="relative">
          <h1 className="text-3xl pl-4 uppercase mb-4 font-semibold ">
            we are tasty
          </h1>
          <span className="image3">
            <img src={img3} alt="" />
          </span>
        </div>

        <p className="text-gray-500 text-justify mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quibusdam animi voluptas deleniti officia distinctio consectetur
          molestiae animi?
        </p>
        <p className="text-gray-500 text-justify mt-3">
          Dignissimos corporis sed nobis animi rem, velit officiis fugiat eum
          repudiandae quo iure reiciendis officia eveniet commodi in illum
          voluptas perspiciatis enim quam voluptate eos natus nemo laborum
          veniam. Sapiente voluptas impedit, voluptates quasi ipsam
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
