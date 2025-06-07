
import React from "react";
import Navbar from "@/components/Navbar";
import TimelineCarousel from "@/components/TimelineCarousel";
import Footer from "@/components/Footer";

const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2545B8] mb-8 text-center">
            Nossa História
          </h1>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Uma jornada de mais de três décadas construindo o futuro do varejo paraibano,
            sempre com foco em inovação, qualidade e excelência no atendimento.
          </p>
          
          {/* Seção do Vídeo Institucional */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#2545B8] mb-6 text-center">
              Vídeo Institucional
            </h2>
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-gray-600">
                    Adicione seu vídeo institucional na pasta assets
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Formato recomendado: MP4, WebM ou MOV
                  </p>
                </div>
              </div>
              {/* Descomente e adicione o caminho do seu vídeo quando estiver pronto
              <video 
                controls 
                className="w-full h-auto rounded-lg shadow-md"
                poster="/assets/video-poster.jpg"
              >
                <source src="/assets/video-institucional.mp4" type="video/mp4" />
                <source src="/assets/video-institucional.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              */}
            </div>
          </div>

          {/* Seção de Conquistas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#0d7c3d] mb-2">+35</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#0d7c3d] mb-2">+9</div>
              <div className="text-gray-600">Lojas na Paraíba</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#0d7c3d] mb-2">1000+</div>
              <div className="text-gray-600">Colaboradores</div>
            </div>
          </div>

          {/* Seção do Ranking ABRAS */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 text-center">
            <h3 className="text-xl font-bold text-[#2545B8] mb-4">
              Reconhecimento Nacional
            </h3>
            <div className="text-4xl font-bold text-[#0d7c3d] mb-2">128º</div>
            <p className="text-gray-600">
              Posição no Ranking ABRAS - Associação Brasileira de Supermercados
            </p>
          </div>
        </div>
        <TimelineCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default History;
