import React from "react";
import Footer from "./Footer";
import JourneyItem from "./JourneyItem";

const About = () => {
  return (
    <div className="font-mono min-h-screen bg-black text-white pt-8 px-4 md:px-10">
      {/* ================= HEADER ================= */}

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Get to know me, my journey in web development, and the technologies I
          use to build modern web applications.
        </p>
      </div>

      {/* ================= ABOUT ME ================= */}

      <div className="max-w-6xl mx-auto mt-12">
        <p className="text-[#e75a70] uppercase tracking-widest text-sm">
          Who I Am
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          A Passionate Web Developer
        </h2>

        <div className="max-w-8xl">
          <p className="text-gray-400 leading-7 mt-5">
            I am a detail-oriented MERN Stack Developer with experience in web
            application development. I enjoy building responsive, modern, and
            user-friendly web applications while continuously improving my
            technical and problem-solving skills.
          </p>

          <p className="text-gray-400 leading-7 mt-4">
            My primary experience lies in JavaScript, React.js, HTML, CSS, and
            Bootstrap, along with Node.js, Express.js, and MongoDB. I enjoy
            turning ideas into functional digital experiences and writing clean,
            maintainable code.
          </p>

          <p className="text-gray-400 leading-7 mt-4">
            I have also worked on projects such as a Vehicle Customization
            Platform, where I explored full-stack development and interactive
            user experiences.
          </p>
        </div>
      </div>

      {/* ================= EDUCATION & ACHIEVEMENT ================= */}

      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-6">
        {/* Education */}

        <div
          className="
            bg-[#171717]
            border border-gray-800
            rounded-2xl
            p-6
            hover:border-[#e75a70]
            transition duration-300
          "
        >
          <p className="text-[#e75a70] text-sm uppercase tracking-widest">
            Education
          </p>

          <h2 className="text-2xl font-bold mt-2">
            B.Sc. Information Technology
          </h2>

          <p className="text-gray-400 mt-3 leading-7">
            Built a strong foundation in information technology, software
            development, web technologies, databases, and information technology
            throughout my undergraduate studies.
          </p>
        </div>

        {/* Achievement */}

        <div
          className="
            bg-[#171717]
            border border-gray-800
            rounded-2xl
            p-6
            hover:border-[#e75a70]
            transition duration-300
          "
        >
          <p className="text-[#e75a70] text-sm uppercase tracking-widest">
            Achievement
          </p>

          <h2 className="text-2xl font-bold mt-2">MAH MCA CET</h2>

          <div className="mt-3">
            <span className="text-4xl font-bold text-[#e75a70]">99.027</span>

            <span className="text-gray-400 ml-2">Percentile</span>
          </div>

          <p className="text-gray-400 mt-3 leading-7">
            Achieved a 99.027 percentile in the MAH MCA CET, demonstrating
            strong problem-solving and logical reasoning abilities.
          </p>
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}

      <div className="max-w-6xl mx-auto mt-14">
        <p className="text-[#e75a70] text-sm uppercase tracking-widest">
          Experience
        </p>

        <h2 className="text-3xl font-bold mt-2">My Experience</h2>

        <div
          className="
            mt-6
            bg-[#171717]
            border border-gray-800
            rounded-2xl
            p-6
            hover:border-[#e75a70]
            transition duration-300
          "
        >
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold">Web Developer Intern</h3>

              <p className="text-[#e75a70] mt-1">Simian Travels</p>
            </div>

            <span className="text-gray-500">Internship</span>
          </div>

          <p className="text-gray-400 leading-7 mt-4 max-w-4xl">
            Worked on web development tasks involving responsive interfaces,
            frontend technologies, and creating engaging user experiences. This
            experience helped strengthen my practical understanding of web
            development and real-world project development.
          </p>
        </div>
      </div>

      {/* ================= JOURNEY ================= */}

      <div className="max-w-5xl mx-auto mt-14">
        <p className="text-[#e75a70] text-sm uppercase tracking-widest text-center">
          My Journey
        </p>

        <h2 className="text-3xl font-bold text-center mt-2">
          Developer Journey
        </h2>

        <div className="mt-8 space-y-4">
          <JourneyItem
            number="01"
            title="Started with Web Development"
            description="Built a foundation in HTML, CSS, JavaScript, and frontend development."
          />

          <JourneyItem
            number="02"
            title="Explored React.js"
            description="Started building interactive interfaces and learning component-based development."
          />

          <JourneyItem
            number="03"
            title="Moved Towards MERN Stack"
            description="Expanded into Node.js, Express.js, and MongoDB to understand full-stack development."
          />

          <JourneyItem
            number="04"
            title="Built Real Projects"
            description="Applied my skills to projects such as the Vehicle Customization Platform."
          />

          <JourneyItem
            number="05"
            title="Continuing to Grow"
            description="Continuously learning new technologies and improving my development and problem-solving skills."
          />
        </div>
      </div>

      {/* ================= CTA ================= */}

      <div className="max-w-6xl mx-auto text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's Build Something Together
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          I'm always interested in learning, building new projects, and
          exploring opportunities to grow as a developer.
        </p>
      </div>
    </div>
  );
};

/* ================= JOURNEY COMPONENT ================= */

export default About;
