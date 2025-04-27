import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * SkillsChart Component
 * Visualizes skills by category with proficiency bars
 *
 * @component
 * @param {Object} props
 * @param {Array} props.skills - Array of skill objects
 * @param {string} props.skills[].name - Name of the skill
 * @param {number} props.skills[].level - Proficiency level (1-5)
 * @param {string} props.skills[].category - Category the skill belongs to
 */
const SkillsChart = ({ skills }) => {
  const chartRef = useRef(null);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Animate skill bars on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar) => {
              bar.classList.add("animate-skill");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  // Convert level (1-5) to percentage
  const levelToPercent = (level) => {
    return `${(level / 5) * 100}%`;
  };

  return (
    <div ref={chartRef} className="skills-chart">
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {categorySkills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">{skill.level}/5</span>
                </div>
                <div className="h-2 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="skill-bar-fill h-full bg-blue-600 rounded transition-all duration-1000 ease-out"
                    style={{
                      width: "0%", // Start at 0 for animation
                      "--target-width": levelToPercent(skill.level),
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CSS for animation */}
      <style jsx>{`
        .animate-skill {
          width: var(--target-width) !important;
        }
      `}</style>
    </div>
  );
};

SkillsChart.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsChart;
