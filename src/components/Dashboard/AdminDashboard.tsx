import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  Activity,
  Settings,
  Award,
  Calendar,
  BarChart3,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Server,
  Globe,
  FileText
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('users');

  const systemStats = [
    { label: 'Total Users', value: '2,847', icon: Users, color: 'bg-gradient-to-r from-blue-500 to-purple-500', change: '+12.5%', trend: 'up' },
    { label: 'Active Sessions', value: '1,234', icon: Activity, color: 'bg-gradient-to-r from-green-500 to-teal-500', change: '+8.3%', trend: 'up' },
    { label: 'Interviews Conducted', value: '4,567', icon: BookOpen, color: 'bg-gradient-to-r from-orange-500 to-red-500', change: '+15.2%', trend: 'up' },
    { label: 'System Health', value: '99.9%', icon: Shield, color: 'bg-gradient-to-r from-purple-500 to-pink-500', change: '+0.1%', trend: 'up' },
  ];

  const userBreakdown = {
    students: { count: 2341, percentage: 82.2, color: 'bg-blue-500' },
    tutors: { count: 456, percentage: 16.0, color: 'bg-green-500' },
    admins: { count: 50, percentage: 1.8, color: 'bg-orange-500' },
  };

  const recentActivity = [
    { id: 1, type: 'user_registration', user: 'Arjun Sharma', action: 'Student registered', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'interview_completed', user: 'Dr. Rajesh Kumar', action: 'Interview completed with Priya', time: '15 minutes ago', status: 'success' },
    { id: 3, type: 'system_alert', user: 'System', action: 'High server load detected', time: '1 hour ago', status: 'warning' },
    { id: 4, type: 'assessment_created', user: 'Prof. Meera Patel', action: 'New assessment created', time: '2 hours ago', status: 'success' },
    { id: 5, type: 'user_suspension', user: 'Admin', action: 'User account suspended', time: '3 hours ago', status: 'error' },
  ];

  const performanceMetrics = [
    { metric: 'Average Session Duration', value: '45.6 mins', change: '+2.3%', trend: 'up' },
    { metric: 'Interview Success Rate', value: '87.4%', change: '+5.1%', trend: 'up' },
    { metric: 'User Satisfaction', value: '4.6/5', change: '+0.2', trend: 'up' },
    { metric: 'System Uptime', value: '99.95%', change: '+0.05%', trend: 'up' },
  ];

  const topPerformers = [
    { name: 'Dr. Rajesh Kumar', role: 'Tutor', score: 4.9, sessions: 234, department: 'CSE' },
    { name: 'Prof. Meera Patel', role: 'Tutor', score: 4.8, sessions: 189, department: 'ECE' },
    { name: 'Arjun Sharma', role: 'Student', score: 4.7, sessions: 45, department: 'CSE' },
    { name: 'Priya Reddy', role: 'Student', score: 4.6, sessions: 38, department: 'ECE' },
  ];

  const systemHealth = [
    { component: 'Database', status: 'healthy', uptime: '99.9%', response: '12ms' },
    { component: 'API Server', status: 'healthy', uptime: '99.8%', response: '45ms' },
    { component: 'File Storage', status: 'warning', uptime: '99.1%', response: '120ms' },
    { component: 'Auth Service', status: 'healthy', uptime: '100%', response: '8ms' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getHealthStatus = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Control Panel</h1>
                <p className="text-gray-600">Monitor and manage the placement ecosystem</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">System Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">All Systems Operational</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                <Settings className="h-4 w-4 inline mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-xs mt-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last {selectedPeriod}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Analytics */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-orange-600" />
                  User Analytics
                </h2>
                <div className="flex space-x-2">
                  {['week', 'month', 'quarter'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedPeriod === period
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* User Breakdown */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">User Distribution</h3>
                <div className="space-y-4">
                  {Object.entries(userBreakdown).map(([role, data]) => (
                    <div key={role} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${data.color}`}></div>
                        <span className="font-medium text-gray-700 capitalize">{role}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${data.color}`}
                            style={{ width: `${data.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600 min-w-[60px]">
                          {data.count} ({data.percentage}%)
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{metric.metric}</p>
                          <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
                        </div>
                        <div className={`text-xs font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Health */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Server className="h-5 w-5 mr-2 text-orange-600" />
                System Health
              </h2>
              
              <div className="space-y-3">
                {systemHealth.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        component.status === 'healthy' ? 'bg-green-500' : 
                        component.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <span className="font-medium text-gray-700">{component.component}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{component.uptime}</p>
                      <p className="text-xs text-gray-500">{component.response}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-orange-600" />
                Top Performers
              </h2>
              
              <div className="space-y-3">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{performer.name}</p>
                      <p className="text-xs text-gray-500">{performer.role} • {performer.department}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-900">{performer.score}</span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                      <p className="text-xs text-gray-500">{performer.sessions} sessions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-orange-600" />
            Recent Activity
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {activity.type === 'user_registration' && <Users className="h-4 w-4 text-blue-500 mr-2" />}
                        {activity.type === 'interview_completed' && <BookOpen className="h-4 w-4 text-green-500 mr-2" />}
                        {activity.type === 'system_alert' && <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />}
                        {activity.type === 'assessment_created' && <FileText className="h-4 w-4 text-purple-500 mr-2" />}
                        {activity.type === 'user_suspension' && <Shield className="h-4 w-4 text-red-500 mr-2" />}
                        <span className="text-sm text-gray-600 capitalize">{activity.type.replace('_', ' ')}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">{activity.user}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.action}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.time}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
              <Users className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">User Management</div>
            </button>
            <button className="p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all">
              <BarChart3 className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">Analytics</div>
            </button>
            <button className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all">
              <Settings className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">System Config</div>
            </button>
            <button className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
              <Database className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">Data Backup</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;