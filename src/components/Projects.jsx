import React from 'react';


const ProjectsSection = ({ isVisible }) => {
  const projects = [
    {
      title: 'Tasty',
      description: 'Restaurant food app',
      features: [
        'Browse a variety of dishes with detailed descriptions and images',
        'Add items to your cart and customize your order',
      ],  
      tech: ['HTML','CSS', 'SCSS', 'JavaScript'],
      icon: '🍽️',
      github: 'https://github.com/Ashumendra-singh/Restaurant',
      live: 'https://foodtastii.netlify.app/',
    },
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
      icon: '💼',
      github: 'https://github.com/Ashumendra-singh/jobportal',
      live: '#'
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
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript',],
      icon: '🏠',
      github: 'https://github.com/Ashumendra-singh/RentSeaker-Hub',
      live: '#'
    },
    {
      title: 'Planner',
      description: 'Organize your tasks efficiently',
      features: [
        'CRUD operations for tasks with validation using Zod',
        'Create, edit, and delete tasks ',
        'Password-protected user accounts with JWT authentication and Password recovery',
        'Responsive design for all devices'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Zod'],
      icon: '🗓️',
      github: 'https://github.com/Ashumendra-singh/Planner',
      live: '#'
    },
    {
      title: 'Youtube Thumbnail Generator',
      description: 'Generate eye-catching YouTube thumbnails effortlessly',
      features: [
        'Youtube thumbnail creation with customizable Sizes',
        'User-friendly interface for quick edits',
        'High-resolution downloads optimized for YouTube',
      ],
      tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
      icon: '🖼️',
      github: 'https://github.com/Ashumendra-singh/Youtube-Thumbnail-Generator',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white" data-animate id="projects-title">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-700 text-gray-200 hover:text-white hover:border-gray-500 hover:bg-white/10 transition-colors duration-300"
                >
                  View GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;