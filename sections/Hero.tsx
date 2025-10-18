import React from "react";
import Image from "next/image";
// Import individual images
import { HeroJss } from '@/assets/images';
import Card from "@/assets/images/Hero/card.svg"
import Hand from "@/assets/images/Hero/hand.svg"
import ProfilePic from "@/assets/images/Hero/profileImage.svg"

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

            <div className="relative w-full flex  items-start justify-between max-w-[1100px] m-auto top-40 p-4 md:p-0  h-full ">
                <div className="flex flex-col ">
                    <h1 className="text-white text-5xl md:text-[64px] font-bold ">
                        Hire the <br /><span className="text-[#F66DBC]">Top Rated Plus</span>
                    </h1>
                    <div className="flex items-center  gap-2 mt-[19px]">
                        <Image src={HeroJss} alt="jss" />
                        <h1 className="text-[20px] text-white font-medium">100% Job Success</h1>
                    </div>
                    <button className="glow-button relative mt-[19px] bg-[#d1d1d1] max-w-[240px] p-2 uppercase text-black font-bold cursor-pointer text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.8)] hover:shadow-orange-400/60">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Hire on Upwork
                            <span className="text-[#8B4513] text-lg">→</span>
                        </span>
                    </button>
                    
                    <Image src={ProfilePic } alt="profile"  className=" w-250 md:w-180 ml-0 md:ml-8 mt-40 md:mt-40
                     lg:ml-35 lg:w-240 xl:w-230 xl:mt-50 xl:ml-30"/>
                  
                </div>
                <Image
                    src={Card}
                    alt="card"
                    width={299}
                    className="opacity-20 hover:opacity-30 mt-10 transition-opacity duration-700 ease-in-out hidden md:block"
                />
            </div>

            <div className="absolute right-0 bottom-0 hidden lg:block">
                <Image src={Hand} alt="hand" />
            </div>
        </section>
    );
}
