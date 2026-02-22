import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image src="/icon.svg" alt="Grainulator" width={28} height={28} />
          <span className="text-sm font-semibold text-white">Grainulator</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="/Grainulator-0.6.2.dmg"
            download
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Download
          </a>
          <a
            href="/docs"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Docs
          </a>
          <a
            href="https://github.com/azsmith/grainulator"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-muted/60">
          &copy; 2024&ndash;2026 Andy Smith
        </p>
      </div>
    </footer>
  );
}
