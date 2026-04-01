import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Brain, Clock, Users, Play, Star } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { NewsletterForm } from "@/components/newsletter-form"
import { getAllArticles, getCategoryStats } from "@/lib/articles"

export default function HomePage() {
  const articles = getAllArticles()
  const categoryStats = getCategoryStats()
  const featuredPosts = articles.slice(0, 6)

  const tickerItems = [
    "2M Followers", "2.5B Views", "50K Subscribers", "Daily Briefings",
    "Politics", "Business", "Culture", "Personal Growth",
    "2M Followers", "2.5B Views", "50K Subscribers", "Daily Briefings",
    "Politics", "Business", "Culture", "Personal Growth",
  ]

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ══ HERO — SUBSCRIBE FIRST ══ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100svh", display: "flex", alignItems: "center", background: "var(--bg)" }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-full h-full" style={{ background: "radial-gradient(ellipse 70% 70% at 80% 40%, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0" style={{ width: "50%", height: "50%", background: "radial-gradient(ellipse 80% 80% at 20% 80%, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />
        </div>

        {/* Charles — subtle right side */}
        <div className="hidden xl:block absolute right-0 top-0 bottom-0 z-0" style={{ width: "38%" }}>
          <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover object-top" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--bg) 0%, rgba(13,13,20,0.5) 50%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 30%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 15%)" }} />
        </div>

        {/* Mobile bg */}
        <div className="xl:hidden absolute inset-0 z-0">
          <Image src="/images/charles-peralo.png" alt="" fill className="object-cover object-top opacity-[0.06]" priority />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
          <div className="max-w-2xl">

            {/* Credibility pill */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="issue-badge">Daily Edition</span>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                <span className="w-1 h-1 rounded-full inline-block" style={{ background: "var(--border-bright)" }} />
                <span>Trusted by 50K+ readers worldwide</span>
              </div>
            </div>

            {/* Headline — value prop first */}
            <h1 className="mb-5 fade-up" style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 900,
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "var(--text-primary)",
            }}>
              Get Smarter<br />
              Every Morning.<br />
              <span className="grad-blue">For Free.</span>
            </h1>

            <p className="mb-8 max-w-sm" style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
              Charles Peralo&apos;s daily newsletter turns today&apos;s biggest headlines into something
              you actually understand — and remember.
            </p>

            {/* ━━ THE SUBSCRIBE FORM — DOMINANT ━━ */}
            <div
              className="rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-bright)",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.1), 0 32px 64px rgba(0,0,0,0.4)",
              }}
            >
              {/* Subtle glow inside card */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)" }} />

              <div className="mb-5">
                <div className="font-display text-xl sm:text-2xl mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Join the Daily Briefing
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Free. Delivered every morning. Unsubscribe anytime.
                </p>
              </div>

              <NewsletterForm variant="hero" />

              {/* What you get */}
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="text-xs mb-3 font-semibold tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                  What&apos;s inside every edition
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Politics", "Business", "Culture", "Personal Growth"].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "50K+", label: "Subscribers" },
                { value: "2M+", label: "Followers" },
                { value: "2.5B", label: "Views" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-2">
                  {i > 0 && <div style={{ width: "1px", height: "1rem", background: "var(--border-bright)" }} />}
                  <span className="font-display font-black text-sm grad-blue">{s.value}</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* ══ TICKER ══ */}
      <div className="ticker-wrap py-3 border-y" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ ANIMATED STATS ══ */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center">
            {([
              { target: "2+", label: "Million Followers", prefix: "" },
              { target: "2.5", label: "Billion Views", prefix: "" },
              { target: "50+", label: "Thousand Subscribers", prefix: "" },
              { target: "365", label: "Days of Content", prefix: "" },
            ] as const).map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="stat-num grad-blue">
                  <AnimatedCounter target={stat.target} />
                </div>
                <div className="text-xs mt-1.5 tracking-wider" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOCIAL PROOF / TESTIMONIALS ══ */}
      <section className="py-12 overflow-hidden" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="mb-6 text-center">
          <div className="overline">What Readers Say</div>
        </div>
        <div className="ticker-wrap">
          <div className="ticker-track" style={{ animationDuration: "40s" }}>
            {([
              { quote: "The only newsletter I actually open every morning.", handle: "@sarahjm_reads" },
              { quote: "Charles explains complex politics in a way that actually makes sense.", handle: "@politicnerddave" },
              { quote: "I learned more from one edition than a week of doom-scrolling.", handle: "@techmom2024" },
              { quote: "Finally someone who makes business news feel relevant.", handle: "@hustlermark_" },
              { quote: "Subscribed two weeks ago. Already recommended it to 5 friends.", handle: "@andreaf_nyc" },
              { quote: "This is what news should feel like. Educational without being preachy.", handle: "@quietreader88" },
              { quote: "The only newsletter I actually open every morning.", handle: "@sarahjm_reads" },
              { quote: "Charles explains complex politics in a way that actually makes sense.", handle: "@politicnerddave" },
              { quote: "I learned more from one edition than a week of doom-scrolling.", handle: "@techmom2024" },
              { quote: "Finally someone who makes business news feel relevant.", handle: "@hustlermark_" },
              { quote: "Subscribed two weeks ago. Already recommended it to 5 friends.", handle: "@andreaf_nyc" },
              { quote: "This is what news should feel like. Educational without being preachy.", handle: "@quietreader88" },
            ] as const).map((t, i) => (
              <div
                key={i}
                className="inline-flex flex-col gap-2 mx-3 p-4 rounded-xl flex-shrink-0"
                style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", width: "260px", verticalAlign: "top" }}
              >
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-current" style={{ color: "#f59e0b" }} />
                  ))}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>&ldquo;{t.quote}&rdquo;</p>
                <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{t.handle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ARTICLES — EDITORIAL LIST + BIG FEATURE ══ */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="overline mb-2">Latest</div>
              <h2 className="section-headline" style={{ color: "var(--text-primary)" }}>The Briefing</h2>
            </div>
            <Link href="/articles" className="accent-link hidden sm:flex items-center gap-1 text-sm font-semibold">
              All stories <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: numbered editorial list */}
            <div className="lg:col-span-5">
              {featuredPosts.slice(0, 5).map((post, i) => (
                <Link key={post.slug} href={`/article/${post.slug}`} className="block group article-list-item">
                  <div className="article-num">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="read-chip mb-2">
                      <span className="tag-sm tag" style={{ color: "var(--text-muted)" }}>{post.category}</span>
                      <span className="ml-2">{post.readTime}</span>
                    </div>
                    <h3
                      className="font-display text-base sm:text-lg group-hover:text-blue-400 transition-colors"
                      style={{ color: "var(--text-primary)", lineHeight: 1.3 }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm mt-1.5 clamp-2" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right: big feature card */}
            {featuredPosts[0] && (
              <div className="lg:col-span-7">
                <Link href={`/article/${featuredPosts[0].slug}`} className="block group h-full">
                  <div
                    className="grad-border h-full flex flex-col overflow-hidden"
                    style={{ minHeight: "520px" }}
                  >
                    {/* Big initial letter */}
                    <div
                      className="relative flex items-center justify-center overflow-hidden flex-1"
                      style={{
                        background: "linear-gradient(135deg, #080d1a 0%, #100820 100%)",
                        minHeight: "300px",
                      }}
                    >
                      <div
                        className="editorial-num select-none"
                        style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
                      >
                        {featuredPosts[0].title[0]}
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <span className="tag tag-blue self-start">Featured Story</span>
                        <div style={{ background: "linear-gradient(to top, rgba(13,13,20,1) 0%, transparent 100%)", marginLeft: "-1.5rem", marginRight: "-1.5rem", padding: "1.5rem", paddingTop: "3rem" }}>
                          <div className="overline mb-2">{featuredPosts[0].category}</div>
                          <h3
                            className="font-display text-2xl sm:text-3xl group-hover:text-blue-400 transition-colors"
                            style={{ color: "var(--text-primary)", lineHeight: 1.2 }}
                          >
                            {featuredPosts[0].title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-4" style={{ background: "var(--bg-card)" }}>
                      <p className="text-sm clamp-3" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                        {featuredPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                          <span>{new Date(featuredPosts[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                          <span style={{ color: "var(--border-bright)" }}>|</span>
                          <span>{featuredPosts[0].readTime}</span>
                        </div>
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold reveal-arrow"
                          style={{ color: "var(--accent)" }}
                        >
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ GIANT QUOTE ══ */}
      <section
        className="section-pad overflow-hidden"
        style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", position: "relative" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div
              className="absolute -top-8 -left-4 font-display-black select-none pointer-events-none"
              style={{ fontSize: "20rem", lineHeight: 1, color: "rgba(59,130,246,0.04)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              &ldquo;
            </div>
            <div className="overline mb-6 relative z-10">Charles Peralo</div>
            <blockquote className="relative z-10">
              <p className="giant-quote" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Clickbait headlines.<br />
                <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>Real education.</span><br />
                That&apos;s the deal.
              </p>
            </blockquote>
            <div className="mt-10 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2" style={{ ringColor: "var(--border-bright)" }}>
                <Image src="/images/charles-peralo.png" alt="Charles Peralo" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Charles Peralo</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>2M+ Followers &bull; 2.5B Views</div>
              </div>
              <Link href="/about" className="accent-link ml-auto hidden sm:flex items-center gap-1.5 text-sm font-semibold">
                His Story <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATEGORIES — PILL PILLS ══ */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overline mb-4">Topics</div>
          <h2 className="section-headline mb-10" style={{ color: "var(--text-primary)" }}>What Charles Covers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Politics", slug: "politics", desc: "Breaking down political events, policy and what they actually mean for you.", count: categoryStats.politics || 0, color: "#ef4444", bg: "rgba(239,68,68,0.06)" },
              { name: "Business", slug: "business", desc: "From startup economics to Wall Street — explained for real people.", count: categoryStats.business || 0, color: "#3b82f6", bg: "rgba(59,130,246,0.06)" },
              { name: "Culture", slug: "culture", desc: "Parasocial relationships, internet trends and what they reveal about us.", count: categoryStats.culture || 0, color: "#8b5cf6", bg: "rgba(139,92,246,0.06)" },
              { name: "Personal", slug: "personal", desc: "Burnout, imposter syndrome and the conversations creators avoid.", count: categoryStats.personal || 0, color: "#10b981", bg: "rgba(16,185,129,0.06)" },
            ].map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="group block">
                <div
                  className="p-6 sm:p-8 rounded-2xl flex items-start gap-5 transition-all duration-200 card-dark"
                  style={{ borderLeft: `3px solid ${cat.color}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-display-black text-xl"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-display text-lg group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                        {cat.name}
                      </div>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{cat.count} articles</span>
                    </div>
                    <p className="text-sm clamp-2" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {cat.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" style={{ color: "var(--accent)" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VIDEO ══ */}
      <section className="section-pad" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="overline mb-3">Watch</div>
              <h2 className="section-headline mb-5" style={{ color: "var(--text-primary)" }}>
                See It In<br />Action
              </h2>
              <p className="mb-8" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Charles breaks down today&apos;s biggest story — turning what could be a confusing headline into
                something you actually understand and remember.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/@Charlesperalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold btn-red lift touch"
                >
                  <Play className="w-4 h-4" /> YouTube Channel
                </a>
                <a
                  href="https://www.tiktok.com/@charlesperalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold touch"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-bright)", color: "var(--text-secondary)" }}
                >
                  TikTok
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden p-1" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-bright)" }}>
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
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUIZACLES ══ */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overline mb-3">Quizacles</div>
          <div className="flex items-end justify-between mb-10">
            <h2 className="section-headline" style={{ color: "var(--text-primary)" }}>Think You Know?<br /><span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>Prove It.</span></h2>
            <Link href="/quizacles" className="accent-link hidden sm:flex items-center gap-1 text-sm font-semibold">
              All quizzes <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Political Bias Detection Challenge", description: "Can you spot bias in news headlines? Test your media literacy.", questions: 15, duration: "10 min", participants: "12.8K" },
              { title: "Social Media Algorithm Quiz", description: "Think you understand what the algorithm shows you? Think again.", questions: 12, duration: "8 min", participants: "15.2K" },
            ].map((quiz, i) => (
              <div key={quiz.title} className="grad-border overflow-hidden group">
                <div className="p-7 sm:p-8 flex flex-col gap-5" style={{ background: "var(--bg-card)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="tag tag-blue">Quizacle #{i + 1}</span>
                    <div className="editorial-num text-right" style={{ fontSize: "4rem", lineHeight: 1, marginTop: "-0.5rem" }}>
                      {String(quiz.questions).padStart(2,"0")}
                    </div>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl" style={{ color: "var(--text-primary)", lineHeight: 1.2 }}>
                    {quiz.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{quiz.description}</p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{quiz.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{quiz.participants} played</span>
                  </div>
                  <Link href="/quizacles" className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold btn-accent touch mt-auto">
                    Take the Challenge
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ TESTIMONIALS ══ */}
      <section className="py-14 overflow-hidden" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="overline mb-2">Social Proof</div>
          <h2 className="section-headline" style={{ color: "var(--text-primary)" }}>What Readers Say</h2>
        </div>
        <div className="ticker-wrap py-2">
          <div className="ticker-track" style={{ animationDuration: "40s" }}>
            {[
              { handle: "@mike_reads", text: "This is literally the only newsletter I open every single morning. No fluff, just facts." },
              { handle: "@sarah_j", text: "Charles has a gift for making me care about things I never thought I would. Politics actually makes sense now." },
              { handle: "@devtom99", text: "2.5 billion views for a reason. The man knows how to explain things." },
              { handle: "@thepoliticnerve", text: "I have learned more from Charles Peralo than from 4 years of following the news." },
              { handle: "@real_kim", text: "Subscribed in 2 minutes, been reading for 6 months. Changed how I see the world." },
              { handle: "@marcus_daily", text: "Genuinely the best free newsletter on the internet. Not even close." },
              { handle: "@mike_reads", text: "This is literally the only newsletter I open every single morning. No fluff, just facts." },
              { handle: "@sarah_j", text: "Charles has a gift for making me care about things I never thought I would. Politics actually makes sense now." },
              { handle: "@devtom99", text: "2.5 billion views for a reason. The man knows how to explain things." },
              { handle: "@thepoliticnerve", text: "I have learned more from Charles Peralo than from 4 years of following the news." },
              { handle: "@real_kim", text: "Subscribed in 2 minutes, been reading for 6 months. Changed how I see the world." },
              { handle: "@marcus_daily", text: "Genuinely the best free newsletter on the internet. Not even close." },
            ].map((t, i) => (
              <div
                key={i}
                className="inline-flex flex-col justify-between mx-3 p-5 rounded-2xl flex-shrink-0"
                style={{
                  width: "280px",
                  height: "130px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-bright)",
                  verticalAlign: "top",
                  overflow: "hidden",
                }}
              >
                <p className="text-sm clamp-3" style={{ color: "var(--text-secondary)", lineHeight: 1.55, overflow: "hidden" }}>&ldquo;{t.text}&rdquo;</p>
                <span className="text-xs font-semibold mt-2 flex-shrink-0" style={{ color: "var(--accent)" }}>{t.handle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══ NEWSLETTER CTA — FULL BLEED ══ */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: "var(--bg)" }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="overline mb-4">Free Newsletter</div>
          <h2 className="mb-4" style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}>
            Start Knowing<br />
            <span className="grad-blue">More</span> Tomorrow
          </h2>
          <p className="mb-10 max-w-lg mx-auto" style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            50,000+ readers get Charles&apos;s daily briefing every morning. Free.
            No fluff. Just the insights that matter.
          </p>
          <div className="grad-border max-w-lg mx-auto">
            <div className="p-6 sm:p-8" style={{ background: "var(--bg-card)" }}>
              <NewsletterForm variant="cta" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}