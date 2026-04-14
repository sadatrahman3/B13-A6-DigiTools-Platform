import { FaPlay } from 'react-icons/fa6';

const MainHero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="badge badge-primary badge-outline py-4 px-6 mb-8 text-sm font-semibold tracking-wide rounded-lg">
              All New AI-Powered Productivity Tools
            </span>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-base-content tracking-normal">
              Supercharge Your <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>

            <p className="text-base-content/70 text-base md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-loose">
              Access premium AI tools, design assets, templates and productivity software all in one place. Start creating today for free.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5">
              <button className="btn btn-primary btn-lg rounded-xl px-12 w-full sm:w-auto hover:btn-active transition-transform active:scale-95 shadow-lg">
                Browse Products
              </button>
              
              <button className="group flex items-center gap-4 py-3 px-6 rounded-xl hover:bg-base-200 transition-all w-full sm:w-auto justify-center font-semibold">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white group-hover:scale-110 transition-transform shadow-md">
                  <FaPlay size={14} className="ml-1" />
                </div>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative px-4 sm:px-10 lg:px-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 blur-3xl rounded-full -z-10 animate-soft-pulse"></div>
            <div className="p-2 bg-base-200 rounded-3xl shadow-2xl">
              <img 
                src="/banner.png" 
                alt="Productivity Dashboard" 
                className="w-full rounded-2xl object-cover hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainHero;