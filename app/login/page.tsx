"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("ACCESS DENIED: Invalid credentials");
        } else {
            router.push("/");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10 w-full max-w-md p-8 bg-background/80 backdrop-blur-md border border-primary/30 rounded-sm shadow-[0_0_20px_var(--color-primary)]">
                <h1 className="text-3xl font-bold mb-6 text-center text-primary font-exo tracking-widest">[SYSTEM_LOGIN]</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-mono text-secondary mb-2">USER_ID (EMAIL)</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-secondary/50 p-3 text-foreground focus:border-primary focus:outline-none transition-colors font-mono"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-secondary mb-2">PASSCODE</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-secondary/50 p-3 text-foreground focus:border-primary focus:outline-none transition-colors font-mono"
                            required
                        />
                    </div>

                    {error && <div className="text-cta text-xs font-mono border border-cta p-2 bg-cta/10">{error}</div>}

                    <button
                        type="submit"
                        className="w-full bg-primary/20 border border-primary text-primary py-3 hover:bg-primary hover:text-background transition-all font-bold tracking-widest font-exo"
                    >
                        INITIATE_SESSION
                    </button>
                </form>

                <div className="mt-6 text-center text-xs font-mono text-secondary">
                    NEW_USER? <Link href="/register" className="text-primary hover:underline">CREATE_IDENTITY</Link>
                </div>
            </div>
        </div>
    );
}
