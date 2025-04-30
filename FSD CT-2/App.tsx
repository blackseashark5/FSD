import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MemberProvider } from './context/MemberContext';
import { AddMember } from './pages/AddMember';
import { ViewMembers } from './pages/ViewMembers';

function App() {
  return (
    <MemberProvider>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-gray-800">Team Manager</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<ViewMembers />} />
            <Route path="/add-member" element={<AddMember />} />
            <Route path="/members" element={<ViewMembers />} />
          </Routes>
        </main>
      </div>
    </MemberProvider>
  );
}

export default App;