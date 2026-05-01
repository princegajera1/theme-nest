import React from "react";
import {
  FaReact, FaNodeJs, FaPhp, FaApple, FaLaravel
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter, SiMysql, SiTailwindcss, SiGooglemaps } from "react-icons/si";

// Service Images
import s1 from "../assets/s-1.jpg";
import s2 from "../assets/s-2.jpg";
import s3 from "../assets/s-3.jpg";

const Services = () => {
  const techStack = [
    { name: "Google Maps", icon: <SiGooglemaps className="text-[#4285F4]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Firebase", icon: <IoLogoFirebase className="text-[#FFCA28]" /> },
    { name: "iOS", icon: <FaApple className="text-gray-800" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  ];

  const serviceData = [
    { title: "Quick Setup", desc: "Launch your website quickly with simple and easy setup processes.", img: s1 },
    { title: "Make It Yours", desc: "We can adjust and personalize the product to fit your unique needs.", img: s2 },
    { title: "Add New Features", desc: "Have an idea? Our team can build it and bring it to life for you.", img: s3 },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">

      {/* Keyframe injected via <style> tag — no tailwind.config needed */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 24px;
          white-space: nowrap;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- Part 1: Tech Stack Slider (FULL SCREEN WIDTH) --- */}
      <div className="text-center mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-4xl font-[500] text-gray-900 mb-6 tracking-tighter uppercase">
            Built With The Best
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-12 font-medium">
            Built on modern frameworks for speed, security, and performance.
          </p>
        </div>

        {/* Full-bleed overflow container */}
        <div
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            overflow: "hidden",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          {/*
            4 copies of techStack inside ONE moving div.
            Keyframe moves -50% = exactly 2 copies wide → seamless infinite loop.
          */}
          <div className="marquee-track">
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                style={{ padding: "16px 28px", flexShrink: 0 }}
                className="flex items-center gap-3 md:gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span style={{ fontSize: "32px", lineHeight: 1, display: "flex" }}>
                  {tech.icon}
                </span>
                <span className="font-black text-gray-700 text-lg md:text-2xl tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Part 2: Our Services (CONTAINED WIDTH) --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-[500] text-gray-900 mb-6 tracking-tighter uppercase">
            Our Services to Empower You
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
            From setup to growth, we offer everything you need to start strong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="p-4">
                <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-gray-50 aspect-video border border-gray-50">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="px-8 md:px-10 pb-10 md:pb-12 pt-2 text-left">
                <h3 className="text-2xl font-[500] text-gray-900 mb-3 tracking-tight italic uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed font-semibold opacity-80">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
