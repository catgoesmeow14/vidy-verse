import React from 'react';

type LeftSectionProps = {
  project: Project;
};

type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const LeftSection: React.FC<LeftSectionProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1">
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
        <a
          href={`/project/${project.project_id}`}
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default LeftSection;
