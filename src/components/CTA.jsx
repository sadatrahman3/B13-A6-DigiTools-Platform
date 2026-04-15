const WorkFlowCTA = () => {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] p-12 sm:p-20 md:p-28 text-center shadow-[0_40px_80px_-15px_rgba(124,58,237,0.3)]">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C026D3]/20 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none"></div>

          <h2 className="relative z-10 text-white text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">
            Ready To Transform <br className="hidden md:block"/> Your Workflow?
          </h2>

          <p className="relative z-10 mx-auto max-w-2xl text-white/90 text-lg sm:text-xl lg:text-2xl mb-12 font-bold leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="px-10 py-5 bg-white text-[#7C3AED] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
              Explore Products
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
              View Pricing
            </button>
          </div>

          <div className="relative z-10 mt-14 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 text-white/70 text-[11px] font-black uppercase tracking-[0.3em]">
              <span>14-day free trial</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span>No credit card required</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span>Cancel anytime</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkFlowCTA;