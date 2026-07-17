import React, { useState } from 'react';
import { Menu, X, CheckCircle2, ArrowUpRight, MonitorPlay, Film, Users, Smartphone, Clapperboard, Mail } from 'lucide-react';

// Custom SVG Instagram Icon
const Instagram = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const portfolioData = [
    {
      id: 1,
      category: "Promotional", // Change this to whatever you want
      title: "Nykaa Product promotion ",  // Change this to whatever you want
      youtubeId: "8g8xB0lKkUg",
    },{
      id: 2,
      category: "Fitness Edits",
      title: "Slow Cinematic Pilates Edit",
      youtubeId: "6ePw8PGEwFo", 
    },
    {
      id: 3,
      category: "Talking Head fitness guildance",
      title: "fitness Tips Reel",
      youtubeId: "ivxc828k0qI",
    },{
      id: 4,
      category: "Cinematic Montages",
      title: "Gym Cinematic Edit",
      youtubeId: "g7YP-9iAurA",
    },
    {
      id: 5,
      category: "Faceless",
      title: "Faceless Tutorial Edit",
      youtubeId: "ArDnxvDYkGU",
    }
  ];

  const services = [
    { title: "Short Form Reels", icon: <Smartphone className="w-6 h-6 mb-4 text-gray-400" /> },
    { title: "Talking Head Editing", icon: <Users className="w-6 h-6 mb-4 text-gray-400" /> },
    { title: "Fitness Content", icon: <MonitorPlay className="w-6 h-6 mb-4 text-gray-400" /> },
    { title: "Cinematic Montages", icon: <Clapperboard className="w-6 h-6 mb-4 text-gray-400" /> },
    { title: "Social Media Editing", icon: <Film className="w-6 h-6 mb-4 text-gray-400" /> },
  ];

  const whyMe = [
    "Fast Delivery",
    "Clean Storytelling",
    "Smooth Motion",
    "Attention to Detail",
    "Easy Communication"
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans antialiased selection:bg-white selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <a href="#" className="text-xl font-bold tracking-tight">AK EDITS</a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#portfolio" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0D0D0D] border-b border-white/5 absolute w-full">
            <div className="px-6 py-4 space-y-4 flex flex-col">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-400 hover:text-white">Home</a>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-400 hover:text-white">Portfolio</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-400 hover:text-white">About</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-48 pb-32 px-6 flex items-center min-h-[90vh]">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-3xl">
              <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase mb-6">
                Cinematic Video Editor | Fitness • Lifestyle • Storytelling
              </p>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                AK EDITS
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
                Helping creators turn raw footage into engaging videos that people actually watch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                >
                  View Portfolio
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-medium rounded-2xl hover:bg-white/10 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 px-6 bg-[#111111]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Featured Work</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioData.map((item) => (
                <div key={item.id} className="group">
                  {/* YouTube Embed Container */}
                  <div className="aspect-[9/16] bg-[#1A1A1A] rounded-2xl overflow-hidden mb-6 relative shadow-lg border border-white/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                      title={item.title}
                      className="w-full h-full absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-2">{item.category}</p>
                    <h3 className="text-xl font-medium text-white transition-colors">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  <p>
                    Hi, I'm <span className="text-white font-medium">AK</span>, a freelance video editor focused on creating engaging short-form content.
                  </p>
                  <p>
                    My goal is simple: Create videos that keep viewers watching while matching each creator's unique style.
                  </p>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-medium text-white mb-6">I specialize in:</h3>
                  <ul className="space-y-4">
                    {["Fitness Content", "Talking Head Videos", "Lifestyle Reels", "Cinematic Montages"].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-400 text-lg">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-4 opacity-50"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services & Why Me Grids */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-8">Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        {service.icon}
                        <h4 className="font-medium text-white text-sm md:text-base">{service.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-8">Why Work With Me</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {whyMe.map((reason, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-white/40 mr-3 shrink-0" />
                        <span className="text-sm md:text-base">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-[#111111]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-400 mb-12">
              Ready to elevate your content? Drop me a message on Instagram or send me an email.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://instagram.com/ak_editz_1610" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-medium rounded-2xl hover:scale-[1.02] transition-transform duration-300 text-lg w-full sm:w-auto"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>

              <a 
                href="mailto:akeditz1609@gmail.com" 
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white/10 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/20 transition-colors duration-300 text-lg w-full sm:w-auto"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 font-medium">
              <span className="flex items-center gap-2">@ak_editz_1610 <ArrowUpRight className="w-4 h-4" /></span>
              <span className="flex items-center gap-2">akeditz1609@gmail.com <ArrowUpRight className="w-4 h-4" /></span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tight">AK EDITS</div>
          
          <div className="text-gray-500 text-sm md:mr-12">
            © {new Date().getFullYear()} AK EDITS
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="mailto:akeditz1609@gmail.com" 
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a 
              href="https://instagram.com/ak_editz_1610" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}