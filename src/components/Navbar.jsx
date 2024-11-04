import React from "react";
import github from "../assets/github.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full py-5">
        <div className="nav-wrapper flex justify-between w-[90%] mx-auto items-center rounded-3xl drop-shadow-2xl shadow-inner shadow-lg shadow-black bg-slate-600 px-10 ">
          <div className="logo text-white font-bold font-['Gilroy']  ">
            MineActualCraft
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
                className="scale-[100%] hover:scale-150 transition-all duration-500 hover:rotate-12"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
