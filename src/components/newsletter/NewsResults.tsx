
import React from "react";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardNoticia from "@/components/CardNoticia";
import { NewsSkeletons } from "./NewsSkeletons";
import { NewsItem } from "@/types";

interface NewsResultsProps {
  paginatedNews: NewsItem[];
  filteredNews: NewsItem[];
  currentPage: number;
  isLoading: boolean;
  onClearFilters: () => void;
}

export const NewsResults: React.FC<NewsResultsProps> = ({
  paginatedNews,
  filteredNews,
  currentPage,
  isLoading,
  onClearFilters
}) => {
  if (!!isLoading) {
    return <NewsSkeletons />;
  }

  if (filteredNews.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 text-6xl mb-4">📰</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhuma notícia encontrada</h3>
        <p className="text-gray-600 mb-6">
          Tente ajustar seus filtros ou fazer uma nova busca.
        </p>
        <Button onClick={onClearFilters} className="bg-[#282e76] hover:bg-[#0d7c3d]">
          Limpar Filtros
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Featured News (first item on first page) */}
      {currentPage === 1 && paginatedNews.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-[#0d7c3d]" />
            <h2 className="text-2xl lg:text-3xl font-bold text-[#282e76]">
              Notícia em Destaque
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
            <CardNoticia
              key={paginatedNews[0].id}
              id={paginatedNews[0].id}
              title={paginatedNews[0].title}
              img={paginatedNews[0].img}
              summary={paginatedNews[0].summary}
              date={paginatedNews[0].date}
            />
          </div>
        </div>
      )}

      {/* All News Grid */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-6">
          {currentPage === 1 && paginatedNews.length > 1 ? "Outras Notícias" : "Notícias"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(currentPage === 1 ? paginatedNews.slice(1) : paginatedNews).map((noticia) => (
            <CardNoticia
              key={noticia.id}
              id={noticia.id}
              title={noticia.title}
              img={noticia.img}
              summary={noticia.summary}
              date={noticia.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};
