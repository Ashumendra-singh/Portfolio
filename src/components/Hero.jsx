import { Mail, Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import React from 'react';


const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block animate-fade-in-up">
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm hover:bg-white/10 transition-all duration-300 cursor-default">
            Full Stack Developer
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-white" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block hover:scale-105 transition-transform duration-300">
            Hi, I'm&nbsp;
          </span>
          <span className="text-gray-200 hover:text-white transition-colors">
            Ashumendra
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-sm sm:max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Building responsive web applications with the&nbsp;
          <span className="text-white font-semibold">MERN stack</span> and solving complex problems
        </p>
        <div className="flex gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:ashu0609f@gmail.com" 
            className="group flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 font-medium"
          >
            <Mail size={20} />
            Contact Me
            {/* <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> */}
          </a>
          <a 
            href="https://github.com/Ashumendra-singh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://drive.google.com/file/d/13FN5E6-qYimMMDwYVEa6r08d-1dDfUjp/view?usp=sharing" 
            className="group flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 font-medium"
          >
            <Download size={20} />
            Resume
            {/* <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> */}
          </a>
        </div>
        <div className="flex gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a href="https://linkedin.com/in/ashumendra-singh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Ashumendra-singh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1">
            <Github size={24} />
          </a>
          <a href="mailto:ashu0609f@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 text-white/10 text-sm font-mono animate-float hidden lg:block">
        const developer = "Ashumendra";
      </div>
      <div className="absolute bottom-20 right-10 text-white/10 text-sm font-mono animate-float-delayed hidden lg:block">
        {"{ skills: 'MERN Stack' }"}
      </div>
    </section>
  );
};


export default HeroSection;
