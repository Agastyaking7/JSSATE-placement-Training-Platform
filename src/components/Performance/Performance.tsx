import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Award, 
  Target,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Performance: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'quarter'>('month');

  const performanceData = {
    overallScore: 85,
    trend: '+8%',
    rank: 12,
    totalStudents: 450,
    testsCompleted: 24,
    interviewsCompleted: 8,
    avgScore: 85,
    improvement: '+12%'
  };

  const skillProgress = [
    { skill: 'Data Structures', current: 85, target: 90, trend: 'up', improvement: '+5%' },
    { skill: 'Algorithms', current: 78, target: 85, trend: 'up', improvement: '+8%' },
    { skill: 'System Design', current: 65, target: 80, trend: 'down', improvement: '-2%' },
    { skill: 'Communication', current: 88, target: 90, trend: 'up', improvement: '+3%' },
    { skill: 'Problem Solving', current: 82, target: 88, trend: 'up', improvement: '+6%' },
  ];

  const categoryPerformance = [
    { category: 'Technical', score: 82, tests: 12, color: 'bg-blue-500' },
    { category: 'Aptitude', score: 88, tests: 8, color: 'bg-green-500' },
    { category: 'English', score: 79, tests: 4, color: 'bg-purple-500' },
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'test',
      title: 'Data Structures Quiz',
      score: 85,
      date: '2024-12-20',
      status: 'completed'
    },
    {
      id: '2',
      type: 'interview',
      title: 'Technical Interview with Dr. Kumar',
      score: 8.5,
      date: '2024-12-18',
      status: 'completed'
    },
    {
      id: '3',
      type: 'test',
      title: 'Aptitude Test',
      score: 92,
      date: '2024-12-15',
      status: 'completed'
    },
    {
      id: '4',
      type: 'interview',
      title: 'HR Interview with Prof. Patel',
      score: 9.0,
      date: '2024-12-12',
      status: 'completed'
    },
  ];

  const recommendations = [
    {
      id: '1',
      type: 'weakness',
      title: 'System Design Concepts',
      description: 'Focus on scalability and database design patterns',
      priority: 'high',
      actions: ['Study system design fundamentals', 'Practice with real-world examples', 'Schedule mock interview']
    },
    {
      id: '2',
      type: 'improvement',
      title: 'Communication Skills',
      description: 'Good progress, continue practicing technical explanations',
      priority: 'medium',
      actions: ['Practice explaining complex topics', 'Record yourself speaking', 'Join group discussions']
    },
    {
      id: '3',
      type: 'strength',
      title: 'Problem Solving',
      description: 'Excellent analytical thinking and approach',
      priority: 'low',
      actions: ['Mentor junior students', 'Solve advanced problems', 'Share knowledge in forums']
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your progress and improvement</p>
        </div>

        {/* Period Selection */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {['week', 'month', 'quarter'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period as any)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">{performanceData.trend}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{performanceData.overallScore}%</div>
            <p className="text-sm text-gray-600">Overall Score</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-blue-600">#{performanceData.rank}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{performanceData.rank}</div>
            <p className="text-sm text-gray-600">Rank out of {performanceData.totalStudents}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">{performanceData.testsCompleted} tests</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{performanceData.avgScore}%</div>
            <p className="text-sm text-gray-600">Average Test Score</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">{performanceData.improvement}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{performanceData.interviewsCompleted}</div>
            <p className="text-sm text-gray-600">Interviews Completed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Progress */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skill Progress</h2>
            
            <div className="space-y-6">
              {skillProgress.map((skill) => (
                <div key={skill.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{skill.current}%</span>
                      <div className={`flex items-center space-x-1 ${
                        skill.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {skill.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                        <span className="text-xs">{skill.improvement}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.current}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current: {skill.current}%</span>
                    <span>Target: {skill.target}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Performance */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Category Performance</h2>
            
            <div className="space-y-4">
              {categoryPerformance.map((category) => (
                <div key={category.category} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${category.color}`} />
                    <div>
                      <h3 className="font-medium text-gray-900">{category.category}</h3>
                      <p className="text-sm text-gray-600">{category.tests} tests completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${getScoreColor(category.score)}`}>
                      {category.score}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Best Category</h3>
              <p className="text-sm text-blue-800">
                Aptitude with 88% average score. Keep up the excellent work!
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'test' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'test' ? 
                      <BarChart3 className={`h-5 w-5 ${activity.type === 'test' ? 'text-blue-600' : 'text-green-600'}`} /> :
                      <CheckCircle className={`h-5 w-5 ${activity.type === 'test' ? 'text-blue-600' : 'text-green-600'}`} />
                    }
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{new Date(activity.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${getScoreColor(activity.score)}`}>
                    {activity.type === 'test' ? `${activity.score}%` : `${activity.score}/10`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h2>
          
          <div className="space-y-6">
            {recommendations.map((rec) => (
              <div key={rec.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      rec.type === 'weakness' ? 'bg-red-100' : 
                      rec.type === 'improvement' ? 'bg-yellow-100' : 'bg-green-100'
                    }`}>
                      {rec.type === 'weakness' ? <AlertCircle className="h-5 w-5 text-red-600" /> :
                       rec.type === 'improvement' ? <TrendingUp className="h-5 w-5 text-yellow-600" /> :
                       <Award className="h-5 w-5 text-green-600" />}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{rec.title}</h3>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                    {rec.priority}
                  </span>
                </div>
                
                <div className="ml-11">
                  <h4 className="font-medium text-gray-900 mb-2">Suggested Actions:</h4>
                  <ul className="space-y-1">
                    {rec.actions.map((action, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;