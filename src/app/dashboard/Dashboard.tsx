'use client';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/dashboard.module.css';
import Header from '../components/Header';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import Image from 'next/image';

// Define the project data type
type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const projectIds = [1, 2, 3, 4]; // List of project IDs to fetch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://vidyverse-db.vercel.app/projects?ids=${projectIds.join(',')}`
        );
        const data = await response.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  // // Filter projects based on odd project IDs
  // const oddProjects = projects.filter(
  //   (project) => project.project_id % 2 !== 0
  // );

  // // Filter projects based on even project IDs
  // const evenProjects = projects.filter(
  //   (project) => project.project_id % 2 === 0
  // );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <Header />
      <div className="container mx-auto py-8 mt-8">
        <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-6 text-white gradient-animation">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-shadow mb-4">
                Welcome to Vidy-Verse: Where Creativity Meets Professionalism
              </h1>
              <p className="text-xl">
                Embark on an enchanting journey through the world of Vidy-Verse,
                where creativity, cuteness, and professionalism unite in perfect
                harmony. Discover captivating designs, delightful animations,
                and expertly crafted content that showcase remarkable talents
                and achievements. With a touch of whimsy and a dash of
                professionalism, Vidy-Verse takes you on a delightful adventure
                through stunning portfolios that capture hearts and inspire
                minds. Get ready to be charmed by the magic of creativity and
                leave a lasting impression with your own captivating portfolio.
                Welcome to Vidy-Verse, where dreams become reality!
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
                src="https://i.pinimg.com/564x/ed/de/36/edde365aae4dcd19515df053b4c74e91.jpg"
                alt="Vidy-Verse"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Map odd project data to the grid */}
          {projects.map((project) => (
            <React.Fragment key={project.project_id}>
              {/* Left Section */}
              <LeftSection project={project} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
