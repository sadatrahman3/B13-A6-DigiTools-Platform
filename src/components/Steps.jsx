import { FaUser, FaBox, FaRocket } from 'react-icons/fa6';

const Steps = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-[#1F2937] mb-6 tracking-tighter">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto font-bold text-base md:text-lg leading-relaxed">
          Ready to take your product launch to the next level?
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {[
          { title: 'Create Account', desc: 'Sign up for a free account if you want to get started.', Icon: FaUser, num: '1' },
          { title: 'Choose Products', desc: 'Browse our catalog and select the products you need.', Icon: FaBox, num: '2' },
          { title: 'Start Creating', desc: 'Launch into creating using our premium house of facilities.', Icon: FaRocket, num: '3' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-10 md:p-14 rounded-[3rem] border border-gray-100 hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.1)] hover:-translate-y-3 transition-all duration-700 relative group overflow-hidden shadow-sm ring-1 ring-gray-900/2">
            
            <div className="absolute -top-6 -right-6 text-[10rem] font-black text-[#7C3AED]/3 transition-colors group-hover:text-[#7C3AED]/6 pointer-events-none select-none italic">
              {s.num}
            </div>

            <div className="absolute top-8 right-8 z-20">
              <span className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center font-black text-sm shadow-xl shadow-purple-200 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                0{s.num}
              </span>
            </div>

            <div className="w-24 h-24 rounded-4xl bg-gray-50 flex items-center justify-center mb-10 mx-auto ring-1 ring-gray-100 group-hover:scale-110 transition-all duration-500 group-hover:bg-[#7C3AED] shadow-inner">
              <s.Icon size={32} className="text-[#7C3AED] group-hover:text-white transition-colors duration-500" />
            </div>

            <div className="text-center relative z-10">
              <h3 className="text-2xl font-black text-[#1F2937] mb-5 tracking-tight">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-semibold text-[15px]">
                {s.desc}
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="h-1 w-12 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#7C3AED] w-0 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;