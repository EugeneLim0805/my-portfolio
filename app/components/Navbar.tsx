const Navbar = () => (
  <nav className="w-full py-3 bg-white/95 backdrop-blur-sm flex justify-center fixed top-0 left-0 z-50">
    <div className="max-w-6xl w-full px-8 flex justify-between items-center">
      <a href="#home" className="font-semibold text-base text-gray-900 hover:text-gray-700 transition-colors duration-200">
        Uijin Lim <span className="font-normal text-gray-500">/ Portfolio</span>
      </a>
      <ul className="flex space-x-8">
        {[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-200
                hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;