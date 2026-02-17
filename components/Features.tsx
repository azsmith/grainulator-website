"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Granular Engine",
    description:
      "4 independent voices with 10 filter models, 8 grain envelope shapes, and per-voice recording with overdub. Includes a Looper and Slicer for creative looping of prerecorded audio and live inputs.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <circle cx="8" cy="16" r="6" stroke="#FF6A3D" strokeWidth="1.5" opacity="0.9" />
        <circle cx="16" cy="10" r="4" stroke="#E04520" strokeWidth="1.5" opacity="0.7" />
        <circle cx="22" cy="18" r="5" stroke="#FF6A3D" strokeWidth="1.5" opacity="0.8" />
        <circle cx="26" cy="12" r="2.5" stroke="#C22A0A" strokeWidth="1.5" opacity="0.5" />
        <circle cx="14" cy="22" r="3" stroke="#E04520" strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Macro Oscillator — 24 Engines",
    description:
      "Based on Plaits, the popular open-source module by Mutable Instruments. Virtual analog, FM, wavetable, chords, speech, string, and 6-OP FM with DX7 patch loading.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path d="M4 16 Q8 6, 12 16 T20 16 T28 16" stroke="#FF6A3D" strokeWidth="1.5" fill="none" />
        <path d="M4 16 Q8 22, 12 16 T20 16 T28 16" stroke="#E04520" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M4 16 Q10 10, 16 16 T28 16" stroke="#C22A0A" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Resonator",
    description:
      "Based on Rings, the popular open-source module by Mutable Instruments. Modal resonator, sympathetic strings, FM voice, and more. Up to 4-voice polyphony with physical modeling.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <circle cx="16" cy="16" r="12" stroke="#FF6A3D" strokeWidth="1.5" opacity="0.3" />
        <circle cx="16" cy="16" r="8" stroke="#E04520" strokeWidth="1.5" opacity="0.5" />
        <circle cx="16" cy="16" r="4" stroke="#FF6A3D" strokeWidth="1.5" opacity="0.8" />
        <circle cx="16" cy="16" r="1.5" fill="#FF6A3D" />
      </svg>
    ),
  },
  {
    title: "Sequencers",
    description:
      "Step, chord, drum, and Scramble sequencers. 42 scales, 12 direction modes, per-step probability, ratchets, and accumulator.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={2 + i * 3.6}
            y={8 + (i % 3 === 0 ? 0 : i % 2 === 0 ? 6 : 3)}
            width="2.8"
            height={16 - (i % 3 === 0 ? 0 : i % 2 === 0 ? 6 : 3)}
            rx="1"
            fill="#FF6A3D"
            opacity={0.4 + (i % 3) * 0.2}
          />
        ))}
      </svg>
    ),
  },
  {
    title: "Effects & Mixer",
    description:
      "Tape delay with wow & flutter, reverb, master filter, compressor. 8-channel mixer with sends, inserts, and micro-delay.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        {[6, 12, 18, 24].map((x, i) => (
          <g key={i}>
            <line
              x1={x}
              y1="6"
              x2={x}
              y2="26"
              stroke="#252528"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx={x}
              cy={10 + i * 3.5}
              r="2.5"
              fill="#FF6A3D"
              opacity={0.6 + i * 0.1}
            />
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: "Hardware & AI",
    description:
      "Monome Arc & Grid, MIDI auto-discovery, and conversational AI control via HTTP API. Connect ChatGPT or Claude directly.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect
          x="4"
          y="8"
          width="24"
          height="16"
          rx="3"
          stroke="#FF6A3D"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle cx="10" cy="16" r="2" fill="#E04520" opacity="0.8" />
        <circle cx="16" cy="16" r="2" fill="#FF6A3D" opacity="0.6" />
        <circle cx="22" cy="16" r="2" fill="#C22A0A" opacity="0.4" />
        <path
          d="M16 4 v4"
          stroke="#FF6A3D"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
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
    <div
      ref={ref}
      className="group relative rounded-xl border border-white/[0.04] bg-bg-secondary/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/20 hover:bg-bg-secondary"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-xl bg-accent/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4">{feature.icon}</div>
        <h3 className="mb-2 text-lg font-semibold text-white">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Synthesis. Sequencing.
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-hover to-accent-dark bg-clip-text text-transparent">
              Sound Design.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            Everything you need in one instrument — from granular clouds to
            physical modeling, driven by advanced sequencers and shaped by
            studio-grade effects.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
