
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { getFoodsByOutlet, getOutletById } from "@/data/foodData";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OutletDetail = () => {
  const { id } = useParams<{ id: string }>();
  const outlet = getOutletById(id || "");
  const foods = getFoodsByOutlet(id || "");

  const [activeCategory, setActiveCategory] = useState<string>("all");

  if (!outlet) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-600">Outlet not found</h2>
        </main>
        <Footer />
      </div>
    );
  }

  const categories = ["all", ...outlet.categories];

  const filteredFoods =
    activeCategory === "all"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Outlet Header */}
        <div className="relative h-64 md:h-80 bg-gradient-to-r from-food-orange to-food-red">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={outlet.image}
              alt={outlet.name}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
              <div className="md:max-w-3xl animate-fade-in">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {outlet.name}
                </h1>
                <p className="text-lg mb-4 opacity-90">{outlet.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(outlet.rating)
                            ? "text-food-yellow"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-2">
                      {outlet.rating} ({outlet.reviews} reviews)
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20">
                    {outlet.timeEstimate}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${
                      outlet.isOpen
                        ? "bg-food-green text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {outlet.isOpen ? "Open Now" : "Closed"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="h-10 mb-8">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="text-base capitalize px-4"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
                {filteredFoods.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-500">
                      No items available in this category
                    </h3>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OutletDetail;
