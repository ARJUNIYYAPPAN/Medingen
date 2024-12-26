import React from "react";
import { FaHome, FaGift, FaBell, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-bold text-black">Medingen</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8 text-gray-700 text-sm font-medium">
        <a href="#home" className="hover:text-black">
        <FaHome className="mr-2" /><span>Home</span>
        </a>
        <a href="#offers" className="hover:text-black">
        <FaGift className="mr-2" /><span>Offers</span>
        </a>
        <a href="#notifications" className="hover:text-black">
        <FaBell className="mr-2" /><span>Notification</span>
        </a>
        <a href="#profile" className="hover:text-black">
        <FaUser className="mr-2" /><span>Profile</span>
        </a>
      </nav>

      {/* Cart Icon */}
      <div>
        <FaShoppingCart className="text-gray-700 text-xl hover:text-black" />
      </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-black">☰</button>
        </div>
    </header>
  );
};

export default Header;
