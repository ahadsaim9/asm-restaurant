import border1 from "/public/images/underline_1.png";
import image1 from "/public/images/img-1.jpg";
import image2 from "/public/images/img-2.jpg";
import image3 from "/public/images/img-3.jpg";
import image4 from "/public/images/img-4.jpg";
import image5 from "/public/images/img-5.jpg";
import "./SpecialRecipes.css";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaConciergeBell } from "react-icons/fa";
import { Link } from "react-router-dom";
const SpecialRecipes = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className=" my-12 flex justify-center md:pr-16 pr-2   flex-col">
        <h2 className="pl-4 font-[Pacifico] text-2xl mb-6 text-red-700    ">
          Special Recipes
        </h2>
        <div className="relative">
          <h1 className="sm:text-3xl sm:pl-4 pl-2 uppercase mb-4 font-semibold ">
            Taste of Precious
          </h1>
          <span className="border_1">
            <img src={border1} alt="" />
          </span>
        </div>

        <p className="text-gray-500 text-justify mt-10 ">
          Lorem ipsum dolor sit amet Reiciendis quibusdam animi voluptas
          deleniti.
        </p>
        <p className="text-gray-500 text-justify mt-3">
          Dignissimos corporis sed nobis animi rem veniam.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 box-border">
        {/* ************** Item-->1 *************** */}
        <section className="recipes_all  relative">
          <div className="img_box">
            <Link to={"/"}>
              <img className=" w-full h-auto" src={image1} alt="" />
            </Link>
          </div>
          <div className="relative bg-gray-300 w-full">
            <p className="text-3xl  text-gray-600 absolute -top-5 left-1/2 transform -translate-x-1/2 ">
              <FaConciergeBell />
            </p>
            {/* ~~~~~~~~~ Inner Section ~~~~~~~~~ */}
            <section className="flex flex-col items-center gap-y-5 p-6 ">
              <h2 className="text-2xl font-semibold "> Hot Recipe 1</h2>
              <p className="flex text-orange-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
              <p>
                Lorem ipsum dolor consectetur adipisicing Lorem, ipsum dolor
                elit.
              </p>
              <h3 className="text-2xl text-orange-600 font-semibold italic">
                $3.99
              </h3>
            </section>
          </div>
        </section>
        {/* ************** Item-->2 *************** */}
        <section className="recipes_all  relative">
          <div className="img_box">
            <Link to={"/"}>
              <img className=" w-full h-auto" src={image2} alt="" />
            </Link>
          </div>
          <div className="relative bg-gray-300 w-full ">
            <p className="text-3xl text-gray-600 absolute -top-5 left-1/2 transform -translate-x-1/2 ">
              <FaConciergeBell />
            </p>
            {/* ~~~~~~~~~ Inner Section ~~~~~~~~~ */}
            <section className="flex flex-col items-center gap-y-5 p-6">
              <h2 className="text-2xl font-semibold "> Hot Recipe 1</h2>
              <p className="flex text-orange-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
              <p>
                Lorem ipsum dolor consectetur adipisicing Lorem, ipsum dolor
                elit.
              </p>
              <h3 className="text-2xl text-orange-600 font-semibold italic">
                $3.99
              </h3>
            </section>
          </div>
        </section>
        {/* ************** Item-->3 *************** */}
        <section className="recipes_all  relative">
          <div className="img_box">
            <Link to={"/"}>
              <img className=" w-full h-auto" src={image3} alt="" />
            </Link>
          </div>
          <div className="relative bg-gray-300 w-full">
            <p className="text-3xl text-gray-600 absolute -top-5 left-1/2 transform -translate-x-1/2 ">
              <FaConciergeBell />
            </p>
            {/* ~~~~~~~~~ Inner Section ~~~~~~~~~ */}
            <section className="flex flex-col items-center gap-y-5 p-6">
              <h2 className="text-2xl font-semibold "> Hot Recipe 1</h2>
              <p className="flex text-orange-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
              <p>
                Lorem ipsum dolor consectetur adipisicing Lorem, ipsum dolor
                elit.
              </p>
              <h3 className="text-2xl text-orange-600 font-semibold italic">
                $3.99
              </h3>
            </section>
          </div>
        </section>
        {/* ******
         ******** Item-->4 *************** */}
        <section className="recipes_all  relative">
          <div className="img_box">
            <Link to={"/"}>
              <img className=" w-full h-auto" src={image4} alt="" />
            </Link>
          </div>
          <div className="relative bg-gray-300 w-full">
            <p className="text-3xl text-gray-600 absolute -top-5 left-1/2 transform -translate-x-1/2 ">
              <FaConciergeBell />
            </p>
            {/* ~~~~~~~~~ Inner Section ~~~~~~~~~ */}
            <section className="flex flex-col items-center gap-y-5 p-6">
              <h2 className="text-2xl font-semibold "> Hot Recipe 1</h2>
              <p className="flex text-orange-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
              <p>
                Lorem ipsum dolor consectetur adipisicing Lorem, ipsum dolor
                elit.
              </p>
              <h3 className="text-2xl text-orange-600 font-semibold italic">
                $3.99
              </h3>
            </section>
          </div>
        </section>
        {/* ************** Item-->5 *************** */}
        <section className="recipes_all  relative">
          <div className="img_box">
            <Link to={"/"}>
              <img className=" w-full h-auto" src={image5} alt="" />
            </Link>
          </div>
          <div className="relative bg-gray-300 w-full">
            <p className="text-3xl text-gray-600 absolute -top-5 left-1/2 transform -translate-x-1/2 ">
              <FaConciergeBell />
            </p>
            {/* ~~~~~~~~~ Inner Section ~~~~~~~~~ */}
            <section className="flex flex-col items-center gap-y-5 p-6">
              <h2 className="text-2xl font-semibold "> Hot Recipe 1</h2>
              <p className="flex text-orange-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
              <p>
                Lorem ipsum dolor consectetur adipisicing Lorem, ipsum dolor
                elit.
              </p>
              <h3 className="text-2xl text-orange-600 font-semibold italic">
                $3.99
              </h3>
            </section>
          </div>
        </section>
        {/* ************** Item-->6 *************** */}
        <section className="recipes_all  relative">
          <div className="img_box">
            <Link to={"/"}>
              <img className=" w-full h-auto" src={image2} alt="" />
            </Link>
          </div>
          <div className="relative bg-gray-300 w-full ">
            <p className="text-3xl text-gray-600 absolute -top-5 left-1/2 transform -translate-x-1/2 ">
              <FaConciergeBell />
            </p>
            {/* ~~~~~~~~~ Inner Section ~~~~~~~~~ */}
            <section className="flex flex-col items-center gap-y-5 p-6">
              <h2 className="text-2xl font-semibold "> Hot Recipe 1</h2>
              <p className="flex text-orange-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />
              </p>
              <p>
                Lorem ipsum dolor consectetur adipisicing Lorem, ipsum dolor
                elit.
              </p>
              <h3 className="text-2xl text-orange-600 font-semibold italic">
                $3.99
              </h3>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecialRecipes;
