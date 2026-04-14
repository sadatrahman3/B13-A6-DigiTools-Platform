import { FaCheck } from 'react-icons/fa6';

const MembershipOptions = () => {
  const starterList = ['Access to 10 products', 'Basic templates', 'Community support', 'Single user account'];
  const proList = ['Ten next video generations', 'Unlimited generations', 'Priority support', 'Lifetime support', 'Cloud sync', 'Exclusive updates'];
  const enterpriseList = ['Everything in Pro', 'Unlimited users', 'Customizations', 'Personal content', 'Admin panel', 'Custom branding'];

  return (
    <section className="bg-base-200 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4 md:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base md:text-lg opacity-60 leading-relaxed">
            Choose the plan that fits your needs. Map local current plan for more details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 items-stretch">
          <div className="flex flex-col p-6 sm:p-10 bg-base-100 rounded-2xl lg:rounded-r-none border border-base-300 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary">Starter</h3>
              <p className="text-xs mt-1 opacity-50">Perfect for simple product start</p>
            </div>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold">$0</span>
              <span className="ml-2 text-xs font-semibold opacity-40 uppercase">/ per month</span>
            </div>
            <div className="grow space-y-4 mb-10">
              {starterList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-success shrink-0" />
                  <span className="opacity-80">{item}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-block btn-ghost border-base-300 hover:bg-primary hover:text-white transition-all duration-300">
              Get Started Now
            </button>
          </div>

          <div className="flex flex-col p-6 sm:p-10 bg-neutral text-neutral-content rounded-2xl lg:scale-105 z-10 shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 badge badge-primary px-4 py-3 text-[10px] font-bold tracking-tighter uppercase">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-secondary">Pro</h3>
              <p className="text-xs mt-1 opacity-60">For independent creators</p>
            </div>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold">$29</span>
              <span className="ml-2 text-xs font-semibold opacity-50 uppercase">/ per month</span>
            </div>
            <div className="grow space-y-4 mb-10">
              {proList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-secondary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-block btn-secondary shadow-lg hover:brightness-110 active:scale-95 transition-all">
              Start Free Trial
            </button>
          </div>

          <div className="flex flex-col p-6 sm:p-10 bg-base-100 rounded-2xl lg:rounded-l-none border border-base-300 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-primary">Enterprise</h3>
              <p className="text-xs mt-1 opacity-50">For team and professionals</p>
            </div>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold">$99</span>
              <span className="ml-2 text-xs font-semibold opacity-40 uppercase">/ per month</span>
            </div>
            <div className="grow space-y-4 mb-10">
              {enterpriseList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <FaCheck className="mt-1 text-success shrink-0" />
                  <span className="opacity-80">{item}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-block btn-ghost border-base-300 hover:bg-primary hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipOptions;