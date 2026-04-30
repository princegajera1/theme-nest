import React, { useState } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

// Assets import - Ensure these match your src/assets folder filenames
import productMain from "../assets/product.jpg";
import productSub from "../assets/product (1).jpg";

const Product = () => {
    const tabs = [
        "RideNDrop", "Shop Swift", "EduSphere", "MediCare+", "BizFlow", "FoodiezHub"
    ];
    // Defaulting to BizFlow as seen in your reference image
    const [activeTab, setActiveTab] = useState("BizFlow");

    return (
        <section className="pt-20 pb-24 bg-[#fcfaff] font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Our Product Collection
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                        Find the right solution for your industry — from e-commerce to healthcare, we’ve got it all.
                    </p>
                </div>

                {/* 2. Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full text-[15px] font-bold transition-all duration-300 border ${
                                activeTab === tab
                                    ? "bg-[#6039ff] text-white border-[#6039ff] shadow-xl shadow-purple-100"
                                    : "bg-white border-gray-200 text-gray-600 hover:text-[#6039ff] hover:border-[#6039ff]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 3. Main Showcase Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left: Product Info */}
                    <div className="space-y-8 text-left">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            App Launch – Modern Business Website Template
                        </h3>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            Launch your own branded ride-sharing and parcel delivery platform today. 
                            Accept bookings anytime through your website or mobile app. 
                            Offer seamless rides and fast parcel drop-offs—no middlemen, no heavy commissions.
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-3">
                            <FeatureBadge text="Admin Panel" />
                            <FeatureBadge text="User App" />
                            <FeatureBadge text="Driver App" />
                            <FeatureBadge text="Business Website" />
                        </div>

                        {/* Purple CTA Button */}
                        <button className="bg-[#6039ff] text-white px-8 py-4 rounded-xl font-extrabold text-[17px] flex items-center gap-3 shadow-xl hover:bg-[#4f2ee0] transition-all hover:-translate-y-1 active:scale-95">
                            Launch Your Ride & Delivery System Today
                            <FaArrowRight size={16} />
                        </button>
                    </div>

                    {/* Right: Mockup Image stack */}
                    <div className="space-y-8">
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                            <img src={productMain} alt="Primary Showcase" className="w-full h-auto block" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

// Internal Helper for Feature Badges
const FeatureBadge = ({ text }) => (
    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f3efff] border border-[#e8e0ff]">
        <FaCheck className="text-[#6039ff] text-[10px] stroke-[3]" />
        <span className="text-[15px] font-bold text-gray-800">{text}</span>
    </div>
);

export default Product;