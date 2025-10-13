import React from 'react';
import Image from 'next/image';
import { HeroJss, HeroStarImage, HeroProfileImg } from '@/assets/images';

export default function ImageExample() {
  return (
    <div className="flex gap-4">
      {/* Using Next.js Image component with SVG URLs */}
      <Image
        src={HeroJss}
        alt="Hero JavaScript illustration"
        width={400}
        height={300}
        className="rounded-lg"
      />
      
      <Image
        src={HeroStarImage}
        alt="Star rating image"
        width={200}
        height={100}
        className="rounded-lg"
      />
      
      <Image
        src={HeroProfileImg}
        alt="Profile image"
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>
  );
}

// Alternative usage with regular img tag (if needed)
export function ImageExampleWithImg() {
  return (
    <div className="flex gap-4">
      <img
        src={HeroJss}
        alt="Hero JavaScript illustration"
        width={400}
        height={300}
        className="rounded-lg"
      />
      
      <img
        src={HeroStarImage}
        alt="Star rating image"
        width={200}
        height={100}
        className="rounded-lg"
      />
      
      <img
        src={HeroProfileImg}
        alt="Profile image"
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>
  );
}

