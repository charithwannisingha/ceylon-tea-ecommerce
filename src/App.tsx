import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';

// පිටුව මාරු වන විට ඉහළට ගෙන ඒම (Scroll to top on route change)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ප්‍රධාන App Component එක (Main Application)
function App() {
  return (
    // Cart දත්ත මුළු App එකටම ලබා දීමට CartProvider භාවිතා කරයි
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
          <Header />
          
          {/* ප්‍රධාන අන්තර්ගතය (Main Content Area) */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* Other simple routes mapped to Home for demo */}
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
