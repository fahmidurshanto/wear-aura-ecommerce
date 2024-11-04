
import Blogs from "../Blogs/Blogs";
import TrendingProducts from "../Shop/TrendingProducts";
import Categories from "./Categories";
import DealsSection from "./DealsSection";
import HeroSection from "./HeroSection";
import PromoBanner from "./PromoBanner";
import Fade from "./Slider";

const Home = () => {
    return (
        <>
           <Fade></Fade>
           <Categories></Categories>
           <HeroSection></HeroSection>
           <TrendingProducts></TrendingProducts>
           <DealsSection></DealsSection>
           <PromoBanner></PromoBanner>
           <Blogs></Blogs>
        </>
    );
};

export default Home;