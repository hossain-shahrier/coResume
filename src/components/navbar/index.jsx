import './index.css';
import CustomButton from '../button';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full h-20 flex items-center bg-white shadow-md z-50">
            <div className="w-full">
                <div className="max-w-5xl mr-auto ml-auto">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center justify-start text-3xl">
                            <div className='gap-0.5 font-poppins gradient-text'>
                                <span className='text-lg'>Co</span>
                                <span className="gradient-text">resume.</span>
                            </div>
                        </Link>
                        <div className="flex items-center gap-6">
                            <ScrollLink to="home" spy={true} smooth={true} duration={500} className="text-gray-500 hover:text-gray-700 cursor-pointer">Home</ScrollLink>
                            <ScrollLink to="guide" spy={true} smooth={true} duration={500} className="text-gray-500 hover:text-gray-700 cursor-pointer">Guide</ScrollLink>
                            <ScrollLink to="about" spy={true} smooth={true} duration={500} className="text-gray-500 hover:text-gray-700 cursor-pointer">About</ScrollLink>
                            <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="text-gray-500 hover:text-gray-700 cursor-pointer">Contact</ScrollLink>
                            <CustomButton text="Create Resume" type="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
