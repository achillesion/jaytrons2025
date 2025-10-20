"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaReact, FaWordpress, FaFigma, FaMobile, FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import ServicesDropdown from "./ServicesDropdown";

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  dropdownItems?: { label: string; href: string; icon?: React.ReactNode }[];
}

interface NavbarProps {
  brandName?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function Navbar({
  brandName = "JAYTRONS",
  navItems = [
    { label: "Home", href: "hero" },
    { label: "Portfolio", href: "portfolio", badge: "02" },
    {
      label: "Services",
      href: "services",
      badge: "03",
      dropdownItems: [
        { label: "React", href: "react-development", icon: <FaReact className="text-white" /> },
        { label: "WordPress", href: "wordpress-development", icon: <FaWordpress className="text-white" /> },
        { label: "UI UX", href: "ui-ux-design", icon: <FaFigma className="text-white" /> },
        { label: "React Native", href: "react-native-development", icon: <FaReact className="text-white" /> },
        { label: "Ecommerce Store", href: "ecommerce-development", icon: <MdOutlineShoppingCart className="text-white" /> }
      ]
    },

  ],
  ctaText = "Let's Talk",
  ctaHref = "/Whatsapp",
  className = ""
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { activeTab } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <nav ref={dropdownRef} className={`absolute w-full top-2 md:top-10 left-1/2 -translate-x-1/2 bg-transparent p-4 md:p-4 z-50 max-w-[1120px] ${className}`}>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-10">
            <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer text-white">{brandName}</h1>


          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center font-semibold gap-10 text-sm">
            {navItems.map((item) => (
              item.dropdownItems ? (
                <div key={item.href} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative transition-all duration-300 hover:scale-105 flex items-center cursor-pointer text-white"
                  >
                    <span>{item.label}</span>
                  </button>
                </div>
              ) : (
                <button
                  key={item.href}
                  onClick={() => {
                    smoothScrollTo(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative transition-all duration-300 hover:scale-105 flex items-center text-white cursor-pointer"
                >
                  <span>{item.label}</span>
                </button>
              )
            ))}
          </div>
          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center  justify-center bg-[#066BDE] rounded-lg p-2 transition-all duration-300 hover:scale-105 cursor-pointer group w-[127px]">
            <a
              href="https://wa.me/923215236350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-white font-semibold gap-2"
            >
              {ctaText}
              <FaArrowLeft className="rotate-130"/>
             
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden rounded-b-xl overflow-hidden bg-black/80 backdrop-blur-md border border-white/10 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className={`p-4 transition-all duration-500 ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-4'
            }`}>
            <div className="flex flex-col space-y-6 ">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transition-all duration-300 ${isMobileMenuOpen
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform -translate-x-4'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => {
                      smoothScrollTo(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white hover:text-[#13AA02] transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Services Dropdown Component - Tesla Style */}
      <ServicesDropdown
        isOpen={activeDropdown === 'services'}
        onClose={() => setActiveDropdown(null)}
        onMouseEnter={() => setActiveDropdown('services')}
        onMouseLeave={() => setActiveDropdown(null)}
      />
    </div>
  );
}