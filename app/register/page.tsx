"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            router.push("/login?registered=true");
        } else {
            const data = await res.json();
            setError(`REGISTRATION_FAILED: ${data.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10 w-full max-w-md p-8 bg-background/80 backdrop-blur-md border border-cta/30 rounded-sm shadow-[0_0_20px_var(--color-cta)]">
                <h1 className="text-3xl font-bold mb-6 text-center text-cta font-exo tracking-widest">[NEW_IDENTITY]</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-mono text-secondary mb-2">USER_ID (EMAIL)</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-secondary/50 p-3 text-foreground focus:border-cta focus:outline-none transition-colors font-mono"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-secondary mb-2">PASSCODE</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-secondary/50 p-3 text-foreground focus:border-cta focus:outline-none transition-colors font-mono"
                            required
                        />
                    </div>

                    {error && <div className="text-red-500 text-xs font-mono border border-red-500 p-2 bg-red-500/10">{error}</div>}

                    <button
                        type="submit"
                        className="w-full bg-cta/20 border border-cta text-cta py-3 hover:bg-cta hover:text-background transition-all font-bold tracking-widest font-exo"
                    >
                        ESTABLISH_LINK
                    </button>
                </form>

                <div className="mt-6 text-center text-xs font-mono text-secondary">
                    EXISTING_ENTITY? <Link href="/login" className="text-cta hover:underline">ACCESS_TERMINAL</Link>
                </div>
            </div>
        </div>
    );
}
