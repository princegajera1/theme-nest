import React, { useState } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

// Assets import - Ensure these match your src/assets folder filenames
import productMain from "../assets/product.jpg";

const Product = () => {
    const tabs = ["RideNDrop", "Shop Swift", "EduSphere", "MediCare+", "BizFlow", "FoodiezHub"];
    const [activeTab, setActiveTab] = useState("Shop Swift");

    return (
        <section className="pt-16 pb-20 bg-[#fcfaff] font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl font-black text-gray-900 tracking-tight mb-4">
                        Our Product Collection
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Find the right solution for your industry — from e-commerce to healthcare, we’ve got it all.
                    </p>
                </div>

                {/* 2. Navigation Tabs */}
                <div className=" flex overflow-x-auto md:overflow-visible items-center justify-start md:justify-center gap-3 mb-16 no-scrollbar pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 border whitespace-nowrap flex-shrink-0 ${
                                activeTab === tab
                                    ? "bg-[#6039ff] text-white border-transparent shadow-lg shadow-purple-100"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-[#6039ff]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 3. Main Content: Grid for Side-by-Side (md: grid-cols-2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Side: Text Details (tamara photo mujab) */}
                    <div className="order-2 md:order-1 space-y-8 text-left">
                       <h3 className="text-xl md:text-3xl font-bold text-gray-800 leading-[1.2] tracking-tight">
    App Launch – Modern Business Website Template
</h3>
                        
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                            Launch your own branded ride-sharing and parcel delivery platform today. 
                            Accept bookings anytime through your website or mobile app. 
                            Offer seamless rides and fast parcel drop-offs—no middlemen, no heavy commissions.
                        </p>

                        {/* Feature Badges style from photo */}
                        <div className="cursor-pointer flex flex-wrap gap-3">
                            <FeatureBadge text="Admin Panel" />
                            <FeatureBadge text="User App" />
                            <FeatureBadge text="Driver App" />
                            <FeatureBadge text="Business Website" />
                        </div>

                        {/* Purple Button */}
                        <div className="pt-4">
                            <button className="cursor-pointer w-full md:w-auto bg-[#6039ff] text-white px-8 py-4 rounded-xl font-black text-[15px] flex items-center justify-center gap-3 shadow-xl hover:bg-[#4f2ee0] transition-all">
                                Launch Your Ride & Delivery System Today
                                <FaArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image Showcase */}
                    <div className="order-1 md:order-2">
                        <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white relative">
                            <img src={productMain} alt="Product Showcase" className="w-full h-auto block" />
                            {/* Floating Live Preview Badge */}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                                <span className="text-[11px] font-bold text-gray-700">Live Preview</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const FeatureBadge = ({ text }) => (
    <div className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f3f0ff] border border-purple-50 hover:bg-purple-100 transition-colors">
        <span className="text-[13px] md:text-[14px] font-extrabold text-gray-700">{text}</span>
    </div>
);

export default Product;