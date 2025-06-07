
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SearchAndFilters } from "@/components/newsletter/SearchAndFilters";
import { NewsResults } from "@/components/newsletter/NewsResults";
import { useNewsletterFilters } from "@/hooks/useNewsletterFilters";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Newsletter = () => {
  const {
    filters,
    filteredNews,
    paginatedNews,
    totalPages,
    isLoading,
    hasActiveFilters,
    updateSearchTerm,
    updateCategory,
    updatePage,
    clearFilters
  } = useNewsletterFilters();

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#282e76]/20 to-transparent rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-[#0d7c3d]/20 to-transparent rounded-full blur-xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block text-gray-900 mb-2">Todas as</span>
                <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
                  Notícias
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Fique por dentro das últimas novidades, eventos e conquistas do Grupo RedeCompras.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <SearchAndFilters
              searchTerm={filters.searchTerm}
              selectedCategory={filters.selectedCategory}
              onSearchChange={updateSearchTerm}
              onCategoryChange={updateCategory}
              onClearFilters={clearFilters}
              hasActiveFilters={!!hasActiveFilters}
              isLoading={!!isLoading}
              resultsCount={filteredNews.length}
            />
          </div>
        </section>

        {/* News Content */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <NewsResults
              paginatedNews={paginatedNews}
              filteredNews={filteredNews}
              currentPage={filters.currentPage}
              isLoading={!!isLoading}
              onClearFilters={clearFilters}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => updatePage(Math.max(1, filters.currentPage - 1))}
                        className={filters.currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-100"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => updatePage(page)}
                          isActive={filters.currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => updatePage(Math.min(totalPages, filters.currentPage + 1))}
                        className={filters.currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-100"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                
                <div className="text-center mt-4 text-sm text-gray-600">
                  Página {filters.currentPage} de {totalPages}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
