import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { foodItems } from "@/data/foodData";
import FoodCard from "@/components/FoodCard";

const AIResponses = [
  {
    query: "What's the best food for a vegetarian?",
    response: "Based on customer ratings, I'd recommend the Paneer Kathi Roll from Kathi Junction and the Masala Dosa from Southern Stories. Both are highly rated vegetarian options with excellent reviews!"
  },
  {
    query: "I want something spicy",
    response: "For spicy options, try the Chicken Seekh Kebab from Kathi Junction or the Chicken Curry from Southern Stories. Both pack a flavorful punch that spice lovers enjoy!"
  },
  {
    query: "Recommend a quick snack",
    response: "If you're looking for a quick snack, Maggi Point's Classic Maggi or Cheese Maggi would be perfect. They're ready in just about 10-15 minutes and are campus favorites!"
  },
  {
    query: "What's popular at Southern Stories?",
    response: "The most popular item at Southern Stories is definitely their Masala Dosa, followed closely by their Paneer Dosa. These items consistently receive high ratings from students!"
  },
  {
    query: "I want to try something new",
    response: "Looking for something different? Try the Egg Maggi from Maggi Point or the Double Egg Roll from Kathi Junction. They're unique fusion options that many students enjoy!"
  }
];

const Assistant = () => {
  const [query, setQuery] = useState("");
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedFoods, setRecommendedFoods] = useState<typeof foodItems>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Find a matching response or use a default one
      const matchingResponse = AIResponses.find(r => 
        query.toLowerCase().includes(r.query.toLowerCase().split(" ")[1]) ||
        query.toLowerCase().includes(r.query.toLowerCase().split(" ")[2])
      );
      
      setCurrentResponse(matchingResponse?.response || 
        "Based on your preferences, I recommend trying the Cheese Maggi from Maggi Point or the Masala Dosa from Southern Stories. Both are popular among students and have great ratings!");
      
      // Find some foods to recommend based on the query
      let foods = [...foodItems];
      
      if (query.toLowerCase().includes("veg") || query.toLowerCase().includes("vegetarian")) {
        foods = foods.filter(food => food.veg);
      }
      
      if (query.toLowerCase().includes("spicy")) {
        foods = foods.filter(food => 
          food.name.toLowerCase().includes("masala") || 
          food.description.toLowerCase().includes("spicy")
        );
      }
      
      if (query.toLowerCase().includes("quick") || query.toLowerCase().includes("fast")) {
        foods = foods.filter(food => food.outletId === "maggi");
      }
      
      // Randomly select up to 3 foods if we have specific matches
      if (foods.length < foodItems.length) {
        foods = foods.sort(() => 0.5 - Math.random()).slice(0, 3);
      } else {
        // Otherwise just get the highest rated foods
        foods = foods.sort((a, b) => b.rating - a.rating).slice(0, 3);
      }
      
      setRecommendedFoods(foods);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-food-red mb-2">AI Food Assistant</h1>
            <p className="text-lg text-gray-600">
              Get personalized food recommendations and answers to your food-related questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Ask me anything about campus food!</h2>
                    <p className="text-gray-600 text-sm">
                      Ask about recommendations, specific diets, popular items, or food at specific outlets.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-col space-y-4">
                      <Textarea
                        placeholder="E.g., What's the best vegetarian food on campus? Or, recommend something spicy."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <Button 
                        type="submit" 
                        className="bg-food-orange hover:bg-food-red"
                        disabled={isLoading}
                      >
                        {isLoading ? "Thinking..." : "Ask AI Assistant"}
                      </Button>
                    </div>
                  </form>

                  {isLoading && (
                    <div className="flex justify-center my-6">
                      <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentResponse && !isLoading && (
                    <div className="bg-gray-50 p-4 rounded-lg animate-fade-in">
                      <div className="flex items-start">
                        <div className="bg-food-orange/10 p-2 rounded-full mr-3">
                          <svg
                            className="w-6 h-6 text-food-orange"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-food-red">AI Assistant</h3>
                          <p className="text-gray-700 mt-1">{currentResponse}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">Example questions you can ask:</h3>
                    <div className="flex flex-wrap gap-2">
                      {AIResponses.map((item, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="text-sm"
                          onClick={() => {
                            setQuery(item.query);
                          }}
                        >
                          {item.query}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {recommendedFoods.length > 0
                      ? "Recommended for You"
                      : "Top Rated Items"}
                  </h2>
                  
                  <div className="space-y-6">
                    {recommendedFoods.length > 0 ? (
                      recommendedFoods.map((food) => (
                        <div key={food.id} className="animate-fade-in">
                          <FoodCard food={food} />
                        </div>
                      ))
                    ) : (
                      foodItems
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 3)
                        .map((food) => (
                          <div key={food.id}>
                            <FoodCard food={food} />
                          </div>
                        ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assistant;
