import { useState } from 'react';
import { FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn, FaBox, FaCheck } from 'react-icons/fa6';

const ToolCard = ({ product, onAddToCart, isInCart }) => {
  const [isAdding, setIsAdding] = useState(false);
  
  const iconMap = { 
    FaPenNib, FaPalette, FaCartShopping, FaCamera, FaGear, FaFileInvoice, FaBullhorn 
  };
  const SelectedIcon = iconMap[product.icon] || FaBox;

  const triggerPurchase = () => {
    if (isInCart) return;
    onAddToCart(product);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 2000);
  };

  const getTagStyles = (type) => {
    const styles = {
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600"
    };
    return styles[type] || "bg-purple-100 text-purple-600";
  };

  return (
    <div className="relative bg-white border border-gray-100 hover:border-purple-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)] transition-all duration-500 group flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem]">
      {product.tag && (
        <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${getTagStyles(product.tagType)}`}>
          {product.tag}
        </div>
      )}

      <div className="mb-8">
        <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center group-hover:bg-[#7C3AED] transition-all duration-500 transform group-hover:rotate-6">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all" />
          ) : (
            <SelectedIcon className={`text-3xl group-hover:text-white transition-colors ${product.iconColor || 'text-[#7C3AED]'}`} />
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#1F2937] tracking-tight mb-3">
        {product.name}
      </h3>
      
      <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 line-clamp-2 h-10">
        {product.description}
      </p>

      <div className="flex items-center gap-1.5 mb-10">
        <span className="text-4xl font-black text-[#1F2937]">
          ${product.price}
        </span>
        <span className="text-sm font-bold text-gray-400 self-end mb-1 uppercase tracking-wider">
          / {product.period}
        </span>
      </div>

      <div className="w-full space-y-4 mb-12 grow text-left">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm font-semibold text-[#4B5563]">
            <div className="shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
              <FaCheck className="text-[10px] text-green-500" />
            </div>
            <span className="truncate">{feature}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={triggerPurchase} 
        disabled={isInCart} 
        className={`w-full py-4 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all active:scale-95 ${
          isInCart || isAdding 
            ? 'bg-green-500 text-white cursor-default' 
            : 'bg-[#7C3AED] text-white shadow-lg shadow-purple-200 hover:bg-[#6D28D9] hover:shadow-purple-300'
        }`}
      >
        {isInCart || isAdding ? (
          <span className="flex items-center justify-center gap-2">
            <FaCheck /> Added to cart
          </span>
        ) : 'Buy Now'}
      </button>
    </div>
  );
};

export default ToolCard;