
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About', href: '#about', path: '/' },
    { name: 'Projects', href: '#projects', path: '/' },
    { name: 'Contact', href: '#contact', path: '/' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.path === '/' ? (
              <a 
                key={link.name} 
                href={link.href}
                className="text-blue-600 hover:text-blue-800 transition-colors font-bold"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.path}
                className="text-blue-600 hover:text-blue-800 transition-colors font-bold"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-green/90 backdrop-blur-sm p-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.path === '/' ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-bold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-bold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
