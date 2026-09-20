import Link from "next/link";

export default function Header() {
  const gh =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || "guangkuo80-star";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-sm tracking-tight">
            web3<span className="text-accent">.portfolio</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#projects"
            className="text-white/70 transition hover:text-white"
          >
            Projects
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={`https://github.com/${gh}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-accent/50 bg-accent/10 px-3 py-1.5 text-accent transition hover:bg-accent/20"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
