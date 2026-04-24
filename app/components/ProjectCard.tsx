// app/components/ProjectCard.tsx


interface ProjectCardProps {
    title: string;
    description: string;
    // link: string; // Future Proofing: this is ready to uncomment out later.
}

export default function ProjectCard ({ title, description }: ProjectCardProps) {
return (
    <div className="p-6 bg-white rounded-lg border border-slate-200 hover:rotate-[0.75deg] hover:-translate-y-4 hover:z-20 transition-all shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] duration-300 cursor-pointer">
    <h3 className="font-bold text-xl">{title}</h3>
    <p className="text-slate-500 text-sm mt-2">{description}</p>
    </div>
);
}