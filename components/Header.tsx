"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Hardware", href: "#hardware" },
  { label: "Docs", href: "/docs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.04] bg-bg-primary/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5">
          <Image src="/icon.svg" alt="Grainulator" width={28} height={28} />
          <span className="text-sm font-semibold text-white">Grainulator</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Grainulator-0.6.1.dmg"
            download
            className="rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            Download
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.04] bg-bg-primary/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Grainulator-0.6.1.dmg"
            download
            className="mt-2 rounded-lg bg-accent/10 px-3 py-2.5 text-center text-sm font-medium text-accent"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
