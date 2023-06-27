import React from 'react';
import styles from '../../styles/dashboard.module.css';

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-8 flex justify-between items-center gradient-animation"
      style={{ position: 'sticky', zIndex: 999 }}
    >
      <div className="flex items-center">
        <img
          src="https://i.pinimg.com/736x/2f/f7/94/2ff794bcd68f5572e836e52347540f12.jpg"
          alt="Vidya-Verse Logo"
          className="h-14 rounded-full mr-2"
        />
        <div>
          <h1 className="text-2xl font-bold">Vidya-Verse</h1>
          <p className="text-lg">Explore the world of Vidya</p>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-lg text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-lg text-white hover:text-gray-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg text-white hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
