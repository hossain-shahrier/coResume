import { Element } from 'react-scroll';
import Home from './sections/home';
import Guide from './sections/guide';
import About from './sections/about';
import Contact from './sections/contact';
import Newsletter from './sections/newsletter';


const Main = () => {
    return (
        <main>
            <Element name="home">
                <Home />
            </Element>
            <Element name="guide">
                <Guide />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <Element name="newsletter">
                <Newsletter />
            </Element>
        </main>
    );
};

export default Main;
