import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { NEWS_DATA } from "@/data/news";
import { motion, AnimatePresence } from "framer-motion";

const NewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Pegar apenas as 4 primeiras notícias para exibição
  const displayNews = NEWS_DATA.slice(0, 4);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % displayNews.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, displayNews.length]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % displayNews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + displayNews.length) % displayNews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentNews = displayNews[currentIndex];

  return (
    <section id="noticias" className="w-full py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
            <span className="block text-gray-900 mb-2">Últimas</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Notícias
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe as novidades, conquistas e eventos do Grupo RedeCompras.
          </p>
        </motion.div>

        {/* News Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Featured News */}
            <motion.div
              key={currentNews.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={currentNews.img} 
                  alt={currentNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#282e76] text-sm font-semibold rounded-full border border-white/50">
                    {currentNews.category}
                  </span>
                </div>
                
                {/* Date Badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                    <Calendar className="w-4 h-4" />
                    {currentNews.date}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* News Content */}
            <motion.div
              key={`content-${currentNews.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-[#282e76] leading-tight">
                {currentNews.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentNews.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/noticias/${currentNews.id}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#282e76] hover:bg-[#0d7c3d] text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Saiba mais
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {currentNews.ctaUrl && (
                  <a
                    href={currentNews.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#0d7c3d] text-[#0d7c3d] hover:bg-[#0d7c3d] hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {currentNews.ctaText || "Saiba mais"}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-2 border-[#282e76] text-[#282e76] hover:bg-[#282e76] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Notícia anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-2 border-[#282e76] text-[#282e76] hover:bg-[#282e76] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próxima notícia"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {displayNews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0d7c3d] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para notícia ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Other News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-8 text-center">
            Outras Notícias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayNews.slice(1, 4).map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={`/noticias/${news.id}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 transform-gpu"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={news.thumbnail || news.img} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#282e76] text-xs font-semibold rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-[#282e76] mb-3 group-hover:text-[#0d7c3d] transition-colors leading-tight line-clamp-2">
                      {news.title}
                    </h4>
                    
                    {/* Summary */}
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                      {news.summary}
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center gap-2 text-[#0d7c3d] font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;