
"use client";

import Link from "next/link";
import Image from "next/image";

export function WhatsAppButton() {
    const phoneNumber = "+94775430700"; // Replace with your WhatsApp number
    const message = "Hello! I'm interested in your products."; // Optional pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-transparent text-white p-0 rounded-full shadow-lg hover:bg-transparent transition-colors duration-300 flex items-center justify-center w-16 h-16"
            aria-label="Chat on WhatsApp"
        >
            <Image 
                src="https://content-provider.payshia.com/nelis-global/icons8-whatsapp.gif"
                alt="WhatsApp chat"
                width={64}
                height={64}
                className="rounded-full"
            />
        </Link>
    );
}
