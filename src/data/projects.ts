export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string; // Optional link to live demo or repo
  category: 'Web App' | 'Mobile App' | 'AI/ML' | 'Game Dev';
  imageHint: string;
}

export const projects: Project[] = [
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Displays current weather using OpenWeather API and stores weather history in MySQL.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'OpenWeather API'],
    imageUrl: '/images/wa.png',
    imageHint: 'weather api application',
    link: 'http://roshanweather.great-site.net',
    category: 'Web App',
  },
  {
    id: 'fictive-ae',
    title: 'fictive.ae',
    description: 'Portfolio website for a Dubai-based client.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'], // Assuming tech stack
    imageUrl: '/images/fictive.png',
    imageHint: 'portfolio website design',
    link: 'https://fictive.ae',
    category: 'Web App',
  },
  {
    id: 'vroom',
    title: 'Vroom',
    description: 'Online car rental platform.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], // Assuming tech stack
    imageUrl: '/images/vroom.png',
    imageHint: 'car rental interface',
    category: 'Web App',
  },
  {
    id: 'hckquiz',
    title: 'HckQuiz',
    description: 'Quiz application tailored for Herald College modules.',
    techStack: ['HTML', 'CSS', 'NextJS', 'Firebase', 'NodeJS'], // Assuming tech stack
    imageUrl: '/images/hckquiz.png',
    link: 'https://roshanchapai.site',
    imageHint: 'quiz app interface',
    category: 'Web App',
  },
  {
    id: 'nift',
    title: 'Nift',
    description: 'Ride-sharing application for Kathmandu.',
    techStack: ['Flutter', 'Firebase'],
    imageUrl: '/images/nift.png',
    imageHint: 'ride sharing mobile app',
    category: 'Mobile App',
  },
  {
    id: 'anime-recognition',
    title: 'Anime Character Recognition',
    description: 'AI model trained on anime datasets to recognize characters.',
    techStack: ['Python', 'Machine Learning', 'Deep Learning'], // Assuming tech stack
    imageUrl: '/images/acp.jpg',
    imageHint: 'anime character art',
    category: 'AI/ML',
  },
  {
    id: 'nepse-prediction',
    title: 'NEPSE Price Prediction',
    description: 'Comparing ML models (LSTM, RF, GBM) for predicting Nepal Stock Exchange prices.',
    techStack: ['Python', 'Machine Learning', 'LSTM', 'Random Forest', 'GBM'],
    imageUrl: '/images/npp.png',
    imageHint: 'stock market chart',
    category: 'AI/ML',
  },
  {
    id: 'unity-agents',
    title: 'Unity Agents Pathfinding',
    description: 'Implementing A* and Ant Colony Optimization (ACO) pathfinding algorithms in Unity.',
    techStack: ['Unity', 'C#', 'A*', 'ACO'],
    imageUrl: '/images/aai.png',
    imageHint: 'game development pathfinding',
    category: 'Game Dev',
  },
];
