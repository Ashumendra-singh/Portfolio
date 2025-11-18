import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code, Briefcase, GraduationCap, ArrowRight, Terminal, Database, Layout } from 'lucide-react';

// Navigation Component
const Navigation = ({ activeSection, scrolled, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const baseNavClass = 'fixed h-20 top-0 w-full z-50 transition-all duration-500';
  const navStateClass = (scrolled || isMenuOpen)
    ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-white/5'
    : 'bg-transparent';

  return (
    <nav className={`${baseNavClass} ${navStateClass}`}>
      <div className="max-w-4/5 mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            &lt;Ashumendra /&gt;
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all text-xl duration-300 hover:text-white relative group ${activeSection === item ? 'text-white' : 'text-gray-400'}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transition-transform duration-300 ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden transition-transform hover:scale-110 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in backdrop-blur-xl bg-black/70 rounded-lg p-4 border-2 border-gray-800">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item, idx) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="capitalize text-2xl text-left hover:text-white transition-all hover:translate-x-2 text-gray-400"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;