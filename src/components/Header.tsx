import { Search, ShoppingCart, User, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// ප්‍රධාන Header Component එක
export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="w-full font-sans">
      {/* Top Bar - දුරකථන අංක සහ ඊමේල් */}
      <div className="bg-[#0a3a20] text-white text-xs py-2 px-4 md:px-12 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14} /> +94 77 123 4567</span>
          <span className="flex items-center gap-1 hidden sm:flex"><Mail size={14} /> info@ceylontea.com</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 cursor-pointer hover:text-green-300"><MapPin size={14} /> Track Order</span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-green-300">Help & Support</span>
        </div>
      </div>

      {/* Main Header - Logo, Search, Cart */}
      <div className="py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-white border-b border-gray-100">
        
        {/* Logo කොටස */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-[#0a3a20]">
          <span className="text-3xl text-green-700">🍃</span>
          <div className="flex flex-col leading-tight">
            <span>CeylonTea</span>
            <span className="text-[10px] font-normal text-gray-500 uppercase tracking-widest">Pure Taste of Sri Lanka</span>
          </div>
        </Link>

        {/* Search Bar (සෙවුම් තීරුව) */}
        <div className="flex w-full md:w-[500px] border border-gray-300 rounded-md overflow-hidden bg-gray-50">
          <input 
            type="text" 
            placeholder="Search for tea products..." 
            className="w-full px-4 py-2 bg-transparent outline-none text-sm"
          />
          <div className="flex items-center border-l border-gray-300 bg-white px-3 cursor-pointer text-sm text-gray-600 min-w-[130px]">
            All Categories <ChevronDown size={14} className="ml-2" />
          </div>
          <button className="bg-[#0a3a20] text-white px-4 hover:bg-green-800 transition">
            <Search size={18} />
          </button>
        </div>

        {/* User Actions - Login & Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#0a3a20]">
            <User size={20} />
            <span className="text-sm font-medium">Login / Register</span>
          </div>
          
          <Link to="/cart" className="flex items-center gap-2 cursor-pointer hover:text-[#0a3a20] relative">
            <ShoppingCart size={22} />
            <span className="text-sm font-medium">My Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Navigation Menu (මෙනුව) */}
      <nav className="flex justify-center py-4 bg-white shadow-sm font-medium text-sm text-gray-700 uppercase tracking-wide gap-8 overflow-x-auto">
        <Link to="/" className="hover:text-[#0a3a20] transition hover:font-bold">Home</Link>
        <Link to="/shop" className="text-[#0a3a20] font-bold border-b-2 border-[#0a3a20] pb-1">Shop</Link>
        <Link to="/#about" className="hover:text-[#0a3a20] transition hover:font-bold">About Us</Link>
        <Link to="/#knowledge" className="hover:text-[#0a3a20] transition hover:font-bold">Tea Knowledge</Link>
        <Link to="/#story" className="hover:text-[#0a3a20] transition hover:font-bold">Our Story</Link>
        <Link to="/#contact" className="hover:text-[#0a3a20] transition hover:font-bold">Contact Us</Link>
      </nav>
    </header>
  );
}
