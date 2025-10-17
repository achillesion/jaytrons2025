import React from "react";
import Image from "next/image";
// Import individual images
import { HeroJss, HeroStarImage, HeroProfileImg, HeroCTAArrow } from '@/assets/images';

import ProfilePic from "@/assets/images/Hero/profileImage.svg"
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero2: React.FC = () => (
  <section className="relative bg-[#090A0C] h-[100vh] w-full overflow-hidden">
    {/* Background Video */}
    <video
      src={"https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404"}
      autoPlay
      loop
      muted
      playsInline
      className="absolute h-full object-cover z-0 w-[50vh] md:w-[100%] lg:w-[80%] xl:w-[80%]"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    />
    <div className="w-200 relative flex items-center justify-center h-full">
      <Image
        src={ProfilePic}
        className="absolute w-120 left-0 bottom-40"
       alt="Visit Upwork Profile"
      />
     

    </div>
  </section>
);

export default Hero2;
