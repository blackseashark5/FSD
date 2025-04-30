import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Users size={24} />
          <span className="hidden sm:inline">Student Team Management</span>
          <span className="sm:hidden">Team App</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-member" className="hover:text-blue-200 transition-colors">
                Add Member
              </Link>
            </li>
            <li>
              <Link to="/members" className="hover:text-blue-200 transition-colors">
                View Members
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};