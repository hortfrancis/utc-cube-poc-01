import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="flex flex-col min-[1100px]:flex-row justify-between items-center min-[1100px]:gap-4 p-8 min-[1100px]:px-8 min-[1100px]:py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center gap-4 w-full ">
        <Link to="/" className="text-2xl min-[1100px]:text-1xl text-gray-800 no-underline" style={{ fontVariationSettings: '"wght" 600' }}>
          Urban Tech Creative
        </Link>
        {/* Main navigation - visible on small screens but hidden on very small and large screens */}
        <nav className="hidden sm:block min-[1100px]:hidden ml-auto">
          <ul className="flex flex-row m-0 p-0 list-none gap-4">
            <NavLink to="/about" isActive={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
          </ul>
        </nav>
        <button 
          className="min-[1100px]:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Dropdown menu - visible only when toggled on mobile, always visible on desktop */}
      <nav className={`w-full min-[1100px]:w-auto whitespace-nowrap ${isMenuOpen ? 'block' : 'hidden'} min-[1100px]:block  min-[1100px]:mt-0`}>
        <ul className="flex flex-col min-[1100px]:flex-row m-0 p-0 list-none gap-0 min-[1100px]:gap-6">
          {/* Show these links in the dropdown menu on very small screens only */}
          <div className="block sm:hidden">
            <NavLink to="/about" isActive={location.pathname === '/about'}>About</NavLink>
          </div>
          <div className="block sm:hidden">
            <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
          </div>
          <li className="hidden min-[1100px]:block border-r border-gray-300 h-6 self-center"></li>
          <NavLink to="/augmented-reality" isActive={location.pathname === '/augmented-reality'}>Augmented Reality</NavLink>
          <NavLink to="/smart-cities" isActive={location.pathname === '/smart-cities'}>Smart Cities</NavLink>
          <NavLink to="/construction" isActive={location.pathname === '/construction'}>Construction</NavLink>
          <NavLink to="/pop-up" isActive={location.pathname === '/pop-up'}>Pop Up</NavLink>
          <NavLink to="/heritage" isActive={location.pathname === '/heritage'}>Heritage</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 