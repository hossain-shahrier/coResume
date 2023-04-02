import Navbar from '../../components/navbar'
import Main from '../Main';
import Footer from '../../components/footer';
import { animateScroll as scroll } from 'react-scroll';

const Layout = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Navbar scrollToTop={scrollToTop} />
            <Main />
            <Footer />
        </>
    );
};

export default Layout;
