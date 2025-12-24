export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 mix-blend-difference text-white p-6 flex justify-between items-center backdrop-blur-sm bg-transparent">
            <div className="text-3xl font-bold tracking-widest uppercase hover:text-cyan-400 transition-colors cursor-pointer">
                V O I D
            </div>
            <nav className="hidden md:flex space-x-12 text-sm tracking-widest uppercase">
                {['Collections', 'Runway', 'Philosophy'].map((item) => (
                    <a key={item} href="#" className="relative group overflow-hidden">
                        <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                            {item}
                        </span>
                        <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-cyan-400">
                            {item}
                        </span>
                    </a>
                ))}
            </nav>
            <div className="text-sm tracking-widest">
                CART (0)
            </div>
        </header>
    )
}