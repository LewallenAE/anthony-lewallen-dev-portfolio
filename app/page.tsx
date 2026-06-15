import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-slate-950 text-white">
  <div className="fixed inset-0 z-0 pointer-events-none bg-[url('/bg-image2.png')] bg-cover bg-top bg-no-repeat opacity-[0.60]" />
  <div className="fixed inset-0 z-0 pointer-events-none bg-black/40" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 space-y-20">
      
      {/* ── Hero ── */}
      <section className="flex flex-col sm:flex-row gap-10 items-start">
        <div className="shrink-0 flex flex-col items-center gap-3">
        <div className="relative shrink-0 w-28 h-28 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/AL.png" alt="Anthony Lewallen" fill className="object-cover" />
          </div>
          <Image src ="/PennEngineering.png" alt ="The University of Pennsylvania School of Engineering Logo" width={150} height={45} className="opacity-80"></Image>
        </div>
        
        <div>
          <p className="text-white text-lg font-bold mb-1">AI Evaluation Infrastructure Engineer</p>
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">RLHF &nbsp;·&nbsp; RL Environments &nbsp;·&nbsp; Post-Training Pipelines &nbsp;·&nbsp; Model Reliability &nbsp;·&nbsp; Full-Stack Systems
          </p>
          <p className="text-[rgb(0_255_65)] text-xs font-bold mb-1">Python &nbsp;·&nbsp; Go &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; PostgreSQL</p>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            Anthony Lewallen 
          </h1>
          
          <p className="text-[#F4FFF9] leading-relaxed max-w-xl">
            Building ML infrastructure, offensive security tooling, and systems that
            actually ship. Pursuing dual master&apos;s degrees at Penn  — MAS-CS (Software Systems) and MSE-AI. 
          </p>
          <div className="flex gap-5 mt-5">
            <a
              href="https://github.com/LewallenAE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-lewallen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn →
            </a>
            <Link href="/blog" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Binary Architecture Classifier"
            description="Go inference engine classifying random binary fragments by CPU architecture via hex word n-gram TF-IDF + LinearSVC. Solved the Praetorian ML Binaries challenge 11 consecutive times — each run reaching 500 correct predictions with 0 wrong. Ported the trained scikit-learn inference pipeline to pure Go and deployed a React/TypeScript live dashboard on AWS EC2 streaming predictions in real time."
            tech={['Go', 'React', 'TypeScript', 'AWS EC2', 'scikit-learn', 'LinearSVC']}
            github="https://github.com/LewallenAE/go-binary-classifier"
            demo="http://18.116.239.117:8080"
            demoLabel="Live →"
          />
          <ProjectCard
            title="RLHF Eval"
            description="Data quality pipeline for RLHF training data. Seven detectors flagged 7.9% of 160,800 preference pairs from Anthropic's HH-RLHF dataset. Trained competing reward models on clean vs. unfiltered data to measure impact."
            tech={['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'Docker']}
            github="https://github.com/LewallenAE/rlhf-eval"
          />
          <ProjectCard
            title="ScratchLM"
            description="GPT-2 (124M) architecture built from scratch in PyTorch — custom LayerNorm, GELU activation, causal multi-head self-attention, and transformer blocks with pre-norm residual connections. No high-level abstractions."
            tech={['Python', 'PyTorch']}
            github="https://github.com/LewallenAE/ScratchLM"
          />
          <ProjectCard
            title="DV Eval Harness"
            description="LLM evaluation harness for hardware design verification. Drives agents through 5-step debug trajectories against broken RTL, scores reward across 5 components (root cause, evidence quality, tool use, fix plausibility, hallucination), and emits DPO-ready preference pairs. Adapter pattern supports Icarus, Cocotb, Questa, and VCS simulators."
            tech={['Python', 'FastAPI', 'Docker', 'Pydantic', 'Icarus Verilog']}
            github="https://github.com/LewallenAE/dv-eval-harness"
          />
          <ProjectCard
            title="Crystal Hollows"
            description="Full 2D action-RPG demo built from scratch in Godot 4 with zero imported assets. All rendering is programmatic via Godot's _draw() API — procedural maps, multi-phase boss AI, custom dialogue system."
            tech={['Godot 4', 'GDScript']}
            github="https://github.com/LewallenAE/crystal-hollows-demo"
            demo="https://www.loom.com/share/eef0cadf91234394918ba80109cf5c74"
            demoLabel="Watch Demo →"
          />
          <ProjectCard
            title="Crypto Microstructure Research"
            description="Statistical arbitrage research on crypto markets. Screened ~50 pairs via Pearson correlation, applied Augmented Dickey-Fuller cointegration tests, and identified tradeable pairs (LINK-ADA, OP-PEPE) with 20–60 hour mean-reversion half-lives. Includes z-score signal generation and backtesting."
            tech={['Python', 'pandas', 'statsmodels', 'Binance API']}
            github="https://github.com/LewallenAE/crypto_microstructure_research"
          />
        </div>
      </section>

      {/* ── Education ── */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Education
        </h2>
        <div className="space-y-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">University of Pennsylvania</p>
              <p className="text-slate-400 text-sm mt-0.5">Master of Science in Engineering -- Artificial Intelligence</p>
            </div>
            <span className="text-slate-500 text-sm shrink-0 ml-4">In Progress</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">University of Pennsylvania</p>
              <p className="text-slate-400 text-sm mt-0.5">Master of Applied Science in Computer Science -- Software Systems Concentration</p>
            </div>
            <span className="text-slate-500 text-sm shrink-0 ml-4">In Progress</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">American Public University System</p>
              <p className="text-slate-400 text-sm mt-0.5">B.S. Mathematics — Operations Research &nbsp;·&nbsp; Summa Cum Laude</p>
            </div>
            <span className="text-slate-500 text-sm shrink-0 ml-4">2024</span>
          </div>
        </div>
      </section>

    </div>
    </main>
  );
}
