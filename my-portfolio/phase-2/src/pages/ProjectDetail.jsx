import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projects.json";

/**
 * ProjectDetail Page Component
 * Displays detailed information about a specific project
 */
const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Load project data
  useEffect(() => {
    try {
      // Simulate API fetch with local JSON data
      const foundProject = projectsData.find((p) => p.id === projectId);

      if (foundProject) {
        setProject(foundProject);
      } else {
        setError("Project not found");
      }

      setIsLoading(false);
    } catch (error) {
      setError("Failed to load project details. Please try again later.");
      setIsLoading(false);
    }
  }, [projectId]);

  // Navigate to previous image
  const prevImage = () => {
    if (project?.images?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  // Navigate to next image
  const nextImage = () => {
    if (project?.images?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Handle loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
        <div className="mt-6">
          <Link to="/projects" className="text-blue-600 hover:underline">
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // If project not found
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Project not found!</strong>
          <span className="block sm:inline">
            {" "}
            The project you're looking for doesn't exist.
          </span>
        </div>
        <div className="mt-6">
          <Link to="/projects" className="text-blue-600 hover:underline">
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/projects"
          className="text-blue-600 hover:underline flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Project Title */}
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>

      {/* Project categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.categories.map((category) => (
          <span
            key={category}
            className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Project Images Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="mb-8 relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={`/assets/images/projects/${project.images[currentImageIndex]}`}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full object-contain max-h-96 mx-auto"
            />
          </div>

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image indicators */}
          {project.images.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Project Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About this project</h2>
        <div className="prose max-w-none">
          <p className="mb-4">{project.description}</p>
          {project.longDescription && (
            <div
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          )}
        </div>
      </div>

      {/* Technologies Used */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges and Solutions */}
      {project.challenges && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Challenges & Solutions
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            {project.challenges.map((challenge, index) => (
              <div key={index} className={index > 0 ? "mt-6" : ""}>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-2">{challenge.description}</p>
                <p className="text-gray-800">
                  <strong>Solution:</strong> {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Live
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
