import Image from 'next/image';

const About = () => (
    <section id="about" className="py-20 px-4 relative" style={{ backgroundColor: '#fafafa' }}>
      {/* UW Huskies Logo */}
      <div className="absolute top-30 right-130 text-center">
        <Image 
          src="/uw-huskies-logo.png" 
          alt="UW Huskies" 
          width={100}
          height={100}
          className="mb-2"
          priority
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center -mt-4">
            <img 
              src="/Profile_img.JPG" 
              alt="Uijin Lim Profile" 
              className="w-80 h-100 object-cover rounded-lg"
            />
          </div>
          
          {/* About Text */}
          <div>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              I am an Undergraduate Student pursuing a Bachelor of Science in{' '}
              <a 
                href="https://ischool.uw.edu/" 
                className="text-[#4B2E83] font-bold hover:text-[#B7A57A] hover:underline transition-colors"
              >
                Informatics
              </a>{' '}
              at the{' '}
              <a 
                href="https://www.washington.edu/" 
                className="text-[#4B2E83] font-bold hover:text-[#B7A57A] hover:underline transition-colors"
              >
                University of Washington
              </a>, with a concentration in Software Development and Data Science. 
              I have a strong foundation in data structures and algorithms and a deep interest in full-stack development and <span className="whitespace-nowrap">machine learning</span>.
              <br></br>
              <br></br>
              Through internships, coursework, and hackathons, I've developed solutions ranging from Google Maps full-stack services to EV battery defect prediction. These diverse projects have enhanced my technical versatility and deepened my commitment to delivering impactful, real-world solutions.
              <br></br>
              <br></br>
              Outside of school and code, I enjoy hiking, playing soccer, cooking, and traveling. I'm always eager to grow through continuous learning, feedback, and collaboration. Feel free to reach out, I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default About;