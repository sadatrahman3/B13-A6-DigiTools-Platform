import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const MainFooter = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-24">
          
          <div className="flex-1 max-w-sm">
            <a className="text-4xl font-black text-white mb-8 block tracking-tight">
              DigiTools
            </a>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-10 font-medium">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-10">
            <div>
              <h4 className="text-[15px] font-bold text-white mb-8">Product</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a className="hover:text-white transition-colors cursor-pointer">Features</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Templates</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-bold text-white mb-8">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a className="hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-bold text-white mb-8">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a className="hover:text-white transition-colors cursor-pointer">Documentation</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Community</a></li>
                <li><a className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-bold text-white mb-8">Social Links</h4>
              <div className="flex gap-3">
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1120] hover:bg-gray-200 transition-all cursor-pointer">
                  <FaInstagram size={18} />
                </a>
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1120] hover:bg-gray-200 transition-all cursor-pointer">
                  <FaFacebookF size={18} />
                </a>
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1120] hover:bg-gray-200 transition-all cursor-pointer">
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            &copy; 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm font-medium">
            <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            <a className="hover:text-white transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;