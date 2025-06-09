import React from "react";
import { Building, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { BRANDS_DATA } from "@/data/brands";

const BrandsSection = () => {
  return (
    <section id="marcas" className="w-full py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#282e76]/20 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-[#0d7c3d]/20 to-transparent rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
            <Building className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-semibold text-[#282e76]">Portfolio de Marcas</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Família de</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Marcas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as marcas que compõem o Grupo RedeCompras, desenvolvidas 
            para atender diferentes necessidades do mercado.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {BRANDS_DATA.map((marca, index) => (
            <motion.div 
              key={marca.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:-translate-y-2 transform-gpu h-full flex flex-col">
                {/* Logo Container */}
                <div className="flex-1 flex items-center justify-center mb-6 min-h-[120px]">
                  <img 
                    src={marca.logo} 
                    alt={marca.alt}
                    className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-lg font-bold text-[#282e76] group-hover:text-[#0d7c3d] transition-colors">
                    {marca.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-[#0d7c3d]/10 text-[#0d7c3d] text-xs font-semibold rounded-full">
                      {marca.category}
                    </span>
                    
                    {marca.established && (
                      <div className="text-xs text-gray-500">
                        Desde {marca.established}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {marca.description}
                  </p>

                  {marca.website && (
                    <a
                      href={marca.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0d7c3d] hover:text-[#282e76] text-sm font-semibold transition-colors mt-3"
                    >
                      Visitar site
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5 rounded-3xl border border-[#0d7c3d]/20 p-8 lg:p-12 backdrop-blur-sm">
            <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Diversidade e Inovação
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada marca representa nosso compromisso em oferecer soluções completas 
              e inovadoras para diferentes segmentos do mercado paraibano.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;