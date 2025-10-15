"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaReact, FaWordpress, FaFigma, FaMobile, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio", badge: "02" },
    { 
      label: "Services", 
      href: "/services", 
      badge: "03",
      dropdownItems: [
        { label: "React", href: "/services/react", icon: <FaReact className="text-white" /> },
        { label: "WordPress", href: "/services/wordpress", icon: <FaWordpress className="text-white" /> },
        { label: "UI UX", href: "/services/ui-ux", icon: <FaFigma className="text-white" /> },
        { label: "React Native", href: "/services/react-native", icon: <FaReact className="text-white" /> },
        { label: "Ecommerce Store", href: "/services/ecommerce", icon: <MdOutlineShoppingCart className="text-white" /> }
      ]
    },
    { label: "Industries", href: "/industries", badge: "09" }

  ],
  ctaText = "Whatsapp Now",
  ctaHref = "/Whatsapp",
  className = ""
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    return (
    <nav className={`sticky bg-[#181818] top-0 z-50 border-b border-white/30 ${className}`}>
      <div className="flex justify-between items-center pb-4">
            <div className="flex items-center gap-10 ">
          <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer text-white">{brandName}</h1>

                {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-semibold gap-10 text-sm">
        {navItems.map((item) => (
          item.dropdownItems ? (
            <DropdownMenu key={item.href}>
              <DropdownMenuTrigger asChild>
                <div className="relative  transition-all duration-300 hover:scale-105 flex items-center cursor-pointer text-white">
                  <span>{item.label}</span>
                  
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-100 flex item-start mt-8 justify-between bg-white p-4"
              >
                <div className="flex items-start justify-evenly w-full">
                 <div className="flex flex-col gap-2 text-sm">
                 <h1 className="text-black"> Our Services</h1>
                 <p className="text-gray-400 text-[10px]">Need Different Solution <Link href={"/Contact"} className="text-[#2a4d6b] underline">Contact us</Link></p>
                 </div>
                   <div>
                    {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.href} asChild>
                     <Link href={dropdownItem.href} className="cursor-pointer text-black text-sm flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-md transition-colors">
                        {dropdownItem.icon}
                        <span>{dropdownItem.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                   </div>
                </div>
               
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link 
              key={item.href}
              href={item.href} 
              className="relative transition-all duration-300 hover:scale-105 flex items-center text-white"
            >
              <span>{item.label}</span>
              
            </Link>
          )
        ))}
        </div>
        </div>
        
  

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center justify-center bg-[#13AA02] rounded-lg p-2 transition-all duration-300 hover:scale-105 cursor-pointer group w-[167px]">
  <a
    href="https://wa.me/923215236350"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-sm text-white font-semibold"
  >
    {ctaText}
    <IoIosArrowRoundForward className="ml-1 text-white rotate-[-45deg] w-5 h-5 transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-1"/>
  </a>
</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden border-t border-gray-500 bg-[#07121c] rounded-b-xl overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`p-4 transition-all duration-500 ${
          isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-4'
        }`}>
         
     
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <div 
                key={item.href}
                className={`transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform -translate-x-4'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.dropdownItems ? (
                  <div>
                    <button 
                      className="flex items-center justify-between text-white py-2 w-full hover:text-gray-300 transition-colors"
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="text-gray-400 text-[10px] bg-gray-700 px-2 py-1 rounded">
                            {item.badge}
                          </span>
                        )}
                        <span className={`transform transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                          ▼
                        </span>
                      </div>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="ml-4 space-y-2 mt-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`flex items-center gap-3 text-white py-2 hover:text-gray-300 transition-all duration-300 ${
                            isMobileMenuOpen 
                              ? 'opacity-100 transform translate-x-0' 
                              : 'opacity-0 transform -translate-x-4'
                          }`}
                          style={{
                            transitionDelay: isMobileMenuOpen ? `${(index + 1) * 100 + dropdownIndex * 50}ms` : '0ms'
                          }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.icon}
                          <span>{dropdownItem.label}</span>
                        </Link>
                      ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-white py-2 hover:text-gray-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-gray-400 text-[10px] bg-gray-700 px-2 py-1 rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <div 
              className={`pt-4 border-t border-gray-600 transition-all duration-300 ${
                isMobileMenuOpen 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-4'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 100}ms` : '0ms'
              }}
            >
              <Link
                href={ctaHref}
                className="flex items-center justify-center gap-2 bg-white text-black rounded-full p-3 transition-all duration-300 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-sm font-medium">{ctaText}</span>
                <IoIosArrowRoundForward className="rotate-[-45deg] w-4 h-4" />
                </Link>
            </div>
            </div>
        </div>
      </div>
    </nav>
    );
}