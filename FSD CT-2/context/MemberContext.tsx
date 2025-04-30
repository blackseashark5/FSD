import React, { createContext, useContext, useState } from 'react';

interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
}

interface MemberContextType {
  members: Member[];
  addMember: (member: Omit<Member, 'id'>) => void;
}

const MemberContext = createContext<MemberContextType | undefined>(undefined);

export const MemberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<Member[]>([]);

  const addMember = (newMember: Omit<Member, 'id'>) => {
    const member = {
      ...newMember,
      id: crypto.randomUUID(),
    };
    setMembers(prev => [...prev, member]);
  };

  return (
    <MemberContext.Provider value={{ members, addMember }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMemberContext = () => {
  const context = useContext(MemberContext);
  if (context === undefined) {
    throw new Error('useMemberContext must be used within a MemberProvider');
  }
  return context;
};