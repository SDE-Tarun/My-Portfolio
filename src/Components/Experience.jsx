import React from "react";
import "../Components/Global.css";

const Experience = ({ bgcolor, darkmode }) => {
  const experiences = [
    {
      company: "Polestar Solutions and Services",
      role: "Full Stack Developer",
      start: "Mar 2022",
      end: "Jun 2023",
      location: "Noida, Uttar Pradesh, India",
    },
    {
      company: "YogpriDeal",
      role: "Technical Support Engineer",
      start: "Jul 2023",
      end: "May 2024",
      location: "Delhi, India",
    },
    {
      company: "Coding Blocks",
      role: "Full Stack Developer (Training + Client Projects)",
      start: "Sep 2024",
      end: "August 2025",
      location: "Noida, Uttar Pradesh, India",
    },
    {
      company: "GLA University",
      role: "Full Stack Developer",
      start: "Sep 2025",
      end: "Dec 2025",
      location: "Greater Noida, Uttar Pradesh, India",
    },
  ];

  return (
    <>
      <div
        className={` ${
          darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
        } p-10 rounded-lg`}
      >
        <h1
          className={`text-3xl font-bold mb-6 ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Experience
        </h1>

        {/* timeline container */}
        <div className="relative pl-6">
          {/* vertical line */}
          <div
            className={`absolute left-0 top-0 h-full w-1 ${
              darkmode === "dark" ? "bg-gray-600" : "bg-gray-300"
            }`}
          />

          {[...experiences].reverse().map((exp, idx) => (
            <div key={idx} className="mb-10 ml-4">
              {/* marker */}
              <span
                className={`absolute -left-3.5 mt-1.5 w-3 h-3 rounded-full ring-4 ring-white dark:ring-gray-900 ${
                  darkmode === "dark" ? "bg-blue-400" : "bg-blue-500"
                }`}
              />

              <time
                className={`block text-sm font-medium ${
                  darkmode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.start} – {exp.end}
              </time>
              <h3
                className={`text-xl font-semibold mt-1 ${
                  darkmode === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {exp.company}
              </h3>
              <p
                className={`mt-1 ${
                  darkmode === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {exp.role}
              </p>
              {exp.location && (
                <p
                  className={`mt-0.5 text-sm ${
                    darkmode === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
