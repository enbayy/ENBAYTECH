import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 2, name: "HİZMETLER", link: "/hizmetlerimiz" },
  { id: 3, name: "HAKKIMIZDA", link: "/hakkimizda" },
  { id: 4, name: "İLETİŞİM", link: "/iletisim" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="container relative bg-[#f9f9f9] dark:from-color1 dark:to-color2 text-color1 dark:text-color5 z-50">
      <div className="mx-auto flex justify-between items-center py-5 px-4">
        <Link
          to="/"
          className="text-[#685d5f] dark:text-color5 text-3xl font-bold tracking-wide font-roboto"
        >
          ENBAYTECH
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`relative px-3 py-2 inline-block text-xl font-semibold font-poppins transition-all duration-300
                ${location.pathname === link
                      ? "text-[#392f2f] dark:text-[#f9f9f9] border-b-2 border-[#392f2f] dark:border-[#f9f9f9]"
                      : "text-[#392f2f] dark:text-[#f9f9f9] hover:text-[#000003] dark:hover:text-[#d4cfce]"
                    }
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
                before:bg-[#757174] before:scale-x-0 before:origin-right 
                before:transition before:duration-300 before:ease-in-out 
                hover:before:scale-x-100 hover:before:origin-left
              `}
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
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-color1 dark:text-color5" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-color1 dark:text-color5" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>

  );
};

export default Navbar;