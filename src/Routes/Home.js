//Sections
import Presentation from "../Sections/Presentation";
import About from "../Sections/About";
import Produts from "../Sections/Products";
import Projects from "../Sections/Projects";

const Home = () => {
    return (
        <div id="Home">
            <Presentation />
            <About />
            <Produts />
            <Projects />
        </div>
    );
};

export default Home;