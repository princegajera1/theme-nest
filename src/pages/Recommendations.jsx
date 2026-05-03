import Header from "../componets/Header";
import Footer from "../componets/Footer";

const Recommendations = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our <span className="text-[#6039ff]">Recommendations</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-16">Here are some of the tools, libraries, and resources we highly recommend for modern web development.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vite</h3>
              <p className="text-gray-500 mb-4">Next Generation Frontend Tooling. It provides a faster and leaner development experience for modern web projects.</p>
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="text-[#6039ff] font-bold">Learn more &rarr;</a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tailwind CSS</h3>
              <p className="text-gray-500 mb-4">A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.</p>
              <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-[#6039ff] font-bold">Learn more &rarr;</a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Framer Motion</h3>
              <p className="text-gray-500 mb-4">A production-ready motion library for React. It makes creating complex animations incredibly simple.</p>
              <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer" className="text-[#6039ff] font-bold">Learn more &rarr;</a>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">React Icons</h3>
              <p className="text-gray-500 mb-4">Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports.</p>
              <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer" className="text-[#6039ff] font-bold">Learn more &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recommendations;
