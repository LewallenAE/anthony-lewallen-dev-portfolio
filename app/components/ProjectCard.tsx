interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
}

export default function ProjectCard({ title, description, tech, github, demo, demoLabel }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.05]">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(t => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/25 transition-colors"
        >
          GitHub →
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 transition-colors"
          >
            {demoLabel ?? 'Live Demo →'}
          </a>
        )}
      </div>
    </div>
  );
}
