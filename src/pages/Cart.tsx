import { Link, useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

// සාප්පු කරත්තය පිටුව (Shopping Cart Page)
export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
      {/* Breadcrumbs */}
      <div className="flex gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[#0a3a20]">Home</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-medium">Cart</span>
      </div>

      <h1 className="text-3xl font-bold text-[#0a3a20] mb-8 font-serif">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-xl text-gray-600 mb-4">Your cart is currently empty.</p>
          <Link to="/shop" className="inline-block bg-[#0a3a20] text-white px-6 py-2 rounded font-medium hover:bg-green-800 transition">
            Return to Shop
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items Table (භාණ්ඩ ලැයිස්තුව) */}
          <div className="w-full lg:w-2/3">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 px-4 font-bold text-gray-700">Product</th>
                    <th className="py-3 px-4 font-bold text-gray-700">Price</th>
                    <th className="py-3 px-4 font-bold text-gray-700">Quantity</th>
                    <th className="py-3 px-4 font-bold text-gray-700">Subtotal</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 flex items-center gap-4 min-w-[250px]">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-white p-1 border border-gray-200 mix-blend-multiply" />
                        <Link to={`/product/${item.id}`} className="font-medium text-gray-800 hover:text-[#0a3a20]">{item.name}</Link>
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        Rs. {item.price.toLocaleString('en-US', {minimumFractionDigits: 2})}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center border border-gray-300 rounded w-[100px]">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-200"
                          >-</button>
                          <input 
                            type="number" 
                            value={item.quantity} 
                            readOnly
                            className="w-8 h-8 text-center outline-none text-sm"
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-200"
                          >+</button>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-bold text-gray-800">
                        Rs. {(item.price * item.quantity).toLocaleString('en-US', {minimumFractionDigits: 2})}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coupon Section */}
            <div className="flex justify-between items-center mt-6 p-4 bg-gray-50 rounded border border-gray-100">
              <div className="flex gap-2 w-full max-w-md">
                <input type="text" placeholder="Coupon code" className="border border-gray-300 rounded px-4 py-2 w-full outline-none focus:border-[#0a3a20]" />
                <button className="bg-gray-800 text-white px-6 py-2 rounded font-medium hover:bg-gray-900 transition whitespace-nowrap">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>

          {/* Cart Totals (මුළු මුදල ගණනය කිරීම) */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200 font-serif">Cart Totals</h2>
              
              <div className="flex justify-between mb-4 text-gray-600">
                <span>Subtotal</span>
                <span>Rs. {cartTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              </div>
              
              <div className="flex justify-between mb-6 text-gray-600 pb-6 border-b border-gray-200">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="flex justify-between mb-8 text-xl font-bold text-gray-800">
                <span>Total</span>
                <span className="text-[#0a3a20]">Rs. {cartTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#0a3a20] text-white font-bold py-3 px-4 rounded hover:bg-green-800 transition text-center"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
