import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllArticles } from "@/lib/articles"

export default function ArticlesPage() {
  const articles = getAllArticles()
  const categories = ["All", "Politics", "Business", "Culture", "Personal"]

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Header */}
      <section
        className="section-pad"
        style={{
          background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="accent-line" />
          <h1 className="font-display-black text-4xl sm:text-5xl lg:text-6xl mb-4" style={{ color: "var(--text-primary)" }}>
            All Articles
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Deep-dives, analysis, and insights from Charles Peralo. Every story designed to actually teach you something.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/articles" : `/category/${cat.toLowerCase()}`}
                className="tag touch transition-all duration-200"
                style={{
                  background: cat === "All" ? "var(--accent-dim)" : "var(--bg-elevated)",
                  borderColor: cat === "All" ? "rgba(59,130,246,0.4)" : "var(--border-bright)",
                  color: cat === "All" ? "#93c5fd" : "var(--text-secondary)",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {articles.length === 0 ? (
            <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
              No articles found.
            </div>
          ) : (
            <>
              {/* Hero article */}
              <Link href={`/article/${articles[0].slug}`} className="block mb-8 group">
                <div
                  className="rounded-2xl overflow-hidden grid lg:grid-cols-5"
                  style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
                >
                  <div className="lg:col-span-2 relative h-60 lg:h-auto">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, #0d1526 0%, #1a0a2e 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center font-display-black text-8xl lg:text-9xl opacity-5"
                      style={{ color: "var(--accent)" }}
                    >
                      {articles[0].category[0]}
                    </div>
                    <span className="absolute top-4 left-4 tag tag-blue">Latest</span>
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <span className="tag tag-red mb-4 self-start">{articles[0].category}</span>
                    <h2
                      className="font-display text-2xl lg:text-3xl mb-4 group-hover:text-blue-400 transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {articles[0].title}
                    </h2>
                    <p className="mb-6 text-sm clamp-3" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                      <span>{new Date(articles[0].date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span className="flex items-center gap-1">
                        {articles[0].readTime}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {articles.slice(1).map((article) => (
                  <Link key={article.slug} href={`/article/${article.slug}`} className="block group">
                    <div className="card-dark h-full flex flex-col">
                      <div
                        className="relative h-40 rounded-t-2xl overflow-hidden flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, var(--bg-elevated) 0%, #0d1526 100%)" }}
                      >
                        <span
                          className="font-display-black text-7xl opacity-10"
                          style={{ color: "var(--accent)" }}
                        >
                          {article.category[0]}
                        </span>
                        <span className="absolute top-3 left-3 tag">{article.category}</span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3
                          className="font-display text-lg mb-2 clamp-2 group-hover:text-blue-400 transition-colors flex-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-sm clamp-2 mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                          <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}