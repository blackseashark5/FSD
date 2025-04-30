import axios from 'axios';
import { Member } from '../types/member';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Get all members
  getMembers: async (): Promise<Member[]> => {
    const response = await axios.get(`${API_URL}/members`);
    return response.data;
  },

  // Get member by ID
  getMember: async (id: string): Promise<Member> => {
    const response = await axios.get(`${API_URL}/members/${id}`);
    return response.data;
  },

  // Add new member
  addMember: async (formData: FormData): Promise<Member> => {
    const response = await axios.post(`${API_URL}/members`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  }
};