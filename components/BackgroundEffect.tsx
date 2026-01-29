"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(var(--color-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                }}
            />

            {/* Radial Glow following mouse */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, var(--color-primary), transparent 80%)`,
                    filter: 'blur(100px)',
                }}
            />

            {/* Floating Particles (CSS Animation) */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_var(--color-primary)]" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-cta rounded-full animate-pulse shadow-[0_0_10px_var(--color-cta)]" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_var(--color-secondary)]" style={{ animationDuration: '4s' }}></div>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)] opacity-80"></div>
        </div>
    );
}
