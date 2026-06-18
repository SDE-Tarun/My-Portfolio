import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";

const Resume = ({ bgcolor, darkmode }) => {
  const isDark = darkmode === "dark";

  const education = [
    {
      year: "2018 - 2022",
      degree: "B.Tech in Information Technology",
      institute: "Maharaja Surajmal Institute of Technology",
      location: "New Delhi, India",
      grade: "CGPA: 8.35/10",
    },
    {
      year: "2016 - 2019",
      degree: "Diploma in Electronics & Communication Engineering",
      institute: "Aditya Institute of Technology",
      location: "New Delhi, India",
      grade: "CGPA: 7.6/10",
    },
    {
      year: "2015 - 2016",
      degree: "Senior Secondary (12th)",
      institute: "K.V.J.N.U School",
      location: "New Delhi, India",
    },
    {
      year: "2013 - 2014",
      degree: "Secondary (10th)",
      institute: "K.V.J.N.U School",
      location: "New Delhi, India",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Postman",
    "REST APIs",
    "Responsive Design",
    "MERN Stack",
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
          Resume
        </h1>

        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 my-4"></div>

        <p
          style={{
            color: isDark ? "#A6A6A6" : "#555555",
          }}
        >
          My educational background, technical expertise, and professional
          capabilities.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <IoBookOutline className="text-3xl text-blue-500" />

          <h2
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"
              }`}
          >
            Education
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-500 pl-6">
          {education.map((item, index) => (
            <div key={index} className="mb-8 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[34px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

              <div
                className="
                  p-6
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
                style={{
                  background: isDark ? "#1D1D1D" : "#F8FAFC",
                  borderColor: isDark ? "#333333" : "#E5E7EB",
                }}
              >
                <span className="text-blue-500 font-semibold text-sm">
                  {item.year}
                </span>

                <h3
                  className={`text-xl font-bold mt-2 ${isDark ? "text-white" : "text-black"
                    }`}
                >
                  {item.degree}
                </h3>

                <p
                  className="mt-2"
                  style={{
                    color: isDark ? "#D1D5DB" : "#4B5563",
                  }}
                >
                  {item.institute}
                </p>

                <p
                  className="text-sm mt-1"
                  style={{
                    color: isDark ? "#A6A6A6" : "#6B7280",
                  }}
                >
                  {item.location}
                </p>

                {item.grade && (
                  <div className="mt-3 inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.grade}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <AiOutlineFileDone className="text-3xl text-purple-500" />

          <h2
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"
              }`}
          >
            Key Skills
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                background: isDark ? "#1D1D1D" : "#F3F4F6",
                color: isDark ? "#FFFFFF" : "#111827",
                border: `1px solid ${isDark ? "#333333" : "#E5E7EB"
                  }`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500">2+</h2>
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
          <h2 className="text-4xl font-bold text-green-500">15+</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Projects Built
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-500">MERN</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Core Expertise
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-500">12+</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
