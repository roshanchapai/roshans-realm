import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills, Skill } from '@/data/skills';
import { BrainCircuit, Code, Smartphone, Database, Server, Gamepad, Bot } from 'lucide-react'; // Import icons

const categoryIcons: Record<Skill['category'], React.ElementType> = {
  'Frontend': Code,
  'Backend': Server,
  'Mobile': Smartphone,
  'Database': Database,
  'DevOps/Cloud': Server, // Reusing Server icon for simplicity
  'Game Dev': Gamepad,
  'AI/ML': Bot,
};

const SkillsSection: React.FC = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Skillset</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skillList]) => {
            const Icon = categoryIcons[category as Skill['category']] || BrainCircuit; // Default icon
            return (
              <Card key={category} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                   <Icon className="w-8 h-8 text-accent" />
                  <CardTitle className="text-xl text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-card-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 [&>div]:bg-accent" />
                         {skill.name.includes('Learning') || skill.name.includes('Newbie') ? (
                           <p className="text-xs text-muted-foreground mt-1 italic">
                             {skill.name.includes('Learning') ? 'Actively Learning' : 'Enthusiast / Beginner'}
                           </p>
                         ) : null}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
