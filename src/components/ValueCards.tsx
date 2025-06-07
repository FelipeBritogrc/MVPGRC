
import React from "react";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

const VALUES = [
  {
    title: "Missão",
    description: "Oferecer produtos de qualidade, atendimento acolhedor e soluções inovadoras, promovendo o bem-estar dos clientes e contribuindo para o desenvolvimento do varejo regional.",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-50 border-blue-200"
  },
  {
    title: "Visão",
    description: "Ser referência em varejo na região, reconhecido pela excelência operacional, crescimento sustentável e geração de valor para clientes, parceiros e colaboradores.",
    icon: Eye,
    color: "from-green-500 to-green-600",
    accent: "bg-green-50 border-green-200"
  },
  {
    title: "Valores",
    description: "Ética, compromisso, respeito ao cliente, valorização das pessoas, transparência e responsabilidade social como bases do nosso dia a dia.",
    icon: Heart,
    color: "from-purple-500 to-purple-600",
    accent: "bg-purple-50 border-purple-200"
  },
];

const ValueCards: React.FC = () => {
  return (
    <section id="ethics" className="w-full py-20 sm:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#282e76]/10 to-[#0d7c3d]/10 rounded-full border border-[#282e76]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#0d7c3d]" />
            <span className="text-sm font-semibold text-[#282e76]">Nossos Pilares</span>
          </div>
          
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Missão, Visão</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              e Valores
            </span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Os princípios que guiam nossa jornada e definem nossa identidade como empresa.
          </p>
        </div>

        {/* Enhanced Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform-gpu"
            >
              {/* Header with Icon */}
              <div className={`relative h-24 bg-gradient-to-r ${value.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
                
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="relative p-8">
                {/* Enhanced Title */}
                <div className="flex items-center gap-4 mb-6 -mt-12">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl border-4 border-white ring-4 ring-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className={`w-8 h-8 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`} style={{
                      background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#282e76] group-hover:text-[#0d7c3d] transition-colors">
                    {value.title}
                  </h4>
                </div>

                {/* Decorative Line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${value.color} rounded-full mb-6 group-hover:w-24 transition-all duration-300`} />

                {/* Enhanced Description */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {value.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d7c3d]/5 via-transparent to-[#282e76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5 rounded-3xl border border-[#0d7c3d]/20 p-8 lg:p-12 backdrop-blur-sm">
            <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Compromisso com a Excelência
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada ação que tomamos é guiada por estes valores fundamentais, 
              garantindo que nossa missão seja cumprida com integridade e propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
