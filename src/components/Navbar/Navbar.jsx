import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 2, name: "HİZMETLER", link: "/hizmetlerimiz" },
  { id: 3, name: "ÜRÜNLER", link: "/urunler" },
  { id: 4, name: "REFERANSLAR", link: "/referanslar" },
  { id: 5, name: "HAKKIMIZDA", link: "/hakkimizda" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    navigate("/iletisim");
  };

  return (
    <div className="h-20 flex items-center justify-center relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-orange-500 text-3xl font-bold">
            engintasarım
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className={`relative px-4 py-2 inline-block cursor-pointer text-xl font-bold transition-colors duration-300
                      ${location.pathname === link
                        ? "text-primary font-semibold border-b-2 border-orange-500"
                        : "text-black dark:text-white hover:text-primary"
                      } before:bg-primary before:absolute before:-bottom-0 before:left-0 before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3 lg:gap-6">
            <button
              onClick={handleClick}
              className="hidden lg:block primary-btn font-medium text-lg hover:bg-orange-600"
            >
              TEKLİF AL
            </button>
            <DarkMode />
            <div className="lg:hidden">
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;