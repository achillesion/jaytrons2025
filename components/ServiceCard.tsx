import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import codeImage from "@/assets/images/services/code.jpg"

interface servicecardData{
  image: string,
  title: string,
  description: string,
  price: string,
  tags: [],
}
const ServiceCard = ({}) => {
  return (
    <Card className="bg-[#121212] cursor-pointer border-none overflow-hidden hover:border-[#10AB01] transition-all duration-300 rounded-2xl">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={codeImage} 
          alt="Modern React Website Development"
          fill
          className="object-cover"
        />
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 bg-black/70 text-sm text-white px-3 py-1 rounded-md">
          Web Development
        </div>

        {/* Rating */}
        <div className="absolute top-3 left-3 flex items-center bg-black/70 text-yellow-400 px-2 py-1 rounded-md text-sm">
          <Star size={14} className="mr-1 fill-yellow-400" />
          4.9 (24)
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white">
          Modern React Website Development
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400">
          I will create a modern, responsive website using React and Next.js
          with TypeScript, featuring stunning UI and optimized performance.
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {["React", "Next.js", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          <p className=" flex flex-col text-sm text-gray-300">
            Starting at <span className="text-[#10AB01] font-semibold text-2xl">$500</span>
          </p>
          <Button className="bg-[#10AB01] hover:bg-green-800 text-white  font-semibold rounded-md px-4 py-2">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
