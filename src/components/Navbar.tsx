import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const location = useLocation();

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#about';
      return;
    }
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-gray-600 hover:text-indigo-600 transition">
            Collections
          </Link>
          <Link to="/best-sellers" className="text-gray-600 hover:text-indigo-600 transition">
            Best Sellers
          </Link>
          <a 
            href="#about" 
            onClick={scrollToAbout}
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Our Story
          </a>
          <Link 
            to="/shop" 
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}