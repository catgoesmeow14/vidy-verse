import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

type Project = {
  project_id: number;
  title: string;
  description: string;
  thumbnail_url: string;
};

const ProjectPage = () => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug('blog', slug);
  const router = useRouter();
  // const { slug } = router.query; // Use slug instead of id
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(slug);
      try {
        const response = await fetch(
          `https://vidyverse-db.vercel.app/projects?slug=${slug}` // Fetch data based on slug
        );
        const data = await response.json();
        console.log(data);
        if (data && data.length > 0) {
          setProject(data[0]);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <Header />
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
          <p className="text-lg ">{project.description}</p>
          <button
            onClick={goBack} // Use goBack function to go back to the previous page
            className="text-blue-500 font-semibold mt-4 inline-block"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
