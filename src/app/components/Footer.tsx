import React from 'react';
import styles from '../../styles/dashboard.module.css';

const Footer = () => {
  return (
    <footer
      className="bg-indigo-500 text-white py-8 gradient-animation"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/2f/f7/94/2ff794bcd68f5572e836e52347540f12.jpg"
            alt="Vidya-Verse Logo"
            className="h-12 w-12 rounded-full mr-2"
          />
          <div>
            <h1 className="text-2xl font-bold">Vidya-Verse</h1>
            <p className="text-base mt-1">Explore the world of Vidya</p>
          </div>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="text-sm text-white hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-sm text-white hover:text-gray-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm text-white hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Vidya-Verse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
