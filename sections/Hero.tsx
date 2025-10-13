"use client";

import HeroProfile from '@/components/HeroCom1';
import { useState } from 'react';

export default function Hero() {
    const [activeTab, setActiveTab] = useState<'talent' | 'consulting'>('talent');

    return(
        <>
            <div className="flex flex-col items-center justify-start mt-4 md:mt-6 gap-4 py-8 md:py-12 px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-6xl">
                    <h1 className="text-sm md:text-base text-white font-semibold">I'm looking for</h1>
                    
                    <div className="bg-[#252525] border-[0.5px] rounded-full border-white/30 flex w-full md:w-auto">
                        <button
                            onClick={() => setActiveTab('talent')}
                            className={`flex-1 p-2 md:p-3 text-center rounded-full m-1 transition-all duration-300 ${
                                activeTab === 'talent'
                                    ? 'text-[#13AA02] border-2 border-[#13AA02] font-semibold shadow-lg bg-[#13AA02]/10'
                                    : 'text-[#13AA02] hover:bg-gray-700'
                            }`}
                        >
                            <h1 className="text-xs md:text-sm whitespace-nowrap">Talent</h1>
                        </button>
                        <button
                            onClick={() => setActiveTab('consulting')}
                            className={`flex-1 p-2 md:p-3 text-center rounded-full m-1 transition-all duration-300 ${
                                activeTab === 'consulting'
                                    ? 'text-[#13AA02] border-2 border-[#13AA02] font-semibold shadow-lg bg-[#13AA02]/10'
                                    : 'text-[#13AA02]  border-none hover:bg-gray-700'
                            }`}
                        >
                            <h1 className="text-xs md:text-sm whitespace-nowrap">Consulting & Service</h1>
                        </button>
                    </div>

                </div>
                <div className="w-full">
                    {/* Content Area */}
                    <div className="">
                        {activeTab === 'talent' ? (
                           <div>
                            <HeroProfile />
                           </div>
                        ) : (
                            <div className="">
                             Hero 2
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}