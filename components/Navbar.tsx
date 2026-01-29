import Link from "next/link";
import { auth, signOut } from "@/auth.config";

export default async function Navbar() {
    const session = await auth();
    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-primary hover:text-cta transition-colors">
                    <span className="text-secondary">&gt;</span> AI_NEXUS<span className="animate-pulse">_</span>
                </Link>

                <div className="flex items-center gap-4">
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

                    <div className="flex gap-4 text-xs font-mono items-center">
                        {session ? (
                            <>
                                {(session.user as any)?.isAdmin && (
                                    <Link href="/admin" className="text-red-500 hover:text-red-400 border border-red-500/50 px-2 py-1">
                                        [ADMIN]
                                    </Link>
                                )}
                                <span className="text-primary hidden sm:inline">{session.user?.email?.split('@')[0]}</span>
                                <form action={async () => {
                                    "use server";
                                    await signOut();
                                }}>
                                    <button className="text-secondary hover:text-foreground hover:underline">
                                        LOGOUT
                                    </button>
                                </form>
                            </>
                        ) : (
                            <Link href="/login" className="btn-secondary px-4 py-2 border border-primary/50 hover:bg-primary/10 transition-all">
                                LOGIN
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
