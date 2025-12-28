/**
 * Navbar Component
 * Sticky navigation with smooth scroll
 */

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#', icon: '🏠' },
    { label: 'About', href: '#about', icon: 'ℹ️' },
    { label: 'How It Works', href: '#how-it-works', icon: '⚙️' },
    { label: 'Classes', href: '#classes', icon: '📚' },
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const scrollToUpload = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById('upload-section');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Title */}
            <button
              onClick={() => scrollToSection('#')}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                🔬
              </span>
              <span className="font-bold text-lg md:text-xl text-slate-800 hidden sm:block">
                Skin Cancer AI
              </span>
              <span className="font-bold text-lg text-slate-800 sm:hidden">
                SCA
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 lg:px-4 py-2 text-slate-600 hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5"
                >
                  <span className="mr-1">{link.icon}</span>
                  {link.label}
                </button>
              ))}
              
              {/* CTA Button */}
              <button
                onClick={scrollToUpload}
                className="ml-2 px-4 lg:px-6 py-2 bg-gradient-to-r from-primary to-accent-teal text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                📤 Upload Image
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-16 right-0 w-64 bg-white shadow-xl rounded-bl-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary hover:bg-primary/5 font-medium transition-all rounded-lg text-left"
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={scrollToUpload}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-accent-teal text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              📤 Upload Image
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;

