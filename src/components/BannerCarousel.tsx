
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Banners do carrossel
const HERO_BANNERS = [
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2300&q=80",
    title: "Bem-vindo ao Grupo RedeCompras",
    description: "Unindo tradição e inovação para atender você cada vez melhor.",
    align: "center",
  },
  {
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2300&q=80",
    title: "BomQuéSó: Economia e Qualidade",
    description: "Conheça nossa linha de atacarejo e aproveite ofertas imbatíveis.",
    align: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2300&q=80",
    title: "RedeCompras.com",
    description: "Facilidade, confiança e entrega rápida no nosso e-commerce.",
    align: "right",
  },
  {
    img: "https://images.unsplash.com/photo-1627137220795-a9e74dc36875?auto=format&fit=crop&w=2300&q=80",
    title: "Ofertas que surpreendem!",
    description: "Só este mês, super descontos em toda loja física.",
    align: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1556742400-b5dd9641e278?auto=format&fit=crop&w=2300&q=80",
    title: "Conheça nosso parceiro!",
    description: "",
    align: "right",
    externalUrl: "https://parceiro.com"
  }
];

const getAlignment = (align: string) => {
  if (align === "left") return "items-start text-left";
  if (align === "right") return "items-end text-right";
  return "items-center text-center";
};

const getPositionStyle = (align: string) => {
  if (align === "left") return "left-[2vw] lg:left-[4vw] right-auto";
  if (align === "right") return "right-[2vw] lg:right-[4vw] left-auto";
  return "left-0 right-0 mx-auto";
};

const BannerCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!hovering) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % HERO_BANNERS.length);
      }, 9000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, hovering]);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? HERO_BANNERS.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const handleBannerClick = (banner: typeof HERO_BANNERS[0]) => {
    if (banner.externalUrl) {
      window.open(banner.externalUrl, "_blank");
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full select-none h-[33vw] min-h-[260px] max-h-[580px] xs:min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] xl:min-h-[540px] max-w-none 
      flex items-stretch justify-center overflow-hidden p-0 m-0 transition-all duration-500"
      style={{
        // remove top margin/padding
        marginTop: 0,
        paddingTop: 0,
        borderRadius: 0,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative w-full h-full overflow-hidden shadow-2xl transition-all duration-500 m-0 p-0">
        {HERO_BANNERS.map((banner, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 w-full h-full transition-all duration-700
              ${i === current ? "opacity-100 z-10 scale-100 pointer-events-auto animate-fade-in" : "opacity-0 z-0 scale-105 pointer-events-none"}
              ${banner.externalUrl ? "cursor-pointer" : ""}
              `}
            style={{ transitionProperty: "opacity, transform" }}
            tabIndex={i === current ? 0 : -1}
            aria-hidden={i !== current}
            onClick={() => handleBannerClick(banner)}
          >
            {/* Imagem do banner com object-fill para total imersão */}
            <img
              src={banner.img}
              alt={banner.title}
              className={`
                w-full h-full min-h-[260px] max-h-[580px] object-fill object-center brightness-[.8] transition-all duration-700
                ${i === current ? "scale-100" : "scale-105 blur-[1px]"}
              `}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                borderRadius: 0
              }}
            />
            {/* Novo Gradiente Overlay, mais envolvente */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#0d7c3d]/45 pointer-events-none z-10" />
            {/* Conteúdo do banner */}
            <div
              className={
                `absolute top-[36%] sm:top-[37%] lg:top-[35%] max-w-[96vw] sm:max-w-2xl px-5 sm:px-9 flex flex-col gap-2 sm:gap-5 z-20
                ${getAlignment(banner.align)} ${getPositionStyle(banner.align)}`
              }
            >
              <h2 className="font-black drop-shadow-xl text-white 
                text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight
               ">
                {banner.title}
              </h2>
              {banner.description && (
                <p className="mt-1 sm:mt-2 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-lg text-white/90 max-w-[90vw]">
                  {banner.description}
                </p>
              )}
              {banner.externalUrl && (
                <a
                  href={banner.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 mt-3 sm:mt-5 items-center px-6 py-2.5 rounded-xl bg-[#0d7c3d]/95 hover:bg-[#282e76]/90 text-white text-lg md:text-xl font-bold shadow-xl border-2 border-[#282e76] transition-colors duration-200"
                  style={{
                    width: "fit-content",
                  }}
                >
                  <span>Conheça nosso parceiro</span>
                  <ExternalLink size={22} />
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Setas de navegação mais integradas, sobre o banner */}
        <button
          aria-label="Anterior"
          onClick={goToPrev}
          className={`absolute top-1/2 -translate-y-1/2 left-2 sm:left-6 z-30 flex items-center justify-center bg-white/80
          border border-[#0d7c3d] hover:bg-[#282e76] hover:text-white hover:border-[#0d7c3d] p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200
          ${HERO_BANNERS.length <= 1 ? "hidden" : ""}
          `}
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>
        <button
          aria-label="Próximo"
          onClick={goToNext}
          className={`absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 z-30 flex items-center justify-center bg-white/80
          border border-[#0d7c3d] hover:bg-[#282e76] hover:text-white hover:border-[#0d7c3d] p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200
          ${HERO_BANNERS.length <= 1 ? "hidden" : ""}
          `}
        >
          <ChevronRight size={32} strokeWidth={2.5} />
        </button>

        {/* Dots modernos, grandes e com leve animação */}
        <div className="absolute left-0 right-0 bottom-7 mx-auto flex justify-center gap-3 sm:gap-5 z-40">
          {HERO_BANNERS.map((_, idx) => (
            <button
              key={idx}
              className={`h-[18px] w-[18px] rounded-full border-2 transition-all duration-300
                ${current === idx
                  ? "border-[#0d7c3d] bg-gradient-to-br from-[#0d7c3d] to-[#2545B8] scale-125 shadow-lg"
                  : "border-[#0d7c3d] bg-white/80 opacity-80 hover:opacity-100"
                }
              `}
              aria-label={`Ir para banner ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              style={{
                outline: "none"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
