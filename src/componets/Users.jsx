import React from 'react';

// Images Import (Tame kidhu em user1 thi user7)
import u1 from "../assets/user1.jpg";
import u2 from "../assets/user2.jpg";
import u3 from "../assets/user3.jpg";
import u4 from "../assets/user4.jpg";
import u5 from "../assets/user5.jpg";
import u6 from "../assets/user6.jpg";
import u7 from "../assets/user7.jpg";

const Users = () => {
    // Review Card Component
    const ReviewCard = ({ name, img, text }) => (
        <div className="bg-white p-8 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 hover:shadow-lg transition-all duration-300 min-w-[320px]">
            <div className="flex items-start gap-5">
                <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#FFB800] text-lg">★</span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-4 font-medium italic">
                        "{text}"
                    </p>
                    <h4 className="font-bold text-gray-900 text-[16px] tracking-tight">{name}</h4>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-[#F9F9FF]">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 mb-4 leading-tight">
                        Trusted by <span className="text-[#6039ff]">Businesses</span>, Loved by <span className="text-[#a288ff]">Users</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
                        See how our customers are building success stories with stunning websites.
                    </p>
                </div>

                {/* Rows Layout (Tame pehla mangyu hatu em: 2-3-2) */}
                <div className="cursor-pointer flex flex-col gap-8">
                    
                    {/* Row 1: 2 Cards */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center">
                        <ReviewCard name="Rahul Mehta" img={u1} text="The setup was incredibly smooth, and within minutes I had a professional website running. The themes are modern, and customization was effortless." />
                        <ReviewCard name="Ananya Sharma" img={u2} text="As a small business owner, I was worried about the complexity of launching a website, but this platform made it so easy. It saved me time and money." />
                    </div>

                    {/* Row 2: 3 Cards */}
                    <div className="flex flex-wrap xl:flex-nowrap gap-8 justify-center">
                        <ReviewCard name="Vikram Kapoor" img={u3} text="The responsive layouts ensure my website looks perfect across devices. It's exactly what my clients expect from a professional brand." />
                        <ReviewCard name="Priya Nair" img={u4} text="I loved how quickly I could move from template selection to going live. The process is designed to be stress-free, and the results exceeded expectations." />
                        <ReviewCard name="Noha" img={u5} text="Our team was impressed with the sleek designs and ease of use. It's a platform that truly helps businesses grow online." />
                    </div>

                    {/* Row 3: 2 Cards */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center">
                        <ReviewCard name="Neha Verma" img={u6} text="The entire process felt seamless. From selecting a theme to customizing it, everything was intuitive. My brand's online presence now feels truly professional." />
                        <ReviewCard name="Priyanka Malhotra" img={u7} text="Launching our website was faster than I imagined. The designs are polished, and the platform made scaling our business online effortless." />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Users;