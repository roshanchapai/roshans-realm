export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'DevOps/Cloud' | 'Game Dev' | 'AI/ML';
}

export const skills: Skill[] = [
  { name: 'HTML', level: 95, category: 'Frontend' },
  { name: 'CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 70, category: 'Frontend' },
  { name: 'PHP', level: 80, category: 'Backend' },
  { name: 'Java', level: 60, category: 'Backend' }, // Basic Java
  { name: 'Python', level: 75, category: 'Backend' }, // Added category
  { name: 'C', level: 65, category: 'Backend' }, // Added category
  { name: 'C#', level: 70, category: 'Backend' }, // Added category
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Flutter', level: 80, category: 'Mobile' },
  { name: 'Firebase', level: 75, category: 'DevOps/Cloud' }, // Changed category
  { name: 'MongoDB', level: 50, category: 'Database' }, // Learning
  { name: 'Unity', level: 40, category: 'Game Dev' }, // Newbie
  { name: 'ML/Deep Learning', level: 30, category: 'AI/ML' }, // Newbie Enthusiast
];
