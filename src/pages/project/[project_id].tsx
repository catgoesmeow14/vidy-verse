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
    <div className="min-h-screen text-gray-800 bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="container py-8 mx-auto">
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="px-10 py-7">
            <h1 className="my-6 text-2xl font-bold text-center">
              {project.title}
            </h1>
            <div className="flex justify-center my-6">
              <div className="h-50 w-96">
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            <p className="my-6 text-lg text-justify">
              {project.description}
            </p>
            <div className="text-right">
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
  );
};

export default ProjectPage;
