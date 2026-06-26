import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

// භාණ්ඩයක් පෙන්වන කාඩ්පත (Product Card)
export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group relative flex flex-col h-full">
      
      {/* Badge (Sale වැනි ලේබල්) */}
      {product.badge && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
          {product.badge}
        </span>
      )}

      {/* Wishlist Icon */}
      <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart size={18} />
      </button>

      {/* Product Image - රූපය */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-md mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Product Details - විස්තර */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 text-sm mb-1 hover:text-[#0a3a20] line-clamp-1">{product.name}</h3>
        </Link>
        
        {/* මිල (Price) */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-[#0a3a20]">Rs. {product.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
          )}
        </div>
        
        {/* Ratings (තරු) */}
        <div className="flex items-center gap-1 mb-4 mt-auto">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Add to Cart Button (Cart එකට දැමීමේ බොත්තම) */}
        <button 
          onClick={() => addToCart(product, 1)}
          className="w-full py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-[#0a3a20] hover:text-white hover:border-[#0a3a20] transition-colors flex justify-center items-center gap-2"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
