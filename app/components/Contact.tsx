import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-32 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
        
        <div className="space-y-6">
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, feedback or just having a chat.
            <br />
            Feel free to reach out to me!
          </p>
          
          <div className="pt-4">
            <a
              href="mailto:uijinlim0805@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">Get In Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
