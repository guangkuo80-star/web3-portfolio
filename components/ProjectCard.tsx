import type { Project } from "@/lib/projects";

const statusStyles: Record<Project["status"], { label: string; cls: string }> =
  {
    live: {
      label: "● Live",
      cls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    wip: {
      label: "◐ In progress",
      cls: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    planned: {
      label: "○ Planned",
      cls: "bg-white/5 text-white/50 border-white/10",
    },
  };

export default function ProjectCard({ project }: { project: Project }) {
  const s = statusStyles[project.status];
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card/60 p-6 transition hover:border-accent/40 hover:bg-card">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${s.cls}`}
        >
          {s.label}
        </span>
      </div>

      <p className="mb-4 text-sm text-white/70">{project.tagline}</p>
      <p className="mb-5 text-sm leading-relaxed text-white/55">
        {project.description}
      </p>

      <ul className="mb-5 space-y-1.5 text-xs text-white/60">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded border border-border bg-bg/50 px-2 py-0.5 font-mono text-[10px] text-white/60"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-border pt-4 text-sm">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-3.5 py-1.5 font-medium text-white transition hover:bg-accent/90"
          >
            Live demo
          </a>
        ) : (
          <span className="rounded-md border border-border bg-bg/40 px-3.5 py-1.5 font-medium text-white/40">
            Demo soon
          </span>
        )}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-bg/40 px-3.5 py-1.5 font-medium text-white/80 transition hover:border-accent/40 hover:text-white"
          >
            Source
          </a>
        ) : (
          <span className="rounded-md border border-border bg-bg/40 px-3.5 py-1.5 font-medium text-white/40">
            Repo soon
          </span>
        )}
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-white/40">
          {project.network}
        </span>
      </div>
    </article>
  );
}
