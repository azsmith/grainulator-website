import MacWindow from "./MacWindow";

const screenshots = [
  { label: "Sequencer", file: "screenshot-1.png" },
  { label: "Synth Engines", file: "screenshot-2.png" },
  { label: "Granular", file: "screenshot-3.png" },
  { label: "Mixer", file: "screenshot-4.png" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="relative px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            A dark, focused interface inspired by vintage analog hardware —
            designed for deep sound exploration.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {screenshots.map((shot) => (
            <div
              key={shot.file}
              className="w-[85vw] min-w-[320px] max-w-[600px] flex-shrink-0 snap-center"
            >
              <MacWindow>
                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
                  <div className="flex flex-col items-center gap-3 text-text-muted">
                    <svg
                      className="h-12 w-12 opacity-15"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    <span className="text-xs">{shot.label}</span>
                  </div>
                </div>
              </MacWindow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
