//Sections
import Presentation from "../Sections/Presentation";
import About from "../Sections/About";
import Produts from "../Sections/Products";

const Home = () => {
    return (
        <div id="Home">
            <Presentation />
            <About />
            <Produts />
        </div>
    );
};

export default Home;