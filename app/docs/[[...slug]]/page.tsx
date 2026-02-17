import { getDocBySlug, getAllDocs } from "@/lib/mdx";
import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return { title: "Grainulator Docs" };
  }
  try {
    const doc = getDocBySlug(slug);
    return {
      title: `${doc.meta.title} — Grainulator Docs`,
      description: doc.meta.description,
    };
  } catch {
    return { title: "Grainulator Docs" };
  }
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // Redirect /docs to /docs/quick-start
  if (!slug || slug.length === 0) {
    redirect("/docs/quick-start");
  }

  const doc = getDocBySlug(slug);

  return (
    <article>
      <header className="mb-12">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-white">
          {doc.meta.title}
        </h1>
        {doc.meta.description && (
          <p className="text-lg text-text-muted">{doc.meta.description}</p>
        )}
      </header>

      <div className="prose-grainulator">
        <MDXRemote
          source={doc.content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
