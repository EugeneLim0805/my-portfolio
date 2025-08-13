'use client';

import { useEffect, useState } from 'react';
import { socialLinks } from '../data/social';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">

      <div className="text-center px-4 relative z-10">
        <div className="space-y-6">
          {/* Floating animation for greeting */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
              <span className="block mb-2">Hi, I&apos;m</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 font-semibold">
                Uijin Lim
              </span>
              <span className="block mt-4 text-2xl md:text-3xl text-gray-600 font-light">
                Software Engineer
              </span>
            </h1>
          </div>
          
          {/* Slide in animation for description */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate about building technology that solves real-world problems
            </p>
          </div>
          


          {/* Social media links */}
          <div className="flex justify-center space-x-4 mt-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
                >
                  <IconComponent size={20} className="text-gray-600" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;