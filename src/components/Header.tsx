import React from 'react';
import styles from '../styles/dashboard.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-8 flex justify-between items-center ${styles['gradient-animation']}`}
      style={{ position: 'sticky', zIndex: 999 }}
    >
      <div className="flex items-center">
        <Image
          // herta chibi
          src="/assets/herta chibi.jpg"
          alt="Vidya-Verse Logo"
          className="h-14 w-14 rounded-full mr-2"
          width={500}
          height={500}
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
