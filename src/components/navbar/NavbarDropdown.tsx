
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarDropdownProps {
  onNavClick: () => void;
}

const institutionalLinks = [
  { href: "/brands", label: "Nossas Marcas" },
  { href: "/ethics", label: "Ética e Valores" },
  { href: "/history", label: "Nossa História" },
  { href: "/apps", label: "Nossos Apps" },
];

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ onNavClick }) => {
  const location = useLocation();

  const isInstitutionalActive = () => {
    return institutionalLinks.some(link => location.pathname === link.href);
  };

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "rounded px-2 py-1 xl:px-3 xl:py-2 text-sm xl:text-base font-medium transition-all duration-200",
          "text-white",
          "hover:text-[#0d7c3d]",
          "flex items-center gap-1",
          isInstitutionalActive()
            ? "border-b-2 border-[#0d7c3d] text-[#0d7c3d] bg-white bg-opacity-80"
            : ""
        )}
      >
        Institucional
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="bg-white border border-gray-200 shadow-lg rounded-lg min-w-[200px]"
        align="start"
      >
        {institutionalLinks.map((link) => (
          <DropdownMenuItem key={link.href} className="p-0">
            <Link
              to={link.href}
              onClick={onNavClick}
              className={cn(
                "w-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                "text-gray-700 hover:text-[#0d7c3d] hover:bg-gray-50",
                isActiveLink(link.href) ? "text-[#0d7c3d] bg-gray-50" : ""
              )}
            >
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
