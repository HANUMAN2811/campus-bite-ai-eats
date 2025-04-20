
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OutletCard from "@/components/OutletCard";
import { outlets } from "@/data/foodData";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Outlets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOutlets = outlets.filter((outlet) =>
    outlet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    outlet.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-food-orange to-food-red py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Food Outlets</h1>
            <p className="text-white text-lg mb-8">
              Explore all the food outlets available on campus
            </p>
            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search outlets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 px-4 rounded-full bg-white/90 focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredOutlets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOutlets.map((outlet) => (
                <OutletCard key={outlet.id} outlet={outlet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">
                No outlets found matching "{searchTerm}"
              </h3>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Outlets;
