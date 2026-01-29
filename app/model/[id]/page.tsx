import { notFound } from "next/navigation";
import { models } from "@/data/models";
import Link from "next/link";
import { use } from "react";

// In Next.js 15, params is a Promise.
// We can use `await params` in async component.
interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ModelPage({ params }: PageProps) {
    const { id } = await params;
    const model = models.find((m) => m.id === id);

    if (!model) {
        notFound();
    }

    return (
        <main className="min-h-screen pb-20 px-6 container mx-auto">
            <Link href="/" className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-8 font-mono text-sm group pt-8">
                <span className="group-hover:-translate-x-1 transition-transform mr-2">&lt;</span> RETURN_TO_GRID
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Info */}
                <div className="lg:col-span-1 space-y-8 animate-[fadeIn_0.5s_ease-out]">
                    <div className="border border-white/10 bg-white/5 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <div className="w-24 h-24 bg-gradient-to-br from-primary to-transparent opacity-20 rounded-full blur-2xl"></div>
                        </div>

                        <div className="font-mono text-secondary text-sm mb-2 tracking-wider">{model.provider.toUpperCase()}</div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">{model.name}</h1>
                        <p className="text-foreground/80 leading-relaxed font-light text-lg">{model.description}</p>

                        <div className="flex flex-wrap gap-2 mt-8">
                            {model.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono border border-white/10 px-3 py-1.5 rounded-full bg-black/40 text-foreground/70">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                            <div className="text-xs font-mono text-foreground/50 mb-2">CONTEXT WINDOW</div>
                            <div className="text-2xl font-bold text-primary font-mono">{model.stats.contextClient}</div>
                        </div>
                        <div className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-cta/50 transition-colors">
                            <div className="text-xs font-mono text-foreground/50 mb-2">PARAMETERS</div>
                            <div className="text-2xl font-bold text-cta font-mono">{model.stats.params}</div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interaction Simulation */}
                <div className="lg:col-span-2 space-y-6 animate-[slideUp_0.7s_ease-out]">
                    {/* Mock Terminal/Chat */}
                    <div className="border border-white/10 bg-[#050505] rounded-xl overflow-hidden shadow-2xl h-[450px] flex flex-col relative group">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:16px_16px] pointer-events-none"></div>

                        {/* Window Bar */}
                        <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between relative z-10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="font-mono text-xs text-foreground/30 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                user@ai-nexus:~
                            </div>
                        </div>

                        <div className="p-6 font-mono text-sm space-y-6 flex-grow overflow-auto relative z-10">
                            <div className="text-secondary/70 italic">
                                <span className="mr-2 text-primary">➜</span>
                                Initialize connection with <span className="text-white font-bold">{model.name}</span>...
                            </div>
                            <div className="text-foreground/40 text-xs">
                                [SYSTEM]: Handshake complete. Encryption: AES-256. Latency: 12ms.
                            </div>

                            <div className="space-y-2">
                                <div className="text-foreground/60 text-xs uppercase tracking-widest mb-1">USER QUERY</div>
                                <div className="text-cta p-3 bg-cta/5 rounded border-l-2 border-cta">
                                    Explain the concept of "Singularity" in 50 words.
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-foreground/60 text-xs uppercase tracking-widest mb-1">RESPONSE</div>
                                <div className="text-foreground pl-4 border-l-2 border-primary/50 py-1">
                                    <span className="text-primary font-bold">{model.name}:</span> The Singularity refers to a hypothetical future point where technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization. It is often associated with artificial superintelligence surpassing human cognitive abilities, potentially leading to a rapid intelligence explosion.
                                    <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-pulse align-middle"></span>
                                </div>
                            </div>
                        </div>

                        {/* Scanline */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-[2px] w-full animate-[scan_4s_linear_infinite] opacity-50"></div>
                    </div>

                    {/* Sample Code Snippet */}
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6 font-mono text-xs relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="text-foreground/50 mb-4 border-b border-white/5 pb-2 flex justify-between">
                            <span>API_INTEGRATION.js</span>
                            <span className="text-secondary">JAVASCRIPT</span>
                        </div>
                        <pre className="text-white/80 overflow-x-auto">
                            {`// Initialize Client
import { ${model.provider.replace(/\s+/g, '')} } from '@ai-sdk/${model.provider.toLowerCase().replace(/\s+/g, '-')}'

const client = new ${model.provider.replace(/\s+/g, '')}({
  apiKey: process.env.API_KEY,
  model: '${model.id}' // ${model.name}
});

// Execute Prompt
const response = await client.chat.completions.create({
  messages: [{ role: 'user', content: 'Hello World' }],
  temperature: 0.7
});`}
                        </pre>
                    </div>
                </div>
            </div>
        </main>
    );
}
