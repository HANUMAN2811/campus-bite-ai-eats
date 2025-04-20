
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn, Menu, ShoppingCart, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import LoginDialog from "./LoginDialog";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-food-orange font-bold text-2xl">Campus</span>
              <span className="text-food-red font-bold text-2xl">Bite</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-food-black hover:text-food-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/outlets" 
              className="text-food-black hover:text-food-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Food Outlets
            </Link>
            <Link 
              to="/assistant" 
              className="text-food-black hover:text-food-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              AI Assistant
            </Link>
            <Button 
              variant="outline" 
              onClick={toggleLogin}
              className="ml-2 flex items-center"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-food-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-food-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-food-black hover:text-food-orange focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg animate-slide-in">
          <Link
            to="/"
            className="text-food-black hover:text-food-orange block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/outlets"
            className="text-food-black hover:text-food-orange block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Food Outlets
          </Link>
          <Link
            to="/assistant"
            className="text-food-black hover:text-food-orange block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            AI Assistant
          </Link>
          <Button 
            variant="outline" 
            onClick={() => {
              toggleLogin();
              toggleMenu();
            }}
            className="w-full justify-start mt-2"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>
      </div>

      <LoginDialog isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </nav>
  );
};

export default Navbar;
