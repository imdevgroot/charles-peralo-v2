import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getAllArticles } from "@/lib/articles"
import { notFound } from "next/navigation"

interface Props { params: { category: string } }

const categoryMeta: Record<string, { label: string; desc: string; color: string; bg: string }> = {
  politics: { label: "Politics", desc: "Breaking down political events and what they actually mean for you.", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  business: { label: "Business", desc: "From startup economics to Wall Street — explained for real people.", color: "#3b82f6", bg: "rgba(59,130,246,0.08)" },
  culture:  { label: "Culture",  desc: "Parasocial relationships, internet trends and what they reveal about us.", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)" },
  personal: { label: "Personal", desc: "Burnout, imposter syndrome and the real conversations creators avoid.", color: "#10b981", bg: "rgba(16,185,129,0.08)" },
}

export async function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = categoryMeta[params.category.toLowerCase()]
  if (!meta) return {}
  return {
    title: `${meta.label} - Charles Peralo`,
    description: meta.desc,
    openGraph: { title: `${meta.label} - Charles Peralo`, description: meta.desc },
  }
}

export default function CategoryPage({ params }: Props) {
  const slug = params.category.toLowerCase()
  const meta = categoryMeta[slug]
  if (!meta) notFound()

  const allArticles = getAllArticles()
  const articles = allArticles.filter((a) => a.category.toLowerCase() === slug)

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section
        className="section-pad"
        style={{
          borderBottom: "1px solid var(--border)",
          borderLeft: `4px solid ${meta.color}`,
          background: `linear-gradient(135deg, ${meta.bg} 0%, var(--bg) 60%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/articles" className="muted-link inline-flex items-center gap-2 text-sm mb-8 touch">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <div className="flex items-start gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-display-black text-3xl flex-shrink-0"
              style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.color}30` }}
            >
              {meta.label[0]}
            </div>
            <div>
              <div className="overline mb-2">Category</div>
              <h1 className="section-headline mb-3" style={{ color: "var(--text-primary)" }}>{meta.label}</h1>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{meta.desc}</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="text-2xl font-display font-black" style={{ color: meta.color }}>{articles.length}</span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>articles published</span>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>No articles yet in this category.</div>
          ) : (
            <>
              {/* Feature top article */}
              <Link href={`/article/${articles[0].slug}`} className="block group mb-8">
                <div className="grad-border overflow-hidden">
                  <div className="grid lg:grid-cols-12 gap-0" style={{ background: "var(--bg-card)" }}>
                    <div
                      className="lg:col-span-5 relative flex items-center justify-center overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${meta.bg} 0%, var(--bg-elevated) 100%)`, minHeight: "240px" }}
                    >
                      <div
                        className="font-display-black select-none"
                        style={{ fontSize: "clamp(8rem,18vw,14rem)", color: meta.color, opacity: 0.1, lineHeight: 1 }}
                      >
                        {articles[0].title[0]}
                      </div>
                      <span className="absolute top-4 left-4 tag" style={{ borderColor: `${meta.color}40`, color: meta.color, background: meta.bg }}>
                        Latest
                      </span>
                    </div>
                    <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center gap-4">
                      <h2 className="font-display text-2xl lg:text-3xl group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)", lineHeight: 1.2 }}>
                        {articles[0].title}
                      </h2>
                      <p className="clamp-3 text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{articles[0].excerpt}</p>
                      <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                        <span>{new Date(articles[0].date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                        <span className="flex items-center gap-1 accent-link font-semibold">
                          Read <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Rest as numbered list */}
              {articles.slice(1).map((article, i) => (
                <Link key={article.slug} href={`/article/${article.slug}`} className="block group article-list-item">
                  <div className="article-num">{String(i + 2).padStart(2, "0")}</div>
                  <div className="flex-1 min-w-0">
                    <div className="read-chip mb-2">
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{article.readTime}</span>
                      <span className="ml-2 text-xs" style={{ color: "var(--text-muted)" }}>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <h3 className="font-display text-base sm:text-lg group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <p className="text-sm mt-1.5 clamp-2" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="py-14" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overline mb-4">Explore More</div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(categoryMeta).filter(([k]) => k !== slug).map(([k, v]) => (
              <Link
                key={k}
                href={`/category/${k}`}
                className="cat-pill touch"
                style={{ background: v.bg, color: v.color, border: `1px solid ${v.color}30` }}
              >
                {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}