import React from 'react';
import { Link } from 'react-router-dom';
import { useMemberContext } from '../context/MemberContext';

export const ViewMembers: React.FC = () => {
  const { members } = useMemberContext();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Team Members</h2>
        <Link
          to="/add-member"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Add New Member
        </Link>
      </div>

      {members.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No members added yet.</p>
          <Link
            to="/add-member"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Add your first team member
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map(member => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};