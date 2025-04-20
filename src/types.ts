
export interface FoodItem {
  id: string;
  outletId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
  rating: number;
  reviews: number;
  category: string;
}

export interface FoodOutlet {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  timeEstimate: string;
  isOpen: boolean;
  categories: string[];
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  hostelBlock: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  foodItemId?: string;
  outletId?: string;
}
