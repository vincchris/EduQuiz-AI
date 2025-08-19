import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduTech AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Program
            </a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Fitur
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Testimoni
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Harga
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Kontak
            </a>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
              Masuk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a
              href="#programs"
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Program
            </a>
            <a
              href="#features"
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Fitur
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </a>
            <a
              href="#pricing"
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Harga
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </a>
            <div className="px-4 pt-2 pb-4">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                Masuk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}