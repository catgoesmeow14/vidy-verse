import React, { useEffect, useState } from 'react';
import Divider from '@/components/Divider';
import Section from '@/components/Section';
import Image from 'next/image';
import styles from '@/styles/dashboard.module.css';

type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const projectIds = [1, 2, 3, 4, 5]; // Define projectIds outside useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://vidyverse-db.vercel.app/project?id=${projectIds.join(',')}`
        );
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error('Failed to fetch projects. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  console.log('projects:', projects);

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''}`}>
      <div className="container py-8 mx-auto">
        <div
          className={`relative bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-gray-800 dark:to-gray-600 rounded-lg shadow-lg p-6 text-white ${styles['gradient-animation']}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-4 text-5xl font-bold text-shadow">
                Welcome to Vidy-Verse: Where Creativity Meets Professionalism
              </h1>
              <p className="text-xl">
                Embark on a journey through Vidy-Verse, a world where creativity
                meets professionalism in a charming blend. Explore captivating
                designs and delightful animations in a portfolio that showcases
                exceptional talent. Vidy-Verse combines whimsy and expertise,
                inviting you on an adventure through stunning showcases that
                inspire and captivate. Experience the magic of creativity in a
                professional setting and make your mark with a memorable
                portfolio. Welcome to Vidy-Verse, where your creative dreams are
                brought to life
              </p>
              <div className="flex items-center mt-6">
                <div className="p-2 bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-lg text-gray-300">
                  Scroll down to explore more!
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <Image
                className="object-cover rounded-lg shadow-lg"
                src="/assets/herta biasa.jpg"
                alt="Vidy-Verse"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <label htmlFor="theme-toggle" className="mr-2 text-lg">
              Dark Mode
            </label>
            <div className="relative inline-block w-12 mr-2 align-middle transition duration-200 ease-in select-none">
              <input
                type="checkbox"
                name="theme-toggle"
                id="theme-toggle"
                checked={isDarkTheme}
                onChange={toggleTheme}
                className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
              />
              <label
                htmlFor="theme-toggle"
                className={`block overflow-hidden h-6 rounded-full ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-300'} toggle-label`}
              ></label>
            </div>
          </div>
        </div>

        <Divider />
        <div className="grid grid-cols-1 gap-8 mt-5 lg:grid-cols-2">
          {/* Map project data to the grid */}
          {projects.map((project) => (
            <Section key={project.project_id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
