import React from 'react';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Program', href: '#programs' },
    { name: 'Fitur', href: '#features' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Harga', href: '#pricing' }
  ];

  const programs = [
    { name: 'Visual Learning Assistant', href: '#' },
    { name: 'Hearing Support System', href: '#' },
    { name: 'Cognitive Learning Aid', href: '#' },
    { name: 'Communication Helper', href: '#' }
  ];

  const support = [
    { name: 'Pusat Bantuan', href: '#' },
    { name: 'Dokumentasi', href: '#' },
    { name: 'Tutorial', href: '#' },
    { name: 'Kontak Support', href: '#contact' },
    { name: 'FAQ', href: '#' }
  ];

  const company = [
    { name: 'Tentang Kami', href: '#' },
    { name: 'Karir', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Partnership', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Tetap Terhubung dengan Kami
              </h3>
              <p className="text-gray-400">
                Dapatkan update terbaru tentang fitur baru, tips pembelajaran, dan berita pendidikan inklusif.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EduTech AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform pembelajaran berbasis AI yang memberikan akses pendidikan berkualitas untuk semua siswa,
              termasuk mereka dengan kebutuhan khusus dan keterbatasan fisik.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>hello@edutechai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Program</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 EduTech AI. Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>untuk pendidikan inklusif.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}