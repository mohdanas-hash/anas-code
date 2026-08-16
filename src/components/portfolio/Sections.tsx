import { Braces, Layers, Rocket, ExternalLink, BadgeCheck, Clock } from "lucide-react";
import { certifications, projects, skillGroups, timeline } from "./data";

function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">{index}</p>
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export function About() {
  const focus = [
    {
      icon: Braces,
      title: "Algorithmic problem solving",
      body: "Daily practice on LeetCode and HackerRank with C++ and Python — patterns, complexity analysis, and clean solutions.",
    },
    {
      icon: Layers,
      title: "Web engineering",
      body: "Full-cycle builds: logic design, responsive UI polish, debugging real-world delivery issues, and production deployment.",
    },
    {
      icon: Rocket,
      title: "Structured code architecture",
      body: "Readable, modular front-ends with predictable state, reusable components, and maintainable styling systems.",
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading
        index="01 / about"
        title="Building software from the logic up"
        subtitle="I'm a Computer Science (Data Science) undergraduate with hands-on experience shipping real client websites — from first wireframe to live domain. I care about the fundamentals: how data is structured, how logic is composed, and how the final interface feels to use."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {focus.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-primary">
              <Icon size={18} />
            </span>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading
        index="02 / skills"
        title="Skills &amp; areas of expertise"
        subtitle="A toolkit split between computer science fundamentals and practical web delivery."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading
        index="03 / projects"
        title="Selected work"
        subtitle="Shipped projects — client sites, browser tools, and experiments in interaction design."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="card-hover flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.kind}</p>
              </div>
              <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                {"</>"}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="min-w-0">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 pt-1">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {l.label}
                  <ExternalLink size={14} />
                </a>
              ))}
              <a
                href="https://github.com/mohdanas-hash"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading
        index="04 / experience"
        title="Education &amp; experience"
        subtitle="Academic track alongside project-based professional development work."
      />
      <ol className="relative border-l border-border pl-6 md:pl-8">
        {timeline.map((t) => (
          <li key={t.title} className="relative pb-10 last:pb-0">
            <span
              className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-background md:-left-[39px]"
              style={{ background: "var(--gradient-accent)" }}
            />
            <p className="font-mono text-xs text-primary">{t.period}</p>
            <h3 className="mt-1.5 text-base font-semibold">{t.title}</h3>
            <p className="text-sm text-accent">{t.org}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading
        index="05 / certifications"
        title="Certifications &amp; licenses"
        subtitle="Industry job simulations, cloud fundamentals, and ongoing AI coursework."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((c) => (
          <div className="min-w-0">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-primary">
                <BadgeCheck size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="text-base leading-snug font-semibold">{c.name}</h3>
                <p className="mt-0.5 text-sm text-accent">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{c.date}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span
                  key={s}
                  className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
