import React from 'react';
import 'src/styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // Replacing React Fragment with a div and applying Tailwind's reset classes
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
