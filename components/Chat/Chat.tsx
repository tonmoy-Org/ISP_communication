'use client';

import { Tooltip, Zoom } from '@mui/material';
import { useState, useEffect } from 'react';

export default function CustomerCare() {
    const [isPulsing, setIsPulsing] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    // WhatsApp integration details
    const whatsappNumber = '+8801609894993';
    const whatsappMessage = 'Hello, I need help with my ISP service';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Stop pulsing after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPulsing(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Tooltip
                title="Need help? Chat with us!"
                arrow
                placement="left"
                TransitionComponent={Zoom}
            >
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Chat bubble */}
                    {isHovered && (
                        <div className="absolute bottom-full right-0 mb-2 w-48 p-3 rounded-lg bg-white shadow-lg border border-gray-200">
                            <p className="text-sm text-gray-700">Hi there! How can we help you today?</p>
                            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
                        </div>
                    )}

                    {/* WhatsApp button with animation */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg transition-all duration-300 ease-in-out hover:bg-[#1DA851] hover:shadow-xl ${isPulsing ? 'animate-pulse' : ''}`}
                        aria-label="Chat on WhatsApp"
                    >
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>

                        {/* Notification badge */}
                        <span className="absolute -top-1 -right-1 flex h-5 w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-red-500 text-xs text-white">1</span>
                        </span>
                    </a>
                </div>
            </Tooltip>
        </div>
    );
}