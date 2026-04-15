const Stats = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="bg-[#7C3AED] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center w-full ${
                index !== stats.length - 1 ? 'md:border-r md:border-white/20' : ''
              }`}
            >
              <div className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                {stat.value}
              </div>
              <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;