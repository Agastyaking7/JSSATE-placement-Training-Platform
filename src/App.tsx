import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TutorDashboard from './components/Dashboard/TutorDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import MockInterviews from './components/MockInterviews/MockInterviews';
import MockTests from './components/MockTests/MockTests';
import Performance from './components/Performance/Performance';

function MainApp() {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your dashboard...</p>
          <p className="text-gray-500 text-sm mt-2">Please wait while we prepare your experience</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  // Role-based dashboard rendering
  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard />;
      case 'tutor':
        return <TutorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <StudentDashboard />;
    }
  };

  // Role-based content rendering
  const renderContent = () => {
    // Admin users only see dashboard
    if (user.role === 'admin') {
      return <AdminDashboard />;
    }

    // Tutor users see dashboard and limited features
    if (user.role === 'tutor') {
      switch (activeTab) {
        case 'dashboard':
          return <TutorDashboard />;
        case 'mock-interviews':
          return <MockInterviews />;
        case 'performance':
          return <Performance />;
        default:
          return <TutorDashboard />;
      }
    }

    // Student users see all features
    switch (activeTab) {
      case 'dashboard':
        return <StudentDashboard />;
      case 'mock-interviews':
        return <MockInterviews />;
      case 'mock-tests':
        return <MockTests />;
      case 'performance':
        return <Performance />;
      default:
        return <StudentDashboard />;
    }
  };

  // Admin users get a simplified layout
  if (user.role === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          userRole={user.role}
        />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;