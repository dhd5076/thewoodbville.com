import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  return (
    <div className="w-full z-50 fixed">
      <nav className="bg-gradient-to-r p-4 z-50 flex justify-between m-auto bg-black/50">
        {/* Logo */}
        <img src="logo.webp" alt="Website Logo" className="h-12 w-auto" />

        {/* Navigation Links */}
        <div className="p-0">
          <div className="flex justify-end flex-1 font-bold text-lg uppercase text-white">
            <div className="flex">
              <a href="#golf" className="p-4 hover:text-gray-300">Golf</a>
              <a href="#pickleball" className="p-4 hover:text-gray-300">Pickleball</a>
              <a href="#menu" className="p-4 hover:text-gray-300">Menu</a>
              <a href="#events" className="p-4 hover:text-gray-300">Events</a>
              <a href="#contact" className="p-4 hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
