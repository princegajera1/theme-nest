import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaApple,
  FaAndroid,
  FaSwift,
  FaPython,
  FaGoogle,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter, SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si";

// Service Images
import s1 from "../assets/s-1.jpg";
import s2 from "../assets/s-2.jpg";
import s3 from "../assets/s-3.jpg";

const Services = () => {
  const techStack = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Firebase", icon: <IoLogoFirebase className="text-[#FFCA28]" /> },
    { name: "iOS", icon: <FaApple className="text-gray-800" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Swift", icon: <FaSwift className="text-[#F05138]" /> },
  ];

  const serviceData = [
    { title: "Quick Setup", desc: "Launch your website quickly with simple and easy setup processes.", img: s1 },
    { title: "Make It Yours", desc: "We can adjust and personalize the product to fit your unique needs.", img: s2 },
    { title: "Add New Features", desc: "Have an idea? Our team can build it and bring it to life for you.", img: s3 },
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Part 1: Built With The Best (SEAMLESS SCROLL) --- */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Built With The Best</h2>
          <p className="text-gray-500 text-lg mb-12">Built on modern frameworks for speed, security, and performance.</p>

          <div className="relative flex overflow-hidden py-6">
            <motion.div
              className="flex space-x-10 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }} // Full 100% move thay chhe
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40, // Slow speed
              }}
            >
              {/* Loop list multiple times to remove any gap */}
              {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-10 py-5 bg-white border border-gray-100 rounded-2xl shadow-sm min-w-[200px] cursor-pointer hover:shadow-md hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="font-bold text-gray-700 text-xl">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Part 2: Our Services --- */}
        <div className="text-center mb-16 pt-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services to Empower You</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">From setup to growth, we offer everything you need to start strong.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 group">
              <div className="p-4">
                <div className="rounded-[2rem] overflow-hidden bg-gray-50 aspect-video">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="px-10 pb-12 pt-4 text-left">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-[17px] leading-relaxed font-medium">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;