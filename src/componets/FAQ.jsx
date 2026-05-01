import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "How do I get started with creating my website?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."
        },
        {
            question: "Do I need any coding skills to build a website here?",
            answer: "No coding skills are required! Our intuitive drag-and-drop builder allows you to create professional websites without writing a single line of code."
        },
        {
            question: "How long does it take to launch a website?",
            answer: "You can have your website live in as little as an hour. Simply choose a template, customize your content, and hit publish."
        },
        {
            question: "Can I change the design or template after publishing my site?",
            answer: "Yes, you can easily switch templates or adjust your design settings at any time without losing your existing content."
        },
        {
            question: "Are the website themes mobile-friendly and responsive?",
            answer: "Absolutely. Every template we offer is fully responsive and optimized to look great on desktops, tablets, and smartphones."
        },
        {
            question: "Can I customize colors, fonts, and layouts to match my brand?",
            answer: "Yes! You have full control over colors, typography, and layout spacing to ensure your website perfectly reflects your brand identity."
        },
        {
            question: "What kind of websites can I build (e.g., business, e-commerce, portfolio)?",
            answer: "You can build anything from simple portfolios and blogs to complex e-commerce stores and corporate business sites."
        },
        {
            question: "Does the platform support online payments and e-commerce features?",
            answer: "Yes, we provide built-in e-commerce tools, including secure payment gateways, inventory management, and shipping options."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white font-sans">
            <div className="max-w-4xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-[30px] md:text-[40px] font-bold text-gray-800 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Find quick answers to the most common queries about building and managing your website.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`border-2 rounded-2xl transition-all duration-300 group ${
                                openIndex === index 
                                ? 'border-black bg-white shadow-sm' 
                                : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                            <button 
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                            >
                                <span className={`text-[17px] md:text-[19px] font-medium transition-colors duration-200 ${
                                    openIndex === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-black'
                                }`}>
                                    {item.question}
                                </span>
                                <span className="text-[#6039ff] text-2xl font-light transition-transform duration-200 group-hover:scale-110">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="px-6 pb-6 text-gray-500 leading-relaxed text-[16px] border-t border-gray-50 pt-4 bg-white rounded-b-2xl">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;