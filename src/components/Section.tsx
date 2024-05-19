import React from "react";
import hoverStyles from "@/styles/hover_animation.module.css";
import dashboardStyles from "@/styles/dashboard.module.css";
import Link from "next/link";

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

  return (
    <div
      className={`${
        hovered ? hoverStyles["hover-animated-container"] : ""
      } flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1`}
    >
      <div className="w-full overflow-hidden h-96">
        <img
          src={project.thumbnail_url}
          alt={project.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4 text-black">
        <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>
        <p className="text-lg text-justify line-clamp-3">
          {project.description}
        </p>
        <Link href={`/project/${project.project_id}`} passHref legacyBehavior>
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // className="inline-block mt-4 font-semibold text-blue-500"
            className={`bg-indigo-500 text-white font-semibold py-4 px-12 mt-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 float-right ${dashboardStyles["gradient-animation"]}`}
          >
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Section;
