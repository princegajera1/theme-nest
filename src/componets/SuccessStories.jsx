import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Assets Import
import b1 from "../assets/b-1.jpg";
import f1 from "../assets/Frame-1.jpg";
import f2 from "../assets/Frame-2.jpg";
import f3 from "../assets/Frame-3.jpg";
import f4 from "../assets/Frame-4.jpg";
import f5 from "../assets/Frame-5.jpg";
import f6 from "../assets/Frame-6.jpg";
import f7 from "../assets/Frame-7.jpg";

// Manual Counter Component
const ManualCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration / 10);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 10);
            return () => clearInterval(timer);
        }
    }, [inView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

const SuccessStories = () => {
    const stats = [
        { id: 1, number: 30, suffix: "+", label: "Team Member" },
        { id: 2, number: 5000, suffix: "+", label: "Products Sold" },
        { id: 3, number: 10, suffix: "+", label: "In-house Products" },
    ];

    const clientFrames = [f1, f2, f3, f4, f5, f6, f7];

    return (
        <section className="relative py-20 bg-white overflow-hidden font-sans">
            
            {/* Background World Map - Opacity thodi vadhari che (0.3) jethi e dekhay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0 pointer-events-none">
                <img src={b1} alt="World Map" className="w-full max-w-4xl object-contain mt-5" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[30px] md:text-[40px] font-bold text-gray-800 mb-3 tracking-tight">
                        Success Stories We're Proud Of
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg font-normal">
                        Real businesses, real results—discover how our solutions made a difference.
                    </p>
                </div>

                {/* Counter Cards - Size decreased (p-8 and min-w-64) */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-28">
                    {stats.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(96,57,255,0.05)] border border-gray-100 min-w-[260px] md:min-w-[280px] text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer ${index === 1 ? 'md:-mt-10' : ''}`}
                        >
                            <h3 className="text-[35px] font-extrabold text-[#6039ff] mb-1 leading-none tracking-tight">
                                <ManualCounter end={item.number} />
                                {item.suffix}
                            </h3>
                            <p className="text-gray-500 text-[15px] font-semibold uppercase tracking-wider">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Client Logos - Forced single line on desktop */}
                <div className="w-full overflow-x-auto no-scrollbar">
                    <div className="flex flex-nowrap items-center justify-between md:justify-center gap-6 md:gap-10 min-w-max md:min-w-0">
                        {clientFrames.map((frame, index) => (
                            <div key={index} className="w-24 md:w-32 flex-shrink-0 flex items-center justify-center">
                                <img 
                                    src={frame} 
                                    alt={`Partner ${index + 1}`} 
                                    className="w-full h-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;