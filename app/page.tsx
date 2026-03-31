import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, Globe, Brain, Clock, Play, ChevronRight } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { getAllArticles, getCategoryStats } from "@/lib/articles"

export default function HomePage() {
  const articles = getAllArticles()
  const categoryStats = getCategoryStats()
  const featuredPosts = articles.slice(0, 6)

  const categories = [
    { name: "Politics", slug: "politics", count: categoryStats.politics || 0, color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
    { name: "Business", slug: "business", count: categoryStats.business || 0, color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
    { name: "Culture", slug: "culture", count: categoryStats.culture || 0, color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
    { name: "Personal", slug: "personal", count: categoryStats.personal || 0, color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  ]

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100svh", display: "flex", alignItems: "center", borderBottom: "1px solid var(--border)" }}>
        {/* BG */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 60% at 90% 30%, rgba(139,92,246,0.05) 0%, transparent 60%)" }} />
        </div>

        {/* Charles photo — desktop right side */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 z-0" style={{ width: "45%" }}>
          <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover object-top" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--bg) 0%, rgba(13,13,20,0.3) 60%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 30%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
          <div className="max-w-xl lg:max-w-2xl">
            {/* Live badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="tag tag-blue">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5 animate-pulse" />
                2M+ Followers &nbsp;&bull;&nbsp; 2.5B Views
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline mb-6 fade-up" style={{ color: "var(--text-primary)" }}>
              Daily Insights<br />
              That <span className="grad-blue">Actually</span><br />
              Matter
            </h1>

            <p className="mb-10 max-w-md" style={{ fontSize: "1.2rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Charles Peralo turns clickbait into content that actually teaches you something.
              Join 50,000+ readers getting the briefing that matters every morning.
            </p>

            {/* Signup card */}
            <div className="rounded-2xl p-6 mb-10" style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)", maxWidth: "480px" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="font-display text-base" style={{ color: "var(--text-primary)" }}>Start your free daily briefing</div>
              </div>
              <NewsletterForm variant="hero" />
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: Users, label: "50K+ subscribers" },
                { icon: TrendingUp, label: "Daily insights" },
                { icon: Globe, label: "Worldwide readers" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Charles photo strip */}
        <div className="lg:hidden absolute inset-0 z-0">
          <Image src="/images/charles-peralo.png" alt="" fill className="object-cover object-top opacity-[0.07]" priority />
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10" style={{ color: "var(--text-muted)" }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--border-bright), transparent)" }} />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center">
            {[
              { value: "2M+", label: "Social Followers" },
              { value: "2.5B", label: "Total Views" },
              { value: "50K+", label: "Newsletter Readers" },
              { value: "Daily", label: "New Content" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="stat-num grad-blue">{stat.value}</div>
                <div className="text-xs mt-1.5 tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ── */}
      {featuredPosts.length > 0 && (
        <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="hr-accent mb-3" style={{ width: "2.5rem" }} />
                <h2 className="section-headline" style={{ color: "var(--text-primary)" }}>Latest Stories</h2>
              </div>
              <Link href="/articles" className="accent-link hidden sm:flex items-center gap-1.5 text-sm font-semibold">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Desktop: 5-col hero + stacked secondary. Mobile: single column */}
            <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6 mb-6">
              {/* Big hero article */}
              {featuredPosts[0] && (
                <Link href={`/article/${featuredPosts[0].slug}`} className="lg:col-span-3 block group">
                  <div className="card-dark card-glow h-full flex flex-col" style={{ minHeight: "480px" }}>
                    <div
                      className="relative flex-1 rounded-t-2xl overflow-hidden flex items-end"
                      style={{ background: "linear-gradient(135deg, #0d1526 0%, #1a0a2e 100%)", minHeight: "280px" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display-black opacity-[0.04] select-none" style={{ fontSize: "14rem", color: "var(--accent)", lineHeight: 1 }}>
                          {featuredPosts[0].category[0]}
                        </span>
                      </div>
                      <div className="relative z-10 p-6 w-full" style={{ background: "linear-gradient(to top, var(--bg-card) 0%, transparent 100%)" }}>
                        <span className="tag tag-blue mb-3 inline-flex">Featured</span>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col gap-3">
                      <span className="tag tag-red self-start">{featuredPosts[0].category}</span>
                      <h3 className="font-display text-2xl group-hover:text-blue-400 transition-colors duration-200" style={{ color: "var(--text-primary)", lineHeight: 1.25 }}>
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-sm clamp-2" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{featuredPosts[0].excerpt}</p>
                      <div className="flex items-center justify-between text-xs mt-auto pt-3" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
                        <span>{new Date(featuredPosts[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        <span>{featuredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* 2 stacked secondary */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {featuredPosts.slice(1, 3).map((post) => (
                  <Link key={post.slug} href={`/article/${post.slug}`} className="block group flex-1">
                    <div className="card-dark card-glow p-6 h-full flex flex-col gap-3">
                      <span className="tag self-start">{post.category}</span>
                      <h3 className="font-display text-lg group-hover:text-blue-400 transition-colors duration-200 clamp-2" style={{ color: "var(--text-primary)", lineHeight: 1.3 }}>
                        {post.title}
                      </h3>
                      <p className="text-sm clamp-2" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs mt-auto pt-3" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom row: 3 cards desktop / Mobile: all articles stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPosts.slice(0, 3).map((post, i) => (
                <Link key={post.slug} href={`/article/${post.slug}`} className={`block group ${i === 0 ? "lg:hidden" : ""}`}>
                  <div className="card-dark card-glow p-5 h-full flex flex-col gap-3">
                    <span className="tag self-start">{post.category}</span>
                    <h3 className="font-display text-lg group-hover:text-blue-400 transition-colors duration-200 clamp-2" style={{ color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs mt-auto pt-3" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
              {featuredPosts.slice(3, 6).map((post) => (
                <Link key={post.slug} href={`/article/${post.slug}`} className="block group">
                  <div className="card-dark card-glow p-5 h-full flex flex-col gap-3">
                    <span className="tag self-start">{post.category}</span>
                    <h3 className="font-display text-lg group-hover:text-blue-400 transition-colors duration-200 clamp-2" style={{ color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs mt-auto pt-3" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link href="/articles" className="accent-link inline-flex items-center gap-1.5 text-sm font-semibold">
                View all articles <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── BIO ── */}
      <section className="section-pad" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo - mobile top, desktop right */}
            <div className="order-first lg:order-last">
              <div className="relative mx-auto" style={{ maxWidth: "420px" }}>
                <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--bg-elevated)" }}>
                  <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-card) 0%, transparent 40%)" }} />
                </div>
                {/* Floating stats */}
                <div
                  className="absolute -bottom-4 -left-4 px-5 py-4 rounded-2xl text-center"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-bright)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                >
                  <div className="font-display-black text-2xl grad-blue">2.5B</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Total Views</div>
                </div>
                <div
                  className="absolute -top-4 -right-4 px-5 py-4 rounded-2xl text-center"
                  style={{ background: "var(--accent)", boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                >
                  <div className="font-display-black text-2xl text-white">2M+</div>
                  <div className="text-xs mt-0.5 text-blue-200">Followers</div>
                </div>
              </div>
            </div>

            <div className="order-last lg:order-first">
              <div className="hr-accent mb-3" style={{ width: "2.5rem" }} />
              <h2 className="section-headline mb-5" style={{ color: "var(--text-primary)" }}>
                Making Clickbait<br />Educational and Fun
              </h2>
              <p className="mb-5" style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                With over 2 million followers and 2.5 billion views, Charles Peralo has mastered the art of turning
                clickbait headlines into educational content. From celebrity news to business economics, he makes
                everything from silly to serious topics actually teach you something.
              </p>
              <blockquote
                className="p-6 rounded-xl mb-8"
                style={{ borderLeft: "3px solid var(--accent)", background: "var(--bg-elevated)" }}
              >
                <p className="italic" style={{ fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.8 }}>
                  &ldquo;I make headlines that are sometimes silly, sometimes tricky and sometimes weird, but they lead to
                  stories that pack a bunch and sometimes actually get to teach people things.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold" style={{ color: "var(--accent)" }}>— Charles Peralo</footer>
              </blockquote>
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-accent lift touch">
                Learn More About Charles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hr-accent mb-3" style={{ width: "2.5rem" }} />
          <h2 className="section-headline mb-10" style={{ color: "var(--text-primary)" }}>Explore by Topic</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="block group">
                <div className="card-dark card-glow p-6 sm:p-8 text-center">
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center font-display-black text-2xl"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.name[0]}
                  </div>
                  <div className="font-display text-lg sm:text-xl mb-1 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                    {cat.name}
                  </div>
                  <div className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                    {cat.count} {cat.count === 1 ? "article" : "articles"}
                  </div>
                  <ArrowRight className="w-4 h-4 mx-auto transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-400" style={{ color: "var(--text-muted)" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="section-pad" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="hr-accent mx-auto mb-3" style={{ width: "2.5rem" }} />
            <h2 className="section-headline" style={{ color: "var(--text-primary)" }}>Latest Video</h2>
            <p className="mt-3" style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>Watch Charles break down today&apos;s biggest story</p>
          </div>
          <div
            className="rounded-2xl overflow-hidden p-1"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-bright)" }}
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Latest Charles Peralo Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.youtube.com/@Charlesperalo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-red lift touch"
            >
              <Play className="w-4 h-4" /> Watch on YouTube
            </a>
            <a
              href="https://www.tiktok.com/@charlesperalo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold touch"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-bright)", color: "var(--text-secondary)" }}
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* ── QUIZACLES ── */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="hr-accent mb-3" style={{ width: "2.5rem" }} />
              <h2 className="section-headline" style={{ color: "var(--text-primary)" }}>Test Your Knowledge</h2>
            </div>
            <Link href="/quizacles" className="accent-link hidden sm:flex items-center gap-1.5 text-sm font-semibold">
              All quizzes <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Political Bias Detection Challenge",
                description: "Can you spot bias in news headlines and social media posts? Test your media literacy skills.",
                questions: 15, duration: "10 min", participants: "12.8K", color: "#ef4444",
              },
              {
                title: "Social Media Algorithm Quiz",
                description: "Think you understand how platforms decide what you see? This quiz might surprise you.",
                questions: 12, duration: "8 min", participants: "15.2K", color: "#8b5cf6",
              },
            ].map((quiz) => (
              <div key={quiz.title} className="card-dark card-glow p-7 sm:p-8 flex flex-col gap-4">
                <span className="tag tag-blue self-start">Quizacle</span>
                <h3 className="font-display text-xl sm:text-2xl" style={{ color: "var(--text-primary)", lineHeight: 1.25 }}>
                  {quiz.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{quiz.description}</p>
                <div className="flex flex-wrap gap-4 text-xs p-4 rounded-xl" style={{ background: "var(--bg-elevated)" }}>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <Brain className="w-3.5 h-3.5" /> {quiz.questions} questions
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <Clock className="w-3.5 h-3.5" /> {quiz.duration}
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <Users className="w-3.5 h-3.5" /> {quiz.participants} played
                  </div>
                </div>
                <Link href="/quizacles" className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold touch btn-accent mt-auto">
                  Take the Challenge
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #0d1526 0%, #0d0d14 50%, #13081e 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="hr-accent mx-auto mb-3" style={{ width: "2.5rem" }} />
          <h2 className="hero-headline mb-4" style={{ color: "var(--text-primary)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Don&apos;t Miss Tomorrow&apos;s Insights
          </h2>
          <p className="mb-10 text-lg" style={{ color: "var(--text-secondary)" }}>
            Join 50,000+ readers who rely on Charles Peralo&apos;s daily newsletter for the analysis that matters.
          </p>
          <NewsletterForm variant="cta" className="max-w-lg mx-auto" />
        </div>
      </section>
    </div>
  )
}