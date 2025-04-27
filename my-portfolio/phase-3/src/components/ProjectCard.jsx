import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * ProjectCard Component
 * Displays a preview of a project with image, title, and brief description
 *
 * @component
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {string} props.project.id - Unique identifier for the project
 * @param {string} props.project.title - Project title
 * @param {string} props.project.description - Short description of the project
 * @param {string[]} props.project.technologies - Array of technologies used
 * @param {string} props.project.image - Path to project image
 */
const ProjectCard = ({ project }) => {
  const { id, title, description, technologies, image } = project;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={`/assets/images/projects/${image}`}
        alt={`${title} project screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          to={`/projects/${id}`}
          className="text-blue-600 font-medium hover:underline flex items-center"
        >
          View Details
          <svg
            className="w-4 h-4 ml-1"
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
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
