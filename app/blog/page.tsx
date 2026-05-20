// app/blog/page.tsx
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

function getPosts(): PostMeta[] {
  const contentDir = path.join(process.cwd(), 'content/blog');
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
      const { data, content } = matter(raw);
      const slug = filename.replace('.mdx', '');

      return {
        slug,
        title: data.title || fallbackTitle(slug),
        date: data.date || '',
        description: data.description || fallbackDescription(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="bg-[#331F1B] min-h-screen p-8 max-w-4xl mx-auto">
      <div className="bg-[#261B33] p-6 rounded-xl border border-slate-300 shadow-inner">
        <h1 className="text-2xl font-bold text-center mb-6">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-[#BEB1CC] text-center">No posts yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-[#331F1B] p-4 rounded-xl border border-slate-700 hover:border-slate-400 transition-colors cursor-pointer">
                  <p className="text-[#706887] font-mono text-sm">{post.date}</p>
                  <h2 className="text-lg font-bold mt-1">{post.title}</h2>
                  <p className="text-[#BEB1CC] text-sm mt-1">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
