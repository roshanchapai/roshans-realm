import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import InterestsSection from '@/components/sections/InterestsSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
       <Navbar />
       <HeroSection />
       {/* Order: Timeline (About), Skills, Projects, Interests */}
       <TimelineSection />
       <SkillsSection />
       <ProjectsSection />
       <InterestsSection />
       <Footer />
    </main>
  );
}
