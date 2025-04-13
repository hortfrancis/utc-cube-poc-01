import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="fixed bottom-0 bg-gray-800 text-white py-4 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} UTC Cube. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 