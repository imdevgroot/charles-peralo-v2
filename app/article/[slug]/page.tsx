import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { getAllArticles, getArticleBySlug } from "@/lib/articles"
import { NewsletterForm } from "@/components/newsletter-form"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const allArticles = getAllArticles()
  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Article header */}
      <section
        className="section-pad"
        style={{
          background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/articles"
            className="muted-link inline-flex items-center gap-2 text-sm mb-8 touch"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          <span className="tag tag-red mb-6 inline-flex">{article.category}</span>

          <h1
            className="font-display-black text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{ color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            {article.title}
          </h1>

          <p className="text-xl mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {article.excerpt}
          </p>

          <div
            className="flex flex-wrap items-center gap-6 text-sm py-6"
            style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <User className="w-4 h-4" />
              <span>Charles Peralo</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br />") }}
          />
          <div
            className="flex flex-wrap gap-2 mt-14 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span className="tag">{article.category}</span>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-14"
        style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="accent-line mx-auto" />
          <h2 className="font-display text-2xl sm:text-3xl mb-3" style={{ color: "var(--text-primary)" }}>
            Enjoyed This Article?
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            Get more insights like this delivered to your inbox every morning. Free, no spam.
          </p>
          <NewsletterForm variant="hero" className="max-w-lg mx-auto" />
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="accent-line" />
            <h2 className="font-display text-2xl sm:text-3xl mb-8" style={{ color: "var(--text-primary)" }}>
              More in {article.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((post) => (
                <Link key={post.slug} href={`/article/${post.slug}`} className="block group">
                  <div className="card-dark p-6 h-full flex flex-col">
                    <span className="tag mb-4 self-start">{post.category}</span>
                    <h3
                      className="font-display text-lg mb-2 clamp-2 group-hover:text-blue-400 transition-colors flex-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs mt-4" style={{ color: "var(--text-muted)" }}>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}