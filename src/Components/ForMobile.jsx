import React from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import "../Components/Global.css";

const ForMobile = ({ show, setShow, handleDarkMode, darkmode, cross, handleclick, handleremove }) => {
  return (
    <>
      <div className="for-mobile w-screen flex items-center h-[150px]">
        <div className="w-screen flex justify-around items-center p-3 main">
          
          <h1 className="text-3xl font-bold text-amber-500">WELCOME</h1>

          {/* UIverse Dark/Light Mode Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              checked={darkmode === "dark"}   // assuming darkmode = "dark" | "light"
              onChange={handleDarkMode}       // your existing toggle function
            />
            <div
              className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none 
                         bg-gray-200 overflow-hidden 
                         before:flex before:items-center before:justify-center 
                         after:flex after:items-center after:justify-center 
                         before:content-['☀️'] 
                         before:absolute before:h-10 before:w-10 
                         before:top-1/2 before:bg-white before:rounded-full 
                         before:left-1 before:-translate-y-1/2 
                         before:transition-all before:duration-700 
                         peer-checked:before:opacity-0 
                         peer-checked:before:rotate-90 
                         peer-checked:before:-translate-y-full 
                         shadow-lg shadow-gray-400 
                         peer-checked:shadow-lg peer-checked:shadow-gray-700 
                         peer-checked:bg-[#383838] 
                         after:content-['🌑'] 
                         after:absolute after:bg-[#1d1d1d] after:rounded-full 
                         after:top-[4px] after:right-1 after:translate-y-full 
                         after:w-10 after:h-10 
                         after:opacity-0 after:transition-all after:duration-700 
                         peer-checked:after:opacity-100 
                         peer-checked:after:rotate-180 
                         peer-checked:after:translate-y-0"
            ></div>
          </label>

          {/* Mobile Menu Button */}
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full p-2 lg:hidden sm:block">
            {cross ? (
              <RxCross1 onClick={handleremove} className="text-2xl" />
            ) : (
              <LuMenu onClick={handleclick} className="text-2xl" />
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ForMobile;