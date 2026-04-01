import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getAllArticles } from "@/lib/articles"

interface Props { params: { category: string } }

const categoryMeta: Record<string, { label: string; color: string; bg: string; desc: string }> = {
  politics: { label: "Politics", color: "#ef4444", bg: "rgba(239,68,68,0.08)", desc: "Breaking down political events, policy decisions, and what they actually mean for you." },
  business: { label: "Business", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", desc: "From startup economics to Wall Street moves — explained for real people." },
  culture: { label: "Culture", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", desc: "Parasocial relationships, internet trends, and what they reveal about who we are." },
  personal: { label: "Personal", color: "#10b981", bg: "rgba(16,185,129,0.08)", desc: "Burnout, imposter syndrome, and the conversations creators avoid having publicly." },
}

export async function generateStaticParams() {
  return Object.keys(categoryMeta).map((c) => ({ category: c }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = categoryMeta[params.category]
  if (!meta) return {}
  return {
    title: `${meta.label} — Charles Peralo`,
    description: meta.desc,
  }
}

export default function CategoryPage({ params }: Props) {
  const meta = categoryMeta[params.category]
  if (!meta) notFound()

  const allArticles = getAllArticles()
  const articles = allArticles.filter((a) => a.category.toLowerCase() === params.category.toLowerCase())

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Header */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${meta.bg}, transparent)` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/articles" className="muted-link inline-flex items-center gap-2 text-sm mb-8 touch">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <div className="overline mb-3">Category</div>
          <h1
            className="font-display-black mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: meta.color,
            }}
          >
            {meta.label}
          </h1>
          <p className="text-lg max-w-lg" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {meta.desc}
          </p>
          <div className="mt-6 text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {articles.length === 0 ? (
            <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
              No articles in this category yet.
            </div>
          ) : (
            <>
              {/* Hero article */}
              <Link href={`/article/${articles[0].slug}`} className="block group mb-6">
                <div className="rounded-2xl overflow-hidden grid lg:grid-cols-5 lift" style={{ border: `1px solid ${meta.color}30`, background: "var(--bg-card)" }}>
                  <div className="lg:col-span-2 relative flex items-center justify-center" style={{ minHeight: "200px", background: meta.bg }}>
                    <span className="font-display-black select-none" style={{ fontSize: "10rem", lineHeight: 1, color: meta.color, opacity: 0.15 }}>
                      {meta.label[0]}
                    </span>
                    <span className="absolute top-4 left-4 tag" style={{ borderColor: `${meta.color}40`, color: meta.color, background: `${meta.color}15` }}>
                      Latest
                    </span>
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center gap-4">
                    <h2 className="font-display text-2xl lg:text-3xl group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)", lineHeight: 1.2 }}>
                      {articles[0].title}
                    </h2>
                    <p className="text-sm clamp-3" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{articles[0].excerpt}</p>
                    <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                      <span>{new Date(articles[0].date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span className="flex items-center gap-1 accent-link font-semibold">Read <ArrowUpRight className="w-3.5 h-3.5" /></span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grid */}
              {articles.length > 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {articles.slice(1).map((article) => (
                    <Link key={article.slug} href={`/article/${article.slug}`} className="block group">
                      <div className="card-dark h-full flex flex-col" style={{ borderLeft: `3px solid ${meta.color}` }}>
                        <div className="relative h-36 rounded-t-2xl overflow-hidden flex items-center justify-center" style={{ background: meta.bg }}>
                          <span className="font-display-black select-none opacity-10" style={{ fontSize: "6rem", color: meta.color, lineHeight: 1 }}>
                            {article.title[0]}
                          </span>
                        </div>
                        <div className="p-5 flex flex-col flex-1 gap-2">
                          <h3 className="font-display text-lg clamp-2 group-hover:text-blue-400 transition-colors flex-1" style={{ color: "var(--text-primary)", lineHeight: 1.3 }}>
                            {article.title}
                          </h3>
                          <p className="text-sm clamp-2" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{article.excerpt}</p>
                          <div className="flex items-center justify-between text-xs mt-auto pt-3" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
                            <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}