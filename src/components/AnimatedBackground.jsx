import React from 'react';


const AnimatedBackground = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};
export default AnimatedBackground;