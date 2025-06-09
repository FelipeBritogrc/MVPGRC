import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroInstitutional from "@/components/HeroInstitutional";
import ValueCardsRedesigned from "@/components/ValueCardsRedesigned";
import NewsSection from "@/components/NewsSection";
import TimelineCarousel from "@/components/TimelineCarousel";
import BrandsSection from "@/components/BrandsSection";
import StoresSection from "@/components/StoresSection";
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

        {/* Notícias */}
        <section 
          ref={el => sectionsRef.current['noticias'] = el}
          id="noticias"
          className="relative"
        >
          <NewsSection />
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
          <BrandsSection />
        </section>

        {/* Nossas Lojas */}
        <section 
          ref={el => sectionsRef.current['lojas'] = el}
          id="lojas"
          className="relative"
        >
          <StoresSection />
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