import React from "react";
import "../Components/Global.css";

import project1 from "../Components/SocialLinks/AI Code Reviewer.png";
import project2 from "../Components/SocialLinks/Ecommerce.png";
import project3 from "../Components/SocialLinks/Portfolio_bg.png";
import project4 from "../Components/SocialLinks/Anaplan.jpg";

const Projects = ({ bgcolor, darkmode }) => {
  const isDark = darkmode === "dark";

  const projects = [
    {
      title: "AI Code Reviewer",
      image: project1,
      link: "https://code-reviewer-frontend-jqbz.onrender.com/",
      description:
        "AI-powered code review platform built with MERN Stack and Google Gemini API.",
      tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    },
    {
      title: "E-Commerce Platform",
      image: project2,
      link: "https://ecommerce-platform-rrxs.onrender.com/",
      description:
        "Full-featured e-commerce application with authentication, cart, orders and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      link: "https://lighthearted-zuccutto-7672ad.netlify.app/",
      description:
        "Modern personal portfolio showcasing skills, projects and professional experience.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Anaplan Utility",
      image: project4,
      link: "#",
      description:
        "Enterprise-grade utility platform for Anaplan integrations and workflow automation.",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Power BI 2.0",
      image:
        "https://cdn.plainconcepts.com/wp-content/uploads/2022/09/power-bi.jpg",
      link: "#",
      description:
        "Data reconciliation and reporting solution with advanced Power BI dashboards.",
      tech: ["Power BI", "SQL", "Analytics"],
    },
  ];

  return (
    <div
      className="p-6 md:p-10 rounded-3xl shadow-xl border"
      style={{
        background: isDark ? "#111111" : "#FFFFFF",
        borderColor: isDark ? "#2F2F2F" : "#E5E7EB",
      }}
    >
      {/* Heading */}
      <div className="mb-10">
        <h1
          className={`text-4xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          My Projects
        </h1>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full my-4"></div>

        <p
          className="text-base md:text-lg"
          style={{
            color: isDark ? "#A6A6A6" : "#555555",
          }}
        >
          A collection of projects showcasing my expertise in Full Stack
          Development, React.js, Node.js, APIs, Database Management and
          Enterprise Solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                h-full
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
              style={{
                background: isDark ? "#1D1D1D" : "#FFFFFF",
                borderColor: isDark ? "#333333" : "#E5E7EB",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {project.title}
                </h2>

                <p
                  className="leading-7 text-sm mb-5"
                  style={{
                    color: isDark ? "#A6A6A6" : "#555555",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3
                        py-1
                        text-xs
                        font-medium
                        rounded-full
                        bg-blue-100
                        text-blue-600
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="
                    w-full
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:opacity-90
                  "
                >
                  View Project →
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
