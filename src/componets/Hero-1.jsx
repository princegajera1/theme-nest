import { FaCheck } from "react-icons/fa";

// IMAGE IMPORTS (Tamara path mujab change kari sako)
import img1 from "../assets/Rectangle-9.png";   
import img2 from "../assets/Rectangle-6-1.png"; 
import img3 from "../assets/Rectangle-7.png";   
import img4 from "../assets/Rectangle-8-1.png"; 

const Hero1 = () => {
  return (
    <section className="pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MAIN GRID: Laptop ma 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
          
          {/* SECTION 1: Left Tall Image */}
          <div className="lg:col-span-1 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            <img src={img1} alt="Product 1" className="w-full h-auto block" />
          </div>

          {/* SECTION 2: Middle - Text (Top) + 2 Images Grid (Bottom) */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full justify-end">
            
            {/* 3 Text Points Row - Photo mujab styling */}
            <div className="flex flex-row justify-between items-center px-4 mb-2">
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[12px] stroke-[3]" />
                <span className="text-[13px] md:text-[15px] font-extrabold tracking-tight text-gray-800 whitespace-nowrap">
                  Quick Installation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[12px] stroke-[3]" />
                <span className="text-[13px] md:text-[15px] font-extrabold tracking-tight text-gray-800 whitespace-nowrap">
                  Customisation Support
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[12px] stroke-[3]" />
                <span className="text-[13px] md:text-[15px] font-extrabold tracking-tight text-gray-800 whitespace-nowrap">
                  Ongoing Maintenance
                </span>
              </div>
            </div>

            {/* 2 Images Grid in Middle Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                <img src={img2} alt="Product 2" className="w-full h-auto block" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                <img src={img3} alt="Product 3" className="w-full h-auto block" />
              </div>
            </div>
          </div>

          {/* SECTION 3: Right Tall Image */}
          <div className="lg:col-span-1 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            <img src={img4} alt="Product 4" className="w-full h-auto block" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero1;