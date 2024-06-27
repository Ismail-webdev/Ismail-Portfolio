import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center bg-inherit">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex font-bold flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div
          className="md:hidden cursor-pointer text-[#c6c7c8]"
          onClick={toggleMobileNav}
        >
          {!isMobileNavOpen ? <FiMenu size={32} /> : <FaTimes size={32} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center py-2 font-bold text-xl space-y-4">
            <li>
              <NavLink
                to="/"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
                onClick={toggleMobileNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
                onClick={toggleMobileNav}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
                onClick={toggleMobileNav}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
                onClick={toggleMobileNav}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[#c6c7c8] hover:text-[#83888a] hover:underline"
                onClick={toggleMobileNav}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
