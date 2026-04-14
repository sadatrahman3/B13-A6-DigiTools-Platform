
const WorkFlowCTA = () => {
  return (
    <section className="bg-base-200 py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative z-0 overflow-hidden rounded-2xl md:rounded-3xl bg-neutral p-8 sm:p-16 md:p-24 text-center ring-1 ring-white/10 shadow-inner">
          
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-[80px] pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-[80px] pointer-events-none"></div>

          <h2 className="relative z-20 text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Ready To Transform <br className="hidden md:block"/> Your Workflow?
          </h2>

          <p className="relative z-20 mx-auto max-w-xl text-neutral-content/80 text-base sm:text-lg lg:text-2xl mb-12 font-normal leading-relaxed">
            Over the years we have collected the most valuable tools for designers, developers, and marketing professionals.
          </p>

          <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn btn-primary btn-md sm:btn-lg px-8 sm:px-10 rounded-full w-full sm:w-auto hover:brightness-110 transition-all active:scale-95">
              Explore Products
            </button>
            <button className="btn btn-outline btn-md sm:btn-lg border-neutral-content/30 text-white px-8 sm:px-10 rounded-full w-full sm:w-auto hover:bg-white/5 transition-all active:scale-95">
              View Pricing
            </button>
          </div>

          <div className="relative z-20 mt-14 text-white/40 text-[12px] font-medium tracking-[0.2em]">
            Used by over 50,000+ teams worldwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlowCTA;