import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Users } from 'lucide-react';

export const Home: React.FC = () => {
  const teamName = "Alpha Developers";

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
      <div className="mb-8 w-full p-8 bg-white rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to {teamName}</h1>
        <p className="text-gray-700 text-lg mb-6">
          A platform for managing student team members, tracking their roles, 
          and maintaining contact information in one convenient place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link to="/add-member" className="flex flex-col items-center p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
            <UserPlus size={48} className="text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Add Member</h2>
            <p className="text-gray-600">Add a new team member with their details and profile image</p>
          </Link>
          <Link to="/members" className="flex flex-col items-center p-6 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
            <Users size={48} className="text-green-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">View Members</h2>
            <p className="text-gray-600">See all team members and access their detailed profiles</p>
          </Link>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Team Overview</h2>
        <p className="text-gray-700">
          Our team consists of talented students working together on various projects.
          Each member brings unique skills and perspectives to contribute to our success.
        </p>
      </div>
    </div>
  );
};