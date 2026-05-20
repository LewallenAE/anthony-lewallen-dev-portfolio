// app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';

interface Props {
  params: Promise<{ slug: string }>;
}

function fallbackTitle(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function fallbackDescription(content: string) {
  const excerpt = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#*_>`|[\]-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return excerpt.slice(0, 160).trim() || 'No description available.';
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    meta: {
      title: data.title || fallbackTitle(slug),
      date: data.date || '',
      description: data.description || fallbackDescription(content),
    },
    content,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);

  return (
    <main className="bg-[#331F1B] min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/blog" className="text-[#706887] font-mono text-sm hover:text-[#BEB1CC] transition-colors">
        ← Back
      </Link>
      <div className="bg-[#261B33] p-8 rounded-xl border border-slate-300 shadow-inner mt-6">
        <p className="text-[#706887] font-mono text-sm">{meta.date}</p>
        <h1 className="text-3xl font-bold mt-2">{meta.title}</h1>
        <p className="text-[#BEB1CC] mt-2">{meta.description}</p>
        <hr className="border-slate-700 my-6" />
        <article className="prose prose-invert prose-sm max-w-none
          prose-headings:text-white
          prose-p:text-[#BEB1CC]
          prose-strong:text-white
          prose-code:text-[#BEB1CC]
          prose-code:bg-[#331F1B]
          prose-code:px-1
          prose-code:rounded
          prose-pre:bg-[#331F1B]
          prose-pre:border
          prose-pre:border-slate-700
          prose-a:text-blue-400
          prose-li:text-[#BEB1CC]
          prose-table:text-[#BEB1CC]
          prose-th:text-white
        ">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </article>
      </div>
    </main>
  );
}
