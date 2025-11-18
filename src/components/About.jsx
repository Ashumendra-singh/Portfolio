import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';


const AboutSection = ({ isVisible }) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up text-white" data-animate id="about-title">
          About Me
        </h2>
        <div 
          className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5 ${isVisible['about-content'] ? 'animate-fade-in-up' : 'opacity-0'}`}
          data-animate
          id="about-content"
        >
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            I'm a B.Tech Computer Science student at Pranveer Singh Institute of Technology, Kanpur, graduating in 2025. 
            With a strong foundation in data structures, algorithms, and object-oriented programming, I'm passionate about 
            creating efficient and scalable web applications.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I've solved over 450+ problems on LeetCode, demonstrating my commitment to continuous learning and problem-solving. 
            My goal is to contribute to dynamic development teams and grow in fast-paced tech environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code, value: '450+', label: 'LeetCode Problems', delay: '0s' },
              { icon: Briefcase, value: '2+', label: 'Major Projects', delay: '0.1s' },
              { icon: GraduationCap, value: '2025', label: 'Graduation Year', delay: '0.2s' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="text-center p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 group border border-gray-800"
                style={{ animationDelay: stat.delay }}
              >
                <stat.icon size={32} className="mx-auto mb-2 text-white group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="font-semibold text-lg text-white">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;