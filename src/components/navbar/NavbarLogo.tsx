
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  onNavClick: () => void;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onNavClick }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px]"
      onClick={onNavClick}
    >
      <img 
        src="/lovable-uploads/804139f1-92c9-4df5-8437-fd9f2bb21816.png" 
        alt="Grupo RedeCompras"
        className="h-8 sm:h-11 w-auto max-h-[32px] sm:max-h-[44px]"
        style={{ height: "32px", objectFit: "contain" }}
        draggable={false}
      />
    </Link>
  );
};

export default NavbarLogo;
