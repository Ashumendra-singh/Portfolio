import { Mail } from 'lucide-react';
import React from 'react';


const ContactSection = ({ isVisible }) => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white" data-animate id="contact-title">
          Get In Touch
        </h2>
        <p 
          className={`text-gray-400 text-lg mb-8 max-w-2xl mx-auto ${isVisible['contact-text'] ? 'animate-fade-in-up' : 'opacity-0'}`}
          data-animate
          id="contact-text"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible['contact-buttons'] ? 'animate-fade-in-up' : 'opacity-0'}`}
          data-animate
          id="contact-buttons"
        >
          <a 
            href="mailto:ashu0609f@gmail.com" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg transition-all duration-300 text-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            <Mail size={24} className="group-hover:rotate-12 transition-transform" />
            ashu0609f@gmail.com
          </a>
          <a 
            href="tel:9555515412" 
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 text-lg font-semibold hover:scale-105 hover:shadow-lg"
          >
            📞 9555515412
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;