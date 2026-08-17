import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Skills,
  Projects,
  Experience,
  Certifications,
} from "@/components/portfolio/Sections";
import { Contact } from "@/components/portfolio/Contact";
import { FlightIntro } from "@/components/portfolio/FlightIntro";

const title = "Mohd Anas — CS Student & Full-Stack Web Developer";
const description =
  "Portfolio of Mohd Anas, final-year B.Tech CS (Data Science) student building end-to-end web applications with a focus on DSA and clean architecture.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <FlightIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
          <span className="font-mono text-sm">
            <span className="text-gradient">Anas</span>
            <span className="text-muted-foreground">.dev</span>
          </span>
          <p className="text-xs text-muted-foreground">
            Designed &amp; built by Mohd Anas — Kanpur, India
          </p>
        </div>
      </footer>
    </div>
  );
}
