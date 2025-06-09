import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import NavbarDropdown from "./NavbarDropdown";

interface DesktopMenuProps {
  onNavClick: () => void;
}

const mainLinks = [
  { href: "/", label: "Início" },
  { href: "/#noticias", label: "Notícias", isAnchor: true },
  { href: "/careers", label: "Trabalhe Conosco" },
];

const DesktopMenu: React.FC<DesktopMenuProps> = ({ onNavClick }) => {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  const handleLinkClick = (href: string, isAnchor?: boolean) => {
    if (isAnchor && href.startsWith("/#")) {
      const targetId = href.substring(2); // Remove "/#"
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    onNavClick();
  };

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
      {/* Main Links */}
      {mainLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => handleLinkClick(link.href, link.isAnchor)}
          className={cn(
            "rounded px-2 py-1 xl:px-3 xl:py-2 text-sm xl:text-base font-medium transition-all duration-200",
            "text-white",
            "hover:text-[#0d7c3d]",
            isActiveLink(link.href)
              ? "border-b-2 border-[#0d7c3d] text-[#0d7c3d] bg-white bg-opacity-80"
              : ""
          )}
        >
          {link.label}
        </Link>
      ))}

      {/* Institutional Dropdown */}
      <NavbarDropdown onNavClick={onNavClick} />
    </div>
  );
};

export default DesktopMenu;