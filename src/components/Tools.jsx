import ToolCard from './ToolCard';
import productsData from '../products.json';
import { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn, FaBox, FaTrash } from 'react-icons/fa6';

const Tools = ({ cart, onAddToCart, onRemoveFromCart, onCheckout, activeTab, setActiveTab }) => {
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

 
  const Icons = { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn };

  return (
    <section id="tools" className="bg-base-200 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Navigation */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-base-content mb-6 tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-base-content/60 font-medium text-base md:text-lg leading-relaxed mb-10">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          
          <div className="inline-flex p-1.5 bg-base-100 rounded-2xl shadow-sm border border-base-300">
            <button 
              onClick={() => setActiveTab('products')} 
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'products' ? 'bg-primary text-primary-content shadow-lg' : 'text-base-content/50 hover:text-primary'
              }`}
            >
              All Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')} 
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'cart' ? 'bg-primary text-primary-content shadow-lg' : 'text-base-content/50 hover:text-primary'
              }`}
            >
              Cart 
              <span className={`badge badge-sm ${activeTab === 'cart' ? 'badge-secondary' : 'badge-ghost'}`}>
                {cart.length}
              </span>
            </button>
          </div>
        </div>

      
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="max-w-2xl mx-auto">
            <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Shopping Cart</h3>
                  <span className="text-sm font-medium opacity-50">{cart.length} items</span>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCartShopping className="text-3xl opacity-20" />
                    </div>
                    <p className="text-base-content/40 font-bold italic">Your cart is currently empty.</p>
                    <button 
                      onClick={() => setActiveTab('products')} 
                      className="btn btn-primary btn-outline btn-sm mt-6 rounded-lg"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="divide-y divide-base-200">
                      {cart.map((item) => {
                        const ItemIcon = Icons[item.icon] || FaBox;
                        return (
                          <div key={item.id} className="py-6 flex items-center justify-between group">
                            <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-base-200 rounded-xl flex items-center justify-center shrink-0 border border-base-300 group-hover:bg-primary/10 transition-colors">
                                {item.image ? (
                                  <img src={item.image} alt={item.name} className="w-8 h-8 object-contain" />
                                ) : (
                                  <ItemIcon className={`text-2xl ${item.iconColor}`} />
                                )}
                              </div>
                              <div>
                                <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                                <p className="text-primary font-bold text-sm mt-1">${item.price}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => onRemoveFromCart(item.id)} 
                              className="btn btn-ghost btn-circle text-error hover:bg-error/10 transition-colors"
                              title="Remove item"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-10 pt-8 border-t-2 border-dashed border-base-200">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <p className="text-sm font-bold opacity-40 uppercase tracking-widest">Grand Total</p>
                          <p className="text-xs opacity-50 mt-1">Tax included in price</p>
                        </div>
                        <span className="text-4xl font-black">${totalCost}</span>
                      </div>
                      
                      <button 
                        onClick={onCheckout} 
                        className="btn btn-primary btn-block h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 group transition-all"
                      >
                        Proceed to Checkout
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
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