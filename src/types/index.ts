
export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  profileImageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resume {
  _id: string;  
  userId: string;
  title: string;
  thumbnailLink?: string;
  template: {
    theme?: string;
    colorPalettes?: string[];
  };
  profileInfo: ProfileInfo;
  contactInfo: ContactInfo;
  workExperience: Array<WorkExperience>;
  education: Array<Education>;
  skills: Array<Skill>;
  projects: Array<Project>;
  certifications: Array<Certification>;
  languages: Array<Language>;
  interests: string[];
  createdAt: Date;
  updatedAt: Date;
} 

export interface ProfileInfo {
  profilePreviewUrl?: string;
  fullName?: string;
  designation?: string;
  summary?: string;
}

export interface Skill {
  name?: string;
  progress?: number;
}

export interface Language {
  name?: string;
  progress?: number;
}

export interface Certification {
  title?: string;
  issuer?: string;
  year?: string;
}

export interface Project {
  title?: string;
  description?: string;
  github?: string;
  liveDemo?: string;
}

export interface Education {
  degree?: string;
  institution?: string;
  startDate?: string;
  endDate?: string;
}

export interface WorkExperience {
  company?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

