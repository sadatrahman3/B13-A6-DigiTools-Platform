import { FaPlay } from 'react-icons/fa6';

const MainHero = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDE9FE] text-[#7C3AED] mb-8">
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">New: AI-Powered Tools Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-[#1F2937] tracking-tight">
              Supercharge Your <br />
              <span className="bg-linear-to-r from-[#7C3AED] to-[#C026D3] bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>

            <p className="text-[#6B7280] text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white px-10 h-14 rounded-full font-bold text-base normal-case shadow-xl shadow-purple-100 transition-all hover:scale-105 active:scale-95">
                Explore Products
              </button>
              
              <button className="btn btn-outline border-[#D1D5DB] hover:bg-gray-50 hover:text-gray-900 px-8 h-14 rounded-full font-bold text-base normal-case gap-3 group transition-all">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7C3AED]/10 group-hover:bg-[#7C3AED] transition-colors">
                  <FaPlay size={10} className="text-[#7C3AED] group-hover:text-white ml-0.5" />
                </div>
                <span className="text-[#4B5563]">Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-[#7C3AED]/20 to-transparent blur-3xl rounded-full opacity-30"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
              <img 
                src="banner.png" 
                alt="Digital Workflow Visualization" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainHero;