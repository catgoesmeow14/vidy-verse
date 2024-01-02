import React, { useState, useEffect } from 'react';
import dashboardStyles from '@/styles/dashboard.module.css';
import hoverStyles  from '@/styles/hover_animation.module.css';

type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const ProjectPage = ({ project_id }: { project_id: number }) => {

  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://vidyverse-db.vercel.app/project?id=${project_id}`
        );
        const data = await response.json();
        setProject(data[0]); // Assuming the API returns an array
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchData();
  }, [project_id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    // Navigate to the dashboard (home) page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* <div className="md:w-1/2">
              <img
                src={project.thumbnail_url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="p-4 px-12 md:w-full  justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg mb-6 text-justify">{project.description}</p>
              </div>
              <button
  onClick={goBack}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform ${hovered ? hoverStyles['hover-animated-container'] : ''} ${dashboardStyles['gradient-animation']}`}
>
  &larr; Back to Dashboard
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
