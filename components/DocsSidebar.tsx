"use client";

import { useState } from "react";
import Link from "next/link";

interface DocMeta {
  title: string;
  slug: string[];
  section?: string;
}

interface SidebarSection {
  title: string;
  items: DocMeta[];
}

export default function DocsSidebar({
  sections,
  currentSlug,
}: {
  sections: SidebarSection[];
  currentSlug: string;
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map((s) => [s.title, true]))
  );

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  const sidebar = (
    <nav className="space-y-6">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      {sections.map((section) => (
        <div key={section.title}>
          <button
            onClick={() => toggle(section.title)}
            className="mb-2 flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-text-muted"
          >
            {section.title}
            <svg
              className={`h-3 w-3 transition-transform ${expanded[section.title] ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {expanded[section.title] && (
            <ul className="space-y-1">
              {section.items.map((item) => {
                const href = `/docs/${item.slug.join("/")}`;
                const isActive = currentSlug === item.slug.join("/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-accent/10 font-medium text-accent"
                          : "text-text-secondary hover:bg-bg-tertiary hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 rounded-lg border border-white/10 bg-bg-secondary p-2 md:hidden"
        aria-label="Toggle docs navigation"
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 overflow-y-auto border-r border-white/[0.04] bg-bg-primary p-6 transition-transform md:sticky md:top-0 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </aside>
    </>
  );
}
