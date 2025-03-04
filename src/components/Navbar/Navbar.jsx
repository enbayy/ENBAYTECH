import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "Anasayfa",
    link: "/",
  },
  {
    id: 2,
    name: "Hizmetler",
    link: "/hizmetlerimiz",
  },
  {
    id: 3,
    name: "Ürünler",
    link: "/urunler",
  },
  {
    id: 4,
    name: "Referanslar",
    link: "/referanslar",
  },
  {
    id: 5,
    name: "Hakkımızda",
    link: "/hakkimizda",
  },
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
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="https://engintasarim.com/assets/images/logo.svg#logo"
              alt="Logo"
              className="w-[200px] h-auto"
            />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-xl font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <button
                onClick={handleClick}
                className="primary-btn font-medium text-lg"
              >
                İletişime Geç
              </button>
              <DarkMode />
            </ul>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;