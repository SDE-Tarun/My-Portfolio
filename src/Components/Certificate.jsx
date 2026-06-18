import React from "react";
import "../Components/Global.css";

import html from "../Components/SocialLinks/html.png";
import css from "../Components/SocialLinks/social.png";
import js from "../Components/SocialLinks/js.png";
import react from "../Components/SocialLinks/react_original_logo_icon_146374.png";
import nodejs from "../Components/SocialLinks/nodejs.png";
import expressJs from "../Components/SocialLinks/express_logo_icon_248911.png";
import mongodb from "../Components/SocialLinks/mongodb_original_logo_icon_146424.png";
import postman from "../Components/SocialLinks/postman_macos_bigsur_icon_189815.png";
import git from "../Components/SocialLinks/social (1).png";
import tailwind from "../Components/SocialLinks/icons8-tailwind-css-48.png";
import github from "../Components/SocialLinks/github.png";
import bootstrap from "../Components/SocialLinks/icons8-bootstrap-48.png";

const Certificate = ({ bgcolor, darkmode }) => {
  const isDark = darkmode === "dark";

  const technicalSkills = [
    { skill: "HTML5", png: html },
    { skill: "CSS3", png: css },
    { skill: "JavaScript", png: js },
    { skill: "Bootstrap", png: bootstrap },
    { skill: "React.js", png: react },
    { skill: "Tailwind CSS", png: tailwind },
    { skill: "Node.js", png: nodejs },
    { skill: "Express.js", png: expressJs },
    { skill: "MongoDB", png: mongodb },
  ];

  const otherSkills = [
    { skill: "Git", png: git },
    { skill: "GitHub", png: github },
    { skill: "Postman", png: postman },
  ];

  const SkillCard = ({ item }) => (
    <div
      className="
        group
        p-5
        rounded-3xl
        border
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
      style={{
        background: isDark ? "#1D1D1D" : "#FFFFFF",
        borderColor: isDark ? "#333333" : "#E5E7EB",
      }}
    >
      <div
        className="
          w-20
          h-20
          flex
          items-center
          justify-center
          rounded-2xl
          bg-gray-50
          group-hover:scale-110
          transition-all
          duration-300
        "
      >
        <img
          src={item.png}
          alt={item.skill}
          className="w-14 h-14 object-contain"
        />
      </div>

      <h3
        className={`mt-4 font-semibold text-sm md:text-base ${isDark ? "text-white" : "text-black"
          }`}
      >
        {item.skill}
      </h3>
    </div>
  );

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
          Skills & Technologies
        </h1>

        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 my-4"></div>

        <p
          className="text-base md:text-lg"
          style={{
            color: isDark ? "#A6A6A6" : "#555555",
          }}
        >
          Technologies and tools I use to build scalable, responsive and
          high-performance web applications.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-12">
        <h2
          className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"
            }`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technicalSkills.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div>
        <h2
          className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"
            }`}
        >
          Tools & Platforms
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {otherSkills.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500">12+</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Technologies
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
          <h2 className="text-4xl font-bold text-orange-500">3</h2>
          <p
            className="mt-2"
            style={{
              color: isDark ? "#A6A6A6" : "#555555",
            }}
          >
            Years Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
