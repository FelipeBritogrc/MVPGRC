
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PARTNERS = [
  { name: "Nestlé", logo: "https://cdn.worldvectorlogo.com/logos/nestle.svg", category: "Alimentação" },
  { name: "Coca-Cola", logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg", category: "Bebidas" },
  { name: "Unilever", logo: "https://cdn.worldvectorlogo.com/logos/unilever-2.svg", category: "Higiene e Limpeza" },
  { name: "Danone", logo: "https://cdn.worldvectorlogo.com/logos/danone.svg", category: "Laticínios" },
  { name: "Ambev", logo: "https://cdn.worldvectorlogo.com/logos/ambev.svg", category: "Bebidas" },
  { name: "Pepsico", logo: "https://cdn.worldvectorlogo.com/logos/pepsico-1.svg", category: "Alimentação" },
];

const PartnersSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % PARTNERS.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const getVisiblePartners = () => {
    const partners = [];
    for (let i = 0; i < 3; i++) {
      partners.push(PARTNERS[(currentIndex + i) % PARTNERS.length]);
    }
    return partners;
  };

  const nextPartners = () => {
    setCurrentIndex(prev => (prev + 1) % PARTNERS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevPartners = () => {
    setCurrentIndex(prev => (prev - 1 + PARTNERS.length) % PARTNERS.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const visiblePartners = getVisiblePartners();

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#282e76] mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as maiores e melhores marcas do mercado para oferecer 
            produtos de qualidade e variedade aos nossos clientes.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPartners}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Parceiro anterior"
          >
            <ChevronLeft className="w-5 h-5 text-[#282e76]" />
          </button>

          <button
            onClick={nextPartners}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Próximo parceiro"
          >
            <ChevronRight className="w-5 h-5 text-[#282e76]" />
          </button>

          {/* Partners Display */}
          <div className="mx-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePartners.map((partner, i) => (
              <div 
                key={`${partner.name}-${currentIndex}-${i}`}
                className={`
                  group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 
                  transition-all duration-500 hover:shadow-xl hover:-translate-y-1
                  ${i === 1 ? 'lg:scale-110 lg:shadow-xl' : 'lg:scale-100'}
                `}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-16 max-h-16 object-contain filter group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#282e76] mb-1">
                    {partner.name}
                  </h3>
                  <span className="text-sm text-[#0d7c3d] font-medium px-3 py-1 bg-[#0d7c3d]/10 rounded-full">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {PARTNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? 'bg-[#0d7c3d] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                aria-label={`Ir para parceiro ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">200+</div>
            <div className="text-sm text-gray-600">Marcas Parceiras</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">35+</div>
            <div className="text-sm text-gray-600">Anos de Parceria</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">15mil+</div>
            <div className="text-sm text-gray-600">Produtos</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-[#0d7c3d] mb-1">100%</div>
            <div className="text-sm text-gray-600">Qualidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
