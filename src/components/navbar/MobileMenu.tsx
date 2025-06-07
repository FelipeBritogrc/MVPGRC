
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: () => void;
}

const mainLinks = [
  { href: "/", label: "Início" },
  { href: "/newsletter", label: "Notícias" },
  { href: "/careers", label: "Trabalhe Conosco" },
];

const institutionalLinks = [
  { href: "/brands", label: "Nossas Marcas" },
  { href: "/ethics", label: "Ética e Valores" },
  { href: "/history", label: "Nossa História" },
  { href: "/apps", label: "Nossos Apps" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onNavClick }) => {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href;
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-[#282e76] border-t border-gray-600 shadow-lg">
      <div className="py-2">
        {/* Main Links Mobile */}
        {mainLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onNavClick}
            className={cn(
              "block px-4 py-3 text-base font-medium transition-all duration-200",
              "text-white",
              "hover:bg-white hover:bg-opacity-10 hover:text-[#0d7c3d]",
              isActiveLink(link.href)
                ? "bg-white bg-opacity-20 text-[#0d7c3d] border-l-4 border-[#0d7c3d]"
                : ""
            )}
          >
            {link.label}
          </Link>
        ))}

        {/* Institutional Section Mobile */}
        <div className="border-t border-gray-600 mt-2 pt-2">
          <div className="px-4 py-2 text-sm font-semibold text-gray-300 uppercase tracking-wide">
            Institucional
          </div>
          {institutionalLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onNavClick}
              className={cn(
                "block px-6 py-3 text-base font-medium transition-all duration-200",
                "text-white",
                "hover:bg-white hover:bg-opacity-10 hover:text-[#0d7c3d]",
                isActiveLink(link.href)
                  ? "bg-white bg-opacity-20 text-[#0d7c3d] border-l-4 border-[#0d7c3d]"
                  : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
