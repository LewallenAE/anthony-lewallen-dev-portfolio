import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function fallbackTitle(slug: string) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function fallbackDescription(content: string) {
  return content.replace(/```[\s\S]*?```/g, ' ').replace(/[#*_>`|[\]-]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160) || 'No description available.';
}

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'content/blog');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, filename), 'utf-8'));
      const slug = filename.replace('.mdx', '');
      return { slug, title: data.title || fallbackTitle(slug), date: data.date || '', description: data.description || fallbackDescription(content) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-white transition-colors">← Back</Link>
      <h1 className="text-2xl font-bold text-white mt-8 mb-10">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-slate-500">No posts yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all">
                <p className="text-slate-500 text-xs font-mono mb-1">{post.date}</p>
                <h2 className="text-white font-semibold text-lg">{post.title}</h2>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
