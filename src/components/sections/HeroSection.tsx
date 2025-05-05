import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-primary text-primary-foreground py-20 md:py-32 lg:py-40 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/4 -translate-y-1/4 opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full translate-x-1/4 translate-y-1/4 opacity-50 animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 z-10">
         <Image
          data-ai-hint="professional developer portrait"
          src="/images/roshan.jpg"
          alt="Roshan's Portrait"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-accent shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md text-green-300">Roshan</h1>
        <p className="text-xl md:text-2xl text-accent mb-8">
          Aspiring Software Engineer | Full-Stack Developer | AI Enthusiast
        </p>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-primary-foreground/90">
          Welcome to my digital realm! I'm a passionate computer science student with a love for building innovative solutions, exploring the worlds of AI, and enjoying captivating stories in anime and webnovels.
        </p>
        <Button size="lg" asChild className="group bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
          <a href="#projects">
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
