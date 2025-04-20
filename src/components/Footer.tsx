
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-food-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-food-orange">Campus</span>
              <span className="text-food-red">Bite</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Your one-stop solution for delicious campus food delivery.
              Order from your favorite outlets and get it delivered to your hostel.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-food-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/outlets" className="text-gray-300 hover:text-food-orange transition-colors">
                  Food Outlets
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="text-gray-300 hover:text-food-orange transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-food-orange transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm mb-2">
              Have questions or feedback? Reach out to us!
            </p>
            <p className="text-gray-300 text-sm">Email: support@campusbite.edu</p>
            <p className="text-gray-300 text-sm">Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CampusBite. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for campus students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
