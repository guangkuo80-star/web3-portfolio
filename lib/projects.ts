export type ProjectStatus = "live" | "wip" | "planned";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  network: "sepolia" | "ethereum" | "n/a";
  status: ProjectStatus;
  /** Vercel demo URL — set via env or hardcode after first deploy */
  demoUrl?: string;
  /** GitHub repo URL */
  repoUrl: string;
  highlights: string[];
};

const gh = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "guangkuo80-star";

export const projects: Project[] = [
  {
    slug: "nft-gallery",
    name: "Sepolia NFT Gallery",
    tagline: "Mint, own and showcase ERC-721 tokens on Sepolia.",
    description:
      "Full-stack NFT dApp: a custom ERC-721 contract deployed to Sepolia, IPFS-pinned metadata, and a Next.js frontend with RainbowKit wallet connect, mint flow, and a per-owner gallery view.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "wagmi v2",
      "viem",
      "RainbowKit",
      "Tailwind CSS",
      "Solidity",
      "Hardhat",
      "OpenZeppelin",
      "IPFS (Pinata)",
    ],
    network: "sepolia",
    status: "live",
    demoUrl:
      process.env.NEXT_PUBLIC_DEMO_NFT_GALLERY ??
      "https://web3-nft-gallery.vercel.app",
    repoUrl: `https://github.com/${gh}/web3-nft-gallery`,
    highlights: [
      "Custom ERC-721 with on-chain mint price, per-wallet cap and pausable switch",
      "Metadata hosted on IPFS via Pinata, contract URI points to gateway",
      "RainbowKit integration — MetaMask / WalletConnect / Coinbase Wallet",
      "Read hooks: totalSupply, tokensOfOwner, tokenURI via wagmi",
      "Deployed on Sepolia with Hardhat + Alchemy RPC (secrets in env vars)",
    ],
  },
  {
    slug: "chain-explorer",
    name: "Sepolia Chain Explorer",
    tagline: "Query blocks, transactions and addresses on Sepolia in real time.",
    description:
      "Lightweight block explorer built with viem and Alchemy RPC. Look up any address, transaction hash or block number; view balances, nonce, ERC-20 transfers and event logs.",
    stack: ["Next.js 15", "viem", "Tailwind CSS", "Alchemy RPC"],
    network: "sepolia",
    status: "planned",
    repoUrl: `https://github.com/${gh}/web3-chain-explorer`,
    highlights: [
      "Address overview: ETH balance, tx count, token holdings",
      "Transaction detail: gas, value, logs, decoded inputs",
      "Block detail: tx list, miner/validator, difficulty",
    ],
  },
  {
    slug: "wallet-dashboard",
    name: "Wallet Dashboard",
    tagline: "Connect your wallet and see all Sepolia assets in one place.",
    description:
      "Read-only portfolio dashboard: native ETH balance, batched ERC-20 token balances, live network stats, and NFT holdings pulled from the sibling gallery contract — plus optional recent-activity via the Etherscan API. Never sends a transaction.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "wagmi v2",
      "viem",
      "RainbowKit",
      "Tailwind CSS",
      "Etherscan API",
    ],
    network: "sepolia",
    status: "live",
    demoUrl:
      process.env.NEXT_PUBLIC_DEMO_WALLET_DASHBOARD ??
      "https://web3-wallet-dashboard-xi.vercel.app",
    repoUrl: `https://github.com/${gh}/web3-wallet-dashboard`,
    highlights: [
      "Read-only by design — no writeContract, no signing, no private key",
      "Batched multi-token balance aggregation via useReadContracts (multicall)",
      "Cross-demo: reads the NFT Gallery contract's tokensOfOwner() live",
      "Live Sepolia block number + gas price polled from a public RPC",
      "Graceful degradation — every panel works without optional API keys",
    ],
  },
];
