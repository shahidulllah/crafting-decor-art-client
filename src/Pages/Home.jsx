import CraftItemCard from "../Components/CraftItem/CraftItemCard";
import Shipping from "../Components/Shipping/Shipping";
import Slider from "../Components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Shipping></Shipping>
            <CraftItemCard></CraftItemCard>
        </div>
    );
};

export default Home;