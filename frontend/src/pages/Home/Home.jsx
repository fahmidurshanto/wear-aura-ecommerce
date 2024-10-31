
import TrendingProducts from "../Shop/TrendingProducts";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Fade from "./Slider";

const Home = () => {
    return (
        <>
           <Fade></Fade>
           <Categories></Categories>
           <HeroSection></HeroSection>
           <TrendingProducts></TrendingProducts>
        </>
    );
};

export default Home;