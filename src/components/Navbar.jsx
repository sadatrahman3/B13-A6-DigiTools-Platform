import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const MainNavbar = ({ cartCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8 h-24">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-2 mr-2 text-[#7C3AED]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-100 p-4 shadow-xl bg-white rounded-2xl w-64 gap-2 font-semibold text-[#1F2937]">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
              <div className="divider my-1"></div>
              <li><a className="text-[#7C3AED]">Login</a></li>
            </ul>
          </div>
          <a className="text-3xl md:text-4xl font-black tracking-tight text-[#7C3AED] cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 font-semibold text-[15px] text-[#374151]">
            <li><a className="hover:text-[#7C3AED] p-0 transition-colors">Products</a></li>
            <li><a className="hover:text-[#7C3AED] p-0 transition-colors">Features</a></li>
            <li><a className="hover:text-[#7C3AED] p-0 transition-colors">Pricing</a></li>
            <li><a className="hover:text-[#7C3AED] p-0 transition-colors">Testimonials</a></li>
            <li><a className="hover:text-[#7C3AED] p-0 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          <button onClick={onCartClick} className="btn btn-ghost btn-circle hover:bg-transparent group min-h-0 h-auto w-auto">
            <div className="indicator">
              {cartCount > 0 && (
                <span className="indicator-item badge badge-primary badge-xs py-2 px-1 font-bold">
                  {cartCount}
                </span>
              )}
              <FaCartShopping className="text-xl text-[#374151]" />
            </div>
          </button>

          <button className="hidden md:block text-[15px] font-semibold text-[#374151] hover:text-[#7C3AED] transition-colors">
            Login
          </button>

          <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] btn-md rounded-full px-8 font-bold text-white border-none shadow-none normal-case text-base">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default MainNavbar;