import Image from 'next/image'
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Hero Card */}
      <section className="hero-card">
        <div className="relative w-75 h-75 rounded-2xl oveflow-hidden border-2 border-slate-700 shadow-2xl">
          <Image
            src="/bosshoss.png"
            alt="Anthony Lewallen"
            fill
            className="object-cover"
          />

        </div>
        <h2 className="text-blue-600 font-mono tracking-widget uppercase text-xl mt-6">Fullstack Software Systems & AI Architect</h2>
        <h1 className="text-4xl font-bold mt-2">Anthony Eugene Lewallen</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Fullstack developer focused on building responsive, polished interfaces across TypeScript, Node.js, and Python. Currently pursuing dual Master's degree at Penn (MSA-CS Software Systems Concentration and MSE-AI). Former math teacher turned developer.
        </p>
      </section>

      {/* The Project Card */}
      <section className="projects-inner-container mt-6 rounded-xl">
        

        {/* The "Smaller Box" inner Container (tiles) for project thumbnails */}
        <div className="bg-white/50 p-6 rounded-xl border border-slate-300 shadow-inner mt-6">
        <h2 className="text-2xl font-bold text-center"> Projects </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-600">
            {/* Drop the project tiles here next */}
            <ProjectCard
              title="Guess Word Master"
              description="A high-performance Wordle clone with O(n) logic."
            />
            <ProjectCard
              title="Legacy Portfolio"
              description="The original vanilla JS prototype."
            />           
          </div>
        </div>
      </section>

      <section className="youtube-card-container mt-8 rounded-xl">
        <div className="bg-white/50 p-6 rounded-xl border border-slate-300 shadow-inner mt-6">
        <h2 className="text-2xl font-bold text-center">YouTube</h2>
        </div>
      </section>
    </main>
  );
}
