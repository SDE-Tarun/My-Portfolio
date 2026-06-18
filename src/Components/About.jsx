import React from "react";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { IoGitNetworkOutline } from "react-icons/io5";
import { BsDatabaseDown } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import "../Components/Global.css";

const About = ({ bgcolor, darkmode }) => {
  const isDark = darkmode === "dark";

  const cardStyle = {
    background: isDark ? "#1E1E1E" : "#FFFFFF",
    border: `1px solid ${isDark ? "#333333" : "#E5E7EB"}`,
  };

  return (
    <div className="relative h-full">
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
            About Me
          </h1>

          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 my-4"></div>

          <p
            className="leading-8 text-base md:text-lg"
            style={{
              color: isDark ? "#A6A6A6" : "#444444",
            }}
          >
            I hold a <strong>B.Tech in Information Technology</strong> from
            Maharaja Surajmal Institute of Technology, which has equipped me
            with strong analytical and problem-solving skills to build scalable
            and efficient software solutions.
          </p>

          <p
            className="leading-8 text-base md:text-lg mt-5"
            style={{
              color: isDark ? "#A6A6A6" : "#444444",
            }}
          >
            As a <strong>Full Stack Developer</strong>, I specialize in
            developing responsive, high-performance web applications using
            modern technologies. My expertise includes building reusable
            components, RESTful APIs, enterprise-level applications, and
            delivering seamless user experiences across all devices.
          </p>
        </div>

        {/* What I Do */}
        <div className="mb-8">
          <h2
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"
              }`}
          >
            What I Do
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div
            className="group p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={cardStyle}
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <LiaSwatchbookSolid className="text-3xl text-purple-600" />
              </div>

              <div>
                <h3
                  className={`font-bold text-xl mb-3 ${isDark ? "text-white" : "text-black"
                    }`}
                >
                  Frontend Development
                </h3>

                <p
                  className="leading-7"
                  style={{
                    color: isDark ? "#A6A6A6" : "#555555",
                  }}
                >
                  Building responsive and interactive user interfaces using
                  HTML, CSS, JavaScript, React.js, Tailwind CSS, and modern UI
                  practices.
                </p>
              </div>
            </div>
          </div>

          {/* Git */}
          <div
            className="group p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={cardStyle}
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <IoGitNetworkOutline className="text-3xl text-yellow-600" />
              </div>

              <div>
                <h3
                  className={`font-bold text-xl mb-3 ${isDark ? "text-white" : "text-black"
                    }`}
                >
                  Git & GitHub
                </h3>

                <p
                  className="leading-7"
                  style={{
                    color: isDark ? "#A6A6A6" : "#555555",
                  }}
                >
                  Managing source code efficiently with Git and GitHub,
                  enabling collaboration, version control, code reviews, and
                  streamlined deployment workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div
            className="group p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={cardStyle}
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <BsDatabaseDown className="text-3xl text-blue-600" />
              </div>

              <div>
                <h3
                  className={`font-bold text-xl mb-3 ${isDark ? "text-white" : "text-black"
                    }`}
                >
                  Backend Development
                </h3>

                <p
                  className="leading-7"
                  style={{
                    color: isDark ? "#A6A6A6" : "#555555",
                  }}
                >
                  Developing secure and scalable RESTful APIs using Node.js,
                  Express.js, MongoDB, and modern backend architecture
                  principles.
                </p>
              </div>
            </div>
          </div>

          {/* Testing */}
          <div
            className="group p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={cardStyle}
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <IoShieldCheckmark className="text-3xl text-green-600" />
              </div>

              <div>
                <h3
                  className={`font-bold text-xl mb-3 ${isDark ? "text-white" : "text-black"
                    }`}
                >
                  API Testing
                </h3>

                <p
                  className="leading-7"
                  style={{
                    color: isDark ? "#A6A6A6" : "#555555",
                  }}
                >
                  Validating API functionality using Postman, including
                  authentication, request validation, error handling, and
                  performance testing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
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
              Projects Built
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
              Specialization
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
    </div>
  );
};

export default About;
