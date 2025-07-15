export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'tutor' | 'admin';
  avatar?: string;
  department?: string;
  year?: number;
  skills?: string[];
  experience?: string;
  specialization?: string[];
}

export interface MockInterview {
  id: string;
  studentId: string;
  tutorId: string;
  scheduledDate: Date;
  duration: number;
  type: 'technical' | 'hr' | 'behavioral' | 'group-discussion';
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback?: InterviewFeedback;
  recordingUrl?: string;
}

export interface InterviewFeedback {
  overallRating: number;
  communication: number;
  technicalSkills: number;
  problemSolving: number;
  confidence: number;
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
}

export interface MockTest {
  id: string;
  title: string;
  description: string;
  category: 'aptitude' | 'technical' | 'logical' | 'english';
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
  questions: Question[];
  createdBy: string;
  createdAt: Date;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface TestResult {
  id: string;
  testId: string;
  studentId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  completedAt: Date;
  answers: UserAnswer[];
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface PerformanceReport {
  studentId: string;
  overallScore: number;
  testScores: { category: string; score: number; trend: number }[];
  interviewRatings: { type: string; rating: number; trend: number }[];
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  skillProgress: { skill: string; progress: number }[];
  lastUpdated: Date;
}