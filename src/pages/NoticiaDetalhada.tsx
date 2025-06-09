import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { Calendar, ArrowLeft, Clock, User, ExternalLink } from "lucide-react";
import { NEWS_DATA } from "@/data/news";

const NoticiaDetalhada = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticia = NEWS_DATA.find(item => item.id === id);

  if (!noticia) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col justify-center items-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-2">Notícia não encontrada</h2>
            <button 
              onClick={() => navigate('/#noticias')} 
              className="text-[#0d7c3d] font-semibold mt-2 hover:underline"
            >
              Voltar para Notícias
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter related news to exclude current article
  const relatedArticles = NEWS_DATA.filter(article => article.id !== id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <button 
            onClick={() => navigate('/#noticias')} 
            className="inline-flex items-center gap-2 text-[#282e76] hover:text-[#0d7c3d] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Notícias
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          {/* Article Meta */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {noticia.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min de leitura
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Equipe de Comunicação
              </div>
            </div>
          </div>

          {/* Title and Category */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-[#282e76]/10 text-[#282e76] text-sm font-semibold rounded-full">
                {noticia.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282e76] mb-4 leading-tight">
              {noticia.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {noticia.summary}
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={noticia.img} 
              alt={noticia.title} 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {noticia.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button if exists */}
          {noticia.ctaUrl && (
            <div className="mt-8 p-6 bg-gradient-to-r from-[#0d7c3d]/10 to-[#282e76]/10 rounded-xl border border-[#0d7c3d]/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#282e76] mb-4">
                  {noticia.ctaText || "Saiba mais"}
                </h3>
                <a
                  href={noticia.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d7c3d] hover:bg-[#059669] text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  {noticia.ctaText || "Saiba mais"}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-[#282e76] mb-6">
                Outras Notícias
              </h3>
              <div className="grid gap-4">
                {relatedArticles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => navigate(`/noticias/${article.id}`)}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0d7c3d] hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex gap-4">
                      <img 
                        src={article.thumbnail || article.img}
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#282e76] group-hover:text-[#0d7c3d] transition-colors mb-1 line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{article.date}</span>
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {article.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhada;