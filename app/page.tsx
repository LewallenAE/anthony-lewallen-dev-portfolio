import Image from 'next/image'
import ProjectCard from './components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#331F1B] min-h-screen p-8 max-w-4xl mx-auto">
      {/* Hero Card */}
      <section className="hero-card">
        <div className="relative w-75 h-75 rounded-2xl oveflow-hidden border-2 border-slate-700 shadow-2xl">
          <Image
            src="/AL.png"
            alt="Anthony Lewallen"
            fill
            className="object-cover"
          />

        </div>
        <h2 className="text-[#706887] font-mono tracking-widget uppercase text-xl mt-6">Applied AI Research Engineer</h2>
        <h1 className="text-4xl font-bold mt-2">Anthony Eugene Lewallen</h1>
        <p className="mt-4 text-[#BEB1CC] leading-relaxed">
          Applied AI research engineer building adversarial benchmarks, RL environments, and RLHF infrastructure for frontier model post-training. Currently pursuing dual master's degrees at Penn MAS-CS AI and MSE-AI
        </p>
      </section>

      {/* The Project Card */}
      <section className="projects-inner-container mt-6 rounded-xl">
        

        {/* The "Smaller Box" inner Container (tiles) for project thumbnails */}
        <div className="bg-[#261B33] p-6 rounded-xl border border-slate-300 shadow-inner mt-6">
        <h2 className="text-2xl font-bold text-center"> Projects </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-600">
            {/* Drop the project tiles here next */}
            <ProjectCard
              title="rlhf-eval"
              description="Reinforcement Learning with Human Feedback Evaluation Framework for LLMs."
            />
            <ProjectCard
              title="Guess Word Master"
              description="A high-performance Wordle clone with O(n) logic."
            />
            <ProjectCard
              title="DV-eval-harness"
              description="A protoptype for a design verification evaluation harness for LLMs."
            />           
          </div>
        </div>
      </section>
      <section className="blog-post-card-container mt-8 rounded-xl">
        <div className="bg-[#261B33] p-6 rounded-xl border border-slate-300 shadow-inner mt-6">
          <Link href="/blog">
            <h2 className="text-2xl font-bold text-center">Blog</h2>
          </Link>
        </div>
      </section>
      <section className="youtube-card-container mt-8 rounded-xl">
        <div className="bg-[#261B33] p-6 rounded-xl border border-slate-300 shadow-inner mt-6">
        <h2 className="text-2xl font-bold text-center">YouTube
          <p>Coming Soon</p>
        </h2>
        </div>
      </section>
    </main>
  );
}
