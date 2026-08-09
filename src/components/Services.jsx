import React from "react";
import { Link } from "react-router-dom";
import Service from "./Service";
import Footer from "./Footer";

const Services = () => {

  return (
    <div className="font-mono min-h-screen bg-black text-white pt-8">

      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold">My Services</h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
          I provide modern web development solutions focused on clean design,
          responsive interfaces, and reliable functionality. Here are some of
          the areas where I can help bring your ideas to life.
        </p>
      </div>

      {/* ================= SERVICES ================= */}

      <div>
        <Service/>
      </div>

      {/* ================= CTA ================= */}

      <div className="max-w-4xl mx-auto text-center mt-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Have an idea in mind?
        </h2>

        <p className="text-gray-400 mt-4">
          Let's turn your idea into a modern and functional web experience.
        </p>

        <Link
          to="/contact"
          className="
            inline-block
            mt-7
            bg-[#e75a70]
            hover:bg-[#d6485f]
            text-white
            px-7
            py-3
            rounded-lg
            font-semibold
            transition
            duration-300
          "
        >
          Let's Work Together
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
