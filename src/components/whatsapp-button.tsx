
"use client";

import Link from "next/link";

const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-8 w-8"
    >
        <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .2c101.2 0 183.3 82.1 183.3 183.3 0 33.2-8.9 65.7-25.3 93.9l-17.6 30.8 32.4 10.5-44.4 11.7-45.2-11.8-17.6 30.8c-28.2 16.4-59.7 25.3-92.9 25.3-101.2 0-183.3-82.1-183.3-183.3 0-101.2 82.1-183.3 183.3-183.3zM223.9 119.2c-73.4 0-132.8 59.4-132.8 132.8s59.4 132.8 132.8 132.8 132.8-59.4 132.8-132.8-59.4-132.8-132.8-132.8zm67.8 186.4c-3.3 1.4-19.8 9.8-22.8 11-3.1 1.2-5.3 1.7-7.6.9-2.3-.8-15.1-5.6-28.8-17.8-10.7-9.6-18-21.5-20.1-25-2.1-3.5-.4-5.4 1.2-7.1 1.4-1.5 3-3.9 4.5-5.9 1.5-1.9 2-3.5 3-5.9.9-2.4.5-4.5-.2-5.9-1.9-4-8.3-20.1-11.3-27-3.1-6.9-6.2-5.9-8.5-5.9-2.3 0-5 .5-7.6.5-2.6 0-6.9 1.2-10.5 4.5-3.6 3.3-13.7 13.4-13.7 32.8 0 19.4 14 38.1 16 40.8 2 2.7 27.5 44 67.8 59.5 9.9 3.8 17.7 6.1 23.8 7.8 9.9 2.7 18.9 2.3 26.1 1.4 8.1-1 25-10.2 28.5-20.1 3.5-9.9 3.5-18.4 2.4-20.1-1-1.8-3.9-2.9-7.5-4.4z"
        />
    </svg>
);


export function WhatsAppButton() {
    const phoneNumber = "+94775430700"; // Replace with your WhatsApp number
    const message = "Hello! I'm interested in your products."; // Optional pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <WhatsAppIcon />
        </Link>
    );
}
