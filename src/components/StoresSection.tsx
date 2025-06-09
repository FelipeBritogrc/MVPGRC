import React, { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Star, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { LOJAS_DATA } from "@/data/stores";

const StoresSection: React.FC = () => {
  const [expandedStore, setExpandedStore] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<"Todas" | "Varejo" | "Atacarejo">("Todas");

  const filteredStores = filterCategory === "Todas" 
    ? LOJAS_DATA 
    : LOJAS_DATA.filter(store => store.categoria === filterCategory);

  const handleGetDirections = (coordenadas: { lat: number; lng: number }, nome: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas.lat},${coordenadas.lng}&query_place_id=${encodeURIComponent(nome)}`;
    window.open(url, '_blank');
  };

  const toggleExpanded = (storeId: number) => {
    setExpandedStore(expandedStore === storeId ? null : storeId);
  };

  return (
    <section id="lojas" className="w-full py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Nossas</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Lojas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Estamos presentes em pontos estratégicos da Paraíba para melhor atendê-lo.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {["Todas", "Varejo", "Atacarejo"].map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filterCategory === category
                    ? "bg-[#282e76] text-white shadow-lg"
                    : "bg-white text-[#282e76] border-2 border-[#282e76] hover:bg-[#282e76] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStores.map((loja, index) => (
            <motion.div
              key={loja.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 transform-gpu"
            >
              {/* Store Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={loja.imagem}
                  alt={loja.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    loja.categoria === "Atacarejo" 
                      ? "bg-[#0d7c3d] text-white" 
                      : "bg-[#282e76] text-white"
                  }`}>
                    {loja.categoria}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-gray-800">4.8</span>
                  </div>
                </div>

                {/* Store Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {loja.name}
                  </h3>
                </div>
              </div>

              {/* Store Content */}
              <div className="p-6">
                {/* Basic Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-gray-700 block">Endereço</span>
                      <span className="text-gray-600 text-sm">{loja.endereco}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-gray-700 block">Telefone</span>
                        <span className="text-gray-600 text-sm">{loja.telefone}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-gray-700 block">Horário</span>
                        <span className="text-gray-600 text-sm">{loja.horario}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Serviços Disponíveis</h4>
                  <div className="flex flex-wrap gap-2">
                    {loja.servicos.map((servico, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#0d7c3d]/10 text-[#0d7c3d] text-xs font-medium rounded-full"
                      >
                        {servico}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <button
                    onClick={() => handleGetDirections(loja.coordenadas, loja.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0d7c3d] hover:bg-[#059669] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Navigation className="w-4 h-4" />
                    Como Chegar
                  </button>
                  
                  <button
                    onClick={() => toggleExpanded(loja.id)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#282e76] text-[#282e76] hover:bg-[#282e76] hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {expandedStore === loja.id ? "Menos Info" : "Mais Info"}
                    {expandedStore === loja.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedStore === loja.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t border-gray-200"
                  >
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Diferenciais</h4>
                    <div className="space-y-2">
                      {loja.diferenciais.map((diferencial, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#0d7c3d] rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-600">{diferencial}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5 rounded-3xl border border-[#0d7c3d]/20 p-8 lg:p-12 backdrop-blur-sm">
            <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Encontre a loja mais próxima
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Com {LOJAS_DATA.length} lojas estrategicamente localizadas, sempre há uma RedeCompras perto de você.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-[#0d7c3d]" />
                <span className="font-medium">Estacionamento gratuito</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">Atendimento 5 estrelas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-[#0d7c3d]" />
                <span className="font-medium">Horário estendido</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoresSection;