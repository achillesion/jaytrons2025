"use client";

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import type { Feedback } from '../data/feedbackData';

interface FeedbackModalProps {
    feedback: Feedback | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function FeedbackModal({ feedback, isOpen, onClose }: FeedbackModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 200);
    };

    if (!feedback || !isOpen) return null;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            
            {/* Modal */}
            <div className={`relative bg-[#181818] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
                isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
            }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-lg font-medium text-white pr-4 leading-tight">{feedback.title}</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 cursor-pointer hover:text-white transition-colors p-1"
                    >
                        <IoClose size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Job Timeline and Earnings */}
                    <div className="flex items-start justify-between">
                        <span className="text-gray-300 text-sm">{feedback.dateRange}</span>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-white text-sm">{feedback.totalHours}</span>
                            <span className="text-white text-sm">{feedback.hourlyRate}</span>
                            <span className="text-white text-sm">{feedback.totalAmount} earned</span>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="border-t border-white/10"></div>

                    {/* Job Feedback Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Job feedback</h3>
                        
                        {/* Client's Feedback */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-300 font-medium">Client's feedback</span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-sm">★</span>
                                    ))}
                                    <span className="text-sm text-gray-300 ml-1">5.0</span>
                                </div>
                            </div>
                        </div>

                        {/* Freelancer's Feedback */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-300 font-medium">Freelancer's feedback to the client</span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-sm">★</span>
                                    ))}
                                    <span className="text-sm text-gray-300 ml-1">5.0</span>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed ml-0">
                                It was a pleasure working with Spencer and his team. Highly recommended!
                            </p>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="border-t border-white/10"></div>

                    {/* Job Details */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Job details</h3>
                        <div className="space-y-3">
                            <p className="text-gray-300 text-sm">
                                This job is private
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end p-6 border-t border-white/10">
                    <button
                        onClick={handleClose}
                        className="bg-[#10AB01] hover:bg-[#13AA02] cursor-pointer text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
