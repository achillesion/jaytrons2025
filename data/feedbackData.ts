export interface Feedback {
    id: number;
    title: string;
    rating: number;
    dateRange: string;
    testimonial: string;
    totalAmount: string;
    hourlyRate: string;
    totalHours: string;
}

export const feedbackData = {
    feedbacks: [
        {
            id: 1,
            title: "GNP1.1 Revisions to the website",
            rating: 5.0,
            dateRange: "Mar 1, 2024 - Jan 16, 2025",
            testimonial: "Ahmad is a very good designer who is able to meet tight deadlines. I would recommend him for any of your projects.",
            totalAmount: "$21,170.00",
            hourlyRate: "$30.00 /hr",
            totalHours: "706 hours"
        },
        {
            id: 2,
            title: "Frontend Developer for E-commerce Platform",
            rating: 4.8,
            dateRange: "Dec 15, 2023 - Feb 28, 2024",
            testimonial: "Excellent work on the React implementation. Very responsive and delivered high-quality code.",
            totalAmount: "$2,450.00",
            hourlyRate: "$25.00 /hr",
            totalHours: "98 hours"
        },
        {
            id: 3,
            title: "Full Stack Development for Startup",
            rating: 5.0,
            dateRange: "Sep 1, 2023 - Nov 30, 2023",
            testimonial: "Outstanding developer with great communication skills. Will definitely work with again.",
            totalAmount: "$3,200.00",
            hourlyRate: "$20.00 /hr",
            totalHours: "160 hours"
        }
    ]
};
