
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";

const BRAND_BLUE = "#282e76";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        scrolled ? "shadow border-b border-gray-200" : ""
      )}
      style={{
        backgroundColor: scrolled ? "#282e76" : "#282e76",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : undefined,
        backdropFilter: scrolled ? "blur(8px)" : undefined,
        transition: "background-color 0.3s"
      }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-3 sm:px-4 py-2 h-14 sm:h-16">
        {/* Logo */}
        <NavbarLogo onNavClick={handleNavClick} />

        {/* Desktop Menu */}
        <DesktopMenu onNavClick={handleNavClick} />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#0d7c3d] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onNavClick={handleNavClick} />
    </nav>
  );
};

export default Navbar;
