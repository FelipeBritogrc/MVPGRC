
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { NewsItem, NewsFilters } from "@/types";
import { NEWS_DATA, ITEMS_PER_PAGE } from "@/data/news";

export const useNewsletterFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [filters, setFilters] = useState<NewsFilters>({
    searchTerm: searchParams.get("search") || "",
    selectedCategory: searchParams.get("category") || "Todas",
    currentPage: parseInt(searchParams.get("page") || "1")
  });

  // Update URL parameters when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.searchTerm) params.set("search", filters.searchTerm);
    if (filters.selectedCategory !== "Todas") params.set("category", filters.selectedCategory);
    if (filters.currentPage > 1) params.set("page", filters.currentPage.toString());
    
    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Filter news based on search and category
  const filteredNews = useMemo(() => {
    setIsLoading(true);
    
    let filtered = NEWS_DATA;

    // Filter by category
    if (filters.selectedCategory !== "Todas") {
      filtered = filtered.filter(news => news.category === filters.selectedCategory);
    }

    // Filter by search term
    if (filters.searchTerm.trim()) {
      const search = filters.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(search) ||
        news.summary.toLowerCase().includes(search) ||
        news.content.toLowerCase().includes(search)
      );
    }

    // Simulate loading delay for better UX
    setTimeout(() => setIsLoading(false), 300);
    
    return filtered;
  }, [filters.searchTerm, filters.selectedCategory]);

  // Paginate filtered results
  const paginatedNews = useMemo(() => {
    const startIndex = (filters.currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNews, filters.currentPage]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  // Reset to first page when filters change
  useEffect(() => {
    setFilters(prev => ({ ...prev, currentPage: 1 }));
  }, [filters.searchTerm, filters.selectedCategory]);

  const updateSearchTerm = (searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchTerm }));
  };

  const updateCategory = (selectedCategory: string) => {
    setFilters(prev => ({ ...prev, selectedCategory }));
  };

  const updatePage = (currentPage: number) => {
    setFilters(prev => ({ ...prev, currentPage }));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      selectedCategory: "Todas",
      currentPage: 1
    });
  };

  const hasActiveFilters: boolean = !!(filters.searchTerm.trim() || filters.selectedCategory !== "Todas");

  return {
    filters,
    filteredNews,
    paginatedNews,
    totalPages,
    isLoading: isLoading as boolean,
    hasActiveFilters: hasActiveFilters as boolean,
    updateSearchTerm,
    updateCategory,
    updatePage,
    clearFilters
  };
};
