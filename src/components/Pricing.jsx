import { FaCheck } from 'react-icons/fa6';

const PricingTable = () => {
  const starterFeatures = ['Access to 10 products', 'Basic templates', 'Community support', 'Single user account'];
  const proFeatures = ['Ten next video generations', 'Unlimited generations', 'Priority support', 'Lifetime support', 'Cloud sync', 'Exclusive updates'];
  const enterpriseFeatures = ['Everything in Pro', 'Unlimited users', 'Customizations', 'Personal content', 'Admin panel', 'Custom branding'];

  return (
    <section className="bg-base-200 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-base-content mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base-content/60 text-base md:text-lg font-medium leading-relaxed">
            Choose the plan that fits your needs. Map local current plan for more details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          <div className="card bg-base-100 shadow-xl border border-base-300 p-8 md:p-10 rounded-2xl h-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-base-content mb-2">Starter</h3>
              <p className="text-sm text-base-content/50 font-semibold">Perfect for simple product start</p>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-4xl md:text-5xl font-black text-base-content">$0</span>
              <span className="text-base-content/40 font-bold ml-2">/Month</span>
            </div>
            <div className="space-y-5 mb-10 grow">
              {starterFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-base-content/70">
                  <div className="mt-0.5 shrink-0">
                    <FaCheck className="text-success" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-outline btn-primary w-full rounded-lg hover:scale-[1.03] active:scale-95 transition-transform">
              Get Started Now
            </button>
          </div>

          <div className="card bg-primary text-primary-content shadow-2xl p-1 rounded-2xl lg:scale-105 z-20 h-full flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 badge badge-secondary py-4 px-6 font-bold tracking-widest text-[10px] uppercase shadow-lg">
              Most Popular
            </div>
            <div className="p-8 md:p-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-sm opacity-80 font-semibold">For independent creators</p>
              </div>
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl md:text-5xl font-black">$29</span>
                <span className="opacity-70 font-bold ml-2">/Month</span>
              </div>
              <div className="space-y-5 mb-10 grow">
                {proFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold">
                    <div className="mt-0.5 shrink-0">
                      <FaCheck className="text-white" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-neutral w-full rounded-lg border-none shadow-lg hover:scale-[1.03] active:scale-95 transition-transform">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-300 p-8 md:p-10 rounded-2xl h-full flex flex-col">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-base-content mb-2">Enterprise</h3>
              <p className="text-sm text-base-content/50 font-semibold">For team and professionals</p>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-4xl md:text-5xl font-black text-base-content">$99</span>
              <span className="text-base-content/40 font-bold ml-2">/Month</span>
            </div>
            <div className="space-y-5 mb-10 grow">
              {enterpriseFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-base-content/70">
                  <div className="mt-0.5 shrink-0">
                    <FaCheck className="text-success" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-outline btn-primary w-full rounded-lg hover:scale-[1.03] active:scale-95 transition-transform">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;