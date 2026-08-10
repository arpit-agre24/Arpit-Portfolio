import React from "react";
import { useState, useRef } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser"

const Contact = () => {

  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey : import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
    ).then(
      () => {
        setStatus("Message Sent Successfully!");
        e.target.reset();
      }, 
      (error) => {
        console.log(error);
        setStatus("Something went wrong. Please try again")
      }
    );
  };

  return (
    <div className="font-mono min-h-screen bg-black text-white pt-8 px-4 md:px-10">

      {/* ================= HEADER ================= */}

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Me
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Have a project idea, an opportunity, or simply want to connect?
          Feel free to get in touch.
        </p>
      </div>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-2 gap-8">
        {/* ================= LEFT SIDE ================= */}
        <div>
          <p className="text-[#e75a70] text-sm uppercase tracking-widest">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's Talk
          </h2>
          <p className="text-gray-400 leading-7 mt-4 max-w-lg">
            I'm always open to discussing new projects, development
            opportunities, collaborations, or ideas. Send me a message
            and I'll get back to you as soon as possible.
          </p>

          {/* Contact Details */}
          <div className="mt-8 space-y-5">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#171717] border border-gray-800 flex items-center justify-center">
                <FaEnvelope className="text-[#e75a70]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:youremail@gmail.com"
                  className="text-gray-300 hover:text-[#e75a70] transition"
                >
                  arpit.agre2405@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#171717] border border-gray-800 flex items-center justify-center">
                <FaPhone className="text-[#e75a70]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>
                <a
                  href="tel:+910000000000"
                  className="text-gray-300 hover:text-[#e75a70] transition"
                >
                  +91 93093 56298
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#171717] border border-gray-800 flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#e75a70]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>
                <p className="text-gray-300">
                  Thane, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-3">
              Connect with me
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-lg
                  bg-[#171717]
                  border border-gray-800
                  flex
                  items-center
                  justify-center
                  text-gray-300
                  hover:text-white
                  hover:border-[#e75a70]
                  transition
                "
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-lg
                  bg-[#171717]
                  border border-gray-800
                  flex
                  items-center
                  justify-center
                  text-[#0A66C2]
                  hover:border-[#e75a70]
                  transition
                "
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div
          className="
            bg-[#171717]
            border border-gray-800
            rounded-2xl
            p-6
            md:p-8
          "
        >

          <h2 className="text-2xl font-bold">
            Send Me a Message
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Fill out the form and I'll get back to you.
          </p>


          <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="
                  w-full
                  bg-[#0f0f0f]
                  border border-gray-800
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-[#e75a70]
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="
                  w-full
                  bg-[#0f0f0f]
                  border border-gray-800
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-[#e75a70]
                  transition
                "
              />
            </div>

            {/* Subject */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="What is this about?"
                required
                className="
                  w-full
                  bg-[#0f0f0f]
                  border border-gray-800
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-[#e75a70]
                  transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
              name="message"
                rows="5"
                placeholder="Write your message..."
                className="
                  w-full
                  bg-[#0f0f0f]
                  border border-gray-800
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  outline-none
                  resize-none
                  focus:border-[#e75a70]
                  transition
                "
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="
                w-full
                bg-[#e75a70]
                hover:bg-[#d6485f]
                text-white
                py-3
                rounded-lg
                transition
                duration-300
                font-semibold
              "
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-gray-400 text-sm mt-3">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;