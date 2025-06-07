
import React, { useState } from "react";
import { ArrowRight, Users, MapPin, Building, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LOJAS_INFO = [
  {
    id: 1,
    name: "Redecompras Feira de Flores",
    endereco: " R. Cel. João Lourenço Porto, 374 - Centro, Campina Grande - PB, 58400-240",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83) 2102-5300",
    coordenadas: { lat:-7.2198843244293585,lng: -35.87976530638709 },
    categoria: "Varejo"
  },
  {
    id: 2,
    name: "Redecompras Catedral",
    endereco: "Av. Mal. Floriano Peixoto, 912 - Centro, Campina Grande - PB, 58400-180",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 14h",
    telefone: "(83)2102-5331",
    coordenadas: { lat:-7.218130357576768, lng:-35.880751062308306 },
    categoria: "Varejo"
  },
  {
    id: 3,
    name: "Redecompras Avenida Canal",
    endereco: "R. Marcílio Dias, 325 - Centro, Campina Grande - PB, 58400-190",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 13h",
    telefone: "(83) 3341-6341",
    coordenadas: { lat:-7.217975842288795,lng: -35.87648254696501 },
    categoria: "Varejo"
  },
  {
    id: 4,
    name: "Redecompras Catolé",
    endereco: "R. Alzira Figueirêdo, 400 - Sandra Cavalcante, Campina Grande - PB, 58410-755",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 18h",
    telefone: "(83)2102-5335",
    coordenadas: { lat: -7.242479628096079, lng: -35.878220404636416 },
    categoria: "Varejo"
  },
  {
    id: 5,
    name: "Redecompras Malvinas",
    endereco: "R. Olindina Pereira dos Santos, 412 - Malvinas, Campina Grande - PB, 58432-664",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 16h",
    telefone: "(83) 3310-5000",
    coordenadas: { lat:-7.2490931833155265, lng: -35.92825688880762 },
    categoria: "Varejo"
  },
  {
    id: 6,
    name: "Redecompras Intermares",
    endereco: "Av. Mar Vermelho, 89 - Intermares, Cabedelo - PB, 58102-120",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 20h",
    telefone: "(83)99336-3659",
    coordenadas: { lat:-7.045062149378756, lng:-34.842281631623194 },
    categoria: "Varejo"
  },
   {
    id: 7,
    name: "Redecompras Aeroclube",
    endereco: "R. Francisco Leocádio Ribeiro Coutinho, 601 - Aeroclube, João Pessoa - PB, 58036-450",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83)3246-6601",
    coordenadas: { lat: -7.084907754658828, lng:-34.84552210463792 },
    categoria: "Varejo"
  },
   {
    id: 8,
    name: "BomQueSó Liberdade",
    endereco: "R. Odon Bezerra, 459 - Liberdade, Campina Grande - PB, 58414-160",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83)2102-5312",
    coordenadas: { lat:-7.236049011833299,lng: -35.89467718744217 },
    categoria: "Atacarejo"
  },
  {
    id: 9,
    name: "BomQueSó Dinamérica",
    endereco: "Av. Dinamérica Alves Correia, 751 - Santa Cruz, Campina Grande - PB, 58417-095",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: " (83) 2102-5342",
    coordenadas: { lat:-7.240184107390968, lng:-35.90991188475078 },
    categoria: "Atacarejo"
  }
];

const MARCAS = [
  {
    name: "RedeCompras.com",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras.com",
    description: "Plataforma de e-commerce do Grupo RedeCompras"
  },
  {
    name: "BomQuéSó",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "BomQuéSó",
    description: "Rede de supermercados com foco em qualidade e preços acessíveis"
  },
  {
    name: "Tão Nosso Alimentos",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "Tão Nosso Alimentos",
    description: "Marca própria de alimentos do Grupo RedeCompras"
  },
  {
    name: "Campina Atacado",
    logo: "/lovable-uploads/34c8c08e-9061-4dab-9657-02258d9e470c.png",
    alt: "Campina Atacado",
    description: "Atacado especializado para revenda"
  },
  {
    name: "RedeCompras",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "RedeCompras",
    description: "Marca matriz do grupo empresarial"
  },
   {
    name: "RedeCompras",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "RedeCompras",
    description: "Marca matriz do grupo empresarial"
  }
];

const Brands = () => {
  const [lojaExpanded, setLojaExpanded] = useState<number | null>(null);

  const handleVerLocalizacao = (coordenadas: { lat: number; lng: number }, nome: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordenadas.lat},${coordenadas.lng}&query_place_id=${encodeURIComponent(nome)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#282e76] to-[#0d7c3d] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Nossas Marcas e Lojas
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça nosso portfólio de marcas e encontre a loja mais próxima de você
            </p>
          </div>
        </section>

        {/* Seção de Marcas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#282e76]">
                Portfólio de Marcas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada marca do Grupo RedeCompras foi desenvolvida para atender necessidades específicas do mercado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MARCAS.map((marca, index) => (
                <div key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <img 
                      src={marca.logo} 
                      alt={marca.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#282e76] mb-3">{marca.name}</h3>
                  <p className="text-gray-600">{marca.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Lojas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#282e76]">
                Nossas Lojas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos presentes em pontos estratégicos da Paraíba para melhor atendê-lo
              </p>
            </div>

            <div className="space-y-6">
              {LOJAS_INFO.map((loja) => (
                <div key={loja.id} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#282e76] to-[#0d7c3d] flex items-center justify-center shadow-lg">
                            <Building className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#282e76]">{loja.name}</h3>
                            <span className="text-sm text-[#0d7c3d] font-semibold">{loja.categoria}</span>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                              <div>
                                <span className="text-sm font-semibold text-gray-700 block">Endereço</span>
                                <span className="text-gray-600">{loja.endereco}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <Phone className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                              <div>
                                <span className="text-sm font-semibold text-gray-700 block">Telefone</span>
                                <span className="text-gray-600">{loja.telefone}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-[#0d7c3d] mt-1 flex-shrink-0" />
                            <div>
                              <span className="text-sm font-semibold text-gray-700 block">Horário de Funcionamento</span>
                              <span className="text-gray-600">{loja.horario}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => handleVerLocalizacao(loja.coordenadas, loja.name)}
                          className="group inline-flex items-center gap-3 px-6 py-3 bg-[#0d7c3d] hover:bg-[#059669] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <MapPin className="w-5 h-5" />
                          Ver no Maps
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button
                          onClick={() => setLojaExpanded(lojaExpanded === loja.id ? null : loja.id)}
                          className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-[#282e76] text-[#282e76] hover:bg-[#282e76] hover:text-white font-semibold transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <Building className="w-5 h-5" />
                          {lojaExpanded === loja.id ? 'Menos Info' : 'Mais Info'}
                        </button>
                      </div>
                    </div>

                    {lojaExpanded === loja.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200 bg-gray-50 -mx-8 -mb-8 p-8">
                        <h4 className="text-lg font-semibold text-[#282e76] mb-4">Informações Adicionais</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <strong className="text-[#282e76]">Estacionamento:</strong>
                            <span className="text-gray-600 block">Disponível</span>
                          </div>
                          <div>
                            <strong className="text-[#282e76]">Acessibilidade:</strong>
                            <span className="text-gray-600 block">Completa</span>
                          </div>
                          <div>
                            <strong className="text-[#282e76]">Serviços:</strong>
                            <span className="text-gray-600 block">Padaria, Açougue</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
