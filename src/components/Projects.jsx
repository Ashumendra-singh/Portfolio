import React from 'react';


const ProjectsSection = ({ isVisible }) => {
  const projects = [
    {
      title: 'JobPortal',
      description: 'Find your dream job',
      features: [
        'JWT-based authentication with role-based authorization',
        '10+ RESTful endpoints for job posting and applications',
        'Mobile-first responsive UI with React.js',
        'Cloud storage integration with Cloudinary'
      ],
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      icon: '💼'
    },
    {
      title: 'Rent Seeker Hub',
      description: 'Discover Your Ideal Rental Room with Ease',
      features: [
        'User-friendly mobile-responsive interface',
        'JWT authentication with password recovery',
        'Optimized file storage with Cloudinary',
        'Seamless navigation and performance'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      icon: '🏠'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-animate id="projects-title">
          Featured Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group ${isVisible[`project-${idx}`] ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
              data-animate
              id={`project-${idx}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2 hover:text-white transition-colors duration-300 group/item text-xl">
                    <span className="text-white mt-1 group-hover/item:scale-150 transition-transform">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-white/5 border border-gray-700 rounded-full text-xl text-gray-300 hover:bg-white/10 hover:scale-110 hover:text-white transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${(idx * 0.2) + (techIdx * 0.05)}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;