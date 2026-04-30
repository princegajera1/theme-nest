import React from 'react';

// Assets import
import s1 from "../assets/s-1.jpg";
import s2 from "../assets/s-2.jpg";
import s3 from "../assets/s-3.jpg";
import s4 from "../assets/s-3.jpg"; // Tame kidhu em 3 and 4 same che

const Steps = () => {
    const stepData = [
        {
            id: 1,
            title: "1. Browse & Select",
            desc: "Explore our wide range of ready-made digital solutions and pick the one that fits your business needs.",
            img: s1,
            bgColor: "bg-[#fff9f0]", 
        },
        {
            id: 2,
            title: "2. Purchase Instantly",
            desc: "Explore our wide range of ready-made digital solutions and pick the one that fits your business needs.",
            img: s2,
            bgColor: "bg-[#f0f9ff]", 
        },
        {
            id: 3,
            title: "3. Setup & Customize",
            desc: "Easily install on your server or let our team configure and tailor it for your brand.",
            img: s3,
            bgColor: "bg-[#fdf2f8]", 
        },
        {
            id: 4,
            title: "4. Launch & Grow",
            desc: "Publish your app or website, start serving customers, and scale your business.",
            img: s4,
            bgColor: "bg-[#f0fdf4]", 
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                        4 Easy Steps to Your Website
                    </h2>
                    <p className="text-gray-500 text-lg">
                        From choosing a design to going live, creating your website is quick and effortless.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stepData.map((step) => (
                        <div 
                            key={step.id} 
                            // cursor-pointer class ahiya add karyo chhe
                            className={`${step.bgColor} rounded-[2.5rem] p-8 flex flex-col h-full transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-lg`}
                        >
                            <div className="mb-6">
                                <h3 className="text-[22px] font-extrabold text-gray-900 mb-4 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                            
                            {/* Image Container - Bottom Aligned */}
                            <div className="mt-auto pt-4">
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-white/50">
                                    <img 
                                        src={step.img} 
                                        alt={step.title} 
                                        className="w-full h-auto block object-cover" 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Steps;