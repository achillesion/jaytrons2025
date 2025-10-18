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
      <div className="fixed bottom-6 right-6 z-20">
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
          className="fixed inset-0 z-100 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Schedule a Meeting</h2>
              <button
                onClick={handleClosePopup}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <InlineWidget url="https://calendly.com/achillesion/new-meeting" />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingWidget;