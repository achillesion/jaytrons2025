import feedbackData from '../data/feedbackData.json';

interface Feedback {
    id: number;
    title: string;
    rating: number;
    dateRange: string;
    testimonial: string;
    totalAmount: string;
    hourlyRate: string;
    totalHours: string;
}

export default function Feedback() {
    const { feedbacks } = feedbackData as { feedbacks: Feedback[] };

    return(
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <h1 className="text-center w-full text-lg md:text-xl lg:text-[36px] font-extrabold text-[#10AB01]">
                        Ratings & Feedback
                    </h1>
                    <div className="flex flex-col gap-6 w-full max-w-4xl">
                        {feedbacks.map((feedback) => (
                            <div key={feedback.id} className="bg-none p-6  border-r border-l border-b border-white/10">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#10AB01] font-semibold text-lg">
                                            {feedback.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-300">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-orange-400 ${i < Math.floor(feedback.rating) ? '' : 'opacity-30'}`}>
                                                        ★
                                                    </span>
                                                ))}
                                                <span className="ml-1">{feedback.rating}</span>
                                            </div>
                                            <span>{feedback.dateRange}</span>
                                            <button className="border border-[#10AB01] p-2 rounded-full">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path className='text-[#10AB01]' strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <blockquote className="text-white italic text-base leading-relaxed">
                                        "{feedback.testimonial}"
                                    </blockquote>
                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                        <span className="font-semibold text-white">{feedback.totalAmount}</span>
                                        <span>{feedback.hourlyRate}</span>
                                        <span>{feedback.totalHours}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}