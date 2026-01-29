import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-primary hover:text-cta transition-colors">
                    <span className="text-secondary">&gt;</span> AI_NEXUS<span className="animate-pulse">_</span>
                </Link>

                <nav className="hidden md:flex gap-8 font-mono text-sm">
                    {["MODELS", "ABOUT", "API"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-foreground/70 hover:text-primary transition-colors hover:shadow-[0_0_10px_var(--color-primary)] px-2 py-1 rounded"
                        >
                            [{item}]
                        </Link>
                    ))}
                </nav>

                <button className="btn-secondary text-xs px-4 py-2 border border-primary/50 hover:bg-primary/10 transition-all font-mono">
                    STATUS: ONLINE
                </button>
            </div>
        </header>
    );
}
