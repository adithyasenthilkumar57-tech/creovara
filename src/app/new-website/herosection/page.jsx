"use client";

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent">
            {/* Split Background Gradient - Keeping lightweight tint but relying on global */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent z-0"></div>

            {/* Futuristic Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Animated Gradient Background Element (retained from original) */}
            <div className="absolute inset-0 opacity-30 mix-blend-color-dodge">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#0891b2_100%)] animate-spin-slow blur-3xl"></div>
            </div>

            {/* Floating Particles/Details */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <div className="absolute top-20 right-20 text-[10px] text-cyan-500/50 font-mono tracking-widest vertical-text">
                SYS.READY // V.2.0.25
            </div>

            <div className="z-10 text-center relative mix-blend-exclusion">
                <h1 className="text-[15vw] font-black leading-none tracking-tighter hover:skew-x-12 transition-transform duration-500 cursor-default select-none group">
                    <span className="inline-block group-hover:text-cyan-400 transition-colors duration-300">AVANT</span>
                </h1>
                <h1 className="text-[15vw] font-black leading-none tracking-tighter text-transparent stroke-cyan-400 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default select-none">
                    GARDE
                </h1>
            </div>

            <div className="absolute bottom-12 w-full flex justify-between px-12 uppercase text-xs tracking-[0.2em] text-cyan-400 font-mono z-20">
                <div className="flex flex-col items-start gap-1">
                    <span>Vol. 01 — Genesis</span>
                    <span className="text-[10px] opacity-50">Coords: 34.0522° N, 118.2437° W</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="animate-pulse">Scroll to Explore</span>
                    <div className="w-[1px] h-8 bg-cyan-400 mt-2"></div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span>2025 Collection</span>
                    <span className="text-[10px] opacity-50">Status: Online</span>
                </div>
            </div>

            <style jsx>{`
                .stroke-cyan-400 {
                    -webkit-text-stroke: 2px #22d3ee;
                }
                .vertical-text {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </section>
    );
}
