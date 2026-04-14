import React from 'react';
import { FaUser, FaBox, FaRocket } from 'react-icons/fa6';

const ProcessSteps = () => {
  const stepsData = [
    { title: 'Create Account', desc: 'Sign up for a free account if you want to get started.', Icon: FaUser, num: '1' },
    { title: 'Choose Products', desc: 'Browse our catalog and select the products you need.', Icon: FaBox, num: '2' },
    { title: 'Start Creating', desc: 'Launch into creating using our premium house of facilities.', Icon: FaRocket, num: '3' },
  ];

  return (
    <section className="bg-base-100 py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-base-content tracking-tight mb-6">
            Get Started In 3 Steps
          </h2>
          <p className="text-base-content/60 text-base md:text-lg font-medium leading-relaxed">
            Ready to take your product launch to the next level?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {stepsData.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-base-200 p-10 lg:p-14 rounded-2xl transition-all duration-300 hover:bg-base-300 flex flex-col items-center text-center"
            >
              <div className="absolute top-6 left-6 text-5xl font-black text-base-content/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                0{step.num}
              </div>

              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-500">
                  <step.Icon size={32} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center text-sm font-bold shadow-md">
                  {step.num}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-4 tracking-normal">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-base-content/70 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 w-12 h-1 bg-primary/20 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;