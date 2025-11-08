import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-linear-to-r from-[#a33d3d] to-[#d1a24d] text-white text-sm py-2 text-center">
        We Don’t Just Advise. We Execute.{" "}
        <span className="font-semibold underline cursor-pointer">
          Click Here To Learn More
        </span>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 lg:px-16 py-3 bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ANTX Consulting Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-13 font-medium text-[17px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#c1272d]" : "hover:text-[#c1272d]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#c1272d]" : "hover:text-[#c1272d]"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/we-offer"
            className={({ isActive }) =>
              isActive ? "text-[#c1272d]" : "hover:text-[#c1272d]"
            }
          >
            What We Offer
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-[#c1272d]" : "hover:text-[#c1272d]"
            }
          >
            Our Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#c1272d]" : "hover:text-[#c1272d]"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Contact */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="bg-linear-to-r from-[#c8563c] to-[#f3c15b] rounded-full p-2">
            <Phone className="text-white h-4 w-4" />
          </div>
          <div className="text-left leading-tight">
            <span className="text-md text-black">Let’s Connect</span>
            <div className="text-[#c1272d] font-bold text-md">888-998-2567</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center py-4 space-y-3 font-semibold">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c1272d]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c1272d]"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c1272d]"
          >
            What We Offer
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c1272d]"
          >
            Our Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c1272d]"
          >
            Contact
          </NavLink>
          <div className="flex gap-2 pt-3 border-t border-gray-300 w-full justify-center pl-4">
            <Phone className="text-[#c8563c] h-4 w-4" />
            <span className="text-[#c1272d] font-bold">888-998-2567</span>
          </div>
        </div>
      )}
    </header>
  );
}
