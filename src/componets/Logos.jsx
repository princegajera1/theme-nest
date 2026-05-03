import { FaUtensils, FaTruck, FaBurn, FaAngleDoubleRight, FaPaperPlane, FaCompactDisc, FaStarOfLife } from "react-icons/fa";

const Logos = () => {
  return (
    <div className="w-full bg-white py-10 md:py-14 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-400 mb-8 uppercase tracking-widest">
          Trusted by top tier companies
        </p>
        
        {/* Logos Container */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 lg:gap-16 items-center">
          
          <div className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:text-[#6039ff] hover:scale-105">
            <FaUtensils className="text-2xl md:text-3xl" />
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black tracking-tighter">ONE</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Delivery</span>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:text-[#00c2ff] hover:scale-105">
            <div className="flex flex-col leading-none text-center">
              <span className="text-2xl font-black italic tracking-tighter">CE</span>
              <span className="text-sm font-semibold tracking-tight">Complete Express</span>
              <span className="text-[8px] tracking-widest text-gray-500">Logistics Simplified</span>
            </div>
          </div>

          <div className="flex items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:text-[#ff8c00] hover:scale-105">
            <span className="text-xl md:text-2xl font-bold tracking-tight">MetroGAS</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:scale-105">
            <span className="text-xl md:text-2xl font-bold">vrs</span>
            <FaAngleDoubleRight className="text-[#ff8c00] text-sm" />
            <span className="text-xl md:text-2xl font-medium tracking-tight">vericlaim</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:text-[#6039ff] hover:scale-105">
            <FaPaperPlane className="text-2xl" />
            <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">JUGNOO</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:text-[#00c2ff] hover:scale-105">
            <FaCompactDisc className="text-2xl" />
            <span className="text-xl md:text-2xl font-medium tracking-tight">gasco</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 text-gray-800 hover:text-blue-600 hover:scale-105">
            <FaStarOfLife className="text-xl md:text-2xl" />
            <span className="text-xl md:text-2xl font-black tracking-widest">MAERSK</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Logos;
