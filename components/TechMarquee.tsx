const STACK = [
  "Solidity",
  "Hardhat",
  "Next.js",
  "TypeScript",
  "wagmi",
  "viem",
  "RainbowKit",
  "OpenZeppelin",
  "Etherscan API",
  "IPFS",
  "Sepolia",
  "Tailwind CSS",
];

/**
 * Infinite scrolling tech marquee. Duplicated list + CSS animation for a
 * seamless loop. Purely decorative.
 */
export default function TechMarquee() {
  const row = [...STACK, ...STACK];
  return (
    <div className="relative border-y border-border/70 bg-card/20 py-4">
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          {row.map((name, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-white/55 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
