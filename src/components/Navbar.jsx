import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import Mailbox from "./Mailbox";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-[#e75a70] text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <nav className="bg-black sticky top-0 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="w-10 h-10 border rounded"
          >
            <img src="/Portfolio_Favicon.png"/>
          </NavLink>

          {/* Desktop Mailbox */}
          <div className="hidden md:flex font-mono">
            <Mailbox />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 font-mono">
            <NavLink to="/" className={linkStyles}>
              HOME
            </NavLink>

            <NavLink to="/about" className={linkStyles}>
              ABOUT
            </NavLink>

            <NavLink to="/projects" className={linkStyles}>
              PROJECTS
            </NavLink>

            <NavLink to="/services" className={linkStyles}>
              SERVICES
            </NavLink>

            <NavLink to="/contact" className={linkStyles}>
              CONTACT
            </NavLink>

          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-3 md:hidden">
            <Mailbox />

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 font-mono">
            <NavLink
              to="/"
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </NavLink>

            <NavLink
              to="/projects"
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </NavLink>

            <NavLink
              to="/about"
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/services"
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </NavLink>

            <NavLink
              to="/contact"
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;