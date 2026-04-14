import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const MainFooter = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-20">
          
          <div className="flex-1 max-w-md">
            <a className="text-3xl font-extrabold text-secondary mb-6 block tracking-tight">
              DigiTools
            </a>
            <p className="text-sm md:text-base opacity-70 leading-loose mb-10">
              Access premium AI tools, design assets, and statistics and productivity software all in one place. Start creating today for free.
            </p>
            <div className="flex gap-4">
              <a className="btn btn-square btn-outline border-base-content/20 hover:btn-secondary group transition-all duration-300">
                <FaFacebookF className="text-lg opacity-60 group-hover:opacity-100" />
              </a>
              <a className="btn btn-square btn-outline border-base-content/20 hover:btn-secondary group transition-all duration-300">
                <FaInstagram className="text-lg opacity-60 group-hover:opacity-100" />
              </a>
              <a className="btn btn-square btn-outline border-base-content/20 hover:btn-secondary group transition-all duration-300">
                <FaXTwitter className="text-lg opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-8">Product</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="link link-hover opacity-60 hover:opacity-100">Features</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Pricing</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Temp Kit</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="link link-hover opacity-60 hover:opacity-100">About</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Blog</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Careers</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Press</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-8">Resources</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="link link-hover opacity-60 hover:opacity-100">Documentation</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Help Center</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Community</a></li>
                <li><a className="link link-hover opacity-60 hover:opacity-100">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-base-content/10 pt-10 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <p className="text-xs opacity-40 font-medium">
            &copy; 2025 DigiTools Inc. Everything Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-wider opacity-60">
            <a className="hover:text-secondary transition-colors cursor-pointer">Privacy Path</a>
            <a className="hover:text-secondary transition-colors cursor-pointer">Terms of Services</a>
            <a className="hover:text-secondary transition-colors cursor-pointer">Connect</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;