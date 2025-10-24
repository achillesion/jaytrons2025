"use client"
import React, { useState, useEffect } from "react";
import { InlineWidget, PopupWidget } from "react-calendly";
import BookingImage from "@/assets/images/widget/widget.png"
import Image from "next/image";
const BookingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Custom Button */}
      <div className="fixed bottom-22 md:bottom-6 right-6 z-20">
        <button
          onClick={handleOpenPopup}
          className="bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-full text-white p-4  shadow-lg transition-all duration-200 flex items-center space-x-3 min-w-[280px]"
        >
          {/* Profile Picture */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            <Image src={BookingImage} alt="booking image" className="rounded-full"/>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col items-start">
            <span className="text-white font-medium text-base">Ahmad Bashir</span>
            <span className="text-gray-300 text-sm underline">Book a 15min Call</span>
          </div>
        </button>
      </div>

      {/* Popup Widget */}
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-opacity-30 backdrop-blur-lg"
          style={{ overflow: "hidden" }}
          onClick={handleClosePopup}
        >
          <div
            className="w-[1100px] max-h-full overflow-hidden rounded-xl"
            
            onClick={(e) => e.stopPropagation()}
          >
            <InlineWidget
              url="https://calendly.com/achillesion/new-meeting"
              styles={{
                height: "80vh",
                minHeight: "500px",
                overflow: "hidden"
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '4F46E5',
                textColor: '24262D'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingWidget;