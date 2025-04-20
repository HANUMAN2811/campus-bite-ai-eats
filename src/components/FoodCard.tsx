
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { FoodItem } from "@/types";
import { useState } from "react";

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard = ({ food }: FoodCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(food);
    toast({
      title: "Added to cart",
      description: `${food.name} has been added to your cart`,
    });
  };

  return (
    <Card 
      className={`food-item-card overflow-hidden ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        {food.veg ? (
          <span className="absolute top-2 right-2 bg-food-green text-white text-xs px-2 py-1 rounded-full">
            Veg
          </span>
        ) : (
          <span className="absolute top-2 right-2 bg-food-red text-white text-xs px-2 py-1 rounded-full">
            Non-Veg
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{food.name}</h3>
            <p className="text-sm text-gray-500">{food.description}</p>
          </div>
          <div className="flex items-center">
            <span className="text-food-orange font-bold">₹{food.price}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < food.rating ? "text-food-yellow" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-500">
              ({food.reviews} reviews)
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-food-orange hover:bg-food-red">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
