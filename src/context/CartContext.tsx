import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

// Cart එකේ තියෙන අයිතමයක ආකෘතිය (Cart Item Structure)
export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

// Cart Context එක සෑදීම
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component එක - මෙය මුළු App එකටම දත්ත ලබා දෙනවා
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Cart එකේ දත්ත තබා ගන්නා state එක
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cart එකට අලුත් item එකක් එකතු කිරීමේ function එක
  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // අදාළ item එක දැනටමත් cart එකේ ඇත්නම්, ප්‍රමාණය පමණක් වැඩි කරන්න
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // අලුත් item එකක් නම්, එය cart එකට එකතු කරන්න
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Cart එකෙන් item එකක් ඉවත් කිරීම
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Item එකක ප්‍රමාණය වෙනස් කිරීම
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  // Cart එක හිස් කිරීම (Order එකක් දැම්මට පස්සේ)
  const clearCart = () => setCart([]);

  // මුළු මුදල (Total Price) ගණනය කිරීම
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Cart එකේ ඇති මුළු අයිතම ගණන ගණනය කිරීම
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// පහසුවෙන් Cart දත්ත ලබා ගැනීමට custom hook එකක්
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
