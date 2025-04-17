import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface CubeInfoCardProps {
  title: string;
  description: string;
  link: string;
  onClose: () => void;
}

const CubeInfoCard: React.FC<CubeInfoCardProps> = ({ title, description, link, onClose }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleNavigation = () => {
    onClose(); // Close the info card first
    navigate(link); // Then navigate to the specified route
  };

  // Handle clicks outside the card
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleOutsideClick);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="popup-card fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        ref={cardRef}
        className="flex flex-col justify-center gap-6 w-[80vw] md:w-md lg:w-xl h-[60vh] opacity-90 p-6 bg-white text-black rounded-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-2xl hover:text-red-700 transition duration-300 cursor-pointer"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h3 className="font-bold text-2xl text-blue-600 mb-4"
          style={{ fontVariationSettings: '"wght" 700', color: 'var(--color-primary)'}}>
          {title}
        </h3>
        <p className="text-lg text-gray-800 mb-4">{description}</p>
        <button
          onClick={handleNavigation}
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 hover:bg-purple-700 cursor-pointer"
          style={{ backgroundColor: 'var(--color-primary)'}}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default CubeInfoCard;
