import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = ({ isVisible }) => {
  const experience = {
    company: 'Judix Technology',
    role: 'Internship',
    highlights: [
      'Built mobile-responsive dynamic components for smooth UX',
      'Enabled collaborative workflows using Git for version control',
      'Implemented efficient code reviews and team coordination'
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Shadcn/UI', 'Git']
  };

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-animate id="experience-title">
          Experience
        </h2>
        <div 
          className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group ${isVisible['experience-content'] ? 'animate-fade-in-up' : 'opacity-0'}`}
          data-animate
          id="experience-content"
        >
          <div className="flex items-start gap-4 mb-6">
            <Briefcase size={32} className="text-white flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">{experience.company}</h3>
              <p className="text-gray-400">{experience.role}</p>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="text-gray-300 flex items-start gap-2 hover:text-white transition-colors duration-300 group/item text-xl">
                <span className="text-white mt-1 group-hover/item:scale-150 transition-transform">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech, idx) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-white/5 border border-gray-700 rounded-full text-xl text-gray-300 hover:bg-white/10 hover:scale-110 hover:text-white transition-all duration-300 cursor-default"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default ExperienceSection;