import React from 'react';
import styles from '@/styles/dashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-8 flex justify-between items-center ${styles['gradient-animation']}`}
      style={{ zIndex: 999 }}
    >
      <div className="flex items-center">
        <Image
          // herta chibi
          src="/assets/herta chibi.jpg"
          alt="Vidya-Verse Logo"
          className="mr-2 rounded-full"
          width={56} // Setting width and height to 56 to match h-14 w-14 class
          height={56}
        />
        <div>
          <h1 className="text-2xl font-bold">Vidya-Verse</h1>
          <p className="text-lg">Explore the world of Vidya</p>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/aboutme" className="text-lg text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
