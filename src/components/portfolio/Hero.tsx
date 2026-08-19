import { Github, Linkedin, Code2, ArrowRight, Mail } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const badges = ["C++", "Python", "JavaScript", "React / Web Dev"];

export function Hero() {
  return (
    <section id="home" className="aurora-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full blur-3xl pulse-glow"
        style={{ background: "var(--gradient-accent)", opacity: 0.18 }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            open to internships &amp; freelance work
          </p>
          <h1 className="text-3xl leading-[1.1] font-bold sm:text-4xl md:text-5xl">
            Mohd Anas — <span className="text-gradient">Computer Science Student</span> &amp;
            Full-Stack Web Developer
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Final-year B.Tech CS (Data Science) student focused on Data Structures,
            Algorithms, and building end-to-end web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-accent)" }}
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, url: "https://github.com/mohdanas-hash", label: "GitHub" },
              {
                icon: Linkedin,
                url: "https://www.linkedin.com/in/mohd-anas-64a1312a3",
                label: "LinkedIn",
              },
              { icon: Code2, url: "https://leetcode.com/u/Anas_69", label: "LeetCode" },
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-ring relative rounded-2xl border border-border bg-surface p-2">
            <img
              src={avatar}
              alt="Stylized wireframe portrait of Mohd Anas"
              width={816}
              height={816}
              className="w-full rounded-xl"
            />
            <div className="absolute inset-x-4 -bottom-4 rounded-lg border border-border bg-card px-3 py-2 font-mono text-[11px] text-muted-foreground">
              <span className="text-accent">const</span> role ={" "}
              <span className="text-primary">"full-stack dev"</span>;
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {badges.map((b, i) => (
              <span
                key={b}
                className="floaty rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
