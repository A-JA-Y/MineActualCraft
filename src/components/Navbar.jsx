import React from "react";
import github from "../assets/github.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full py-5 ">
        <div className="nav-wrapper flex justify-between w-[90%] mx-auto items-center bg-blue-200 dark:bg-zinc-900  rounded-3xl drop-shadow-2xl  shadow-lg shadow-zinc-900  px-10  ">
          <div className="logo text-white font-bold font-['Gilroy'] w-14 h-14  ">
            <img src={logo} alt="MineActualCraft" className="rounded-full hover:-rotate-45 hover:scale-150 drop-shadow-xl transition-all duration-500" />
          </div>
          <div className="github p-1  ">
            <a
              href="https://github.com/A-JA-Y/MineActualCraft"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="github"
                className="scale-[100%] drop-shadow-lg hover:scale-150 transition-all duration-500 hover:rotate-12"
              />
            </a>
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
