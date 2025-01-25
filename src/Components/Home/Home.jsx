import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import SpecialRecipes from "../SpecialRecipes/SpecialRecipes";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Slider></Slider>
      <AboutUs></AboutUs>
      <SpecialRecipes></SpecialRecipes>
    </div>
  );
};

export default Home;
