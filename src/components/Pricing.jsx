import { FaCheck } from 'react-icons/fa6';

const MembershipOptions = () => {
  const starterList = ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'];
  const proList = ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'];
  const enterpriseList = ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'];

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-[#1F2937] mb-6 tracking-tighter">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-xl mx-auto text-lg font-bold text-gray-500 leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center">
          
          <div className="flex flex-col p-10 bg-white rounded-[3rem] lg:rounded-r-none border border-gray-100 shadow-sm relative z-0">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-[#1F2937] mb-2">Starter</h3>
              <p className="text-sm font-semibold text-gray-400 italic">Perfect for getting started</p>
            </div>
            <div className="flex items-baseline mb-10">
              <span className="text-6xl font-black text-[#1F2937] tracking-tighter">$0</span>
              <span className="ml-2 text-xs font-black text-gray-400 uppercase tracking-widest">/ month</span>
            </div>
            <div className="grow space-y-5 mb-12">
              {starterList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-[15px] font-bold text-gray-500">
                  <FaCheck className="text-green-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-purple-200">
              Get Started Free
            </button>
          </div>

          <div className="flex flex-col p-10 md:p-14 bg-[#7C3AED] text-white rounded-[3.5rem] lg:scale-110 z-20 shadow-[0_40px_80px_-15px_rgba(124,58,237,0.3)] relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#1F2937] px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-xl">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2">Pro</h3>
              <p className="text-sm font-semibold text-white/70 italic">Best for professionals</p>
            </div>
            <div className="flex items-baseline mb-10">
              <span className="text-6xl font-black tracking-tighter">$29</span>
              <span className="ml-2 text-xs font-black text-white/60 uppercase tracking-widest">/ month</span>
            </div>
            <div className="grow space-y-5 mb-12">
              {proList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-[15px] font-bold">
                  <FaCheck className="text-white shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-6 bg-white hover:bg-gray-50 text-[#7C3AED] rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all active:scale-95">
              Start Pro Trial
            </button>
          </div>

          <div className="flex flex-col p-10 bg-white rounded-[3rem] lg:rounded-l-none border border-gray-100 shadow-sm relative z-0">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-[#1F2937] mb-2">Enterprise</h3>
              <p className="text-sm font-semibold text-gray-400 italic">For teams and businesses</p>
            </div>
            <div className="flex items-baseline mb-10">
              <span className="text-6xl font-black text-[#1F2937] tracking-tighter">$99</span>
              <span className="ml-2 text-xs font-black text-gray-400 uppercase tracking-widest">/ month</span>
            </div>
            <div className="grow space-y-5 mb-12">
              {enterpriseList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-[15px] font-bold text-gray-500">
                  <FaCheck className="text-green-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-purple-200">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MembershipOptions;