import { Link } from 'react-router-dom';

// Footer Component එක (පහළ කොටස)
export default function Footer() {
  return (
    <footer className="bg-[#0a3a20] text-white pt-12 pb-6 px-4 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-green-800 pb-8">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <span className="text-3xl text-green-400">🍃</span>
            <span>CeylonTea</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Discover the finest Ceylon tea, sourced directly from the best tea gardens in Sri Lanka. 100% pure, natural, and packed with flavor.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-green-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop All Teas</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-green-300">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/shop" className="hover:text-white transition">Black Tea</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Green Tea</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">White Tea</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Tea Gifts</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-green-300">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-4">Subscribe to get updates on new arrivals and special offers.</p>
          <div className="flex">
            <input type="email" placeholder="Your email address" className="px-3 py-2 text-gray-800 w-full outline-none text-sm rounded-l-sm" />
            <button className="bg-green-600 hover:bg-green-500 px-4 py-2 text-sm font-bold rounded-r-sm transition">SUBSCRIBE</button>
          </div>
        </div>

      </div>
      
      <div className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} CeylonTea. All Rights Reserved.
      </div>
    </footer>
  );
}
