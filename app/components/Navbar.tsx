const Navbar = () => (
    <nav className="w-full py-4 px-8 bg-white shadow flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="font-bold text-xl">MyPortfolio</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
  
  export default Navbar;