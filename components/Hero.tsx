import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Radial glow behind icon */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-8 animate-[fadeInDown_0.8s_ease-out]">
          <Image
            src="/icon.svg"
            alt="Grainulator icon"
            width={120}
            height={120}
            priority
            className="drop-shadow-[0_0_40px_rgba(255,106,61,0.3)]"
          />
        </div>

        {/* Title */}
        <h1 className="mb-4 animate-[fadeInUp_0.8s_ease-out_0.1s_both] text-6xl font-bold tracking-tight text-white md:text-8xl">
          Grainulator
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-xl animate-[fadeInUp_0.8s_ease-out_0.2s_both] text-lg text-text-secondary md:text-xl">
          A granular synthesis workstation for macOS. Four voices, 24 synthesis
          engines, sequencers, effects, and hardware control — all in one.
        </p>

        {/* CTAs */}
        <div className="mb-16 flex animate-[fadeInUp_0.8s_ease-out_0.3s_both] flex-col gap-4 sm:flex-row">
          <a
            href="/Grainulator-0.7.0.dmg"
            download
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(255,106,61,0.4)]"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Download for macOS
          </a>
          <a
            href="https://github.com/azsmith/grainulator"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-8 py-3.5 text-base font-semibold text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Hero screenshot */}
        <div className="w-full max-w-4xl animate-[fadeInUp_1s_ease-out_0.5s_both]">
          <div className="overflow-hidden rounded-xl border border-white/[0.06] shadow-2xl shadow-black/50">
            <Image
              src="/screenshots/hero.png"
              alt="Grainulator — Synth Engines view showing Macro OSC, Resonator, Drums, and Sampler panels"
              width={2622}
              height={1536}
              priority
              className="block w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
