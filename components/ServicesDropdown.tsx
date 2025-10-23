"use client";

import Link from "next/link";
import { FaReact, FaWordpress, FaFigma, FaMobile, FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCart, MdWeb, MdDesignServices } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServicesDropdown = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: ServicesDropdownProps) => {
  

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div 
      className={`fixed top-30 left-50 w-[1100px] rounded-md shadow-xl  bg-white transition-all duration-500 ease-out overflow-hidden z-40 ${
        isOpen 
          ? 'h-[50vh] opacity-100 translate-y-0' 
          : 'h-0 opacity-0 -translate-y-full'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Hello
    </div>
  );
};

export default ServicesDropdown;
