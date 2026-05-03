import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      title: "10 Reasons Why You Need a Premium React Theme",
      excerpt: "Discover why investing in a premium theme can save you hundreds of development hours.",
      date: "May 2, 2026",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Development"
    },
    {
      title: "How to Build a Seamless User Experience",
      excerpt: "Learn the secrets behind building intuitive interfaces that your users will love.",
      date: "April 28, 2026",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design"
    },
    {
      title: "Optimizing Vite and TailwindCSS for Production",
      excerpt: "A comprehensive guide to getting the best performance out of your modern web stack.",
      date: "April 15, 2026",
      img: "https://images.unsplash.com/photo-1618477247222-ac60c6470d83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Performance"
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our <span className="text-[#6039ff]">Blog</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Latest news, tutorials, and insights from the Theme Nest team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#6039ff] z-10">
                    {blog.category}
                  </div>
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-sm text-gray-400 font-medium mb-2 block">{blog.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6039ff] transition-colors">{blog.title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center text-[#6039ff] font-bold text-sm">
                    Read Article <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
