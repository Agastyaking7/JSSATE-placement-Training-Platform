import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, Mail, Lock, User, GraduationCap, Shield, Star, ChevronRight, Eye, EyeOff } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'tutor' | 'admin'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRoleChange = (role: 'student' | 'tutor' | 'admin') => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedRole(role);
      setIsAnimating(false);
    }, 150);
  };

  const roleConfig = {
    student: {
      icon: GraduationCap,
      title: 'Student Portal',
      subtitle: 'Access your placement preparation journey',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      bgGradient: 'from-blue-50 to-purple-50',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      accentColor: 'border-blue-500',
      features: ['Mock Interviews', 'Practice Tests', 'Progress Tracking', 'Skill Development']
    },
    tutor: {
      icon: BookOpen,
      title: 'Tutor Dashboard',
      subtitle: 'Guide students towards placement success',
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      bgGradient: 'from-green-50 to-teal-50',
      color: 'text-green-600',
      bgColor: 'bg-green-500',
      accentColor: 'border-green-500',
      features: ['Conduct Interviews', 'Review Assessments', 'Student Analytics', 'Feedback System']
    },
    admin: {
      icon: Shield,
      title: 'Admin Control',
      subtitle: 'Manage the entire placement ecosystem',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgGradient: 'from-orange-50 to-red-50',
      color: 'text-orange-600',
      bgColor: 'bg-orange-500',
      accentColor: 'border-orange-500',
      features: ['System Management', 'User Analytics', 'Report Generation', 'Configuration']
    }
  };

  const currentConfig = roleConfig[selectedRole];
  const Icon = currentConfig.icon;

  const quickLoginOptions = [
    { role: 'student', email: 'student@jssate.ac.in', label: 'Demo Student', desc: 'Experience the student interface' },
    { role: 'tutor', email: 'tutor@jssate.ac.in', label: 'Demo Tutor', desc: 'Test tutor capabilities' },
    { role: 'admin', email: 'admin@jssate.ac.in', label: 'Demo Admin', desc: 'Admin panel access' },
  ];

  const backgroundSlides = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Features */}
          <div className="text-white space-y-8 lg:pr-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/image.png" 
                  alt="JSS Logo" 
                  className="h-12 w-12 rounded-full shadow-lg border-2 border-white/20"
                />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    JSSATE Placement Hub
                  </h1>
                  <p className="text-gray-300 text-sm">JSS Academy of Technical Education</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
                  Your Gateway to Career Success
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  Advanced placement preparation platform designed for excellence
                </p>
              </div>
            </div>

            {/* Role Features */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentConfig.gradient}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100">{currentConfig.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{currentConfig.subtitle}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentConfig.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2K+</div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              {/* Role Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Choose Your Role</h3>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(roleConfig).map(([role, config]) => {
                    const RoleIcon = config.icon;
                    return (
                      <button
                        key={role}
                        type="button"
                        onClick={() => handleRoleChange(role as any)}
                        className={`relative p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          selectedRole === role
                            ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <RoleIcon className="h-6 w-6 mx-auto mb-2" />
                        <div className="text-xs font-medium capitalize">{role}</div>
                        {selectedRole === role && (
                          <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className={`absolute left-3 top-3 h-5 w-5 transition-colors ${
                      email ? currentConfig.color : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                        email 
                          ? `${currentConfig.accentColor} bg-white focus:${currentConfig.accentColor.replace('border-', 'ring-')}` 
                          : 'border-gray-200 focus:border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Lock className={`absolute left-3 top-3 h-5 w-5 transition-colors ${
                      password ? currentConfig.color : 'text-gray-400'
                    }`} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-10 pr-12 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                        password 
                          ? `${currentConfig.accentColor} bg-white focus:${currentConfig.accentColor.replace('border-', 'ring-')}` 
                          : 'border-gray-200 focus:border-gray-300'
                      }`}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r ${currentConfig.gradient} hover:shadow-lg focus:${currentConfig.accentColor.replace('border-', 'ring-')} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Sign In</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  )}
                </button>
              </form>

              {/* Quick Login Options */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4 font-medium">Quick Demo Access</p>
                <div className="space-y-2">
                  {quickLoginOptions.map((option) => (
                    <button
                      key={option.role}
                      onClick={() => {
                        setEmail(option.email);
                        setPassword('demo123');
                        handleRoleChange(option.role as any);
                      }}
                      className={`w-full p-3 rounded-xl text-left transition-all duration-200 hover:transform hover:scale-102 ${
                        option.role === selectedRole
                          ? `bg-gradient-to-r ${currentConfig.gradient} text-white shadow-md`
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{option.label}</div>
                          <div className={`text-xs ${option.role === selectedRole ? 'text-white/80' : 'text-gray-500'}`}>
                            {option.desc}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;