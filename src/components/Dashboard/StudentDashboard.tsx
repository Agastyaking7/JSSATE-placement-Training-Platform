import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Calendar, 
  Clock, 
  Award, 
  TrendingUp, 
  Video,
  FileText,
  Users
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  const upcomingInterviews = [
    {
      id: '1',
      tutor: 'Dr. Rajesh Kumar',
      type: 'Technical Interview',
      date: 'Today, 2:00 PM',
      duration: '45 mins',
      avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      tutor: 'Prof. Meera Patel',
      type: 'HR Interview',
      date: 'Tomorrow, 10:00 AM',
      duration: '30 mins',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const recentTests = [
    { id: '1', title: 'Data Structures Quiz', score: 85, date: '2 days ago', category: 'Technical' },
    { id: '2', title: 'Aptitude Test', score: 92, date: '1 week ago', category: 'Aptitude' },
    { id: '3', title: 'English Communication', score: 78, date: '1 week ago', category: 'Communication' },
  ];

  const skillProgress = [
    { skill: 'Data Structures', progress: 85, trend: 'up' },
    { skill: 'Algorithms', progress: 78, trend: 'up' },
    { skill: 'System Design', progress: 65, trend: 'down' },
    { skill: 'Communication', progress: 88, trend: 'up' },
  ];

  const stats = [
    { label: 'Tests Completed', value: '24', icon: FileText, color: 'bg-blue-500' },
    { label: 'Interviews Done', value: '8', icon: Video, color: 'bg-green-500' },
    { label: 'Average Score', value: '85%', icon: Award, color: 'bg-purple-500' },
    { label: 'Rank', value: '#12', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name?.split(' ')[0] || 'Student'}!</h1>
          <p className="text-gray-600 mt-2">Here's your placement preparation progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Interviews */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Interviews</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div key={interview.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <img
                        src={interview.avatar}
                        alt={interview.tutor}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{interview.tutor}</h3>
                        <p className="text-sm text-gray-600">{interview.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{interview.date}</p>
                      <p className="text-sm text-gray-600">{interview.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Test Results */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Test Results</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {recentTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-900">{test.title}</h3>
                      <p className="text-sm text-gray-600">{test.category} • {test.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{test.score}%</p>
                      <p className={`text-sm ${test.score >= 80 ? 'text-green-600' : test.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {test.score >= 80 ? 'Excellent' : test.score >= 60 ? 'Good' : 'Needs Improvement'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Progress */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skill Progress</h2>
            
            <div className="space-y-6">
              {skillProgress.map((skill) => (
                <div key={skill.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{skill.progress}%</span>
                      <TrendingUp className={`h-4 w-4 ${skill.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Recommendation</h3>
              <p className="text-sm text-blue-800">
                Focus on System Design concepts. Consider scheduling a mock interview with a senior tutor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;