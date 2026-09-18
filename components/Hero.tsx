import CodeWindow from "@/components/CodeWindow";
import ChainTicker from "@/components/ChainTicker";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance Web3 frontend work
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Frontend engineer{" "}
            <span className="text-gradient">shipping on-chain</span> experiences.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            I build dApps with{" "}
            <span className="font-mono text-accent2">Next.js · wagmi · viem</span>{" "}
            and Solidity. Every project below is deployed on{" "}
            <span className="font-mono">Sepolia</span> testnet — connect a
            wallet, click around, and read the source.
          </p>

          <div className="mt-8">
            <ChainTicker />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90"
            >
              View demos
            </a>
            <a
              href={`https://github.com/${
                process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "your-github-username"
              }`}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-accent/50 hover:text-white"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* right: code window */}
        <div className="hidden lg:block">
          <CodeWindow />
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
        <Stat label="Years frontend" value="5+" />
        <Stat label="Web3 focus" value="1 yr" />
        <Stat label="Live demos" value="2" />
        <Stat label="Testnet" value="Sepolia" />
      </dl>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-white/50">
        {label}
      </dt>
      <dd className="mt-1 font-mono text-2xl text-white">{value}</dd>
    </div>
  );
}
