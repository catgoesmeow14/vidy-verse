import React from 'react';
import styles from '@/styles/hover_animation.module.css';

type SectionProps = {
  project: Project;
};

type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const Section: React.FC<SectionProps> = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleReadMoreClick = () => {
    if (typeof window !== 'undefined') {
      // Navigate to the project detail page
      const projectDetailUrl = `/project/${project.project_id}`;
      window.open(projectDetailUrl);
    }
  };

  return (
    <div
      className={`${
        hovered ? styles['hover-animated-container'] : ''
      } flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1`}
    >
      <div className="w-full h-96 overflow-hidden">
        <img
          src={project.thumbnail_url}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="bg-white p-4 text-black">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg line-clamp-3">{project.description}</p>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleReadMoreClick}
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          Read more
        </button>
      </div>
    </div>
  );
};
export default Section;
