import React from "react";
import TypeWriter from "./TypeWriter";
import Video from "./Video";
import Service from "./Service";
import TechStack from "./TechStack";
import Footer from "./Footer";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="font-mono">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-10 gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            ARPIT AGRE
          </h1>

          <div className="mt-4 min-h-[50px] text-2xl sm:text-3xl md:text-4xl text-[#e75a70] flex justify-center lg:justify-start">
            <TypeWriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "React Developer",
                "Full Stack Developer",
              ]}
            />
          </div>

          <div className="mt-2 flex flex-col items-center lg:items-start">
            <p className="text-white text-base sm:text-lg leading-8 max-w-2xl">
              Passionate MERN Stack Developer with a strong interest in building
              responsive, modern, and user-friendly web applications. I
              specialize in creating seamless digital experiences using
              React.js, Node.js, Express.js, and MongoDB while focusing on clean
              code, performance, and intuitive user interfaces. I enjoy learning
              new technologies and turning creative ideas into impactful web
              solutions.
            </p>

            <Link to="/projects" className="mt-8 bg-[#e75a70] hover:bg-[#d6485f] transition duration-300 text-white px-8 py-3 rounded-lg">
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Section */}

        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="w-[280px] sm:w-[350px] md:w-[430px] lg:w-[500px]">
            <Video path="./src/assets/generate_an_animation_video_ou (1).mp4" />
          </div>
        </div>
      </div>
      <TechStack />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
