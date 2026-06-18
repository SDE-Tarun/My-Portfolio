import React from "react";
import { MdWork } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../Components/Global.css";

const Experience = ({ bgcolor, darkmode }) => {
  const isDark = darkmode === "dark";

  const experiences = [
    {
      company: "GLA University",
      role: "Full Stack Developer",
      start: "Sep 2025",
      end: "Dec 2025",
      location: "Greater Noida, Uttar Pradesh, India",
      description:
        "Developed scalable web applications, reusable React components and backend APIs while collaborating with multiple stakeholders.",
    },
    {
      company: "Coding Blocks",
      role: "Full Stack Developer (Training + Client Projects)",
      start: "Sep 2024",
      end: "Aug 2025",
      location: "Noida, Uttar Pradesh, India",
      description:
        "Worked on MERN stack applications, client projects, API integrations, authentication systems and deployment workflows.",
    },
    {
      company: "YogpriDeal",
      role: "Technical Support Engineer",
      start: "Jul 2023",
      end: "May 2024",
      location: "Delhi, India",
      description:
        "Provided technical support, troubleshooting, issue resolution and client communication while ensuring service reliability.",
    },
    {
      company: "Polestar Solutions and Services",
      role: "Full Stack Developer",
      start: "Mar 2022",
      end: "Jun 2023",
      location: "Noida, Uttar Pradesh, India",
      description:
        "Built enterprise-level applications, reusable UI components, REST APIs and participated in full software development lifecycle.",
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
          className={`text-4xl font-bold ${isDark ? "text-white" : "text-black"
            }`}
        >
          Experience
        </h1>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full my-4"></div>

        <p
          className="text-base md:text-lg"
          style={{
            color: isDark ? "#A6A6A6" : "#555555",
          }}
        >
          My professional journey as a Full Stack Developer, building scalable
          applications, solving business challenges, and delivering impactful
          digital solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 h-full w-1 -translate-x-1/2"
          style={{
            background: isDark ? "#333333" : "#D1D5DB",
          }}
        ></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
              }`}
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-4
                md:left-1/2
                -translate-x-1/2
                w-10
                h-10
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-purple-600
                flex
                items-center
                justify-center
                shadow-lg
                z-10
              "
            >
              <MdWork className="text-white text-lg" />
            </div>

            {/* Card */}
            <div
              className="
                ml-16
                md:ml-0
                md:w-[45%]
                p-6
                rounded-3xl
                border
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
              style={{
                background: isDark ? "#1D1D1D" : "#FFFFFF",
                borderColor: isDark ? "#333333" : "#E5E7EB",
              }}
            >
              {/* Date */}
              <div className="mb-3">
                <span
                  className="
                    px-4
                    py-1
                    rounded-full
                    text-sm
                    bg-blue-100
                    text-blue-600
                    font-medium
                  "
                >
                  {exp.start} - {exp.end}
                </span>
              </div>

              {/* Company */}
              <h3
                className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-black"
                  }`}
              >
                {exp.company}
              </h3>

              {/* Role */}
              <p
                className="font-semibold text-lg mb-3"
                style={{
                  color: "#3B82F6",
                }}
              >
                {exp.role}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineLocationMarker className="text-red-500" />

                <span
                  className="text-sm"
                  style={{
                    color: isDark ? "#A6A6A6" : "#555555",
                  }}
                >
                  {exp.location}
                </span>
              </div>

              {/* Description */}
              <p
                className="leading-7"
                style={{
                  color: isDark ? "#A6A6A6" : "#555555",
                }}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500">3</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Years Experience
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-500">5+</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Projects
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-500">MERN</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Expertise
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-500">100%</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Commitment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;