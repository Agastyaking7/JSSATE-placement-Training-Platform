import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Mock authentication - in real app, this would call your API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on email
    const mockUser: User = {
      id: '1',
      name: email.includes('tutor') ? 'Dr. Rajesh Kumar' : 
            email.includes('admin') ? 'Admin User' : 
            email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      role: email.includes('tutor') ? 'tutor' : email.includes('admin') ? 'admin' : 'student',
      avatar: email.includes('tutor') ? 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400' : 
              email.includes('admin') ? 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' :
              '/WhatsApp Image 2025-06-04 at 21.54.17_d312069a.jpg',
      department: 'Computer Science',
      year: email.includes('tutor') ? undefined : 4,
      skills: email.includes('tutor') ? ['JavaScript', 'React', 'Node.js', 'System Design'] : ['Java', 'Python', 'React'],
      experience: email.includes('tutor') ? '8+ years in industry' : undefined,
      specialization: email.includes('tutor') ? ['Technical Interviews', 'System Design', 'Data Structures'] : undefined
    };

    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};