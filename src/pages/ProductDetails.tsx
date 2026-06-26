import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, Share2, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

// තනි භාණ්ඩයක් පෙන්වන පිටුව (Product Details Page)
export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  
  // URL එකේ ඇති ID එකට අදාළ භාණ්ඩය සොයා ගැනීම
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found!</div>;
  }

  // Cart එකට එකතු කිරීමේ function එක
  const handleAddToCart = () => {
    addToCart(product, quantity);
    // වහාම Cart එකට යන්න අවශ්‍ය නම්:
    // navigate('/cart');
  };

  const handleBuyNow = () => {
     addToCart(product, quantity);
     navigate('/checkout');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
      {/* Breadcrumbs */}
      <div className="flex gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[#0a3a20]">Home</Link>
        <span>&gt;</span>
        <Link to="/shop" className="hover:text-[#0a3a20]">Shop</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 bg-white p-6 rounded-lg shadow-sm border border-gray-50">
        
        {/* Product Image Gallery (රූප ප්‍රදර්ශනය) */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4 border border-gray-100 flex items-center justify-center p-8">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-50 rounded border-2 border-[#0a3a20] p-2 cursor-pointer">
              <img src={product.image} alt="thumb" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            {/* Mock thumbnails */}
            <div className="w-20 h-20 bg-gray-50 rounded border border-gray-200 p-2 cursor-pointer opacity-60 hover:opacity-100">
               <img src={product.image} alt="thumb" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="w-20 h-20 bg-gray-50 rounded border border-gray-200 p-2 cursor-pointer opacity-60 hover:opacity-100">
               <img src={product.image} alt="thumb" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* Product Info (විස්තර) */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-yellow-400" : "fill-gray-200 text-gray-200"} />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} customer reviews)</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-[#0a3a20]">
              Rs. {product.price.toLocaleString('en-US', {minimumFractionDigits: 2})}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                Rs. {product.originalPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-1"><ShieldCheck size={16} className="text-[#0a3a20]" /> 100% Pure Ceylon Tea</div>
            <div className="flex items-center gap-1"><Truck size={16} className="text-[#0a3a20]" /> Island-wide Delivery</div>
          </div>

          {/* Quantity & Add to Cart (ප්‍රමාණය සහ Cart එකට දැමීම) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 border-t border-b border-gray-200 py-6">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden w-[120px]">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600"
              >-</button>
              <input 
                type="number" 
                value={quantity} 
                readOnly
                className="w-10 h-10 text-center outline-none font-medium"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600"
              >+</button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#0a3a20] text-white font-bold py-2 px-6 rounded hover:bg-green-800 transition flex items-center justify-center gap-2"
            >
              ADD TO CART
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-gray-900 text-white font-bold py-2 px-6 rounded hover:bg-black transition flex items-center justify-center gap-2"
            >
              BUY NOW
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-red-500 transition"><Heart size={16} /> Add to wishlist</button>
            <div className="flex items-center gap-2">
              Share: 
              <Share2 size={16} className="cursor-pointer hover:text-[#0a3a20]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
