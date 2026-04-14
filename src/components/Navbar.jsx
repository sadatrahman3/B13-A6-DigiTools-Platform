import { FaCartShopping, FaUser } from 'react-icons/fa6';

const MainNavbar = ({ cartCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 h-20">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-xl bg-base-100 rounded-box w-64 gap-2 font-medium">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className="text-xl md:text-2xl font-extrabold tracking-tight text-secondary cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1 font-bold text-sm text-base-content/70">
            <li><a className="hover:text-secondary rounded-lg transition-colors">Products</a></li>
            <li><a className="hover:text-secondary rounded-lg transition-colors">Features</a></li>
            <li><a className="hover:text-secondary rounded-lg transition-colors">Pricing</a></li>
            <li><a className="hover:text-secondary rounded-lg transition-colors">Testimonials</a></li>
            <li><a className="hover:text-secondary rounded-lg transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          <button 
            onClick={onCartClick} 
            className="btn btn-ghost btn-circle hover:bg-base-200 group"
          >
            <div className="indicator">
              {cartCount > 0 && (
                <span className="indicator-item badge badge-secondary badge-xs py-2 px-1 font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
              <FaCartShopping className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>

          <div className="hidden md:flex items-center">
            <button className="btn btn-ghost normal-case font-bold flex items-center gap-2 opacity-80 hover:opacity-100">
              <div className="p-2 rounded-full bg-base-200">
                <FaUser size={14} />
              </div>
              <span>Login</span>
            </button>
          </div>

          <button className="btn btn-secondary btn-sm sm:btn-md rounded-lg px-6 sm:px-8 font-bold text-white shadow-md hover:shadow-lg transition-all border-none">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default MainNavbar;