import React from "react";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="font-mono min-h-screen bg-black text-white pt-8">
      {/* ================= PAGE HEADER ================= */}

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold">My Projects</h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-base md:text-lg">
          A showcase of the projects I've built while exploring modern web
          development and full-stack technologies.
        </p>
      </div>

      {/* ================= PROJECT ================= */}

      <div className="max-w-6xl mx-auto mt-10">
        <div
          className="
            bg-[#171717]
            border border-gray-800
            rounded-3xl
            overflow-hidden
            hover:border-[#e75a70]
            transition duration-300
          "
        >
          {/* ================= PROJECT IMAGES ================= */}

          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* IMAGE 1 */}
              <div
                className="
                  h-[250px]
                  md:h-[320px]
                  bg-[#222222]
                  rounded-2xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="src/assets/Homepage.png"
                  alt="Car Customization Homepage"
                  className="w-full h-full"
                />
              </div>

              {/* IMAGE 2 */}
              <div
                className="
                  h-[250px]
                  md:h-[320px]
                  bg-[#222222]
                  rounded-2xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="src/assets/CarsPage.png"
                  alt="Car Customization Cars Page"
                  className="w-full h-full"
                />
              </div>

              {/* IMAGE 3 */}
              <div
                className="
                  h-[250px]
                  md:h-[320px]
                  bg-[#222222]
                  rounded-2xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="src/assets/UserDashboard.png"
                  alt="Car Customization Homepage"
                  className="w-full h-full"
                />
              </div>

              {/* IMAGE 4 */}
              <div
                className="
                  h-[250px]
                  md:h-[320px]
                  bg-[#222222]
                  rounded-2xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="src/assets/AdminDashboard.png"
                  alt="Car Customization Homepage"
                  className="w-full h-full"
                />
              </div>

              {/* IMAGE 5 */}
              <div
                className="
                  h-[250px]
                  md:h-[400px]
                  bg-[#222222]
                  rounded-2xl
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                  md:col-span-2
                "
              >
                <img
                  src="src/assets/CarCustomizationInterface.png"
                  alt="Car Customization Homepage"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* ================= PROJECT DETAILS ================= */}

          <div className="p-6 md:p-10">
            {/* CATEGORY */}

            <p className="text-[#e75a70] text-sm uppercase tracking-widest">
              MERN Stack Project
            </p>

            {/* TITLE */}

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Car Customization Website
            </h2>

            {/* DESCRIPTION */}

            <p className="text-gray-400 leading-7 mt-5 max-w-4xl">
              A full-stack car customization platform designed to provide users
              with an interactive and user-friendly way to explore and customize
              different aspects of a car. Users can experiment with various
              colors, wheels, and other customization options while experiencing
              a responsive and modern interface.
            </p>

            {/* ================= TECHNOLOGIES ================= */}

            <div className="mt-8">
              <h3 className="text-lg font-semibold">Technologies</h3>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-2 bg-[#222222] border border-gray-700 rounded-full text-sm text-gray-300">
                  React.js
                </span>

                <span className="px-4 py-2 bg-[#222222] border border-gray-700 rounded-full text-sm text-gray-300">
                  Node.js
                </span>

                <span className="px-4 py-2 bg-[#222222] border border-gray-700 rounded-full text-sm text-gray-300">
                  Express.js
                </span>

                <span className="px-4 py-2 bg-[#222222] border border-gray-700 rounded-full text-sm text-gray-300">
                  MongoDB
                </span>

                <span className="px-4 py-2 bg-[#222222] border border-gray-700 rounded-full text-sm text-gray-300">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-8">
              <h3 className="text-lg font-semibold">Key Features</h3>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                <li className="text-gray-400">
                  <span className="text-[#e75a70] mr-2">✓</span>
                  Interactive car customization
                </li>

                <li className="text-gray-400">
                  <span className="text-[#e75a70] mr-2">✓</span>
                  Multiple customization options
                </li>

                <li className="text-gray-400">
                  <span className="text-[#e75a70] mr-2">✓</span>
                  Responsive user interface
                </li>

                <li className="text-gray-400">
                  <span className="text-[#e75a70] mr-2">✓</span>
                  REST API integration
                </li>

                <li className="text-gray-400">
                  <span className="text-[#e75a70] mr-2">✓</span>
                  MongoDB database
                </li>

                <li className="text-gray-400">
                  <span className="text-[#e75a70] mr-2">✓</span>
                  Modern and intuitive UI
                </li>
              </ul>
            </div>

            {/* ================= GITHUB ================= */}

            <div className="mt-10">
              <a
                href="https://github.com/yourusername/car-customization"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  border
                  border-gray-600
                  hover:border-[#e75a70]
                  hover:text-[#e75a70]
                  transition
                  duration-300
                "
              >
                <FaGithub />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
