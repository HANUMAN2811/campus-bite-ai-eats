
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-8 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-100 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-food-red">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Your order has been confirmed and will be delivered to your hostel shortly.
              You will receive updates on your order status through SMS or email.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h2 className="font-semibold mb-2">Delivery Information</h2>
              <p className="text-gray-700">
                Estimated delivery time: <span className="font-medium">25-30 minutes</span>
              </p>
              <p className="text-gray-700">
                Delivery location: <span className="font-medium">Hostel Block C5</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-food-orange hover:bg-food-red">
                  Back to Home
                </Button>
              </Link>
              <Link to="/outlets">
                <Button variant="outline">
                  Order More Food
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
