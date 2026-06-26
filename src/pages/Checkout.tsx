import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// මිලදී ගැනීමේ පිටුව (Checkout Page)
export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Order එක place කිරීමේ function එක
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // මෙහිදී සාමාන්‍යයෙන් backend එකට දත්ත යවයි (API call)
    // අපි මෙහි සාර්ථක බව පෙන්වීමට alert එකක් භාවිතා කරමු
    alert('Thank you! Your order has been placed successfully.');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">No items to checkout</h2>
        <Link to="/shop" className="text-[#0a3a20] underline">Go back to shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
      {/* Breadcrumbs */}
      <div className="flex gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[#0a3a20]">Home</Link>
        <span>&gt;</span>
        <Link to="/cart" className="hover:text-[#0a3a20]">Cart</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-medium">Checkout</span>
      </div>

      <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-12">
        
        {/* Billing Details (බිල්පත් විස්තර) */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Billing Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">First Name *</label>
              <input required type="text" name="firstName" onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Last Name *</label>
              <input required type="text" name="lastName" onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Street Address *</label>
            <input required type="text" name="address" placeholder="House number and street name" onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Town / City *</label>
            <input required type="text" name="city" onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone *</label>
              <input required type="tel" name="phone" onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email Address *</label>
              <input required type="email" name="email" onChange={handleInputChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">Order Notes (optional)</label>
            <textarea rows={4} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-[#0a3a20]" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
          </div>
        </div>

        {/* Order Summary & Payment (ඇණවුම් සාරාංශය සහ ගෙවීම්) */}
        <div className="w-full lg:w-2/5">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6 font-serif">Your Order</h2>
            
            <div className="flex justify-between border-b border-gray-200 pb-2 mb-4 font-bold text-gray-700">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            
            <div className="space-y-4 mb-6 border-b border-gray-200 pb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-gray-600">
                  <span className="flex-1 pr-4">{item.name} <strong className="text-gray-800 text-xs ml-1">× {item.quantity}</strong></span>
                  <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between border-b border-gray-200 pb-4 mb-4 text-gray-700">
              <span>Subtotal</span>
              <span className="font-bold">Rs. {cartTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            </div>
            
            <div className="flex justify-between mb-8 text-xl font-bold text-gray-800">
              <span>Total</span>
              <span className="text-[#0a3a20]">Rs. {cartTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            </div>

            {/* Payment Methods (ගෙවීම් ක්‍රම) */}
            <div className="mb-8 space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="w-4 h-4 accent-[#0a3a20]"
                />
                <span className="font-medium text-gray-800">Cash on Delivery</span>
              </label>
              {paymentMethod === 'cod' && (
                <p className="text-sm text-gray-500 pl-7">Pay with cash upon delivery.</p>
              )}
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="card" 
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="w-4 h-4 accent-[#0a3a20]"
                />
                <span className="font-medium text-gray-800">Credit / Debit Card</span>
              </label>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </p>

            <button 
              type="submit"
              className="w-full bg-[#0a3a20] text-white font-bold py-4 px-4 rounded hover:bg-green-800 transition text-center uppercase tracking-wider"
            >
              PLACE ORDER
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
