"use client";
import Link from 'next/link';

export default function NewWebsitePage() {
    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden">

            {/* HEADER IS IMPORTED IN PARENT, BUT WE NEED TO ENSURE LAYOUT WORKS */}
            {/* Assuming parent layout handles Header placement. We focus on content here. */}

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#0891b2_100%)] animate-spin-slow"></div>
                </div>

                <div className="z-10 text-center relative mix-blend-exclusion">
                    <h1 className="text-[15vw] font-black leading-none tracking-tighter hover:skew-x-12 transition-transform duration-500 cursor-none">
                        AVANT
                    </h1>
                    <h1 className="text-[15vw] font-black leading-none tracking-tighter text-transparent stroke-cyan-400 opacity-50 hover:opacity-100 transition-opacity duration-300">
                        GARDE
                    </h1>
                </div>

                <div className="absolute bottom-12 w-full flex justify-between px-12 uppercase text-xs tracking-[0.2em] text-cyan-400">
                    <span>Vol. 01 — Genesis</span>
                    <span className="animate-pulse">Scroll to Explore</span>
                    <span>2025 Collection</span>
                </div>
            </section>

            {/* MARQUEE SECTION */}
            <div className="bg-cyan-400 text-black py-4 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-4xl font-bold uppercase mx-8 italic">
                            Trend Alert: Neo-Cybernetics / Neural-Link / Hollow-Shell / Chromatic-Skin /
                        </span>
                    ))}
                </div>
            </div>

            {/* TRENDING ITEMS GRID */}
            <section className="py-32 px-6 md:px-12 bg-zinc-950">
                <div className="flex justify-between items-end mb-24 border-b border-zinc-800 pb-8">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
                        TRENDING
                        <span className="block text-2xl text-zinc-500 font-normal mt-4 tracking-widest font-mono">
                    // CURRENT_OBSESSIONS
                        </span>
                    </h2>
                    <button className="hidden md:block border border-zinc-700 px-8 py-4 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        View Archive
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* ITEM 1 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-zinc-800">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                            alt="Neon Trench"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 saturate-0 group-hover:saturate-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold mb-2">Neon Trench</h3>
                            <p className="text-cyan-400 font-mono text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Smart-Fabric / Waterproof / Glow
                            </p>
                            <div className="flex justify-between items-center border-t border-zinc-700 pt-4">
                                <span>$1,200.00</span>
                                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-black transition-colors">
                                    ↗
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-zinc-800 lg:translate-y-24">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                            alt="Void Walkers"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 saturate-0 group-hover:saturate-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold mb-2">Void Walkers</h3>
                            <p className="text-cyan-400 font-mono text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Anti-Gravity Soles / Self-Lacing
                            </p>
                            <div className="flex justify-between items-center border-t border-zinc-700 pt-4">
                                <span>$850.00</span>
                                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-black transition-colors">
                                    ↗
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 3 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-zinc-800">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                            alt="Data Visor"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 saturate-0 group-hover:saturate-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold mb-2">Data Visor</h3>
                            <p className="text-cyan-400 font-mono text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                HUD Display / UV Protection
                            </p>
                            <div className="flex justify-between items-center border-t border-zinc-700 pt-4">
                                <span>$450.00</span>
                                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-black transition-colors">
                                    ↗
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE TEXTURE SECTION */}
            <section className="py-40 bg-black relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-10 pointer-events-none">
                    {[...Array(400)].map((_, i) => (
                        <div key={i} className="border border-zinc-800 aspect-square"></div>
                    ))}
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                        "Fashion is the armor to survive the reality of everyday life."
                    </h2>
                    <p className="text-cyan-400 font-mono tracking-widest uppercase">
                        — Bill Cunningham [Digitized]
                    </p>
                </div>
            </section>

            <style jsx global>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
        .stroke-cyan-400 {
            -webkit-text-stroke: 2px #22d3ee;
        }
      `}</style>
        </div>
    );
}
