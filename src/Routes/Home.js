//Imports
import { useEffect } from 'react';

//Sections
import Presentation from "../Sections/Presentation";
import About from "../Sections/About";
import Produts from "../Sections/Products";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";

const Home = () => {
    
    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });

    return (
        <div id="Home">
            <Presentation />
            <About />
            <Produts />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;