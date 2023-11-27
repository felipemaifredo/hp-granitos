//Imports
import { useEffect } from 'react';


const AboutPage = () => {

    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
          });
        };
        scrollToTop();
    });

    return (
        <div id="AboutPage">
            <h1>AboutPage</h1>
        </div>
    );
};

export default AboutPage;