import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { submitContactMessage } from "@/lib/contact.functions";
import { socials } from "./data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const sendMessage = useServerFn(submitContactMessage);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendMessage({ data: form });
      toast.success("Message sent", {
        description: `Thanks ${form.name || "there"} — I'll get back to you at ${
          form.email || "your email"
        } soon.`,
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong", {
        description: "Your message couldn't be sent. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm outline-hidden transition-colors placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-primary/25";


  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
          06 / contact
        </p>
        <h2 className="text-2xl font-bold sm:text-3xl">Let's build something</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Open to internships, freelance builds, and collaboration on interesting problems.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={submit}
          className="rounded-xl border border-border bg-card p-6 md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-muted-foreground">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={field}
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-muted-foreground">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={field}
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the project or role..."
              className={field}
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-accent)" }}
          >
            Send message
            <Send size={15} />
          </button>
        </form>

        <div className="space-y-5">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
              Direct
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0 text-primary" />
                <a href="tel:+918957933930" className="hover:text-primary">
                  +91 8957933930
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-primary" />
                <a
                  href="mailto:mohd.anas.gt3@gmail.com"
                  className="min-w-0 truncate hover:text-primary"
                >
                  mohd.anas.gt3@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={15} className="shrink-0 text-primary" />
                Kanpur, Uttar Pradesh
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
              Profiles
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border bg-surface px-3 py-2.5 transition-colors hover:border-primary/60"
                >
                  <span className="block text-sm font-medium">{s.label}</span>
                  <span className="block truncate font-mono text-[11px] text-muted-foreground">
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
