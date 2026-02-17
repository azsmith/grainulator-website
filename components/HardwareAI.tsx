"use client";

import { useEffect, useRef, useState } from "react";

export default function HardwareAI() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hardware" className="relative px-6 py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2"
      >
        {/* Text side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Connected
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Hardware Ready.
            <br />
            <span className="text-text-muted">AI Powered.</span>
          </h2>

          <p className="mb-8 text-text-secondary leading-relaxed">
            Plug in your Monome controllers for hands-on performance. Or let AI
            drive — Grainulator speaks HTTP, so ChatGPT and Claude can control
            every parameter through natural language.
          </p>

          <ul className="space-y-3">
            {[
              "Monome Arc 4 — endless encoders with LED feedback",
              "Monome Grid 128 — 16×8 button matrix with varibright",
              "MIDI auto-discovery with CC mapping",
              "WebSocket event stream for real-time state",
              "ChatGPT & Claude tool-calling integration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Code side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-bg-secondary">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-white/[0.04] bg-bg-tertiary px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs text-text-muted">Terminal</span>
            </div>
            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-text-muted">
                <span className="text-accent">$</span> curl
                http://127.0.0.1:4850/v1/state \
              </div>
              <div className="pl-4 text-text-muted">
                -H{" "}
                <span className="text-amber-400">
                  &quot;Authorization: Bearer $TOKEN&quot;
                </span>
              </div>
              <div className="mt-4 text-text-muted/60">
                {"{"} <span className="text-teal-400">&quot;stateVersion&quot;</span>:{" "}
                <span className="text-accent">42</span>,
              </div>
              <div className="pl-4 text-text-muted/60">
                <span className="text-teal-400">&quot;transport&quot;</span>:{" "}
                <span className="text-amber-400">&quot;playing&quot;</span>,
              </div>
              <div className="pl-4 text-text-muted/60">
                <span className="text-teal-400">&quot;bpm&quot;</span>:{" "}
                <span className="text-accent">120</span>,
              </div>
              <div className="pl-4 text-text-muted/60">
                <span className="text-teal-400">&quot;voices&quot;</span>: [{" "}
                <span className="text-amber-400">&quot;plaits&quot;</span>,{" "}
                <span className="text-amber-400">&quot;rings&quot;</span>,{" "}
                <span className="text-amber-400">&quot;grain1&quot;</span>,{" "}
                <span className="text-amber-400">&quot;grain2&quot;</span> ]
              </div>
              <div className="text-text-muted/60">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
