import React from 'react';
import { timelineEvents, TimelineEvent } from '@/data/timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Briefcase, GraduationCap, Rocket } from 'lucide-react'; // Example icons

const getIconForTitle = (title: string): React.ElementType => {
  if (title.toLowerCase().includes('bsc') || title.toLowerCase().includes('college')) return GraduationCap;
  if (title.toLowerCase().includes('freelance') || title.toLowerCase().includes('projects')) return Briefcase;
   if (title.toLowerCase().includes('future') || title.toLowerCase().includes('aspiring')) return Rocket;
  return Calendar; // Default icon
}

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Journey</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -ml-0.5 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon || getIconForTitle(event.title);
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-start md:items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Icon Circle */}
                  <div className="absolute left-1/2 top-0 md:top-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 -translate-y-0 md:-translate-y-1/2 flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-accent-foreground" />
                  </div>

                   {/* Card Content */}
                   <div className={`w-full md:w-5/12 mt-8 md:mt-0 ${isLeft ? 'md:pr-8 text-left' : 'md:pl-8 text-left md:text-right'}`}>
                      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className={`pb-2 ${isLeft ? '' : 'md:items-end'}`}>
                           <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                           <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                           <p className="text-card-foreground">{event.description}</p>
                         </CardContent>
                       </Card>
                  </div>

                  {/* Mobile line connector */}
                   <div className="absolute left-[calc(50%-1px)] top-0 w-0.5 h-full bg-border md:hidden"></div>
                  {/* Adjust vertical position for mobile */}
                  <div className="absolute left-1/2 top-0 w-8 h-8 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 flex items-center justify-center z-10 md:hidden">
                    <Icon className="w-4 h-4 text-accent-foreground" />
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
