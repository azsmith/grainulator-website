import { getDocSections } from "@/lib/mdx";
import DocsSidebarWrapper from "./DocsSidebarWrapper";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = getDocSections();

  return (
    <div className="flex min-h-screen">
      <DocsSidebarWrapper sections={sections} />
      <main className="min-w-0 flex-1 px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
