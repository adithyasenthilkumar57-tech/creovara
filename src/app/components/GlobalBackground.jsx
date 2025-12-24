"use client";

import { useEffect, useState } from 'react';

export default function GlobalBackground() {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // Generate random bubbles on client side only to avoid hydration mismatch
        const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 20}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Split Gradient Background: Left side Purple, Right side Blue/Cyan */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] to-[#0f172a]"></div>

            {/* Floating Bubbles */}
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="absolute bottom-[-150px] rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-float-up"
                    style={{
                        left: bubble.left,
                        width: bubble.width,
                        height: bubble.width, // Make it a circle
                        animationDuration: bubble.animationDuration,
                        animationDelay: bubble.animationDelay,
                    }}
                />
            ))}

            <style jsx>{`
                @keyframes float-up {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-120vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                .animate-float-up {
                    animation-name: float-up;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </div>
    );
}
