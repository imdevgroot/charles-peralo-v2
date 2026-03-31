import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Youtube, Users, TrendingUp, Globe, Award } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "2M+", label: "Social Media Followers" },
    { icon: TrendingUp, value: "2.5B", label: "Total Views" },
    { icon: Globe, value: "50K+", label: "Newsletter Subscribers" },
    { icon: Award, value: "Daily", label: "New Content" },
  ]

  const topics = [
    { title: "Politics", description: "Breaking down political events, policy decisions, and their real-world impact in plain language." },
    { title: "Business", description: "From startup economics to Wall Street moves — what it all means for regular people." },
    { title: "Culture", description: "Parasocial relationships, internet trends, and what they reveal about who we are." },
    { title: "Personal", description: "Burnout, imposter syndrome, and the real conversations creators avoid having publicly." },
  ]

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/charles-peralo.png" alt="" fill className="object-cover object-top opacity-5" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-card) 0%, var(--bg) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag tag-blue mb-6 inline-flex">About Charles</span>
              <h1 className="font-display-black text-5xl sm:text-6xl lg:text-7xl mb-6" style={{ color: "var(--text-primary)" }}>
                Making the World Make <span className="grad-blue">Sense</span>
              </h1>
              <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                With over 2 million followers and 2.5 billion views, Charles Peralo has mastered the art of turning
                clickbait headlines into educational content. From celebrity gossip to geopolitics, he finds the story beneath the story.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold touch btn-red">
                  <Youtube className="w-4 h-4" /> Watch on YouTube
                </a>
                <Link href="/subscribe" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold touch btn-accent">
                  Join Newsletter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl text-center" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: "var(--accent)" }} />
                <div className="font-display-black text-3xl grad-blue">{stat.value}</div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="accent-line" />
          <h2 className="font-display text-3xl sm:text-4xl mb-8" style={{ color: "var(--text-primary)" }}>The Story</h2>
          <div className="space-y-6 text-lg" style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
            <p>
              Charles Peralo started with a simple observation: the headlines that get the most clicks are usually the
              ones that teach the least. Clickbait works because it triggers curiosity — but it rarely delivers anything worth knowing.
              He decided to change that.
            </p>
            <p>
              By leaning into the format that people already engage with, and then filling it with genuine analysis and
              educational depth, Charles built an audience of millions who actually learn something every time they watch, read, or subscribe.
            </p>
            <blockquote className="p-6 rounded-xl my-8" style={{ borderLeft: "3px solid var(--accent)", background: "var(--bg-elevated)" }}>
              <p className="italic text-xl" style={{ color: "var(--text-primary)" }}>
                &ldquo;I make headlines that are sometimes silly, sometimes tricky and sometimes weird, but they lead to stories
                that pack a bunch and sometimes actually get to teach people things.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold" style={{ color: "var(--accent)" }}>— Charles Peralo</footer>
            </blockquote>
            <p>
              From politics to pop culture, from personal finance to parasocial relationships, Charles covers the full
              spectrum of the modern information landscape — with honesty, humor, and a genuine desire to make you smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-pad" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="accent-line" />
          <h2 className="font-display text-3xl sm:text-4xl mb-10" style={{ color: "var(--text-primary)" }}>What Charles Covers</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {topics.map((topic) => (
              <div key={topic.title} className="p-7 rounded-2xl" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                <div className="font-display text-xl mb-3" style={{ color: "var(--text-primary)" }}>{topic.title}</div>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{topic.description}</p>
                <Link href={`/category/${topic.title.toLowerCase()}`} className="accent-link inline-flex items-center gap-1 text-xs mt-4 font-semibold">
                  Read articles <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="accent-line mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-primary)" }}>Stay in the Loop</h2>
          <p className="mb-8 text-lg" style={{ color: "var(--text-secondary)" }}>
            Get Charles&apos;s daily briefing delivered to your inbox. Free, always.
          </p>
          <NewsletterForm variant="hero" className="max-w-lg mx-auto" />
        </div>
      </section>
    </div>
  )
}