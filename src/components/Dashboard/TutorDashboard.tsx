import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Calendar, 
  Clock, 
  Users, 
  TrendingUp, 
  Video,
  FileText,
  Award,
  CheckCircle,
  AlertCircle,
  Star,
  MessageSquare,
  Filter
} from 'lucide-react';

const TutorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const todayInterviews = [
    {
      id: '1',
      student: 'Arjun Sharma',
      type: 'Technical Interview',
      time: '2:00 PM',
      duration: '45 mins',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'scheduled',
      skills: ['Java', 'Spring Boot', 'React'],
      year: '4th Year'
    },
    {
      id: '2',
      student: 'Priya Reddy',
      type: 'System Design',
      time: '3:30 PM',
      duration: '60 mins',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'in-progress',
      skills: ['Python', 'Django', 'PostgreSQL'],
      year: '3rd Year'
    },
    {
      id: '3',
      student: 'Rohit Kumar',
      type: 'Mock Interview',
      time: '4:45 PM',
      duration: '30 mins',
      avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'completed',
      skills: ['JavaScript', 'Node.js', 'MongoDB'],
      year: '4th Year'
    },
  ];

  const recentAssessments = [
    { 
      id: '1', 
      student: 'Sneha Patel', 
      type: 'Technical Assessment', 
      score: 85, 
      date: '2 hours ago', 
      category: 'Data Structures',
      feedback: 'pending'
    },
    { 
      id: '2', 
      student: 'Vikram Singh', 
      type: 'Coding Interview', 
      score: 92, 
      date: '1 day ago', 
      category: 'Algorithms',
      feedback: 'completed'
    },
    { 
      id: '3', 
      student: 'Kavya Nair', 
      type: 'System Design', 
      score: 78, 
      date: '2 days ago', 
      category: 'Architecture',
      feedback: 'completed'
    },
  ];

  const studentProgress = [
    { name: 'Arjun Sharma', progress: 85, trend: 'up', lastSession: '2 days ago', improvement: '+12%' },
    { name: 'Priya Reddy', progress: 78, trend: 'up', lastSession: '1 day ago', improvement: '+8%' },
    { name: 'Rohit Kumar', progress: 92, trend: 'up', lastSession: '3 days ago', improvement: '+15%' },
    { name: 'Sneha Patel', progress: 65, trend: 'down', lastSession: '1 week ago', improvement: '-5%' },
  ];

  const stats = [
    { label: 'Today\'s Sessions', value: '3', icon: Video, color: 'bg-gradient-to-r from-blue-500 to-purple-500', change: '+2' },
    { label: 'Active Students', value: '28', icon: Users, color: 'bg-gradient-to-r from-green-500 to-teal-500', change: '+4' },
    { label: 'Pending Reviews', value: '12', icon: FileText, color: 'bg-gradient-to-r from-orange-500 to-red-500', change: '-3' },
    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'bg-gradient-to-r from-yellow-500 to-orange-500', change: '+0.2' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFeedbackStatus = (feedback: string) => {
    return feedback === 'pending' ? 'text-orange-600' : 'text-green-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
                <p className="text-gray-600">Ready to guide your students today?</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Today's Date</p>
              <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change} from last week</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Interviews */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  Today's Interviews
                </h2>
                <div className="flex space-x-2">
                  {['all', 'scheduled', 'in-progress', 'completed'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedFilter === filter
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {todayInterviews.map((interview) => (
                  <div key={interview.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src={interview.avatar} 
                      alt={interview.student}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{interview.student}</h3>
                          <p className="text-sm text-gray-600">{interview.type} • {interview.year}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{interview.time}</p>
                          <p className="text-xs text-gray-500">{interview.duration}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex space-x-2">
                          {interview.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(interview.status)}`}>
                          {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Progress */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Student Progress
              </h2>
              
              <div className="space-y-4">
                {studentProgress.map((student, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <span className={`text-xs font-medium ${student.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {student.improvement}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          student.progress >= 80 ? 'bg-green-500' : 
                          student.progress >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{student.progress}% Complete</span>
                      <span>{student.lastSession}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full p-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all">
                  <Video className="h-5 w-5 inline mr-2" />
                  Start Interview
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
                  <Calendar className="h-5 w-5 inline mr-2" />
                  Schedule Session
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all">
                  <FileText className="h-5 w-5 inline mr-2" />
                  Review Assessments
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all">
                  <MessageSquare className="h-5 w-5 inline mr-2" />
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Assessments */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-green-600" />
            Recent Assessments
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Student</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Score</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {recentAssessments.map((assessment) => (
                  <tr key={assessment.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{assessment.student}</td>
                    <td className="py-3 px-4 text-gray-600">{assessment.type}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {assessment.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className={`font-medium ${
                          assessment.score >= 80 ? 'text-green-600' : 
                          assessment.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {assessment.score}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{assessment.date}</td>
                    <td className="py-3 px-4">
                      <span className={`flex items-center ${getFeedbackStatus(assessment.feedback)}`}>
                        {assessment.feedback === 'pending' ? (
                          <>
                            <AlertCircle className="h-4 w-4 mr-1" />
                            Pending
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Completed
                          </>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;