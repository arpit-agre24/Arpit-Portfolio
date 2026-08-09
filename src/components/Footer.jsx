import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-2">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white font-mono">
            ARPIT AGRE
          </h2>

          <p className="text-gray-400 max-w-xl leading-7">
            Building modern, responsive, and scalable web applications using
            React.js, Node.js, Express.js, and MongoDB.
          </p>

          {/* Social Icons */}

          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/arpit-agre24"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-300 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/arpit-agre"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-[#0A66C2] hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:arpit.agre2405@gmail.com"
              className="text-3xl text-[#e75a70] hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="/src/assets/ARPIT AGRE - RESUME.pdf"
              target="_blank"
              className="text-3xl text-gray-300 hover:text-white transition"
            >
              <FaFileAlt />
            </a>
          </div>
        </div>

        {/* Navigation */}

        <div className="border-t border-gray-800 mt-3 pt-3">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <Link
              to="/"
              className="hover:text-[#e75a70] transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-[#e75a70] transition duration-300"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="hover:text-[#e75a70] transition duration-300"
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="hover:text-[#e75a70] transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#e75a70] transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-4 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arpit Agre. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2 flex justify-center items-center gap-2">
            Made with <FaHeart className="text-[#e75a70]" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
