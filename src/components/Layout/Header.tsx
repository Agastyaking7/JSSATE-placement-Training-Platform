import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, LogOut, Bell, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/image.png" 
              alt="JSS Logo" 
              className="h-10 w-10 mr-3 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">JSSATE Placement Hub</h1>
              <p className="text-xs text-gray-500">JSS Academy of Technical Education Bengaluru</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <img
                src={user?.avatar || 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'}
                alt={user?.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
            </div>
            
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;