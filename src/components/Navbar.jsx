import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/fav-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonial", label: "Testimonial" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaXmark /> : <IoMenu />}
        </button>

        <div className="md:flex gap-10 items-center hidden">
          <ul className="flex space-x-3 items-center">
            {navLinks.map((menu) => (
              <li key={menu.href}>
                <a
                  href={menu.href}
                  onClick={() => setActiveLink(menu.href)}
                  className={`py-2 inline-block capitalize text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-300 after:transition-all after:duration-300 ${
                    activeLink === menu.href
                      ? "text-blue-600 after:w-full"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold">
            Get in Touch
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-white border-t">
          {navLinks.map((menu) => (
            <li key={menu.href} className="text-center">
              <a
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(menu.href);
                }}
                href={menu.href}
                className="font-bold transition-all duration-300 hover:text-blue-500 border-b border-transparent hover:border-blue-500"
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
