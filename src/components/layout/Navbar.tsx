import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react'; // Icon for the brand

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', href: '#timeline' }, // Linking timeline as 'About'
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interests', href: '#interests' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-accent transition-colors">
          <Code className="w-6 h-6 text-accent" />
          Roshan's Realm
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild className="text-foreground hover:text-accent hover:bg-accent/10 transition-colors">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
           <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
             <a href="mailto:your.email@example.com">Contact Me</a>
           </Button>
        </div>
         {/* Mobile Menu Button (Placeholder) */}
         <div className="md:hidden">
           {/* TODO: Implement mobile menu (e.g., using Sheet component) */}
           <Button variant="ghost" size="icon" className="text-primary">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
             </svg>
           </Button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
