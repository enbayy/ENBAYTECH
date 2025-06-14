import React from "react";
import { MenuLinks } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    toggleMenu();
    navigate(link);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 z-20 h-screen w-[75%] bg-[#f9f9f9] dark:bg-[#000003] 
      text-[#392f2f] dark:text-[#d4cfce] px-8 pb-6 pt-16 shadow-md rounded-r-xl 
      transition-all duration-300 flex flex-col justify-between ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold font-inter">MENÜ</h2>
          <HiX size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavigate(link)}
                  className="mb-5 inline-block text-left w-full font-inter font-semibold"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;