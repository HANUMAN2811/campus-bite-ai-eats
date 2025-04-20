
import { Card } from "@/components/ui/card";
import { FoodOutlet } from "@/types";
import { Link } from "react-router-dom";

interface OutletCardProps {
  outlet: FoodOutlet;
}

const OutletCard = ({ outlet }: OutletCardProps) => {
  return (
    <Link to={`/outlet/${outlet.id}`}>
      <Card className="outlet-card h-full overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={outlet.image}
            alt={outlet.name}
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-food-red">{outlet.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{outlet.description}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < outlet.rating ? "text-food-yellow" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-500">
                ({outlet.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {outlet.timeEstimate}
            </span>
            <span className="text-food-green text-sm font-medium">
              {outlet.isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default OutletCard;
