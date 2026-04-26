"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group">
          <h1 className="text-2xl font-serif font-bold tracking-widest text-foreground group-hover:text-primary transition-colors">
            <span className="font-light text-pink-500">Makeupt</span> Darbhanga
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="/book" 
            className="px-8 py-3 bg-[#c21385] text-white rounded-full text-xs font-bold uppercase tracking-widest  hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#c21385]/20"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-background flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-8 mb-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-4xl font-serif font-semibold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            className="px-10 py-4  text-white rounded-full text-sm font-bold uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
