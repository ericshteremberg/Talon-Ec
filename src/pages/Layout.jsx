

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
// Removed Building and Home imports as they are no longer used for icons in navLinks

const navLinks = [
  { name: 'Home', href: createPageUrl('Home') }, // Removed icon
  { name: 'Properties', href: createPageUrl('Properties') }, // Removed icon
];

function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-20">
          <div className="absolute left-0">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <span className="font-mono text-gray-800 tracking-wider uppercase text-sm">TALON HOLDINGS</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Talon Holdings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

