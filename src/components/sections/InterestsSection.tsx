import React from 'react';
import { interests, InterestCategory } from '@/data/interests';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const InterestsSection: React.FC = () => {
  return (
    <section id="interests" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Passions & Interests</h2>
        <div className="space-y-12">
          {interests.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center justify-center gap-3 text-primary">
                <category.icon className="w-7 h-7 text-accent" />
                {category.name}
              </h3>
              <div className={`grid grid-cols-2 sm:grid-cols-3 ${category.name === 'Other Interests' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} xl:grid-cols-5 gap-4 md:gap-6`}>
                {category.items.map((item) => (
                  <Card key={item.title} className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${!item.imageUrl ? 'flex items-center justify-center p-4 bg-card' : 'bg-card'}`}>
                    {item.imageUrl ? (
                       <>
                        <div className="aspect-[2/3] relative">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-cover"
                               data-ai-hint={item.imageHint || item.title.toLowerCase()}
                            />
                          </div>
                         <CardContent className="p-3 text-center">
                            <p className="text-sm font-medium text-card-foreground truncate">{item.title}</p>
                          </CardContent>
                       </>
                    ) : (
                      <Badge variant="outline" className="text-center text-base p-3">{item.title}</Badge>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
