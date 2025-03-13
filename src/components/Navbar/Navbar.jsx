import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 2, name: "HİZMETLER", link: "/hizmetlerimiz" },
  { id: 3, name: "ÜRÜNLER", link: "/urunlerimiz" },
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
    <header className="relative bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-white z-50">
      <div className="container flex justify-between items-center py-5">
        <Link to="/" className="text-[#E76F51] dark:text-[#E9C46A] text-3xl font-bold font-poppins">
          Engin Tasarım
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`relative px-4 py-2 inline-block text-lg font-semibold font-poppins transition-colors duration-300
                    ${location.pathname === link
                      ? "text-[#E76F51] dark:text-[#E9C46A] font-semibold border-[#E76F51] dark:border-[#E9C46A]"
                      : "text-[#1E293B] dark:text-white hover:text-[#E76F51] dark:hover:text-[#E9C46A]"
                    }
                        before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] 
                      before:bg-[#E76F51] dark:before:bg-[#E9C46A] before:scale-x-0 before:origin-right 
                        before:transition before:duration-300 before:ease-in-out 
                        hover:before:scale-x-100 hover:before:origin-left
  `                 }
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={handleClick}
            className="hidden lg:block text-white bg-[#E76F51] dark:bg-[#E9C46A] hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition-all duration-300 px-5 py-2 rounded-tl-2xl rounded-br-2xl text-lg font-semibold  font-poppins"
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
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;