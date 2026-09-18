import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Web3 Portfolio — Frontend → Smart Contract Engineer",
  description:
    "Personal portfolio of Web3 demos built on Sepolia testnet. NFT minting, chain data queries, wallet integrations.",
  openGraph: {
    title: "Web3 Portfolio",
    description:
      "Frontend engineer transitioning to Web3. Live demos on Sepolia testnet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
