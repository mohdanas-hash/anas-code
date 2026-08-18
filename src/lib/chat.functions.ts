import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const chatSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      }),
    )
    .min(1)
    .max(30),
});

const SYSTEM_PROMPT = `You are the portfolio assistant for Mohd Anas, a B.Tech Computer Science (Data Science) student at Maharana Pratap Engineering College, Kanpur (2023-2027, CGPA 7.2), who builds web applications and practices DSA in C++ and Python.

Facts you can use:
- Skills: C++, Python, C, JavaScript, HTML5, CSS3; DSA, OOP, DBMS, OS, Computer Networks, DAA, COA; responsive design, Web Audio API, Git/GitHub, VS Code, Netlify, GitHub Pages; MySQL, MongoDB, PostgreSQL, SQLite, Redis.
- Projects: DKG Mobiles (client e-commerce showcase, https://dkgmobiles.netlify.app), Resume Analyzer (browser-side PDF/DOCX parsing, https://resume-analyzer-liart-rho.vercel.app/), Rock Paper Scissor Game (pattern-learning AI opponent, Web Audio API, https://mohdanas-hash.github.io/Rock-Paper-Scissors/), Personal Portfolio Website (https://anas-code.lovable.app).
- Certifications: Oracle Agentic AI Foundations 2026, JPMorgan Quantitative Research job simulation, Walmart Advanced Software Engineering job simulation, AWS Cloud Practitioner Essentials.
- Education: Intermediate (ISC) 70% and High School (ICSE) 83% at Bishop Westcott School, Kanpur.
- Contact: mohd.anas.gt3@gmail.com, GitHub mohdanas-hash, LinkedIn mohd-anas-64a1312a3, LeetCode Anas_69.

Answer visitors in a friendly, concise way (2-4 sentences max), in first person as Anas' assistant ("Anas built..."). If you do not know something, say so and point them to the contact form. Never invent experience or credentials.`;

export const askPortfolioBot = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => chatSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("AI is not configured yet.");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": key,
      },
      body: JSON.stringify({
        model: "google/gemini-3.7-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("AI gateway error", response.status, detail);
      if (response.status === 429) {
        throw new Error("Too many messages right now — please try again in a moment.");
      }
      if (response.status === 402) {
        throw new Error("The chat assistant is out of AI credits right now.");
      }
      throw new Error("The assistant could not answer right now. Please try again.");
    }

    const payload = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = payload.choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error("The assistant returned an empty answer.");

    return { reply };
  });
