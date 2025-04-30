import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Loader, User, Mail, Phone, ArrowLeft } from 'lucide-react';

interface Member {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  bio?: string;
  skills?: string[];
  image?: string;
  createdAt: string;
}

export const MemberDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
      } catch (err) {
        console.error('Error fetching member details:', err);
        setError('Failed to load member details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMember();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <Loader className="animate-spin text-blue-600 mb-4" size={40} />
        <p className="text-gray-600">Loading member details...</p>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
        <p>{error || 'Member not found'}</p>
        <Link to="/members" className="text-blue-600 hover:underline mt-2 inline-block">
          Return to members list
        </Link>
      </div>
    );
  }

  const memberSince = new Date(member.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/members" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to Members
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden bg-white mb-4 md:mb-0 md:mr-6 flex-shrink-0 border-4 border-white">
              {member.image ? (
                <img 
                  src={`http://localhost:5000/uploads/${member.image}`} 
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-200">
                  <User className="text-gray-400" size={48} />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{member.name}</h1>
              <p className="text-xl opacity-90">{member.role}</p>
              <p className="text-sm opacity-75 mt-1">Member since {memberSince}</p>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Mail className="mr-2 text-blue-600" size={18} />
                  <span>{member.email}</span>
                </li>
                {member.phone && (
                  <li className="flex items-center text-gray-700">
                    <Phone className="mr-2 text-blue-600" size={18} />
                    <span>{member.phone}</span>
                  </li>
                )}
              </ul>
              
              {member.skills && member.skills.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Bio</h2>
              <p className="text-gray-700 leading-relaxed">
                {member.bio || 'No bio information available.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};