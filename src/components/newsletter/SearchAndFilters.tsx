
import React from "react";
import { Search, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NEWS_CATEGORIES } from "@/data/news";

interface SearchAndFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  isLoading: boolean;
  resultsCount: number;
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onClearFilters,
  hasActiveFilters,
  isLoading,
  resultsCount
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <Input 
              type="text" 
              placeholder="Buscar por título, resumo ou conteúdo..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d7c3d]/20 focus:border-[#0d7c3d]"
              aria-label="Buscar notícias"
            />
          </div>
          
          {/* Clear Filters Button */}
          {!!hasActiveFilters && (
            <Button
              onClick={onClearFilters}
              variant="outline"
              className="flex items-center gap-2 whitespace-nowrap"
              aria-label="Limpar todos os filtros"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              Limpar Filtros
            </Button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-4" role="tablist" aria-label="Filtrar por categoria">
          {NEWS_CATEGORIES.map((category) => (
            <button 
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#282e76] text-white shadow-md" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-label={`Filtrar notícias por categoria ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-4 text-sm text-gray-600" aria-live="polite">
          {!!isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              Buscando notícias...
            </div>
          ) : (
            <div>
              Mostrando {resultsCount} {resultsCount === 1 ? 'notícia' : 'notícias'}
              {!!hasActiveFilters && (
                <span className="text-[#0d7c3d] font-medium">
                  {searchTerm && ` para "${searchTerm}"`}
                  {selectedCategory !== "Todas" && ` na categoria "${selectedCategory}"`}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
