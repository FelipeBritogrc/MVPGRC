
import React from "react";
import { Building } from "lucide-react";

const MARCAS = [
  {
    name: "RedeCompras.com",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras.com"
  },
  {
    name: "BomQuéSó",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "BomQuéSó"
  },
  {
    name: "Tão Nosso Alimentos",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "Tão Nosso Alimentos"
  },
  {
    name: "Campina Atacado",
    logo: "/lovable-uploads/34c8c08e-9061-4dab-9657-02258d9e470c.png",
    alt: "Campina Atacado"
  },
  {
    name: "RedeCompras",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "RedeCompras"
  }
];

const BrandsSection = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Seção de Marcas */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 shadow-sm mb-6">
            <Building className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-semibold text-[#282e76]">Nossas Marcas</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#282e76]">
            Família de Marcas
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Conheça as marcas que compõem o Grupo RedeCompras, desenvolvidas 
            para atender diferentes necessidades do mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {MARCAS.map((marca, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-full h-32 flex items-center justify-center">
              <img 
                src={marca.logo} 
                alt={marca.alt}
                className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
