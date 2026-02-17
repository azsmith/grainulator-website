import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/docs");

export interface DocMeta {
  title: string;
  description: string;
  order: number;
  section?: string;
  slug: string[];
}

export function getDocBySlug(slug: string[]): {
  content: string;
  meta: DocMeta;
} {
  // Try exact file match first, then index
  const candidates = [
    path.join(CONTENT_DIR, ...slug) + ".mdx",
    path.join(CONTENT_DIR, ...slug, "index.mdx"),
  ];

  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        content,
        meta: {
          title: data.title || slug[slug.length - 1],
          description: data.description || "",
          order: data.order || 0,
          section: data.section,
          slug,
        },
      };
    }
  }

  throw new Error(`Doc not found: ${slug.join("/")}`);
}

export function getAllDocs(): DocMeta[] {
  const docs: DocMeta[] = [];

  function walk(dir: string, slugPrefix: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...slugPrefix, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        const name = entry.name.replace(/\.mdx$/, "");
        const slug =
          name === "index" ? slugPrefix : [...slugPrefix, name];
        const raw = fs.readFileSync(path.join(dir, entry.name), "utf-8");
        const { data } = matter(raw);
        docs.push({
          title: data.title || name,
          description: data.description || "",
          order: data.order || 0,
          section: data.section,
          slug,
        });
      }
    }
  }

  walk(CONTENT_DIR, []);
  return docs.sort((a, b) => a.order - b.order);
}

export function getDocSections(): {
  title: string;
  items: DocMeta[];
}[] {
  const docs = getAllDocs();
  const sections: Map<string, DocMeta[]> = new Map();
  const topLevel: DocMeta[] = [];

  for (const doc of docs) {
    if (doc.section) {
      if (!sections.has(doc.section)) {
        sections.set(doc.section, []);
      }
      sections.get(doc.section)!.push(doc);
    } else {
      topLevel.push(doc);
    }
  }

  const result: { title: string; items: DocMeta[] }[] = [];

  // Add top-level docs first
  if (topLevel.length > 0) {
    result.push({ title: "Getting Started", items: topLevel });
  }

  // Add sectioned docs
  for (const [title, items] of sections) {
    result.push({ title, items });
  }

  return result;
}
