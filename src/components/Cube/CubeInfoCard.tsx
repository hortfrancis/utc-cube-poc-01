import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface CubeInfoCardProps {
  title: string;
  description: string;
  link: string;
  onClose: () => void;
}

const CubeInfoCard: React.FC<CubeInfoCardProps> = ({ title, description, link, onClose }) => {
  return (
    <div className="popup-card fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="w-[90vw] h-[60vh] flex flex-col items-center justify-center gap-6 opacity-90 p-6 bg-white text-black rounded-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-red-500 text-2xl"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h3 className="font-bold text-2xl text-blue-600 mb-4">{title}</h3>
        <p className="text-lg text-gray-800 mb-4">{description}</p>
        <a 
          href={link} 
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 hover:bg-purple-700"
        >
          Learn more
        </a>
        <button onClick={onClose} className="mt-4 text-red-500 font-semibold">Close</button>
      </div>
    </div>
  );
};

export default CubeInfoCard;
