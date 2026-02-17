"use client";

import { usePathname } from "next/navigation";
import DocsSidebar from "@/components/DocsSidebar";

interface DocMeta {
  title: string;
  slug: string[];
  section?: string;
}

export default function DocsSidebarWrapper({
  sections,
}: {
  sections: { title: string; items: DocMeta[] }[];
}) {
  const pathname = usePathname();
  const currentSlug = pathname.replace("/docs/", "").replace(/^\/+|\/+$/g, "");

  return <DocsSidebar sections={sections} currentSlug={currentSlug} />;
}
