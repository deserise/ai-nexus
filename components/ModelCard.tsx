"use client";

import Link from "next/link";

interface ModelCardProps {
    id: string;
    name: string;
    provider: string;
    description: string;
    tags: string[];
    stats: {
        contextClient: string;
        params: string;
    };
}

export default function ModelCard({ id, name, provider, description, tags, stats }: ModelCardProps) {
    return (
        <Link href={`/model/${id}`} className="block group">
            <div className="relative h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(102,252,241,0.2)] hover:-translate-y-1">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-primary drop-shadow-[0_0_5px_var(--color-primary)]"></div>
                </div>

                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="text-xs font-mono text-secondary mb-1">{provider.toUpperCase()}</div>
                            <h3 className="text-xl font-bold font-sans text-foreground group-hover:text-primary transition-colors">{name}</h3>
                        </div>
                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-mono text-xs text-cta">
                            AI
                        </div>
                    </div>

                    <p className="text-sm text-foreground/70 mb-6 flex-grow font-mono leading-relaxed">
                        {description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-mono text-foreground/50 border-t border-white/5 pt-4">
                        <div>CTX: <span className="text-foreground">{stats.contextClient}</span></div>
                        <div>PRM: <span className="text-foreground">{stats.params}</span></div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] uppercase px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Scanning line effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10px] w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>
            </div>
        </Link>
    );
}
