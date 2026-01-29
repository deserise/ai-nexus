import { models } from "@/data/models";
import ModelCard from "@/components/ModelCard";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="space-y-6 max-w-4xl relative z-20">
          <div className="inline-block border border-primary/30 bg-primary/10 px-4 py-1 rounded-full text-primary font-mono text-sm animate-pulse">
            SYSTEM STATUS: OPTIMAL
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_30px_rgba(102,252,241,0.5)]">
            INTELLIGENCE <br /> UNLEASHED
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Explore the frontier of <span className="text-cta font-mono font-bold">Artificial General Intelligence</span>.
            Compare parameters, benchmarks, and capabilities.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <a href="#models" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">EXPLORE MODELS</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all font-mono text-sm">
              VIEW DOCUMENTATION
            </button>
          </div>
        </div>

        {/* Decorative Grid Floor */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
      </section>

      {/* Models Grid Section */}
      <section id="models" className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-3xl font-bold font-mono flex items-center gap-2">
              <span className="text-cta">#</span> AVAILABLE_MODELS
            </h2>
          </div>
          <div className="font-mono text-xs text-secondary hidden md:block">
            INDEXING: {models.length} ITEMS found
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard key={model.id} {...model} />
          ))}
        </div>
      </section>
    </main>
  );
}
