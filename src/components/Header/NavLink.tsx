import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive = false, className = '' }) => {
  return (
    <li className={`text-right  py-2 ${className}`}>
      <Link 
        to={to} 
        className="text-gray-800 no-underline hover:text-blue-500 transition-colors block"
        style={{ fontVariationSettings: `"wght" ${isActive ? 600 : 400}` }}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
