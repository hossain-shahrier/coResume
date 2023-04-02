import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {

    return (
        <footer className="absolute w-full bg-gray-800 pt-10 sm:mt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Navigation
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#home" className="my-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#guide" className="my-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Guide
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="my-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="my-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Social Media
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a
                                href="https://github.com/hossain-shahrier"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center my-2  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                <FaGithub className="mr-2" />
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/shahrier322/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center my-2  text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                <FaLinkedin className="mr-2" />
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Contact
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a
                                href="mailto:hossainshahrier.sh@gmail.com"
                                className="my-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                hossainshahrier.sh@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+880 171 829 5833"
                                className="my-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                            >
                                +880 171 829 5833
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-2">
                <div
                    className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl"
                >

                </div>
            </div>
        </footer>
    )
}
export default Footer