import React, { useState } from 'react';
import { Menu, X, Search, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Clients', href: '/clients' },
    { name: 'Careers', href: '/careers' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="THE VITTAVARDHAN Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
              <span className="text-sm font-medium">Search</span>
            </button>
            <a
              href="/login"
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-medium">Login</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-primary/95 to-secondary/95 backdrop-blur-lg shadow-2xl z-50">
            <div className="container mx-auto px-4 py-6">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
                  <Search className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search for services, pages, or content..."
                  className="w-full pl-14 pr-14 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:ring-4 focus:ring-white/30 focus:border-white/50 outline-none text-lg transition-all duration-300"
                  autoFocus
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <button className="text-white/70 hover:text-white transition-colors duration-200">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-white/80 text-sm">
                  Press <kbd className="px-2 py-1 bg-white/20 rounded text-xs">ESC</kbd> to close
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t">
                <button
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary px-3 py-2 rounded-md font-medium w-full"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
                <a
                  href="/login"
                  className="flex items-center space-x-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 mt-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
