import React, { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import menuIcon from "../../assets/images/menu.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF] text-black px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-[194px] h-[45px]" />
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="/" className="font-outfit px-3 py-1 rounded-full ">
          Home
        </a>
        <a href="/acad" className="font-outfit text-black hover:text-gray-300">
          Academics
        </a>
        <a href="/about" className="font-outfit text-black hover:text-gray-300">
          About
        </a>
        <a href="/adm" className="font-outfit text-black hover:text-gray-300">
          Admission
        </a>
        <a
          href="/student"
          className="font-outfit text-black hover:text-gray-300"
        >
          Student Life
        </a>
        <a
          href="/contact"
          className="font-outfit text-black hover:text-gray-300"
        >
          Contact Us
        </a>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="menu" className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#FFF] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a href="/" className="font-lexend px-3 py-1 rounded-full ">
            Home
          </a>
          <a
            href="/acad"
            className="font-outfit text-black hover:text-gray-300"
          >
            Academics
          </a>
          <a
            href="/about"
            className="font-outfit text-black hover:text-gray-300"
          >
            About
          </a>
          <a href="/adm" className="font-outfit text-black hover:text-gray-300">
            Admission
          </a>
          <a
            href="/student"
            className="font-outfit text-black hover:text-gray-300"
          >
            Student Life
          </a>
          <a
            href="/contact"
            className="font-outfit text-black hover:text-gray-300"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
