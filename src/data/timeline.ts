export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: React.ElementType; // Optional icon component
}

// Example timeline data - Replace with actual data
export const timelineEvents: TimelineEvent[] = [
  {
    date: "2022 - Present",
    title: "BSc Computer Science",
    description: "Pursuing Bachelor's degree at Herald College Kathmandu, focusing on software development, AI, and web technologies.",
  },
  {
    date: "2024",
    title: "Freelance Web Developer",
    description: "Developed portfolio website fictive.ae for a Dubai-based client.",
  },
   {
    date: "Ongoing",
    title: "Personal Projects",
    description: "Actively working on various projects like Nift, Anime Recognition, and NEPSE Price Prediction to enhance skills.",
  },
  {
    date: "Future",
    title: "Aspiring Software Engineer",
    description: "Seeking opportunities to apply skills in a challenging and rewarding professional environment.",
  },
];
