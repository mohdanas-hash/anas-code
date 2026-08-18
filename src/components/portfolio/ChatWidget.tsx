import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageSquareCode, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { askPortfolioBot } from "@/lib/chat.functions";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What projects has Anas built?",
  "What is his tech stack?",
  "Tell me about his certifications",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey! I'm Anas' portfolio assistant. Ask me about his projects, skills, or certifications.",
    },
  ]);
  const ask = useServerFn(askPortfolioBot);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);
    try {
      const { reply } = await ask({
        data: { messages: next.filter((m) => m.content).slice(-12) },
      });
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="chat-tab group fixed top-1/2 right-0 z-50 flex -translate-y-1/2 items-center gap-2 rounded-l-xl border border-r-0 border-primary/40 bg-card/90 px-2.5 py-4 text-xs font-medium text-primary shadow-lg backdrop-blur transition-transform hover:-translate-x-1 hover:-translate-y-1/2"
        >
          <MessageSquareCode size={16} className="shrink-0" />
          <span className="chat-tab-label font-mono tracking-wide">
            Ask me about my projects
          </span>
        </button>
      )}

      {open && (
        <div className="fixed inset-x-3 bottom-3 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:inset-x-auto sm:right-4 sm:bottom-4 sm:h-[32rem] sm:w-[22rem]">
          <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Ask about my projects</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                AI assistant · trained on Anas' work
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={15} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "chat-md max-w-[92%] text-sm leading-relaxed text-foreground"
                }
              >
                {m.role === "assistant" ? <ReactMarkdown>{m.content}</ReactMarkdown> : m.content}
              </div>
            ))}
            {loading && (
              <p className="font-mono text-xs text-muted-foreground">Thinking…</p>
            )}
            {error && <p className="text-xs text-destructive">{error}</p>}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
            className="flex items-end gap-2 border-t border-border bg-surface px-3 py-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send(input);
                }
              }}
              rows={1}
              maxLength={2000}
              placeholder="Ask me about my projects…"
              className="max-h-24 min-h-10 flex-1 resize-none rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-primary-foreground transition-opacity disabled:opacity-40"
              style={{ background: "var(--gradient-accent)" }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
