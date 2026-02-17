const specs = [
  "macOS 13+",
  "Apple Silicon",
  "48 kHz / 24-bit",
  "Swift + C++",
  "Open Source",
];

export default function Specs() {
  return (
    <section className="border-y border-white/[0.04] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {specs.map((spec, i) => (
          <div key={spec} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-sm font-medium tracking-wide text-text-muted">
              {spec}
            </span>
            {i < specs.length - 1 && (
              <span className="hidden text-text-muted/30 sm:inline">·</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
