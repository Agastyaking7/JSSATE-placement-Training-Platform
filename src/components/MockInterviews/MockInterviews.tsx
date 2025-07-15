import React, { useState } from 'react';
import { 
  Calendar, 
  Video, 
  Clock, 
  User, 
  Star,
  Plus,
  Filter,
  Search
} from 'lucide-react';

const MockInterviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'schedule'>('upcoming');
  
  const upcomingInterviews = [
    {
      id: '1',
      tutor: 'Dr. Rajesh Kumar',
      type: 'Technical Interview',
      date: 'Today',
      time: '2:00 PM',
      duration: '45 mins',
      avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Data Structures & Algorithms',
      experience: '8+ years',
      rating: 4.8
    },
    {
      id: '2',
      tutor: 'Prof. Meera Patel',
      type: 'HR Interview',
      date: 'Tomorrow',
      time: '10:00 AM',
      duration: '30 mins',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Behavioral & Communication',
      experience: '5+ years',
      rating: 4.9
    },
    {
      id: '3',
      tutor: 'Mr. Arjun Singh',
      type: 'System Design',
      date: 'Dec 28',
      time: '4:00 PM',
      duration: '60 mins',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'System Design & Architecture',
      experience: '10+ years',
      rating: 4.7
    },
  ];

  const completedInterviews = [
    {
      id: '1',
      tutor: 'Dr. Priya Sharma',
      type: 'Technical Interview',
      date: 'Dec 20, 2024',
      duration: '45 mins',
      score: 8.5,
      feedback: 'Good problem-solving approach. Work on explaining your thought process clearly.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      tutor: 'Prof. Amit Kumar',
      type: 'HR Interview',
      date: 'Dec 18, 2024',
      duration: '30 mins',
      score: 9.0,
      feedback: 'Excellent communication skills. Very confident and well-prepared.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const availableTutors = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      specialization: 'Data Structures & Algorithms',
      experience: '8+ years',
      rating: 4.8,
      reviews: 124,
      avatar: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'Available today',
      price: '₹500/hour'
    },
    {
      id: '2',
      name: 'Prof. Meera Patel',
      specialization: 'Behavioral & Communication',
      experience: '5+ years',
      rating: 4.9,
      reviews: 98,
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'Available tomorrow',
      price: '₹400/hour'
    },
    {
      id: '3',
      name: 'Mr. Arjun Singh',
      specialization: 'System Design & Architecture',
      experience: '10+ years',
      rating: 4.7,
      reviews: 156,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      availability: 'Available this week',
      price: '₹600/hour'
    },
  ];

  const renderUpcoming = () => (
    <div className="space-y-4">
      {upcomingInterviews.map((interview) => (
        <div key={interview.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={interview.avatar}
                alt={interview.tutor}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{interview.tutor}</h3>
                <p className="text-sm text-gray-600">{interview.specialization}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{interview.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{interview.experience}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Video className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-900">{interview.type}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{interview.date}, {interview.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                <Clock className="h-4 w-4" />
                <span>{interview.duration}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join Interview
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Reschedule
              </button>
            </div>
            <span className="text-sm text-green-600 font-medium">Confirmed</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompleted = () => (
    <div className="space-y-4">
      {completedInterviews.map((interview) => (
        <div key={interview.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={interview.avatar}
                alt={interview.tutor}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">{interview.tutor}</h3>
                <p className="text-sm text-gray-600">{interview.type}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{interview.score}/10</div>
              <p className="text-sm text-gray-600">{interview.date}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Feedback</h4>
            <p className="text-sm text-gray-700">{interview.feedback}</p>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View Detailed Report
            </button>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Book Again
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSchedule = () => (
    <div>
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableTutors.map((tutor) => (
          <div key={tutor.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={tutor.avatar}
                alt={tutor.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">{tutor.name}</h3>
                <p className="text-sm text-gray-600">{tutor.specialization}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{tutor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">({tutor.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Experience</span>
                <span className="text-sm font-medium">{tutor.experience}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Availability</span>
                <span className="text-sm font-medium text-green-600">{tutor.availability}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Price</span>
                <span className="text-sm font-medium">{tutor.price}</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Interview
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingInterviews.length },
    { id: 'completed', label: 'Completed', count: completedInterviews.length },
    { id: 'schedule', label: 'Schedule New', count: null },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mock Interviews</h1>
          <p className="text-gray-600 mt-2">Practice with industry experts</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  {tab.count !== null && (
                    <span className="ml-2 bg-gray-100 text-gray-600 py-1 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'upcoming' && renderUpcoming()}
            {activeTab === 'completed' && renderCompleted()}
            {activeTab === 'schedule' && renderSchedule()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviews;