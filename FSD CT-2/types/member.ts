export interface Member {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  bio?: string;
  skills?: string[];
  image?: string;
  createdAt: string;
  updatedAt: string;
}