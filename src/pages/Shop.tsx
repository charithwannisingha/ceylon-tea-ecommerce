import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

// සාප්පු පිටුව (Shop Page)
export default function Shop() {
  // තෝරාගත් වර්ගය (Selected Category State)
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState(6000);

  // භාණ්ඩ පෙරීම (Filtering logic)
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "All Categories" || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
      {/* Breadcrumbs */}
      <div className="flex gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[#0a3a20]">Home</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-medium">Shop</span>
      </div>

      <h1 className="text-3xl font-bold text-[#0a3a20] mb-8 font-serif">Shop</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar (පැති මෙනුව - පෙරහන් සඳහා) */}
        <aside className="w-full md:w-1/4">
          
          {/* Categories Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 pb-2 border-b border-gray-200">Categories</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <button 
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left w-full hover:text-[#0a3a20] transition-colors ${selectedCategory === category ? 'text-[#0a3a20] font-bold' : 'text-gray-600'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div>
            <h3 className="font-bold text-lg mb-4 pb-2 border-b border-gray-200">Price Range</h3>
            <input 
              type="range" 
              min="0" 
              max="10000" 
              step="100"
              value={priceRange} 
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-[#0a3a20] mb-4"
            />
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <span>Rs. 0</span>
              <span>Rs. {priceRange.toLocaleString()}</span>
            </div>
            <button className="bg-[#0a3a20] text-white px-4 py-2 text-sm rounded hover:bg-green-800 transition">
              FILTER
            </button>
          </div>
        </aside>

        {/* Product Grid (භාණ්ඩ ජාලකය) */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-600">
              Showing 1-{filteredProducts.length} of {products.length} results
            </span>
            <select className="border border-gray-300 rounded px-3 py-2 text-sm outline-none bg-white">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
               ))}
             </div>
          ) : (
             <div className="text-center py-12 text-gray-500">
                <p>No products found matching your criteria.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
