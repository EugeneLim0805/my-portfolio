import React from "react";
import { footerLinks } from "../data/footer";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-xs text-gray-500">
            © 2025 Uijin Lim. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {footerLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                >
                  <IconComponent size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
