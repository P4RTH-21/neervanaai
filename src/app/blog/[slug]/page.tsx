import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BLOG_POSTS } from "@/lib/data/blogPosts";
import { formatDate } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Linkedin,
  Twitter,
  Copy,
  BookOpen,
  User,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Neervanaai Insights`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts from same category or others
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] border-b border-[#E5E7EB] pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div aria-hidden="true" className="hero-ribbon" />
        <div aria-hidden="true" className="hero-blueprint pointer-events-none absolute inset-0" />
        <Container size="lg" className="relative z-10">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block">
                {post.category}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-signal" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author info & date */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600 border-t border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-signal/10 text-signal-dark font-bold flex items-center justify-center text-xs border border-signal/20">
                  {post.author.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{post.author.name}</div>
                  <div className="text-[11px] text-slate-500">{post.author.role}</div>
                </div>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-signal" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <section className="py-14">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Article Content */}
            <article className="lg:col-span-8">
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-brand-navy prose-a:text-brand-teal prose-code:text-emerald-700 prose-pre:bg-brand-dark prose-pre:text-slate-100">
                <div
                  className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/### (.*?)\n/g, "<h3 class='text-2xl font-bold text-brand-navy mt-8 mb-3'>$1</h3>")
                      .replace(/#### (.*?)\n/g, "<h4 class='text-lg font-bold text-brand-navy mt-6 mb-2'>$1</h4>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong class='font-bold text-slate-900'>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")
                      .replace(/```python([\s\S]*?)```/g, "<pre class='bg-brand-dark text-teal-300 p-4 rounded-xl font-mono text-xs overflow-x-auto my-4'><code>$1</code></pre>")
                      .replace(/```([\s\S]*?)```/g, "<pre class='bg-brand-dark text-teal-300 p-4 rounded-xl font-mono text-xs overflow-x-auto my-4'><code>$1</code></pre>")
                      .replace(/\n\n/g, "<p class='mb-4'></p>"),
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                    Tagged In:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-teal flex items-center justify-center font-bold text-lg shrink-0">
                  {post.author.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">
                    About {post.author.name}
                  </h4>
                  <p className="text-xs text-brand-teal font-medium mb-1.5">
                    {post.author.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>

              {/* End of Article CTA */}
              <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl text-center space-y-4 shadow-xl">
                <h3 className="text-2xl font-bold font-display">
                  Ready to Deploy Production AI in Your Enterprise?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                  Connect directly with our engineering authors and practice leads to discuss implementation blueprints tailored to your architecture.
                </p>
                <div className="pt-2">
                  <Button variant="signal" size="md" href="/contact">
                    Book a Free AI Strategy Call
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Share Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Share This Whitepaper
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-700" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5 text-sky-500" />
                    <span>X / Twitter</span>
                  </a>
                </div>
              </div>

              {/* Related Posts */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Related Executive Briefings
                </h4>
                {relatedPosts.map((rel) => (
                  <Card key={rel.id} className="p-4 hover:border-slate-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal block mb-1">
                      {rel.category}
                    </span>
                    <h5 className="text-xs font-bold text-brand-navy leading-snug line-clamp-2">
                      {rel.title}
                    </h5>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{rel.readTime}</span>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="font-bold text-brand-navy hover:text-brand-teal inline-flex items-center gap-0.5"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
