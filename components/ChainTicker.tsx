"use client";

import { useEffect, useState } from "react";

const RPC = "https://ethereum-sepolia-rpc.publicnode.com";

type Stats = {
  block: number;
  gasGwei: string;
};

/**
 * Live Sepolia ticker. Pulls the latest block number + gas price from a public
 * RPC every 12s. Degrades to a subtle "connecting" state if the RPC is
 * unreachable (e.g. offline dev) so the layout never breaks.
 */
export default function ChainTicker() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let active = true;

    async function tick() {
      try {
        const [blockRes, gasRes] = await Promise.all([
          fetch(RPC, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 1,
              method: "eth_blockNumber",
              params: [],
            }),
            cache: "no-store",
          }),
          fetch(RPC, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 2,
              method: "eth_gasPrice",
              params: [],
            }),
            cache: "no-store",
          }),
        ]);
        const blockJson = await blockRes.json();
        const gasJson = await gasRes.json();
        if (!active) return;
        const block = parseInt(blockJson.result as string, 16);
        const gasWei = BigInt(gasJson.result as string);
        const gasGwei = (Number(gasWei) / 1e9).toFixed(1);
        setStats({ block, gasGwei });
        setLive(true);
      } catch {
        if (active) setLive(false);
      }
    }

    tick();
    const id = setInterval(tick, 12000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-4 rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-xs backdrop-blur">
      <span className="inline-flex items-center gap-2">
        <span
          className={`pulse-dot h-2 w-2 rounded-full ${
            live ? "bg-emerald-400" : "bg-yellow-400"
          }`}
        />
        <span className="text-white/90">{live ? "Sepolia live" : "connecting…"}</span>
      </span>
      <span className="text-white/50">
        block{" "}
        <span className="text-accent2">
          {stats ? stats.block.toLocaleString("en-US") : "—"}
        </span>
      </span>
      <span className="text-white/50">
        gas <span className="text-accent2">{stats ? stats.gasGwei : "—"}</span>{" "}
        gwei
      </span>
    </div>
  );
}
