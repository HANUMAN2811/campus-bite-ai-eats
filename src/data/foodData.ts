
import { FoodItem, FoodOutlet } from "@/types";

export const outlets: FoodOutlet[] = [
  {
    id: "kathi",
    name: "Kathi Junction",
    description: "Delicious rolls and wraps filled with flavorful ingredients",
    image: "https://images.unsplash.com/photo-1576266891221-9a5e73ae4354?q=80&w=974&auto=format&fit=crop",
    rating: 4.5,
    reviews: 320,
    timeEstimate: "15-20 min",
    isOpen: true,
    categories: ["Rolls", "Wraps", "Kebabs", "Beverages"]
  },
  {
    id: "southern",
    name: "Southern Stories",
    description: "Authentic South Indian cuisine with a modern twist",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    rating: 4.3,
    reviews: 280,
    timeEstimate: "20-25 min",
    isOpen: true,
    categories: ["Dosa", "Idli", "Rice", "Curry", "Beverages"]
  },
  {
    id: "maggi",
    name: "Maggi Point",
    description: "Quick and tasty Maggi noodles with various toppings",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    rating: 4.1,
    reviews: 210,
    timeEstimate: "10-15 min",
    isOpen: true,
    categories: ["Maggi", "Pasta", "Snacks", "Beverages"]
  }
];

export const foodItems: FoodItem[] = [
  // Kathi Junction Items
  {
    id: "k1",
    outletId: "kathi",
    name: "Paneer Kathi Roll",
    description: "Soft paneer with onions and spices wrapped in a paratha",
    price: 120,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.6,
    reviews: 98,
    category: "Rolls"
  },
  {
    id: "k2",
    outletId: "kathi",
    name: "Chicken Kathi Roll",
    description: "Juicy chicken pieces with onions and spices wrapped in a paratha",
    price: 150,
    image: "https://images.unsplash.com/photo-1576266891221-9a5e73ae4354?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: false,
    rating: 4.7,
    reviews: 120,
    category: "Rolls"
  },
  {
    id: "k3",
    outletId: "kathi",
    name: "Double Egg Roll",
    description: "Double the eggs with a spicy masala and wrapped in a paratha",
    price: 130,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: false,
    rating: 4.5,
    reviews: 85,
    category: "Rolls"
  },
  {
    id: "k4",
    outletId: "kathi",
    name: "Veg Kebab",
    description: "Mixed vegetables kebab served with mint chutney",
    price: 100,
    image: "https://images.unsplash.com/photo-1625938145744-ag379ce7b79d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.2,
    reviews: 65,
    category: "Kebabs"
  },
  {
    id: "k5",
    outletId: "kathi",
    name: "Chicken Seekh Kebab",
    description: "Minced chicken kebab with herbs and spices",
    price: 180,
    image: "https://images.unsplash.com/photo-1600555379765-f02b0a1d727c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: false,
    rating: 4.8,
    reviews: 110,
    category: "Kebabs"
  },
  
  // Southern Stories Items
  {
    id: "s1",
    outletId: "southern",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato masala",
    price: 90,
    image: "https://images.unsplash.com/photo-1589301760014-d929f86762b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.7,
    reviews: 130,
    category: "Dosa"
  },
  {
    id: "s2",
    outletId: "southern",
    name: "Idli Sambar",
    description: "Steamed rice cakes served with sambar and chutney",
    price: 70,
    image: "https://images.unsplash.com/photo-1589301761966-2060b986acc9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.5,
    reviews: 95,
    category: "Idli"
  },
  {
    id: "s3",
    outletId: "southern",
    name: "Curd Rice",
    description: "Rice mixed with yogurt, tempered with mustard seeds and curry leaves",
    price: 80,
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.3,
    reviews: 75,
    category: "Rice"
  },
  {
    id: "s4",
    outletId: "southern",
    name: "Paneer Dosa",
    description: "Dosa filled with spicy paneer masala",
    price: 120,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.6,
    reviews: 88,
    category: "Dosa"
  },
  {
    id: "s5",
    outletId: "southern",
    name: "Chicken Curry",
    description: "Spicy South Indian style chicken curry",
    price: 160,
    image: "https://images.unsplash.com/photo-1604496464355-408c58800c9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: false,
    rating: 4.4,
    reviews: 92,
    category: "Curry"
  },
  
  // Maggi Point Items
  {
    id: "m1",
    outletId: "maggi",
    name: "Classic Maggi",
    description: "The classic 2-minute Maggi noodles",
    price: 50,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.3,
    reviews: 150,
    category: "Maggi"
  },
  {
    id: "m2",
    outletId: "maggi",
    name: "Cheese Maggi",
    description: "Maggi noodles loaded with cheese",
    price: 70,
    image: "https://images.unsplash.com/photo-1632471951447-e6bcc0843382?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.5,
    reviews: 120,
    category: "Maggi"
  },
  {
    id: "m3",
    outletId: "maggi",
    name: "Masala Maggi",
    description: "Maggi noodles with special masala and vegetables",
    price: 65,
    image: "https://images.unsplash.com/photo-1645696329525-8ec3bee464a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: true,
    rating: 4.4,
    reviews: 100,
    category: "Maggi"
  },
  {
    id: "m4",
    outletId: "maggi",
    name: "Egg Maggi",
    description: "Maggi noodles topped with scrambled eggs",
    price: 80,
    image: "https://images.unsplash.com/photo-1603436282693-577667ba0188?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: false,
    rating: 4.6,
    reviews: 90,
    category: "Maggi"
  },
  {
    id: "m5",
    outletId: "maggi",
    name: "Chicken Maggi",
    description: "Maggi noodles with chicken pieces",
    price: 100,
    image: "https://images.unsplash.com/photo-1513862448120-a90e6253c5dc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    veg: false,
    rating: 4.7,
    reviews: 85,
    category: "Maggi"
  }
];

export const getFoodsByOutlet = (outletId: string): FoodItem[] => {
  return foodItems.filter((item) => item.outletId === outletId);
};

export const getOutletById = (outletId: string): FoodOutlet | undefined => {
  return outlets.find((outlet) => outlet.id === outletId);
};

export const getFoodById = (foodId: string): FoodItem | undefined => {
  return foodItems.find((item) => item.id === foodId);
};

export const getPopularFoods = (): FoodItem[] => {
  // Get top 6 rated foods
  return [...foodItems]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};
