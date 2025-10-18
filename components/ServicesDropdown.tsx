"use client";

import Link from "next/link";
import { FaReact, FaWordpress, FaFigma, FaMobile } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServicesDropdown = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: ServicesDropdownProps) => {
  const dropdownItems = [
    { label: "React", href: "react-development", icon: <FaReact className="text-white" /> },
    { label: "WordPress", href: "wordpress-development", icon: <FaWordpress className="text-white" /> },
    { label: "UI UX", href: "ui-ux-design", icon: <FaFigma className="text-white" /> },
    { label: "React Native", href: "react-native-development", icon: <FaReact className="text-white" /> },
    { label: "Ecommerce Store", href: "ecommerce-development", icon: <MdOutlineShoppingCart className="text-white" /> }
  ];

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
      className={`fixed top-0 left-0 w-screen bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden z-40 ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ 
        top: '100%',
        left: '0',
        width: '100vw'
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Services Overview */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h2>
              <p className="text-gray-600 text-sm">
                Comprehensive software development solutions tailored to your business needs. 
                Need a different solution? <Link href="/contact" className="text-[#13AA02] underline hover:no-underline">Contact us</Link>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {dropdownItems.map((dropdownItem, index) => (
                <button
                  key={dropdownItem.href}
                  onClick={() => {
                    smoothScrollTo(dropdownItem.href);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 text-left group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#13AA02] transition-colors duration-200">
                    {dropdownItem.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{dropdownItem.label}</h3>
                    <p className="text-gray-500 text-xs">Learn more</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Why Choose Jaytrons?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13AA02] rounded-full"></div>
                  100% Job Success Rate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13AA02] rounded-full"></div>
                  Modern Technology Stack
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13AA02] rounded-full"></div>
                  Scalable Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#13AA02] rounded-full"></div>
                  24/7 Support
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Quick Actions</h3>
              <div className="flex flex-col gap-2">
                <button className="text-left text-sm text-gray-600 hover:text-[#13AA02] transition-colors">
                  Get Free Quote
                </button>
                <button className="text-left text-sm text-gray-600 hover:text-[#13AA02] transition-colors">
                  View Portfolio
                </button>
                <button className="text-left text-sm text-gray-600 hover:text-[#13AA02] transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
