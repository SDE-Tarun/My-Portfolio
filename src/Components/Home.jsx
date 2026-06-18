import React from "react";
import { Outlet } from "react-router-dom";

import Profile from "./Profile";
import Navbar from "./Navbar";

import "../App.css";

const Home = ({
  show,
  setShow,
  darkmode,
  bgcolor,
  cross,
  setCross,
  handleclick,
  handleremove,
}) => {
  const isDark = darkmode === "dark";

  return (
    <div
      className={`
        min-h-screen
        w-full
        px-4
        md:px-6
        lg:px-10
        py-6
      `}
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          flex
          flex-col
          xl:flex-row
          gap-6
        "
      >
        {/* Left Profile Section */}
        <div
          className="
            w-full
            xl:w-[350px]
            shrink-0
          "
        >
          <Profile
            show={show}
            setShow={setShow}
            darkmode={darkmode}
            bgcolor={bgcolor}
            cross={cross}
            setCross={setCross}
            handleclick={handleclick}
            handleremove={handleremove}
          />
        </div>

        {/* Main Content */}
        <div
          className="
            flex-1
            min-h-[70vh]
            rounded-3xl
            overflow-hidden
            border
            shadow-xl
          "
          style={{
            background: isDark ? "#111111" : "#FFFFFF",
            borderColor: isDark ? "#2F2F2F" : "#E5E7EB",
          }}
        >
          <div
            className="
              h-full
              overflow-y-auto
              p-2
              md:p-4
            "
          >
            <Outlet />
          </div>
        </div>

        {/* Right Navbar */}
        <div
          className="
            w-full
            xl:w-auto
            xl:sticky
            xl:top-6
            self-start
          "
        >
          <Navbar
            show={show}
            setShow={setShow}
            darkmode={darkmode}
            bgcolor={bgcolor}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
