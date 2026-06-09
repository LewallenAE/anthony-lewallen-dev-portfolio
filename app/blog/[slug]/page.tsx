import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content/blog', `${slug}.mdx`), 'utf-8');
  const { data, content } = matter(raw);
  return {
    meta: { title: data.title || slug, date: data.date || '', description: data.description || '' },
    content,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { meta, content } = getPost(slug);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-slate-500 hover:text-white transition-colors">← Back</Link>
      <div className="mt-10">
        <p className="text-slate-500 text-xs font-mono mb-2">{meta.date}</p>
        <h1 className="text-3xl font-bold text-white">{meta.title}</h1>
        {meta.description && <p className="text-slate-400 mt-3 leading-relaxed">{meta.description}</p>}
        <hr className="border-white/10 my-8" />
        <article className="prose prose-invert prose-sm max-w-none
          prose-headings:text-white
          prose-p:text-slate-400
          prose-strong:text-white
          prose-code:text-emerald-400
          prose-code:bg-white/5
          prose-code:px-1 prose-code:rounded
          prose-pre:bg-white/5
          prose-pre:border prose-pre:border-white/10
          prose-a:text-emerald-400
          prose-li:text-slate-400
        ">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>
      </div>
    </main>
  );
}
