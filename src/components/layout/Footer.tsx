import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-16 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/chapairoshan" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="w-6 h-6 hover:text-accent transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/roshanchapai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="w-6 h-6 hover:text-accent transition-colors" />
          </Link>
          <Link href="mailto:roshanchapai@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email">
            <Mail className="w-6 h-6 hover:text-accent transition-colors" />
          </Link>
        </div>
        <p className="text-sm text-primary-foreground/80">
          &copy; {currentYear} Roshan. All rights reserved.
        </p>
         <p className="text-xs text-primary-foreground/60 mt-2">
         “ Why am I so good at everything? ” -Kayden
         </p>
      </div>
    </footer>
  );
};

export default Footer;
