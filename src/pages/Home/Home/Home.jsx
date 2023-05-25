import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Feature></Feature>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <FeaturedItem></FeaturedItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;