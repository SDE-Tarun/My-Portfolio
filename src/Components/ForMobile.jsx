import React from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import "../Components/Global.css";

const ForMobile = ({
  darkmode,
  handleDarkMode,
  cross,
  handleclick,
  handleremove,
}) => {
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b ${darkmode === "dark"
          ? "bg-[#111111]/90 border-gray-800"
          : "bg-white/90 border-gray-200"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
            <HiOutlineCodeBracket className="text-white text-xl" />
          </div>

          <div>
            <h2
              className={`font-bold text-lg ${darkmode === "dark" ? "text-white" : "text-black"
                }`}
            >
              Tarun Kumar
            </h2>

            <p className="text-xs text-gray-500">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkmode === "dark"}
              onChange={handleDarkMode}
              className="sr-only peer"
            />

            <div
              className="w-16 h-8 bg-gray-300 rounded-full peer
              peer-checked:bg-blue-600 transition-all duration-300"
            >
              <div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full
                shadow-md transition-all duration-300
                peer-checked:translate-x-8"
              />
            </div>
          </label>

          {/* Menu Button */}
          <button
            onClick={cross ? handleremove : handleclick}
            className="
              w-11 h-11
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            {cross ? (
              <RxCross1 className="text-xl" />
            ) : (
              <LuMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default ForMobile;