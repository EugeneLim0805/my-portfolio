import Image from 'next/image';

const About = () => (
    <section id="about" className="py-20 px-4 relative" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-4 tracking-tight text-gray-800">About Me</h2>
        
        {/* UW Huskies Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/uw-huskies-logo.png" 
            alt="UW Huskies" 
            width={90}
            height={60}
            className="mb-2"
            priority
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center -mt-4">
            <img 
              src="/Profile_img.JPG" 
              alt="Uijin Lim Profile" 
              className="w-96 h-120 object-cover rounded-lg"
            />
          </div>
          
          {/* About Text */}
          <div className="-mt-13">
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
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
              </a>, with a concentration in Software Development and Data Science. I have a strong foundation in data structures and algorithms and a deep interest in full-stack development and machine learning.
              <br></br>
              <br></br>
              Through internships, coursework, and hackathons, I&apos;ve developed solutions ranging from Google Maps-based full-stack services to EV battery defect prediction models. These diverse projects have enhanced my technical versatility and deepened my commitment to delivering impactful, real-world solutions.
              <br></br>
              <br></br>
              Outside of school and code, I enjoy hiking, playing soccer, cooking, and traveling. I&apos;m always eager to grow through continuous learning, feedback, and collaboration. Feel free to reach out, I&apos;d love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default About;