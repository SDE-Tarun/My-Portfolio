import React from "react";
import { NavLink } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Navbar = ({ bgcolor, darkmode }) => {
  const isDark = darkmode === "dark";

  const navItems = [
    {
      name: "About",
      path: "/",
      icon: <FaRegUser />,
    },
    {
      name: "Projects",
      path: "/Projects",
      icon: <FaLaptopCode />,
    },
    {
      name: "Experience",
      path: "/Experience",
      icon: <FaBriefcase />,
    },
    {
      name: "Skills",
      path: "/Certify",
      icon: <AiOutlineSafetyCertificate />,
    },
    {
      name: "Contact",
      path: "/Contact",
      icon: <TiContacts />,
    },
  ];

  return (
    <nav className="hidden xl:block">
      <div
        className="
          w-28
          rounded-3xl
          p-4
          border
          shadow-xl
          flex
          flex-col
          gap-4
          sticky
          top-6
        "
        style={{
          background: isDark ? "#111111" : "#FFFFFF",
          borderColor: isDark ? "#2F2F2F" : "#E5E7EB",
        }}
      >
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `
              group
              transition-all
              duration-300
              rounded-2xl
              ${isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : ""
              }
            `
            }
          >
            {({ isActive }) => (
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  background: isActive
                    ? "transparent"
                    : isDark
                      ? "#1D1D1D"
                      : "#F8FAFC",

                  color: isActive
                    ? "#FFFFFF"
                    : isDark
                      ? "#A6A6A6"
                      : "#000000",
                }}
              >
                <div className="text-2xl">{item.icon}</div>

                <span className="text-xs font-medium">
                  {item.name}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
