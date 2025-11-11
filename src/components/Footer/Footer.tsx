import React from "react";
import logo from "../../assets/images/Logo.svg";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ffff] text-black">
      <div className="border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
          <div className="text-center">
            <img
              className="text-lime-400 text-2xl font-bold"
              src={logo}
              alt="logo"
            />
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li className="font-outfit hover:text-lime-400 transition cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="font-outfit hover:text-lime-400 transition cursor-pointer">
              <a href="/adm">Admission</a>
            </li>
            <li className="font-outfit hover:text-lime-400 transition cursor-pointer">
              <a href="/acad">Academics</a>
            </li>
            <li className="font-outfit hover:text-lime-400 transition cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="font-outfit hover:text-lime-400 transition cursor-pointer">
              <a href="/student"> student</a>
            </li>
            <li className="font-outfit hover:text-lime-400 transition cursor-pointer">
              <a href="/contact"> Contact Us</a>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm">
            <p className="font-outfit"> hello@skillbridge.com</p>
            <p className="font-outfit"> +91 91813 23 2309</p>
            <p className="font-outfit">Somewhere in the World</p>
          </div>

          <div className=" font-lexend flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500 border-t border-gray-800 pt-6 gap-4">
            <p>© Academy. All Rights Reserved</p>
            <div className="flex gap-4">
              <a href="#" className="font-lexend hover:text-lime-400">
                Privacy Policy
              </a>
              <a href="#" className="font-lexend hover:text-lime-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
