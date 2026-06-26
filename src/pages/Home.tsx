import { ShieldCheck, Truck, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// මුල් පිටුව (Home Page)
export default function Home() {
  // Best selling items (අලෙවිය වැඩිම භාණ්ඩ)
  const bestSellers = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section (ප්‍රධාන බැනරය) */}
      <section className="relative h-[500px] w-full flex items-center bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1594833215907-7e9b04abaf22?q=80&w=1920&auto=format&fit=crop" 
          alt="Tea Estate" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 max-w-xl text-shadow">
            Pure Ceylon Tea, <br/> Pure Happiness
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90 drop-shadow-md">
            Discover the finest Ceylon tea, sourced from the best tea gardens in Sri Lanka.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-[#0a3a20] hover:bg-green-800 text-white font-bold py-3 px-8 rounded transition duration-300">
            SHOP NOW <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features Bar (විශේෂාංග තීරුව) */}
      <div className="bg-stone-100 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start">
            <div className="border border-[#0a3a20] rounded-full p-2 text-[#0a3a20]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">100% Pure Ceylon Tea</h4>
              <p className="text-xs text-gray-500">Finest quality tea from Sri Lanka</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start md:pl-8">
            <div className="border border-[#0a3a20] rounded-full p-2 text-[#0a3a20]">
              <CreditCard size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Secure Payments</h4>
              <p className="text-xs text-gray-500">100% secure & trusted payments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start md:pl-8">
            <div className="border border-[#0a3a20] rounded-full p-2 text-[#0a3a20]">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Island-wide Delivery</h4>
              <p className="text-xs text-gray-500">Delivering goodness to your door</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shop By Category (වර්ගීකරණය අනුව භාණ්ඩ) */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-12 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-[#0a3a20] mb-10">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {[
            { name: "Black Tea", img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=200&h=200&fit=crop" },
            { name: "Green Tea", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=200&h=200&fit=crop" },
            { name: "White Tea", img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=200&h=200&fit=crop" },
            { name: "Herbal Tea", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop" },
            { name: "Tea Gifts", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=200&h=200&fit=crop" },
            { name: "Accessories", img: "https://images.unsplash.com/photo-1562215688-66175e110b14?w=200&h=200&fit=crop" }
          ].map((cat, idx) => (
            <Link to="/shop" key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-[#0a3a20] transition-colors p-1">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#0a3a20] transition-colors">{cat.name}</h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider mt-1 underline">SHOP NOW</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Selling Products (වැඩිපුරම අලෙවි වන භාණ්ඩ) */}
      <section className="py-16 bg-stone-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#0a3a20]">BEST SELLING PRODUCTS</h2>
            <Link to="/shop" className="text-sm font-bold border border-gray-300 px-4 py-2 rounded hover:bg-[#0a3a20] hover:text-white transition">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Features (අමතර විශේෂාංග) */}
      <section className="py-12 bg-[#f4f6eb] border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
           <div>
              <h4 className="font-bold text-[#0a3a20] mb-2 flex flex-col items-center gap-2">
                 <span className="text-2xl">🌱</span> Finest Quality
              </h4>
              <p className="text-xs text-gray-600">Carefully selected leaves</p>
           </div>
           <div>
              <h4 className="font-bold text-[#0a3a20] mb-2 flex flex-col items-center gap-2">
                 <span className="text-2xl">♻️</span> Sustainable
              </h4>
              <p className="text-xs text-gray-600">Eco-friendly packaging</p>
           </div>
           <div>
              <h4 className="font-bold text-[#0a3a20] mb-2 flex flex-col items-center gap-2">
                 <span className="text-2xl">🤝</span> Supports Local Farmers
              </h4>
              <p className="text-xs text-gray-600">Empowering communities</p>
           </div>
           <div>
              <h4 className="font-bold text-[#0a3a20] mb-2 flex flex-col items-center gap-2">
                 <span className="text-2xl">🌍</span> Trusted Worldwide
              </h4>
              <p className="text-xs text-gray-600">Loved by tea lovers globally</p>
           </div>
        </div>
      </section>
    </div>
  );
}
