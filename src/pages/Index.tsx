import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import OutletCard from "@/components/OutletCard";
import { getPopularFoods } from "@/data/foodData";
import { outlets } from "@/data/foodData";
import { Link } from "react-router-dom";
import HostelBlockSelect from "@/components/HostelBlockSelect";

const Index = () => {
  const popularFoods = getPopularFoods();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-food-orange to-food-red flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
              alt="Food background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center md:text-left">
            <div className="md:max-w-lg animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Campus Food Delivered to Your Hostel
              </h1>
              <p className="text-lg mb-6">
                Order delicious food from your favorite campus outlets and get it
                delivered to your hostel door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/outlets">
                  <Button size="lg" className="bg-white text-food-red hover:bg-gray-100">
                    Browse Outlets
                  </Button>
                </Link>
                <Link to="/assistant">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    AI Food Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hostel Block Selection Section */}
        <section className="py-8 bg-white flex items-center justify-center">
          <div className="w-full max-w-lg">
            <HostelBlockSelect />
          </div>
        </section>

        {/* Outlets Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-food-black">Our Food Outlets</h2>
              <p className="mt-2 text-lg text-gray-600">
                Choose from these amazing food outlets on campus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {outlets.map((outlet) => (
                <OutletCard key={outlet.id} outlet={outlet} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/outlets">
                <Button size="lg" className="bg-food-orange hover:bg-food-red">
                  View All Outlets
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Items Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-food-black">Popular Items</h2>
              <p className="mt-2 text-lg text-gray-600">
                Most loved food items across campus
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFoods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-food-black">Why Choose Us?</h2>
              <p className="mt-2 text-lg text-gray-600">
                We make campus food ordering easy and convenient
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-food-orange/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-food-orange">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center md:text-left">Quick Delivery</h3>
                  <p className="text-gray-600 text-center md:text-left">
                    Get your food delivered quickly to your hostel door, no matter which block you're in.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-food-orange/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-food-orange">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center md:text-left">Easy Ordering</h3>
                  <p className="text-gray-600 text-center md:text-left">
                    Simple and intuitive interface that makes ordering food a breeze.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-food-orange/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-food-orange">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center md:text-left">AI Assistant</h3>
                  <p className="text-gray-600 text-center md:text-left">
                    Get personalized food recommendations with our AI food assistant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
