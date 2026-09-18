/**
 * A faux editor window showing the actual wagmi mint call used in the
 * NFT Gallery demo. Purely decorative — sells the "I write web3 code" vibe.
 */
export default function CodeWindow() {
  return (
    <div className="glow-border relative overflow-hidden rounded-xl border border-border bg-[#0d0d14]/90 shadow-2xl backdrop-blur">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border/70 bg-white/[0.02] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-[11px] text-white/40">
          MintPanel.tsx — web3-nft-gallery
        </span>
      </div>

      {/* code */}
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed">
        <code>
          <Line n={1}>
            <K>const</K> <V>mint</V> = <F>useWriteContract</F>();
          </Line>
          <Line n={2}> </Line>
          <Line n={3}>
            <V>mint</V>.<F>writeContract</F>({"{"}
          </Line>
          <Line n={4}>
            {"  "}address: <S>CONTRACT</S>,
          </Line>
          <Line n={5}>
            {"  "}abi: <V>myNftAbi</V>,
          </Line>
          <Line n={6}>
            {"  "}functionName: <S>&quot;mint&quot;</S>,
          </Line>
          <Line n={7}>
            {"  "}args: [<N>1</N>],
          </Line>
          <Line n={8}>
            {"  "}value: <F>parseEther</F>(<S>&quot;0.001&quot;</S>),
          </Line>
          <Line n={9}>
            {"  "}chainId: <N>11155111</N>, <C>// sepolia</C>
          </Line>
          <Line n={10}>{"});"}</Line>
          <Line n={11}> </Line>
          <Line n={12} caret>
            <C>// → tx confirmed in ~12s ✓</C>
          </Line>
        </code>
      </pre>

      {/* floating badge */}
      <div className="absolute -right-3 -top-3 rotate-6 rounded-md border border-accent/40 bg-accent/20 px-2 py-1 font-mono text-[10px] text-accent backdrop-blur">
        wagmi v2
      </div>
    </div>
  );
}

function Line({
  n,
  caret,
  children,
}: {
  n: number;
  caret?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={caret ? "caret" : undefined}>
      <span className="mr-4 inline-block w-5 select-none text-right text-white/25">
        {n}
      </span>
      {children}
    </div>
  );
}

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-fuchsia-400">{children}</span>
);
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sky-300">{children}</span>
);
const F = ({ children }: { children: React.ReactNode }) => (
  <span className="text-yellow-300">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-300">{children}</span>
);
const N = ({ children }: { children: React.ReactNode }) => (
  <span className="text-orange-300">{children}</span>
);
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white/35 italic">{children}</span>
);
