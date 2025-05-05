import type { LucideIcon } from 'lucide-react';
import { BookOpen, Clapperboard, Gamepad2 } from 'lucide-react'; // Example icons

export interface InterestCategory {
  name: string;
  icon: LucideIcon; // Using Lucide icons
  items: InterestItem[];
}

export interface InterestItem {
  title: string;
  description?: string; // Optional description or comment
  imageUrl?: string;
  imageHint?: string;
}

export const interests: InterestCategory[] = [
  {
    name: 'Webnovels & Comics',
    icon: BookOpen,
    items: [
      { title: 'Shadow Slave', imageUrl: '/images/ss.jpg', imageHint: 'fantasy shadow novel' },
      { title: 'Lord of the Mysteries', imageUrl: '/images/lotm.jpg', imageHint: 'steampunk mystery novel' },
      { title: 'Omniscient Reader\'s Viewpoint', imageUrl: '/images/orv.jpg', imageHint: 'apocalyptic webnovel' },
      { title: 'UnOrdinary', imageUrl: '/images/unordinary-23354.webp', imageHint: 'superhero webtoon' },
      { title: 'Tower of God', imageUrl: '/images/tog.jpg', imageHint: 'fantasy adventure manhwa' },
      { title: 'Eleceed', imageUrl: '/images/eleceed.jpg', imageHint: 'action fantasy webtoon cats' },
    ],
  },
  {
    name: 'Anime',
    icon: Clapperboard,
    items: [
      { title: 'Eminence in the Shadows', imageUrl: '/images/teis.jpg', imageHint: 'dark fantasy anime character' },
      { title: 'Code Geass', imageUrl: '/images/998871.jpeg', imageHint: 'mecha anime strategy' },
      { title: 'Jujutsu Kaisen', imageUrl: '/images/jjk.png', imageHint: 'supernatural action anime' },
    ],
  },
   {
    name: 'Other Interests',
    icon: Gamepad2, // Using Gamepad2 as a generic icon
    items: [
      { title: 'Programming' },
      { title: 'Entrepreneurship' },
      { title: 'Chess' },
      { title: 'Gaming' },
      { title: 'Music' },
      { title: 'Reading' },
    ],
  },
];
