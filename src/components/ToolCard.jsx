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
      orange: "badge-warning",
      pink: "badge-secondary",
      blue: "badge-info",
      yellow: "badge-accent",
      green: "badge-success"
    };
    return styles[type] || "badge-primary";
  };

  return (
    <div className="card bg-base-100 border border-base-200 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-4xl">
      {product.tag && (
        <div className={`absolute top-4 right-4 badge badge-sm md:badge-md py-3 px-4 font-bold uppercase tracking-tighter shadow-sm ${getTagStyles(product.tagType)}`}>
          {product.tag}
        </div>
      )}

      <div className="avatar mb-6 md:mb-8">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-base-200 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
          {product.image ? (
            <img src={product.image} alt={product.name} className="p-3 object-contain" />
          ) : (
            <SelectedIcon className={`text-3xl md:text-4xl group-hover:text-white transition-colors ${product.iconColor}`} />
          )}
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-base-content tracking-tight mb-2">
        {product.name}
      </h3>
      
      <p className="text-sm opacity-60 font-medium leading-snug mb-6 line-clamp-2 h-10 overflow-hidden">
        {product.description}
      </p>

      <div className="flex items-center gap-1.5 mb-8">
        <span className="text-3xl md:text-4xl font-black text-base-content">
          ${product.price}
        </span>
        <span className="text-sm font-semibold opacity-40 self-end mb-1">
          / {product.period}
        </span>
      </div>

      <div className="w-full space-y-3.5 mb-10 grow text-left">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-base-content/80 truncate">
            <div className="shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
              <FaCheck className="text-[10px] text-success" />
            </div>
            {feature}
          </div>
        ))}
      </div>

      <button 
        onClick={triggerPurchase} 
        disabled={isInCart} 
        className={`btn btn-md md:btn-lg w-full rounded-xl border-none font-bold tracking-tight transition-all active:scale-95 ${
          isInCart || isAdding 
            ? 'btn-success text-white disabled:bg-success disabled:text-white' 
            : 'btn-primary shadow-lg shadow-primary/20'
        }`}
      >
        {isInCart || isAdding ? 'Added to cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ToolCard;