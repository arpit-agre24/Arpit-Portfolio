import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiVite,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Java", icon: <FaJava />, color: "text-red-400" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
  { name: "Vite", icon: <SiVite />, color: "text-violet-400" },
];

const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto py-2 px-6 font-mono">
      <h2 className="text-5xl font-bold text-center text-white">Tech Stack</h2>

      <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto">
        Technologies I use to build fast, scalable, and modern web applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-8">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="bg-[#171717] border border-gray-800 rounded-2xl p-6
                       flex flex-col items-center justify-center
                       hover:border-[#e75a70]
                       hover:-translate-y-2
                       transition-all duration-300
                       cursor-pointer"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>

            <h3 className="text-white mt-4 font-medium">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
