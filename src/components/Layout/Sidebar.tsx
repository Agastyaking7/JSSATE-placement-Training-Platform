import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Home, 
  Video, 
  FileText, 
  BarChart3, 
  Users, 
  Calendar,
  Target,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user } = useAuth();

  const studentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'mock-interviews', label: 'Mock Interviews', icon: Video },
    { id: 'mock-tests', label: 'Mock Tests', icon: FileText },
    { id: 'performance', label: 'Performance', icon: BarChart3 },
    { id: 'tutors', label: 'Find Tutors', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
  ];

  const tutorMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'interviews', label: 'Interviews', icon: Video },
    { id: 'create-test', label: 'Create Tests', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
  ];

  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'interviews', label: 'Interviews', icon: Video },
    { id: 'tests', label: 'Tests', icon: FileText },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Target },
  ];

  const menuItems = user?.role === 'tutor' ? tutorMenuItems : 
                   user?.role === 'admin' ? adminMenuItems : 
                   studentMenuItems;

  return (
    <div className="w-64 bg-white shadow-sm h-full border-r border-gray-200">
      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;