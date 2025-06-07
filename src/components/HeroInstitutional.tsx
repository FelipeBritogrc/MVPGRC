
import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const HeroInstitutional: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder for institutional background image - Resolution: 1920x1080px */}
        <div className="absolute inset-0 bg-gray-300 opacity-20">
          {/* Replace this div with your institutional image */}
          <img 
            src="/placeholder-institutional-bg.jpg" 
            alt="Grupo RedeCompras - Ambiente Institucional"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#282e76]/90 via-[#1e2563]/85 to-[#0d4a6b]/90" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#0d7c3d]/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen">
          {/* Content aligned to the left */}
          <div className="relative z-10 text-white max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-left">
              <span className="block text-white mb-4">
                Grupo
              </span>
              <span className="block bg-gradient-to-r from-[#0d7c3d] to-[#059669] bg-clip-text text-transparent">
                RedeCompras
              </span>
            </h1>

            {/* Corporate Description */}
            <div className="mb-12 text-left">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light max-w-3xl">
                Há mais de 35 anos oferecendo 
                <strong className="text-[#0d7c3d] font-semibold"> ALIMENTAÇÃO ACESSÍVEL</strong> e de 
                <strong className="text-[#0d7c3d] font-semibold"> QUALIDADE</strong> para todos os 
                paraibanos, promovendo iniciativas para uma sociedade 
                mais inclusiva e sustentável.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <Link
                to="/history"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0d7c3d] hover:bg-[#059669] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-lg rounded-xl"
              >
                <Calendar className="w-6 h-6" />
                Conheça Nossa História
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/brands"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-300 transform hover:-translate-y-1 text-lg rounded-xl"
              >
                Nossas Marcas e Lojas
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInstitutional;
