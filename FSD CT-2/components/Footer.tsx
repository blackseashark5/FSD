import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <Heart className="mx-1 text-red-500" size={16} /> by Team Developers
        </p>
        <p className="text-gray-400 text-sm mt-2">
          &copy; {new Date().getFullYear()} Student Team Management App
        </p>
      </div>
    </footer>
  );
};