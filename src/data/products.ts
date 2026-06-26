// භාණ්ඩ දත්ත (Product Data) මෙහි ගබඩා කර ඇත. මෙය database එකක් ලෙස ක්‍රියා කරයි.
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  description?: string;
}

// සියලුම තේ වර්ග වල දත්ත ලැයිස්තුව
export const products: Product[] = [
  {
    id: "1",
    name: "Ceylon Black Tea - BOPF",
    price: 1250.00,
    originalPrice: 1500.00,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879bfc?q=80&w=600&auto=format&fit=crop",
    category: "Black Tea",
    badge: "SALE",
    description: "Premium quality Ceylon Black Tea with bright liquor, rich aroma, and refreshing taste. 100% Pure Ceylon Tea. Sri Lankan Product."
  },
  {
    id: "2",
    name: "Ceylon Green Tea",
    price: 1350.00,
    rating: 4.5,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=600&auto=format&fit=crop",
    category: "Green Tea",
    description: "Healthy and refreshing Ceylon Green tea, rich in antioxidants. Handpicked from high-elevation estates."
  },
  {
    id: "3",
    name: "Ceylon White Tea",
    price: 2550.00,
    rating: 5.0,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop",
    category: "White Tea",
    description: "Rare and delicate silver tips white tea. Sun-dried and completely natural with a subtle floral note."
  },
  {
    id: "4",
    name: "Earl Grey Black Tea",
    price: 1450.00,
    rating: 4.7,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop",
    category: "Black Tea",
    description: "Classic Ceylon black tea infused with natural bergamot oil for a distinct citrusy flavor."
  },
  {
    id: "5",
    name: "Chamomile Herbal Tea",
    price: 1800.00,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop",
    category: "Herbal Tea",
    description: "Caffeine-free herbal infusion made from dried chamomile flowers. Perfect for relaxing before bed."
  },
  {
    id: "6",
    name: "Ceylon Tea Gift Pack",
    price: 5750.00,
    rating: 4.9,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop",
    category: "Tea Gifts",
    description: "A luxury wooden presentation box containing an assortment of our finest Black, Green, and White teas."
  },
  {
    id: "7",
    name: "Traditional Clay Teapot",
    price: 3200.00,
    rating: 4.4,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1562215688-66175e110b14?q=80&w=600&auto=format&fit=crop",
    category: "Accessories",
    description: "Authentic clay teapot designed to enhance the flavor profile of pure Ceylon tea."
  },
  {
    id: "8",
    name: "Oolong Tea Special",
    price: 2100.00,
    rating: 4.7,
    reviews: 53,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8c0a1?q=80&w=600&auto=format&fit=crop",
    category: "Black Tea",
    description: "Semi-fermented tea combining the qualities of dark and green teas. Complex flavor profile."
  }
];

// භාණ්ඩ වර්ග (Categories)
export const categories = [
  "All Categories",
  "Black Tea",
  "Green Tea",
  "White Tea",
  "Herbal Tea",
  "Tea Gifts",
  "Accessories"
];
