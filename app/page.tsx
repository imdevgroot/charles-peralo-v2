import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, Globe, Brain, Clock, Play } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { getAllArticles, getCategoryStats } from "@/lib/articles"

export default function HomePage() {
  const articles = getAllArticles()
  const categoryStats = getCategoryStats()
  const featuredPosts = articles.slice(0, 4)

  const categories = [
    { name: "Politics", slug: "politics", count: categoryStats.politics || 0, color: "#ef4444" },
    { name: "Business", slug: "business", count: categoryStats.business || 0, color: "#3b82f6" },
    { name: "Culture", slug: "culture", count: categoryStats.culture || 0, color: "#8b5cf6" },
    { name: "Personal", slug: "personal", count: categoryStats.personal || 0, color: "#10b981" },
  ]

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/charles-peralo.png" alt="" fill className="object-cover object-center opacity-10" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--bg) 50%, rgba(13,13,20,0.6) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-2xl">
            <span className="tag tag-blue mb-6 inline-flex">2M+ Followers &nbsp;|&nbsp; 2.5B Views</span>
            <h1 className="font-display-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 fade-up" style={{ color: "var(--text-primary)" }}>
              Daily Insights That{" "}
              <span className="grad-blue">Actually</span>{" "}
              Matter
            </h1>
            <p className="text-lg sm:text-xl mb-10 max-w-xl" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Charles Peralo turns clickbait headlines into content that actually teaches you something.
              Join 50,000+ readers getting the briefing that matters every morning.
            </p>
            <div className="p-6 rounded-2xl mb-8 max-w-lg" style={{ background: "var(--bg-card)", border: "1px solid var(--border-bright)" }}>
              <div className="font-display text-lg mb-1" style={{ color: "var(--text-primary)" }}>Start Your Daily Briefing</div>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Free. No spam. Unsubscribe anytime.</p>
              <NewsletterForm variant="hero" />
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Users, value: "50K+", label: "Subscribers" },
                { icon: TrendingUp, value: "Daily", label: "Insights" },
                { icon: Globe, value: "Worldwide", label: "Readers" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{stat.value}</span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5 z-0">
          <Image
            src="/images/charles-peralo.png"
            alt="Charles Peralo"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--bg) 0%, transparent 60%)" }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "2M+", label: "Social Followers" },
              { value: "2.5B", label: "Total Views" },
              { value: "50K+", label: "Newsletter Readers" },
              { value: "Daily", label: "New Content" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display-black text-3xl sm:text-4xl grad-blue">{stat.value}</div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      {featuredPosts.length > 0 && (
        <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="accent-line" />
                <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>Latest Stories</h2>
              </div>
              <Link href="/articles" className="accent-link flex items-center gap-1.5 text-sm font-medium">
                All articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hero article */}
            <Link href={`/article/${featuredPosts[0].slug}`} className="block mb-6 group">
              <div className="relative rounded-2xl overflow-hidden lift" style={{ border: "1px solid var(--border)" }}>
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 relative h-64 lg:h-96">
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1526 0%, #1a0a2e 100%)" }} />
                    <div className="absolute inset-0 flex items-center justify-center font-display-black text-9xl opacity-5" style={{ color: "var(--accent)" }}>
                      {featuredPosts[0].category[0]}
                    </div>
                    <span className="absolute top-4 left-4 tag tag-blue">Featured</span>
                  </div>
                  <div className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-12" style={{ background: "var(--bg-card)" }}>
                    <span className="tag tag-red mb-4 self-start">{featuredPosts[0].category}</span>
                    <h3 className="font-display text-2xl lg:text-3xl mb-4 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                      {featuredPosts[0].title}
                    </h3>
                    <p className="text-sm mb-6 clamp-3" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                      {featuredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
                      <span>{new Date(featuredPosts[0].date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grid */}
            {featuredPosts.length > 1 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredPosts.slice(1, 4).map((post) => (
                  <Link key={post.slug} href={`/article/${post.slug}`} className="block group">
                    <div className="card-dark h-full flex flex-col">
                      <div className="relative h-44 rounded-t-2xl overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--bg-elevated) 0%, #0d1526 100%)" }}>
                        <span className="font-display-black text-8xl opacity-5" style={{ color: "var(--accent)" }}>{post.category[0]}</span>
                        <span className="absolute top-3 left-3 tag">{post.category}</span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display text-lg mb-2 clamp-2 group-hover:text-blue-400 transition-colors flex-1" style={{ color: "var(--text-primary)" }}>
                          {post.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs mt-4" style={{ color: "var(--text-muted)" }}>
                          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* BIO */}
      <section className="section-pad" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="font-display text-3xl sm:text-4xl mb-6" style={{ color: "var(--text-primary)" }}>
                Making Clickbait Educational and Fun
              </h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                With over 2 million followers and 2.5 billion views, Charles Peralo has mastered the art of turning
                clickbait headlines into educational content. From celebrity news to business economics, he makes
                everything from silly to serious topics actually teach you something.
              </p>
              <blockquote className="my-8 p-6 rounded-xl" style={{ borderLeft: "3px solid var(--accent)", background: "var(--bg-elevated)" }}>
                <p className="italic text-lg" style={{ color: "var(--text-primary)", lineHeight: 1.7 }}>
                  &ldquo;I make headlines that are sometimes silly, sometimes tricky and sometimes weird, but they lead to
                  stories that pack a bunch and sometimes actually get to teach people things.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold" style={{ color: "var(--accent)" }}>— Charles Peralo</footer>
              </blockquote>
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-accent lift touch">
                Learn More About Charles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-card) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-4 -right-4 px-5 py-4 rounded-2xl text-center" style={{ background: "var(--accent)", boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}>
                <div className="font-display-black text-2xl text-white">2.5B</div>
                <div className="text-xs text-blue-100">Views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="accent-line" />
            <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>Explore by Topic</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="block group">
                <div className="card-dark p-8 text-center">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center font-display-black text-2xl"
                    style={{ background: `${cat.color}20`, color: cat.color }}>
                    {cat.name[0]}
                  </div>
                  <div className="font-display text-xl mb-1 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                    {cat.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {cat.count} {cat.count === 1 ? "article" : "articles"}
                  </div>
                  <ArrowRight className="w-4 h-4 mx-auto mt-4 transition-all duration-200 group-hover:translate-x-1" style={{ color: "var(--text-muted)" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section-pad" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="accent-line mx-auto" />
            <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>Latest Video</h2>
            <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>Watch Charles break down today&apos;s biggest story</p>
          </div>
          <div className="rounded-2xl overflow-hidden p-1" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-bright)" }}>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Latest Charles Peralo Video"
                className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-red lift touch">
              <Play className="w-4 h-4" /> Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* QUIZACLES */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="accent-line" />
              <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>Test Your Knowledge</h2>
            </div>
            <Link href="/quizacles" className="accent-link flex items-center gap-1.5 text-sm font-medium">
              All quizzes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Political Bias Detection Challenge", description: "Can you spot bias in news headlines and social media posts? Test your media literacy skills.", questions: 15, duration: "10 min", participants: "12.8K" },
              { title: "Social Media Algorithm Quiz", description: "Think you understand how platforms decide what you see? This quiz might surprise you.", questions: 12, duration: "8 min", participants: "15.2K" },
            ].map((quiz) => (
              <div key={quiz.title} className="card-dark p-8">
                <span className="tag tag-blue mb-4 inline-flex">Quizacle</span>
                <h3 className="font-display text-xl mb-3" style={{ color: "var(--text-primary)" }}>{quiz.title}</h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{quiz.description}</p>
                <div className="flex gap-4 text-xs mb-6 p-4 rounded-xl" style={{ background: "var(--bg-elevated)" }}>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <Brain className="w-3.5 h-3.5" /> {quiz.questions} questions
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <Clock className="w-3.5 h-3.5" /> {quiz.duration}
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <Users className="w-3.5 h-3.5" /> {quiz.participants}
                  </div>
                </div>
                <Link href="/quizacles" className="block w-full text-center py-3 rounded-xl text-sm font-semibold touch btn-accent">
                  Take the Challenge
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-pad" style={{ background: "linear-gradient(135deg, #0d1526 0%, #0d0d14 50%, #13081e 100%)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="accent-line mx-auto" />
          <h2 className="font-display-black text-4xl sm:text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
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