import React, { useState } from 'react';
import { 
  Clock, 
  FileText, 
  Award, 
  Play,
  CheckCircle,
  AlertCircle,
  Filter,
  Search,
} from 'lucide-react';

const MockTests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'completed' | 'results'>('available');
  
  const availableTests = [
    {
      id: '1',
      title: 'Data Structures & Algorithms',
      description: 'Test your knowledge of arrays, linked lists, trees, and algorithms',
      category: 'Technical',
      difficulty: 'Medium',
      duration: 60,
      questions: 25,
      attempts: 1240,
      rating: 4.5,
      tags: ['Arrays', 'Trees', 'Sorting', 'Algorithms']
    },
    {
      id: '2',
      title: 'Quantitative Aptitude',
      description: 'Mathematical reasoning and problem-solving skills',
      category: 'Aptitude',
      difficulty: 'Easy',
      duration: 45,
      questions: 30,
      attempts: 2100,
      rating: 4.3,
      tags: ['Math', 'Reasoning', 'Problem Solving']
    },
    {
      id: '3',
      title: 'System Design Basics',
      description: 'Fundamental concepts of system design and architecture',
      category: 'Technical',
      difficulty: 'Hard',
      duration: 90,
      questions: 20,
      attempts: 890,
      rating: 4.7,
      tags: ['System Design', 'Architecture', 'Scalability']
    },
    {
      id: '4',
      title: 'English Communication',
      description: 'Grammar, vocabulary, and comprehension skills',
      category: 'English',
      difficulty: 'Easy',
      duration: 30,
      questions: 20,
      attempts: 1800,
      rating: 4.2,
      tags: ['Grammar', 'Vocabulary', 'Comprehension']
    },
  ];

  const completedTests = [
    {
      id: '1',
      title: 'Data Structures Quiz',
      category: 'Technical',
      completedDate: '2024-12-20',
      score: 85,
      totalQuestions: 20,
      correctAnswers: 17,
      timeSpent: 35,
      rank: 45,
      totalParticipants: 200
    },
    {
      id: '2',
      title: 'Aptitude Test',
      category: 'Aptitude',
      completedDate: '2024-12-18',
      score: 92,
      totalQuestions: 30,
      correctAnswers: 27,
      timeSpent: 42,
      rank: 12,
      totalParticipants: 150
    },
    {
      id: '3',
      title: 'English Communication',
      category: 'English',
      completedDate: '2024-12-15',
      score: 78,
      totalQuestions: 25,
      correctAnswers: 19,
      timeSpent: 28,
      rank: 78,
      totalParticipants: 180
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderAvailable = () => (
    <div>
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tests..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableTests.map((test) => (
          <div key={test.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{test.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {test.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-600">{test.rating}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{test.duration} mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{test.questions} questions</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {test.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{test.attempts} attempts</span>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Play className="h-4 w-4" />
                <span>Start Test</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCompleted = () => (
    <div className="space-y-4">
      {completedTests.map((test) => (
        <div key={test.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{test.title}</h3>
              <p className="text-sm text-gray-600">Completed on {new Date(test.completedDate).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${getScoreColor(test.score)}`}>
                {test.score}%
              </div>
              <p className="text-sm text-gray-600">
                {test.correctAnswers}/{test.totalQuestions} correct
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Time Spent</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{test.timeSpent} mins</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Rank</span>
              </div>
              <p className="text-lg font-bold text-gray-900">#{test.rank}</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Accuracy</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{Math.round((test.correctAnswers / test.totalQuestions) * 100)}%</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Category</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{test.category}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Out of {test.totalParticipants} participants
            </span>
            <div className="flex space-x-3">
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View Solutions
              </button>
              <button className="text-green-600 hover:text-green-700 font-medium">
                Retake Test
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderResults = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <p className="text-sm text-gray-600">Average Score</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <p className="text-sm text-gray-600">Tests Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">#24</div>
            <p className="text-sm text-gray-600">Overall Rank</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Category Performance</h3>
        
        <div className="space-y-4">
          {[
            { category: 'Technical', score: 82, tests: 5, improvement: '+5%' },
            { category: 'Aptitude', score: 88, tests: 4, improvement: '+8%' },
            { category: 'English', score: 79, tests: 3, improvement: '+2%' },
          ].map((item) => (
            <div key={item.category} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{item.category}</h4>
                <p className="text-sm text-gray-600">{item.tests} tests completed</p>
              </div>
              <div className="text-right">
                <div className={`text-xl font-bold ${getScoreColor(item.score)}`}>
                  {item.score}%
                </div>
                <p className="text-sm text-green-600">{item.improvement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'available', label: 'Available Tests', count: availableTests.length },
    { id: 'completed', label: 'Completed', count: completedTests.length },
    { id: 'results', label: 'Results', count: null },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mock Tests</h1>
          <p className="text-gray-600 mt-2">Practice and improve your skills</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-1 mb-6">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                {tab.count !== null && (
                  <span className="ml-2 bg-gray-200 text-gray-600 py-1 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'available' && renderAvailable()}
        {activeTab === 'completed' && renderCompleted()}
        {activeTab === 'results' && renderResults()}
      </div>
    </div>
  );
};

export default MockTests;