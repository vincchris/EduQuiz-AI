import React, { useState, useEffect } from 'react';
import { Eye, Ear, Brain, MessageSquare, Check, Users, Award, TrendingUp, Star } from 'lucide-react';

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('programs-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: Eye,
      title: "Visual Learning Assistant",
      subtitle: "Untuk Siswa dengan Keterbatasan Penglihatan",
      description: "AI yang membantu siswa dengan gangguan penglihatan melalui deskripsi audio dan navigasi suara yang cerdas",
      features: ["Text-to-Speech Advanced", "Audio Navigation 3D", "Voice Commands", "Braille Integration"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-700",
      users: "15K+",
      satisfaction: "98%",
      growth: "+25%",
      testimonial: "Sangat membantu proses belajar saya"
    },
    {
      icon: Ear,
      title: "Hearing Support System",
      subtitle: "Untuk Siswa dengan Keterbatasan Pendengaran",
      description: "Platform pembelajaran visual dengan subtitle real-time dan sistem bahasa isyarat yang terintegrasi AI",
      features: ["Real-time Subtitles", "Sign Language AI", "Visual Learning Cues", "Haptic Feedback"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-700",
      users: "12K+",
      satisfaction: "96%",
      growth: "+30%",
      testimonial: "Interface visual yang sangat membantu"
    },
    {
      icon: Brain,
      title: "Cognitive Learning Aid",
      subtitle: "Untuk Siswa dengan Perbedaan Kognitif",
      description: "AI adaptif yang disesuaikan khusus untuk siswa dengan kesulitan belajar dan perbedaan kognitif",
      features: ["Adaptive Learning Path", "Personalized Pace", "Memory Enhancement", "Progress Analytics"],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      textColor: "text-purple-700",
      users: "8K+",
      satisfaction: "94%",
      growth: "+40%",
      testimonial: "Belajar jadi lebih mudah dipahami"
    },
    {
      icon: MessageSquare,
      title: "Communication Helper",
      subtitle: "Untuk Siswa dengan Gangguan Komunikasi",
      description: "Asisten komunikasi pintar untuk siswa dengan gangguan bicara dan bahasa menggunakan NLP",
      features: ["AI Speech Therapy", "Communication Board", "Voice Pattern Training", "Multi-Language Support"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      textColor: "text-orange-700",
      users: "5K+",
      satisfaction: "97%",
      growth: "+35%",
      testimonial: "Membantu saya berkomunikasi lebih baik"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div id="programs-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            🎯 Program Unggulan Kami
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Program Pembelajaran
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Inklusif</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Kami mengembangkan teknologi AI khusus untuk mendukung berbagai kebutuhan pembelajaran,
            memastikan setiap siswa mendapat kesempatan yang sama untuk berkembang dan berprestasi.
          </p>

          {/* Statistics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Users, value: "65K+", label: "Total Siswa" },
              { icon: Award, value: "97%", label: "Kepuasan" },
              { icon: TrendingUp, value: "+38%", label: "Pertumbuhan" },
              { icon: Star, value: "4.9/5", label: "Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <stat.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${activeProgram === index ? 'ring-4 ring-indigo-200' : ''} ${
                program.isMainProgram ? 'lg:col-span-2 ring-2 ring-indigo-100' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProgram(index)}
              onMouseLeave={() => setActiveProgram(null)}
            >
              {/* Enhanced Card Header */}
              <div className={`bg-gradient-to-r ${program.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <program.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/90 text-sm font-medium">Pengguna Aktif</div>
                      <div className="text-2xl font-bold text-white">{program.users}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{program.subtitle}</p>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-sm">AI Powered</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-white/80" />
                      <span className="text-white/80 text-sm">{program.growth}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Card Content */}
              <div className={`p-8 ${program.isMainProgram ? 'lg:flex lg:items-center lg:space-x-8' : ''}`}>
                <div className={`${program.isMainProgram ? 'lg:flex-1' : ''}`}>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {program.description}
                  </p>

                  {/* Enhanced Features Grid */}
                  <div className={`grid gap-3 mb-8 ${program.isMainProgram ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${program.bgColor} transition-all duration-300 hover:scale-105 group/feature`}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className={`font-medium ${program.textColor} group-hover/feature:font-semibold transition-all`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {program.isMainProgram && (
                  <div className="lg:w-80 space-y-6">
                    {/* Auto-grading showcase */}
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        Fitur Auto-Assessment
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                          <span>Koreksi otomatis dalam hitungan detik</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                          <span>Feedback real-time untuk setiap jawaban</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                          <span>Bank soal otomatis dari AI</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                <div className={`bg-gradient-to-r ${program.bgColor} p-4 rounded-xl mb-6`}>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className={`text-sm italic ${program.textColor}`}>"{program.testimonial}"</p>
                </div>

                {/* Enhanced Action Section */}
                <div className="space-y-4">
                  <button className={`w-full bg-gradient-to-r ${program.color} text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group/btn ${
                    program.isMainProgram ? 'text-lg py-5' : ''
                  }`}>
                    <span>{program.isMainProgram ? 'Coba Gratis Sekarang' : 'Pelajari Lebih Lanjut'}</span>
                    <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Enhanced Progress Indicator */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span className="font-medium">Tingkat Kepuasan Pengguna</span>
                      <span className="font-bold text-lg">{program.satisfaction}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${program.color} h-3 rounded-full transition-all duration-1500 relative overflow-hidden`}
                        style={{
                          width: program.satisfaction,
                          transitionDelay: `${(index + 1) * 400}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Footer */}
        <div className={`mt-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Siap Bergabung dengan Revolusi Pendidikan Inklusif?</h3>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Lebih dari 65.000 siswa telah merasakan manfaat teknologi pembelajaran AI kami, termasuk 25.000+ siswa reguler yang menikmati sistem auto-assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Mulai Trial Gratis
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}