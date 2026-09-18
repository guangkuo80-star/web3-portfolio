export default function Footer() {
  const year = new Date().getFullYear();
  const gh = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "your-github-username";
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN;
  const discord = process.env.NEXT_PUBLIC_DISCORD;

  return (
    <footer className="border-t border-border/60 bg-bg/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 font-mono text-sm">
              web3<span className="text-accent">.portfolio</span>
            </div>
            <p className="text-sm text-white/55">
              Frontend → Smart Contract Engineer.
              <br />
              Building on Sepolia, shipping to production.
            </p>
          </div>

          <div>
            <div className="mb-3 text-xs uppercase tracking-wider text-white/50">
              Contact
            </div>
            <ul className="space-y-1.5 text-sm">
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/70 hover:text-accent"
                  >
                    {email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`https://github.com/${gh}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-accent"
                >
                  github.com/{gh}
                </a>
              </li>
              {linkedin && (
                <li>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {discord && (
                <li className="font-mono text-xs text-white/55">
                  Discord: {discord}
                </li>
              )}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs uppercase tracking-wider text-white/50">
              Freelance
            </div>
            <p className="text-sm text-white/55">
              Open for Upwork / LinkedIn contracts: dApp frontends, wallet
              integration, NFT contracts, chain data dashboards.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center font-mono text-xs text-white/40">
          © {year} · Built with Next.js · Deployed on Vercel · All demos on
          Sepolia testnet
        </div>
      </div>
    </footer>
  );
}
