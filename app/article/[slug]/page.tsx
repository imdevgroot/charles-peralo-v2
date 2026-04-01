import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { getAllArticles, getArticleBySlug } from "@/lib/articles"
import { NewsletterForm } from "@/components/newsletter-form"
import { ReadingProgress } from "@/components/reading-progress"
import { ShareButtons } from "@/components/share-buttons"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — Charles Peralo`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["Charles Peralo"],
      tags: [article.category],
      images: [{ url: "/images/charles-peralo.png", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      creator: "@charlesperalo",
      images: ["/images/charles-peralo.png"],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const allArticles = getAllArticles()
  const related = allArticles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)

  return (
    <div style={{ background: "var(--bg)" }}>
      <ReadingProgress />

      {/* Header */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/articles" className="muted-link inline-flex items-center gap-2 text-sm mb-8 touch">
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>

          <span className="tag tag-red mb-6 inline-flex">{article.category}</span>

          <h1 className="article-headline mb-6" style={{ color: "var(--text-primary)" }}>
            {article.title}
          </h1>

          <p className="text-xl mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-5" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "var(--text-muted)" }}>
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charles Peralo</span></div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{article.readTime}</span></div>
            </div>
            <ShareButtons title={article.title} slug={article.slug} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 article-body">
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br />") }} />

          {/* Bottom share */}
          <div className="mt-14 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="tag">{article.category}</span>
            <ShareButtons title={article.title} slug={article.slug} />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="hr-accent mx-auto mb-3" style={{ width: "2.5rem" }} />
          <h2 className="font-display text-2xl sm:text-3xl mb-3" style={{ color: "var(--text-primary)" }}>Enjoyed This Article?</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>Get more like this every morning. Free, no spam.</p>
          <NewsletterForm variant="hero" className="max-w-lg mx-auto" />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="hr-accent mb-3" style={{ width: "2.5rem" }} />
            <h2 className="font-display text-2xl sm:text-3xl mb-8" style={{ color: "var(--text-primary)" }}>More in {article.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((post) => (
                <Link key={post.slug} href={`/article/${post.slug}`} className="block group">
                  <div className="card-dark p-6 h-full flex flex-col gap-3">
                    <span className="tag self-start">{post.category}</span>
                    <h3 className="font-display text-lg clamp-2 group-hover:text-blue-400 transition-colors flex-1" style={{ color: "var(--text-primary)", lineHeight: 1.3 }}>{post.title}</h3>
                    <div className="flex items-center justify-between text-xs mt-auto pt-3" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
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