"use client"
import React from "react";
import { InlineWidget } from "react-calendly";

const BookingWidget = () => {
  return (
    <div className="fixed z-20  flex items-center justify-center  bg-opacity-50 bottom-0 right-0">
      <InlineWidget url="https://calendly.com/fiver1faizan" />
    </div>
  );
};

export default BookingWidget;