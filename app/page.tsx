import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import TechMarquee from "@/components/TechMarquee";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function Home() {
  const live = projects.filter((p) => p.status === "live");
  const upcoming = projects.filter((p) => p.status !== "live");

  return (
    <main className="relative">
      <Background />
      <Header />
      <Hero />
      <TechMarquee />

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight">
            Live Demos
          </h2>
          <p className="mb-8 text-sm text-white/60">
            Every demo runs on{" "}
            <span className="font-mono text-accent2">Sepolia</span> testnet. No
            mainnet, no real funds.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {live.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {upcoming.length > 0 && (
          <>
            <Reveal>
              <h2 className="mb-2 mt-16 text-2xl font-semibold tracking-tight">
                Coming Soon
              </h2>
              <p className="mb-8 text-sm text-white/60">
                Repos scaffolded, shipping in the next iterations.
              </p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {upcoming.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}
