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

  useEffect(() => {
    const projectIds = [1, 2, 3, 4]; // Define projectIds inside useEffect
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
  }, []); // Empty dependency array to run once after component mounts

  console.log('projects:', projects);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <div className="container mx-auto py-8 mt-8">
        <div
          className={`relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-6 text-white ${styles['gradient-animation']}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-shadow mb-4">
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
                <div className="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-300 ml-4">
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
        </div>

        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Map project data to the grid */}
          {projects.map((project) => (
            <React.Fragment key={project.project_id}>
              {/* Section */}
              <Section project={project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
