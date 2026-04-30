import React from "react";
import { FaCheck } from "react-icons/fa";

// EXACT FILE ORDER: 9, 6-1, 7, 8-1
import img1 from "../assets/Rectangle-9.png";   
import img2 from "../assets/Rectangle-6-1.png"; 
import img3 from "../assets/Rectangle-7.png";   
import img4 from "../assets/Rectangle-8-1.png"; 

const Hero1 = () => {
  return (
    <section className="pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 4 Column Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          
          {/* Column 1: Taller Image (Rectangle-9) */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            <img src={img1} alt="Product 1" className="w-full h-auto block" />
          </div>

          {/* Middle Columns Container (For 2nd and 3rd Image) */}
          {/* Ahiya tame 3 text points ne middle ni 2 images ni upar sarkhi space sathe jovsho */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            {/* Features Row - Sarkhi Space (Space-Between) */}
            <div className="flex flex-row justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[10px] stroke-[3]" />
                <span className="text-[14px] font-bold tracking-tight text-gray-800">Quick Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[10px] stroke-[3]" />
                <span className="text-[14px] font-bold tracking-tight text-gray-800">Customisation Support</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[10px] stroke-[3]" />
                <span className="text-[14px] font-bold tracking-tight text-gray-800">Ongoing Maintenance</span>
              </div>
            </div>

            {/* Middle 2 Images Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                <img src={img2} alt="Product 2" className="w-full h-auto block" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                <img src={img3} alt="Product 3" className="w-full h-auto block" />
              </div>
            </div>
          </div>

          {/* Column 4: Taller Image (Rectangle-8-1) */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            <img src={img4} alt="Product 4" className="w-full h-auto block" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero1;