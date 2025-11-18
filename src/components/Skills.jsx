import { Terminal, Layout, Code, Database, Briefcase } from 'lucide-react';
import React from 'react';


const SkillsSection = ({ isVisible }) => {
  const skills = {
    languages: ['Java', 'JavaScript', 'Python', 'TypeScript'],
    frontend: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'SCSS'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs'],
    database: ['MongoDB', 'SQL', 'Redis', 'Firebase'],
    // tools: ['Git', 'VS Code', 'Postman', 'Cloudinary']
  };

  const getIcon = (category) => {
    const icons = {
      languages: Terminal,
      frontend: Layout,
      backend: Code,
      database: Database,
      tools: Briefcase
    };
    return icons[category] || Code;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-animate id="skills-title">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = getIcon(category);
            return (
              <div 
                key={category} 
                className={`bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/5 ${isVisible['skills-grid'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                data-animate
                id={idx === 0 ? 'skills-grid' : undefined}
              >
                <h3 className="text-xl font-semibold mb-4 capitalize text-white flex items-center gap-2">
                  <Icon size={20} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-black/30 rounded-full text-lg text-gray-300 border border-gray-800 hover:border-gray-600 hover:bg-white/5 hover:text-white transition-all duration-300 cursor-default hover:scale-110"
                      style={{ animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;