import React from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
  return (
    <div className='w-full z-50 fixed'>
      <div className="w-full bg-black">
        <h1 className="max-w-7xl text-white font-semibold text-right m-auto p-4">(315) 635-9826</h1>
      </div>
      <nav className="bg-gradient-to-r p-4 z-50 flex justify-between max-w-7xl m-auto">
        <img src="logo.webp">
        </img>
        <div className="p-0">
          <div className="flex justify-end flex-1 bg-white/90">
            <div className="flex">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="p-4 flex">Golf <ChevronDownIcon className="h-5 w-5 ml-2" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] shadow bg-base-100 w-52 p-2">
                  <li><a>Item 1</a></li> 
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="p-4 flex">Pickleball <ChevronDownIcon className="h-5 w-5 ml-2" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] shadow bg-base-100 w-52 p-2">
                  <li><a>Item 1</a></li> 
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              <a className="p-4"> Calendar </a>
              <a className="p-4"> Bar & Restaurant</a>
              <a className="p-4"> Events</a>
              <a className="p-4"> Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;