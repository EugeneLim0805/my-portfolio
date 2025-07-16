const About = () => (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img 
              src="/Profile_img.JPG" 
              alt="Uijin Lim Profile" 
              className="w-80 h-100 object-cover rounded-lg"
            />
          </div>
          
          {/* About Text */}
          <div>
            <p className="text-base text-gray-700 leading-relaxed">
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
              </a>, with a strong foundation in data structures and algorithms 
              and a deep interest in full-stack development and machine learning.
              <br></br>
              <br></br>
              I've worked on diverse projects through internships, school, and participating in hackathons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default About;