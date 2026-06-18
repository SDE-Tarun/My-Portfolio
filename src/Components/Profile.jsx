import React from "react";
import { NavLink } from "react-router-dom";

import { FaLinkedin, FaBriefcase } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail, AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

import cv from "../Components/SocialLinks/Resume.pdf";
import ProfileImage from "../Components/SocialLinks/Profile.jpg";

const Profile = ({
  show,
  setShow,
  darkmode,
  bgcolor,
  setCross,
}) => {
  const isDark = darkmode === "dark";

  const handleCross = () => {
    setCross(false);
    setShow(false);
  };

  const mobileLinks = [
    {
      icon: <FaRegUser />,
      title: "About",
      path: "/",
    },
    {
      icon: <FaLaptopCode />,
      title: "Projects",
      path: "/Projects",
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      path: "/Experience",
    },
    {
      icon: <AiOutlineSafetyCertificate />,
      title: "Skills",
      path: "/Certify",
    },
    {
      icon: <TiContacts />,
      title: "Contact",
      path: "/Contact",
    },
  ];

  return (
    <>
      {/* Mobile Navigation */}

      {show && (
        <div
          className="
          xl:hidden
          fixed
          top-24
          left-4
          right-4
          z-50
          rounded-3xl
          shadow-2xl
          border
          p-4
        "
          style={{
            background: isDark ? "#111111" : "#FFFFFF",
            borderColor: isDark ? "#2F2F2F" : "#E5E7EB",
          }}
        >
          <div className="flex flex-col gap-3">
            {mobileLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={handleCross}
              >
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:text-white
                "
                  style={{
                    background: isDark
                      ? "#1D1D1D"
                      : "#F8FAFC",
                  }}
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span>{item.title}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Profile Card */}

      <div className="w-full flex justify-center">
        <div
          className="
          w-full
          max-w-[350px]
          rounded-3xl
          p-6
          shadow-xl
          border
        "
          style={{
            background: isDark ? "#111111" : "#FFFFFF",
            borderColor: isDark ? "#2F2F2F" : "#E5E7EB",
          }}
        >
          {/* Availability */}

          <div className="flex justify-end mb-4">
            <span
              className="
              px-3
              py-1
              rounded-full
              text-xs
              font-semibold
              bg-green-100
              text-green-600
            "
            >
              ● Available for Work
            </span>
          </div>

          {/* Profile Image */}

          <div className="flex justify-center">
            <img
              src={ProfileImage}
              alt="Tarun Kumar"
              className="
                w-36
                h-36
                rounded-full
                object-cover
                border-4
                border-blue-500
                shadow-lg
              "
            />
          </div>

          {/* Name */}

          <div className="text-center mt-5">
            <h1
              className={`text-3xl font-bold ${isDark
                  ? "text-white"
                  : "text-black"
                }`}
            >
              Tarun Kumar
            </h1>

            <p className="text-blue-500 font-medium mt-2">
              Full Stack Developer
            </p>

            <p
              className="text-sm mt-2"
              style={{
                color: isDark
                  ? "#A6A6A6"
                  : "#666666",
              }}
            >
              React.js • Node.js • MongoDB • MERN
            </p>
          </div>

          {/* Social Links */}

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/tarun-kumar-b788a9250/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl text-blue-600 hover:scale-110 transition" />
            </a>

            <a
              href="https://github.com/SDE-Tarun"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                className={`text-3xl hover:scale-110 transition ${isDark
                    ? "text-white"
                    : "text-black"
                  }`}
              />
            </a>
          </div>

          {/* Contact Details */}

          <div
            className="
            mt-8
            rounded-2xl
            p-4
            flex
            flex-col
            gap-4
          "
            style={{
              background: isDark
                ? "#1D1D1D"
                : "#F8FAFC",
            }}
          >
            <Info
              icon={<CiMobile4 />}
              text="+91 8076659404"
              color="text-pink-500"
            />

            <Info
              icon={<AiTwotoneMail />}
              text="tarunkumar23j@gmail.com"
              color="text-blue-500"
            />

            <Info
              icon={<IoLocationSharp />}
              text="Delhi, India"
              color="text-red-500"
            />

            <Info
              icon={<BsCalendarDate />}
              text="23 July 1998"
              color="text-purple-500"
            />
          </div>

          {/* Resume Button */}

          <div className="mt-8">
            <a
              href={cv}
              download="Tarun_Kumar_Resume"
            >
              <button
                className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                text-white
                font-semibold
                shadow-lg
                hover:scale-[1.02]
                transition-all
                duration-300
              "
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Info = ({ icon, text, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`
          w-10
          h-10
          rounded-lg
          bg-white
          flex
          items-center
          justify-center
          text-xl
          ${color}
        `}
      >
        {icon}
      </div>

      <span className="text-sm font-medium">
        {text}
      </span>
    </div>
  );
};

export default Profile;
