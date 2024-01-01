// AboutMePage.tsx
import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import styles from '@/styles/dashboard.module.css';

const AboutMePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                className="object-cover rounded-lg shadow-lg"
                src="/assets/herta biasa.jpg" // Adjust the path to your image
                alt="Vidy-Verse"
                width={500}
                height={500}
              />
            </div>
            <div className="p-4 md:w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">John Doe</h2>
                <p className="text-lg mb-6">
                  Passionate web developer with over 10 years of experience in
                  crafting engaging websites and applications. Specializing in
                  React and Next.js, I enjoy turning complex problems into
                  simple, beautiful, and intuitive designs. When I&apos;m not
                  coding, you&apos;ll find me hiking or experimenting with new
                  cooking recipes.
                </p>
              </div>
              <button
                onClick={() => (window.location.href = '/')}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 ${styles['gradient-animation']}`}
              >
                &larr; Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
