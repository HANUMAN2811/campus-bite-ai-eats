
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setIsLoading(false);
      toast({
        title: "Order placed successfully!",
        description: "Your order has been placed and will be delivered soon",
      });
      navigate("/checkout-success");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/outlets">
                <Button className="bg-food-orange hover:bg-food-red">
                  Browse Food Outlets
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Items ({cartItems.length})</h2>
                    <div className="divide-y">
                      {cartItems.map((item) => (
                        <div key={item.id} className="py-4 flex flex-col sm:flex-row">
                          <div className="sm:w-20 sm:h-20 h-32 w-full mb-3 sm:mb-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="sm:ml-4 flex-grow">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex items-center">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                                >
                                  -
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                                >
                                  +
                                </button>
                              </div>
                              <div className="flex items-center">
                                <span className="font-medium text-food-orange">
                                  ₹{item.price * item.quantity}
                                </span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-4 text-gray-400 hover:text-food-red"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="divide-y">
                    <div className="py-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>₹30.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes</span>
                        <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-food-red">
                          ₹{(totalPrice + 30 + totalPrice * 0.05).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="w-full mt-4 bg-food-orange hover:bg-food-red"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Proceed to Checkout"}
                  </Button>
                  <div className="mt-4">
                    <Link to="/outlets">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
