
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroInstitutional from "@/components/HeroInstitutional";
import ValueCardsRedesigned from "@/components/ValueCardsRedesigned";
import NewsletterSectionRedesigned from "@/components/NewsletterSectionRedesigned";
import TimelineCarousel from "@/components/TimelineCarousel";
import BrandsSectionRedesigned from "@/components/BrandsSectionRedesigned";
import CompanyNumbers from "@/components/CompanyNumbers";
import Footer from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex flex-col scroll-smooth overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col pt-14 sm:pt-16">
        {/* Hero Section */}
        <section 
          ref={el => sectionsRef.current['home'] = el}
          id="home"
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#282e76]/5 via-transparent to-[#0d7c3d]/5 pointer-events-none" />
          <HeroInstitutional />
        </section>

        {/* Missão, Visão e Valores */}
        <section 
          ref={el => sectionsRef.current['valores'] = el}
          id="valores" 
          className="relative"
        >
          <ValueCardsRedesigned />
        </section>

        {/* Últimas Notícias */}
        <section 
          ref={el => sectionsRef.current['noticias'] = el}
          id="noticias"
          className="relative"
        >
          <NewsletterSectionRedesigned />
        </section>

        {/* Nossa Trajetória */}
        <section 
          ref={el => sectionsRef.current['historia'] = el}
          id="historia"
          className="relative"
        >
          <TimelineCarousel />
        </section>

        {/* Família de Marcas */}
        <section 
          ref={el => sectionsRef.current['marcas'] = el}
          id="marcas" 
          className="relative"
        >
          <BrandsSectionRedesigned />
        </section>

        {/* Nossos Números */}
        <section 
          ref={el => sectionsRef.current['numeros'] = el}
          id="numeros"
          className="relative"
        >
          <CompanyNumbers />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
