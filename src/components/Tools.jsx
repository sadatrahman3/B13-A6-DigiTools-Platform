import ToolCard from './ToolCard';
import productsData from '../products.json';
import { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn, FaBox, FaTrash } from 'react-icons/fa6';

const Tools = ({ cart, onAddToCart, onRemoveFromCart, onCheckout, activeTab, setActiveTab }) => {
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
  const Icons = { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn };

  return (
    <section id="tools" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1F2937] mb-8 tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-[#6B7280] font-medium text-lg leading-relaxed mb-12">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          
          <div className="inline-flex p-2 bg-gray-50 rounded-4xl border border-gray-100 shadow-inner">
            <button 
              onClick={() => setActiveTab('products')} 
              className={`px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 ${
                activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-xl shadow-purple-200' : 'text-gray-400 hover:text-[#7C3AED]'
              }`}
            >
              All Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')} 
              className={`px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 flex items-center gap-3 ${
                activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-xl shadow-purple-200' : 'text-gray-400 hover:text-[#7C3AED]'
              }`}
            >
              Cart 
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] ${activeTab === 'cart' ? 'bg-white text-[#7C3AED]' : 'bg-gray-200 text-gray-500'}`}>
                {cart.length}
              </span>
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productsData.map((t) => (
              <ToolCard 
                key={t.id} 
                product={t} 
                onAddToCart={onAddToCart} 
                isInCart={cart.some(item => item.id === t.id)} 
              />
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="p-10 md:p-14">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-3xl font-bold text-[#1F2937]">Shopping Cart</h3>
                  <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{cart.length} items</span>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-24">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                      <FaCartShopping className="text-4xl text-gray-200" />
                    </div>
                    <p className="text-gray-400 font-bold text-lg">Your cart is currently empty.</p>
                    <button 
                      onClick={() => setActiveTab('products')} 
                      className="mt-10 text-[#7C3AED] font-black text-sm uppercase tracking-widest hover:underline"
                    >
                      &larr; Back to Products
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-8">
                      {cart.map((item) => {
                        const ItemIcon = Icons[item.icon] || FaBox;
                        return (
                          <div key={item.id} className="flex items-center justify-between group">
                            <div className="flex items-center gap-8">
                              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all duration-300">
                                {item.image ? (
                                  <img src={item.image} alt={item.name} className="w-10 h-10 object-contain" />
                                ) : (
                                  <ItemIcon className={`text-2xl ${item.iconColor || 'text-[#7C3AED]'}`} />
                                )}
                              </div>
                              <div>
                                <h4 className="font-bold text-xl text-[#1F2937] leading-tight mb-1">{item.name}</h4>
                                <p className="text-[#7C3AED] font-black text-sm uppercase tracking-wider">${item.price}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => onRemoveFromCart(item.id)} 
                              className="w-10 h-10 rounded-full flex items-center justify-center text-red-500 bg-red-50 hover:bg-red-100 hover:text-red-600 transition-all shadow-sm"
                            >
                              <FaTrash size={14} />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-14 pt-10 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-12">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Total Amount</p>
                          <p className="text-[10px] text-gray-400 font-medium">All applicable taxes included</p>
                        </div>
                        <span className="text-5xl font-black text-[#1F2937] tracking-tighter">${totalCost}</span>
                      </div>
                      
                      <button 
                        onClick={onCheckout} 
                        className="w-full h-20 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl text-lg font-extrabold uppercase tracking-widest shadow-2xl shadow-purple-200 transition-all active:scale-[0.98]"
                      >
                        Complete Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;