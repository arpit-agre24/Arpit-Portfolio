import React from 'react'
import {
    Monitor,
    Code2,
    Server,
    Rocket,
    Braces,
    BookOpen,
  } from "lucide-react";

const Service = () => {

    const services = [
        {
            icon : <Code2 size={40} />,
            title : "Frontend Development",
            description : "Interactive and modern interfaces built using React.js, JavaScript, Tailwind CSS, and Bootstrap.",
        },
        {
            icon : <Server size={40} />,
            title : "Backend Development",
            description : "Scalable REST APIs with Node.js, Express.js, and MongoDB.",
        },
        {
            icon : <Monitor size={40}/>,
            title : "Responsive Design",
            description : "Websites that look and perform beautifully on desktop, tablet, and mobile devices.",
        },
        {
            icon : <Rocket size={40} />,
            title : "Performance",
            description : "Fast-loading applications optimized for responsiveness and efficiency.",
        },
        {
            icon : <Braces size={40} />,
            title : "Clean Code",
            description : "Reusable, modular, and maintainable code following industry best practices.",
        },
        {
            icon : <BookOpen size={40} />,
            title : "Continuous Learning",
            description : "Always exploring new technologies and improving my development skills.",
        },
    ]

  return (
    <section className='max-w-7xl mx-auto py-8'>
        <h2 className="text-3xl font-bold text-center text-[#e75a70]">
            What I Bring to the Table?
        </h2>
        <p className="text-gray-400 text-center mt-4 max-w-5xl mx-auto">
        I build modern, scalable, and user-focused web applications by
        combining clean code, responsive design, and efficient backend
        development.
        </p>

        <div className='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
                <div key={index} className='bg-[#171717] rounded-2xl p-8 border border-gray-800 hover:border-[#e75a70] transition-all duration-300 hover:-translate-y-2'>
                    <div className="text-[#e75a70]">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-white mt-6">{service.title}</h3>
                    <p className="text-gray-400 mt-4 leading-7">{service.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Service