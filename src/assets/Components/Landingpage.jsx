import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About Us', 'Services', 'Teams', 'Contact Us'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-none">
          <a href="#">
            <img 
              src="logo1.png" 
              alt="TAG & COMPANY" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex flex-grow justify-center gap-12">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex-none">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-700 hover:text-blue-600 text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section with Graph */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="graph1.png" 
            alt="Financial Growth Graph" 
            className="w-full max-w-md"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] leading-tight mb-6">
            Providing the best <br/> Chartered Accountancy <br/>Services!
          </h2>
          <p className="text-[#1a237e] text-lg md:text-xl leading-relaxed mb-8">
            Welcome to TAG & Co. Chartered Accountants, your trusted <br/> partner 
            in financial excellence. Since our establishment in 2017, <br/> we've 
            been committed to providing top-tier accounting, <br/> financial, and 
            advisory services to clients across Hyderabad<br/> and beyond.
          </p>
          <button className="bg-[#4169E1] text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg hover:bg-blue-600 transition-colors">
            Contact us now
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
