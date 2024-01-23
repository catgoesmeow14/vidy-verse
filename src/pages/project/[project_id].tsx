import React, { useState, useEffect } from "react";
import dashboardStyles from "@/styles/dashboard.module.css";
import hoverStyles from "@/styles/hover_animation.module.css";
import { useRouter } from "next/router";

type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const ProjectPage = () => {
  const router = useRouter();
  const { project_id } = router.query; // Extract project_id from the URL
  const [hovered, setHovered] = React.useState(false);
  const [project, setProject] = useState<Project | null>(null);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  useEffect(() => {
    if (!router.isReady) return; // Only run when router is ready

    const fetchData = async () => {
      // Assuming project_id is a string. Convert or validate as needed.
      const id = Array.isArray(project_id) ? project_id[0] : project_id;

      if (!id) {
        console.error("Project ID is undefined");
        return;
      }

      try {
        console.log("Fetching project with id:", id);
        const response = await fetch(
          `https://vidyverse-db.vercel.app/project?id=${id}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProject(data[0]);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchData();
  }, [router.isReady, project_id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-row">
            {/* First Column for Images */}
            <div className="flex flex-col w-2/3">
              {/* First Image Container */}
              <div className="w-full h-96">
                {" "}
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Second Image Container */}
              <div className="w-full h-96">
                {" "}
                <img
                  src={project.thumbnail_url} // Duplicate image
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Third Image Container */}
              <div className="w-full h-96">
                {" "}
                <img
                  src={project.thumbnail_url} // Duplicate image
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Second Column for Article */}
            <div className="p-4 px-12 w-1/2 justify-between">
              <div>
                <h1 className="text-2xl font-bold my-6 text-center">
                  {project.title}
                </h1>
                <p className="text-lg mb-6 text-justify">
                  {project.description}
                </p>
              </div>
              {/* Align Button to the Right */}
              <div className="text-right">
                {" "}
                {/* Use text-right for alignment */}
                <button
                  onClick={goBack}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform ${
                    hovered ? hoverStyles["hover-animated-container"] : ""
                  } ${dashboardStyles["gradient-animation"]}`}
                >
                  &larr; Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
