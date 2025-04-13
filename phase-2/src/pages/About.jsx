import React from "react";
import { Link } from "react-router-dom";
import SkillsChart from "../components/SkillsChart";

/**
 * About Page Component
 * Displays detailed information about the portfolio owner, skills, and experience
 */
const About = () => {
  // Skills data
  const skills = [
    { name: "React", level: 5, category: "Frontend" },
    { name: "JavaScript", level: 5, category: "Frontend" },
    { name: "HTML/CSS", level: 5, category: "Frontend" },
    { name: "Tailwind CSS", level: 4, category: "Frontend" },
    { name: "TypeScript", level: 3, category: "Frontend" },
    { name: "Redux", level: 4, category: "Frontend" },
    { name: "Node.js", level: 4, category: "Backend" },
    { name: "Express", level: 4, category: "Backend" },
    { name: "MongoDB", level: 3, category: "Backend" },
    { name: "Firebase", level: 4, category: "Backend" },
    { name: "REST API", level: 4, category: "Backend" },
    { name: "SQL", level: 3, category: "Backend" },
    { name: "Git", level: 4, category: "Tools" },
    { name: "VS Code", level: 5, category: "Tools" },
    { name: "Figma", level: 3, category: "Tools" },
    { name: "Webpack", level: 3, category: "Tools" },
    { name: "Jest", level: 3, category: "Testing" },
    { name: "React Testing Library", level: 3, category: "Testing" },
    { name: "Responsive Design", level: 4, category: "Other" },
    { name: "Web Accessibility", level: 3, category: "Other" },
    { name: "UX/UI Design", level: 3, category: "Other" },
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Helsinki",
      year: "2022 - 2026",
      description:
        "Focusing on web development, software engineering, and user experience design.",
    },
    {
      degree: "Web Development Bootcamp",
      school: "Helsinki Coding Academy",
      year: "2022",
      description:
        "Intensive 12-week program covering full-stack web development technologies and best practices.",
    },
  ];

  // Experience data
  const experience = [
    {
      position: "Junior Frontend Developer",
      company: "Tech Solutions Oy",
      period: "June 2023 - Present",
      description:
        "Developing and maintaining responsive web applications using React, TypeScript, and Tailwind CSS. Collaborating with designers and backend developers to implement new features and improve user experience.",
      responsibilities: [
        "Built reusable components for the company's component library",
        "Implemented responsive designs following Figma mockups",
        "Optimized application performance and loading times",
        "Participated in code reviews and team meetings",
      ],
    },
    {
      position: "Web Development Intern",
      company: "Digital Agency Helsinki",
      period: "January 2023 - May 2023",
      description:
        "Assisted in the development of websites and web applications for clients. Gained experience with modern web technologies and development workflows.",
      responsibilities: [
        "Created and maintained client websites using HTML, CSS, and JavaScript",
        "Assisted senior developers with debugging and testing",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in client meetings and project planning",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src="/assets/images/profile.jpg"
              alt="Ali Pourrahim"
              className="rounded-lg shadow-md w-full max-w-sm mx-auto"
            />
          </div>

          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              Hello! I'm Ali Pourrahim, a passionate web developer based in
              Helsinki, Finland. I enjoy creating user-friendly, accessible, and
              responsive websites and applications that provide a great user
              experience across all devices.
            </p>

            <p className="text-lg mb-4">
              My journey in web development started during my university
              studies, where I discovered my passion for building things for the
              web. Since then, I've been continuously learning and improving my
              skills through formal education, online courses, and practical
              experience.
            </p>

            <p className="text-lg mb-4">
              I specialize in frontend development using React and modern
              JavaScript, but I also have experience with backend technologies
              like Node.js and Express. I believe in writing clean, maintainable
              code and following best practices to create high-quality web
              solutions.
            </p>

            <p className="text-lg mb-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities like hiking and photography.
            </p>

            <div className="mt-6">
              <a
                href="/assets/resume/ali_pourrahim_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">My Skills</h2>
        <SkillsChart skills={skills} />
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-lg text-gray-700">{job.company}</p>
                </div>
                <p className="text-gray-600 md:text-right">{job.period}</p>
              </div>

              <p className="mb-4">{job.description}</p>

              <ul className="list-disc pl-5 text-gray-700">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-green-600 pl-4 py-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-lg text-gray-700">{edu.school}</p>
                </div>
                <p className="text-gray-600 md:text-right">{edu.year}</p>
              </div>

              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
        <p className="text-lg mb-6">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

export default About;
