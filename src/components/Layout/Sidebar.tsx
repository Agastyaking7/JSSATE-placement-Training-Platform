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
  MessageSquare,
  Settings,
  Award,
  BookOpen,
  TrendingUp,
  Shield
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userRole: 'student' | 'tutor' | 'admin';
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, userRole }) => {
  const { user } = useAuth();

  const studentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'mock-interviews', label: 'Mock Interviews', icon: Video, color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'mock-tests', label: 'Mock Tests', icon: FileText, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { id: 'performance', label: 'Performance', icon: BarChart3, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { id: 'tutors', label: 'Find Tutors', icon: Users, color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { id: 'schedule', label: 'Schedule', icon: Calendar, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  ];

  const tutorMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'mock-interviews', label: 'Interviews', icon: Video, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'performance', label: 'Analytics', icon: BarChart3, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { id: 'students', label: 'Students', icon: Users, color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { id: 'schedule', label: 'Schedule', icon: Calendar, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  ];

  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { id: 'users', label: 'User Management', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { id: 'system', label: 'System Health', icon: Target, color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'reports', label: 'Reports', icon: FileText, color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'text-gray-600', bgColor: 'bg-gray-50' },
  ];

  const getMenuItems = () => {
    switch (userRole) {
      case 'tutor':
        return tutorMenuItems;
      case 'admin':
        return adminMenuItems;
      default:
        return studentMenuItems;
    }
  };

  const menuItems = getMenuItems();

  const getRoleColor = () => {
    switch (userRole) {
      case 'student':
        return 'from-blue-500 to-purple-500';
      case 'tutor':
        return 'from-green-500 to-teal-500';
      case 'admin':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-blue-500 to-purple-500';
    }
  };

  const getRoleIcon = () => {
    switch (userRole) {
      case 'student':
        return Home;
      case 'tutor':
        return BookOpen;
      case 'admin':
        return Shield;
      default:
        return Home;
    }
  };

  const RoleIcon = getRoleIcon();

  return (
    <div className="w-64 bg-white shadow-lg h-full border-r border-gray-200">
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getRoleColor()} flex items-center justify-center`}>
            <RoleIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 truncate">{user?.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{userRole}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-200 group ${
                  isActive
                    ? `${item.bgColor} ${item.color} shadow-md transform scale-105`
                    : 'text-gray-700 hover:bg-gray-50 hover:transform hover:scale-102'
                }`}
              >
                <Icon className={`h-5 w-5 transition-colors ${
                  isActive ? item.color : 'text-gray-500 group-hover:text-gray-700'
                }`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto">
                    <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Role-specific Quick Stats */}
      <div className="mt-8 px-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Stats</h4>
          <div className="space-y-2">
            {userRole === 'student' && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tests Taken</span>
                  <span className="font-medium text-gray-900">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Interviews</span>
                  <span className="font-medium text-gray-900">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Score</span>
                  <span className="font-medium text-green-600">85%</span>
                </div>
              </>
            )}
            {userRole === 'tutor' && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium text-gray-900">28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sessions</span>
                  <span className="font-medium text-gray-900">156</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium text-yellow-600">4.8★</span>
                </div>
              </>
            )}
            {userRole === 'admin' && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Users</span>
                  <span className="font-medium text-gray-900">2,847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Sessions</span>
                  <span className="font-medium text-gray-900">1,234</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">System Health</span>
                  <span className="font-medium text-green-600">99.9%</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className={`bg-gradient-to-r ${getRoleColor()} rounded-lg p-3 text-white text-center`}>
          <div className="text-sm font-medium">
            {userRole === 'student' && 'Keep Learning!'}
            {userRole === 'tutor' && 'Inspire Students!'}
            {userRole === 'admin' && 'Manage Efficiently!'}
          </div>
          <div className="text-xs opacity-80 mt-1">
            {userRole === 'student' && 'Your next interview awaits'}
            {userRole === 'tutor' && 'Make a difference today'}
            {userRole === 'admin' && 'System running smoothly'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;