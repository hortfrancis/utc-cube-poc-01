import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="logo">
        <Link to="/" className="text-1xl text-gray-800 no-underline" style={{ fontVariationSettings: '"wght" 600' }}>Urban Tech Creative</Link>
      </div>
      <nav className="nav-menu">
        <ul className="flex flex-col md:flex-row m-0 p-0 list-none">
          <NavLink to="/about" isActive={location.pathname === '/about'}>About</NavLink>
          <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
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