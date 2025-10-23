"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
// Import individual images
import { HeroJss } from '@/assets/images';
import Card from "@/assets/images/Hero/card.svg"
import Hand from "@/assets/images/Hero/hand.svg"
import ProfilePic from "@/assets/images/Hero/profileImage.svg"
import { FaArrowLeft } from "react-icons/fa";

// Interactive Button Component with Shining Effect
type InteractiveButtonProps = React.PropsWithChildren<{
    className?: string;
    [key: string]: any;
}>;

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ children, className = "", ...props }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonRef.current && isHovered) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            ref={buttonRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {/* Background layer */}
            <div className="absolute inset-0 bg-[#d1d1d1] rounded-full" />
            
            {/* Shining effect overlay - covers full button */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                        rgba(255, 255, 255, 0.9) 0%, 
                        rgba(255, 255, 255, 0.7) 20%, 
                        rgba(255, 250, 205, 0.5) 40%, 
                        rgba(244, 210, 191, 0.3) 60%, 
                        transparent 80%)`,
                    pointerEvents: 'none',
                    borderRadius: '9999px'
                }}
            />
            
            {/* Outer glow effect - extends beyond button */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                        rgba(255, 255, 255, 0.4) 0%, 
                        rgba(255, 250, 205, 0.2) 30%, 
                        transparent 70%)`,
                    pointerEvents: 'none',
                    borderRadius: '9999px',
                    filter: 'blur(10px)',
                    transform: 'scale(1.4)',
                    zIndex: -1
                }}
            />
            
            {/* Button content - stable and on top */}
            <span className="relative z-20 flex items-center justify-center">
                {children}
            </span>
        </button>
    );
};

export default function Hero() {
    return (
        <section className="relative bg-[#090A0C] h-[120vh] md:h-[130vh] w-full overflow-hidden">
            {/* Background Video */}
            <video
                src={"https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404"}
                autoPlay
                loop
                muted
                playsInline
                className="absolute h-full object-cover z-0 w-full left-[50%] lg:left-[54%]"
                style={{
                  
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />

            <div className="relative w-full flex  items-start justify-between max-w-[1080px] m-auto top-40 p-4 md:p-0  h-full ">
                <div className="flex flex-col ">
                    <h1 className="text-white text-5xl md:text-[64px] font-bold ">
                        Hire the <br /><span className="text-[#F66DBC]">Top Rated Plus</span>
                    </h1>
                    <div className="flex items-center  gap-2 mt-[19px]">
                        <Image src={HeroJss} alt="jss" />
                        <h1 className="text-[20px] text-white font-medium">100% Job Success</h1>
                    </div>
                    <InteractiveButton 
                        className="mt-[19px] bg-[#d1d1d1] max-w-[240px] p-2 uppercase text-black font-bold cursor-pointer text-sm rounded-full transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-white/20"
                    >
                        <span className="flex items-center justify-center gap-3">
                           Hire On Upwork
                            <FaArrowLeft className="rotate-160"/>
                        </span>
                    </InteractiveButton>
                    
                    <div className="absolute h-[55%] sm:h-[68%] md:h-[74%] lg:h-[75%] xl:h-[79%] w-full flex md:justify-start lg:justify-start items-end-safe">
                    <Image 
                        src={ProfilePic} 
                        alt="profile"  
                        className="profile-image"
                        style={{
                            width: '85%',
                            marginLeft: '20px'
                        }}
                    />
                    </div>
                  
                </div>
                <Image
                    src={Card}
                    alt="card"
                    width={299}
                    className="opacity-20 hover:opacity-30 mt-10 transition-opacity duration-700 ease-in-out hidden md:block"
                />
            </div>

            <div className="absolute right-0 bottom-0 hidden xl:block">
                <Image src={Hand} alt="hand" />
            </div>
        </section>
    );
}
