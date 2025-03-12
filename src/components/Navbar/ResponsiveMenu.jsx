import React from "react";
import { MenuLinks } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    toggleMenu();
    navigate("/iletisim")
  };

  return (
    <div
      className={`fixed top-0 bottom-0 z-20 h-screen w-[75%] bg-white dark:bg-black 
      dark:text-white text-black px-8 pb-6 pt-16 shadow-md rounded-r-xl 
      transition-all duration-300 flex flex-col justify-between ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Menü</h2>
          <HiX size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="mb-5 inline-block" onClick={toggleMenu}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="pb-6">
        <button
          onClick={handleClick}
          className="primary-btn hover:bg-orange-600 w-full block py-4 font-semibold text-lg text-center"
        >
          TEKLİF AL
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;