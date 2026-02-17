import Image from "next/image";

const screenshots = [
  { label: "Sequencer", file: "screenshot-1.png", width: 2622, height: 1536 },
  { label: "Synth Engines", file: "screenshot-2.png", width: 2622, height: 1536 },
  { label: "Granular", file: "screenshot-3.png", width: 2622, height: 1536 },
  { label: "Mixer", file: "screenshot-4.png", width: 1900, height: 1048 },
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
              <div className="overflow-hidden rounded-xl border border-white/[0.06] shadow-2xl shadow-black/50">
                <Image
                  src={`/screenshots/${shot.file}`}
                  alt={`Grainulator — ${shot.label} view`}
                  width={shot.width}
                  height={shot.height}
                  className="block w-full h-auto"
                />
              </div>
              <p className="mt-3 text-center text-sm text-text-muted">{shot.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
