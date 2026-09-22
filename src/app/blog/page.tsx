"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/data/blogPosts";
import { formatDate } from "@/lib/utils";
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = [
    "All",
    "Generative AI",
    "AI Governance",
    "MLOps & Infrastructure",
    "Enterprise Strategy",
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] border-b border-[#E5E7EB] pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div aria-hidden="true" className="hero-ribbon" />
        <div aria-hidden="true" className="hero-blueprint pointer-events-none absolute inset-0" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FEF3C7] to-transparent blur-3xl opacity-75"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-4">
              Executive Research & Whitepapers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Enterprise AI Insights & Blueprints
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              In-depth technical papers, regulatory analyses, and economic models penned by our senior engineering leads for technology decision-makers.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post Highlight */}
      <section className="py-12 border-b border-slate-200/80 bg-white">
        <Container>
          <div className="bg-gradient-to-br from-white via-amber-50/20 to-white rounded-2xl p-8 sm:p-12 shadow-card border border-amber-200/80 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-signal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-signal">
                  Featured Briefing
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900">{featuredPost.author.name}</span>
                  <span>•</span>
                  <span>{featuredPost.author.role}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-signal" />
                  <span>{formatDate(featuredPost.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-signal" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="signal"
                  size="md"
                  href={`/blog/${featuredPost.slug}`}
                  className="group font-bold"
                  rightIcon={<ArrowRight className="w-4 h-4 btn-hover-arrow" />}
                >
                  Read Technical Whitepaper
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200/80">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-subtle"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, tags, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 text-slate-900"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Article Grid */}
      <section className="py-12">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching articles found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try adjusting your search query or switching categories.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="flex flex-col justify-between overflow-hidden bg-white border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200"
                >
                  <div>
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                      <div className="flex items-center justify-between text-xs font-semibold mb-2">
                        <span className="text-signal-dark font-mono uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="text-xs text-slate-400 mt-1">
                        By {post.author.name}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-4 space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-signal-dark transition-colors group"
                    >
                      <span>Read Whitepaper</span>
                      <ArrowRight className="w-3.5 h-3.5 btn-hover-arrow" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* In-Page Newsletter Box */}
      <section className="mt-8">
        <Container>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-card space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block">
              Stay Informed
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Subscribe to the Neervanaai Executive Briefing
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Delivered bi-weekly to enterprise technology leaders. Practical analyses of open models, GPU benchmarks, and regulatory audits.
            </p>

            {newsletterSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-precision" />
                <span>You are subscribed to the executive briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 text-slate-900"
                />
                <Button type="submit" variant="signal" size="md" className="shrink-0 font-bold">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
