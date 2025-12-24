"use client";
export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-md text-white p-12 md:p-24 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                <div className="text-left">
                    <h2 className="text-[12vw] leading-none font-bold tracking-tighter opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default select-none">
                        FUTURE
                    </h2>
                    <h2 className="text-[12vw] leading-none font-bold tracking-tighter text-transparent stroke-white stroke-2 opacity-50 ml-12 md:ml-24">
                        READY
                    </h2>
                </div>
                <div className="mt-12 md:mt-0 flex flex-col space-y-4 text-right">
                    <span className="uppercase tracking-widest text-xs text-zinc-500">Contact</span>
                    <a href="mailto:hello@Adithya.fashion" className="text-xl hover:text-cyan-400 transition-colors">hello@void.fashion</a>
                </div>
            </div>

            <div className="flex justify-between items-center text-xs text-zinc-600 uppercase tracking-widest border-t border-zinc-900 pt-8">
                <div>© 2025 Adithya INC.</div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Discord</a>
                </div>
            </div>
            <style jsx>{`
                .stroke-white {
                    -webkit-text-stroke: 1px white;
                }
            `}</style>
        </footer>
    )
}