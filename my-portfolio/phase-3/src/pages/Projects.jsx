// Placeholder for Projects.jsx
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

/**
 * Projects Page Component
 * Displays a grid of projects with filtering capabilities
 */
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load projects data
  useEffect(() => {
    try {
      // Simulate API fetch with local JSON data
      setProjects(projectsData);
      setFilteredProjects(projectsData);

      // Extract unique categories from projects
      const uniqueCategories = [
        ...new Set(projectsData.flatMap((project) => project.categories)),
      ];
      setCategories(uniqueCategories);

      setIsLoading(false);
    } catch (error) {
      setError("Failed to load projects. Please try again later.");
      setIsLoading(false);
    }
  }, []);

  // Filter projects by category
  const filterProjects = (category) => {
    setActiveFilter(category);

    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  // Handle errors and loading states
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

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
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-2">My Projects</h1>
      <p className="text-gray-600 mb-8">
        A collection of my work and personal projects
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => filterProjects("all")}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => filterProjects(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-600">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
