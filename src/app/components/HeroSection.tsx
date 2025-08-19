import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Brain } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "50K+", label: "Siswa Terdaftar" },
    { number: "1000+", label: "Guru Partner" },
    { number: "95%", label: "Tingkat Kepuasan" },
    { number: "24/7", label: "Dukungan AI" }
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              🚀 Revolusi Pendidikan Inklusif dengan AI
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Pendidikan untuk{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Semua
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Platform pembelajaran berbasis AI yang memberikan akses pendidikan berkualitas untuk semua siswa,
              termasuk mereka dengan kebutuhan khusus dan keterbatasan fisik.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group">
                Mulai Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Lihat Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full mb-6"></div>
                <div className="space-y-4">
                  <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3 mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Pembelajaran Aktif</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">AI Assistant</span>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 gap-4 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="bg-indigo-500 rounded animate-ping" style={{ animationDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CSS untuk animasi custom (tambahkan ke global CSS atau tailwind config)
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }

  .animate-fade-in-right {
    animation: fade-in-right 0.8s ease-out forwards;
    animation-delay: 0.2s;
  }
`;