import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, Mail, Lock, User } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'tutor' | 'admin'>('student');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const quickLoginOptions = [
    { role: 'student', email: 'student@jssate.ac.in', label: 'Student Login' },
    { role: 'tutor', email: 'tutor@jssate.ac.in', label: 'Tutor Login' },
    { role: 'admin', email: 'admin@jssate.ac.in', label: 'Admin Login' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <img 
            src="/image.png" 
            alt="JSS Logo" 
            className="h-16 w-16 mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-900">JSSATE Placement Hub</h1>
          <p className="text-gray-600 mt-2">JSS Academy of Technical Education Bengaluru</p>
          <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Role
          </label>
          <div className="flex space-x-2">
            {['student', 'tutor', 'admin'].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setSelectedRole(role as any)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedRole === role
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
                }`}
              >
                <User className="h-4 w-4 inline mr-1" />
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center mb-4">Quick login for demo:</p>
          <div className="space-y-2">
            {quickLoginOptions.map((option) => (
              <button
                key={option.role}
                onClick={() => {
                  setEmail(option.email);
                  setPassword('demo123');
                  setSelectedRole(option.role as any);
                }}
                className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {option.label} - {option.email}
              </button>
            ))}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800 mb-2">
                <strong>Note:</strong> Your profile name will be automatically generated from your email address.
              </p>
              <p className="text-xs text-blue-700">
                Example: john.doe@jssate.ac.in → John Doe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;