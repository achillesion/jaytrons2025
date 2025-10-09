"use client";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaReact, FaWordpress, FaFigma, FaMobile } from "react-icons/fa";
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
  brandName = "Jaytrons",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio", badge: "02" },
    { 
      label: "Services", 
      href: "/services", 
      badge: "03",
      dropdownItems: [
        { label: "React", href: "/services/react", icon: <FaReact className="text-black" /> },
        { label: "WordPress", href: "/services/wordpress", icon: <FaWordpress className="text-black" /> },
        { label: "UI UX", href: "/services/ui-ux", icon: <FaFigma className="text-black" /> },
        { label: "React Native", href: "/services/react-native", icon: <FaReact className="text-black" /> },
        { label: "Ecommerce Store", href: "/services/ecommerce", icon: <MdOutlineShoppingCart className="text-black" /> }
      ]
    },
    { label: "Industries", href: "/industries", badge: "09" }

  ],
  ctaText = "Book a Call",
  ctaHref = "/book-a-call",
  className = ""
}: NavbarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className={`flex justify-between items-center bg-[#07121c] border-[0.5px] h-18 rounded-xl p-4 border-gray-500 ${className}`}>
      <div className="flex items-center">
        <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer">{brandName}</h1>
      </div>
      <div className="flex items-center gap-10 text-sm">
        {navItems.map((item) => (
          item.dropdownItems ? (
            <DropdownMenu key={item.href}>
              <DropdownMenuTrigger asChild>
                <div 
                  className="relative transition-all duration-300 hover:scale-105 flex items-center cursor-pointer"
                  onMouseEnter={(e) => {
                    setHoveredItem(item.href);
                    e.currentTarget.click();
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span 
                      className={`text-gray-400 text-[10px] ml-2 transition-all duration-300 ${
                        hoveredItem === item.href ? 'scale-110' : ''
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-100 flex item-start mt-8 justify-between bg-white p-4" 
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={() => setHoveredItem(null)}
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
              className="relative transition-all duration-300 hover:scale-105 flex items-center"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span 
                  className={`text-gray-400 text-[10px] ml-2 transition-all duration-300 ${
                    hoveredItem === item.href ? 'scale-110' : ''
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          )
        ))}
      </div>
      <div className="flex items-center justify-center  bg-white rounded-full p-2 transition-all duration-300 hover:scale-105 cursor-pointer group">
        <Link href={ctaHref} className="flex items-center text-sm text-black">
          {ctaText}
        </Link>
        <IoIosArrowRoundForward className="text-black rotate-[-45deg] w-5 h-5 transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-1"/>
      </div>
    </div>
  );
}