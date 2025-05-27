import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../../assets/enbayLogo.png";
import logoDark from "../../assets/enbayLogo3.png";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 2, name: "HİZMETLER", link: "/hizmetlerimiz" },
  { id: 3, name: "HAKKIMIZDA", link: "/hakkimizda" },
  { id: 4, name: "İLETİŞİM", link: "/iletisim" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="container relative bg-white dark:bg-[#1a1f1c] z-50">
      <div className="mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoLight}
            alt="logo"
            className="h-16 w-16 block dark:hidden"
          />
          <img
            src={logoDark}
            alt="logo dark"
            className="h-16 w-16 hidden dark:block"
          />
          <Link
            to="/"
            className="text-[#0f172a] dark:text-[#e0f2f1] text-2xl md:text-3xl font-bold tracking-wide font-roboto"
          >
            ENBAYTECH
          </Link>
        </div>

        <nav className="hidden lg:flex justify-center flex-1">
          <ul className="flex items-center gap-8">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`relative px-3 py-2 inline-block text-lg font-semibold font-inter transition-all duration-300
              ${location.pathname === link
                      ? "text-[#059669] border-b-2 border-[#059669]"
                      : "text-[#0f172a] dark:text-[#e0f2f1] hover:text-[#10b981] dark:hover:text-[#10b981]"
                    }
              before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
              before:bg-[#10b981] before:scale-x-0 before:origin-right 
              before:transition before:duration-300 before:ease-in-out 
              hover:before:scale-x-100 hover:before:origin-left`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <DarkMode />
          <div className="lg:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer text-[#0f172a] dark:text-[#e0f2f1]"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer text-[#0f172a] dark:text-[#e0f2f1]"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>

  );
};

export default Navbar;