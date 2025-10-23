"use client";

import Link from "next/link";
import { FaReact, FaWordpress, FaFigma, FaMobile, FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingCart, MdWeb, MdDesignServices } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServicesDropdown = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: ServicesDropdownProps) => {
  
  const vehicles = [
    {
      name: "Model S",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
      learnLink: "/model-s",
      orderLink: "/model-s/order"
    },
    {
      name: "Model 3", 
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
      learnLink: "/model-3",
      orderLink: "/model-3/order"
    },
    {
      name: "Model Y",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png", 
      learnLink: "/model-y",
      orderLink: "/model-y/order"
    },
    {
      name: "Model X",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
      learnLink: "/model-x", 
      orderLink: "/model-x/order"
    },
    {
      name: "Cybertruck",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
      learnLink: "/cybertruck",
      orderLink: "/cybertruck/order"
    },
    {
      name: "Inventory",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S-New.png",
      learnLink: "/inventory",
      orderLink: "/inventory/pre-owned"
    }
  ];

  const navigationLinks = [
    "Current Offers",
    "Demo Drive", 
    "Trade-in",
    "Pre-Owned",
    "Features",
    "Help Me Choose",
    "Compare",
    "Workshops",
    "Help Me Charge",
    "Fleet",
    "Semi",
    "Roadster"
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
      className={`absolute top-10 left-1/2 transform -translate-x-1/2 w-full  rounded-md shadow-xl bg-white text-white transition-all duration-500 ease-out overflow-hidden z-40 ${
        isOpen 
          ? 'h-[60vh] opacity-100 translate-y-0' 
          : 'h-0 opacity-0 -translate-y-full'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-8 h-full max-w-[1202px] mx-auto">
        <div className="flex h-full gap-8">
          {/* Vehicle Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="group cursor-pointer">
                <Image src={vehicle.image} alt="car image"width={200} height={100}/>
                <h3 className="text-lg font-semibold text-black mb-2">{vehicle.name}</h3>
                <div className="flex gap-4">
                  <Link 
                    href={vehicle.learnLink}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Learn
                  </Link>
                  <Link 
                    href={vehicle.orderLink}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Order
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="w-64 border-l border-gray-200 pl-8">
            <div className="space-y-3">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm text-black hover:text-gray-900 transition-colors py-1"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
