import { Timestamp } from "firebase/firestore";

export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  skills: string[];
  timeBalance: number;
  rating: number;
  avatarUrl?: string;
};

export type PublicProfile = {
  id: string;
  name: string;
  bio: string;
  skills: string[];
  rating: number;
  avatarUrl?: string;
  timeBalance?: number;
};

export type Task = {
  id: string;
  creatorId: string;
  creatorName: string;
  creatorAvatarUrl?: string;
  helperId?: string;
  category: string;
  description: string;
  durationHours: number;
  status: "open" | "pending" | "completed";
  location: string;
  createdAt: Timestamp;
};

export type Transaction = {
  id: string;
  helperId: string;
  helperName: string;
  seekerId: string;
  seekerName:string;
  taskDescription: string;
  hoursTransferred: number;
  timestamp: Timestamp;
  participantIds: string[];
};

export type Note = {
    id: string;
    title: string;
    uploaderId: string;
    uploaderName: string;
    subject: string;
    content: string;
    tags: string[];
    upvotes: number;
    createdAt: Timestamp;
};

export type StudyGroup = {
    id: string;
    subject: string;
    hostId: string;
    hostName: string;
    scheduledTime: Timestamp;
    participantIds: string[];
    status: 'upcoming' | 'live' | 'full' | 'completed';
};
    
