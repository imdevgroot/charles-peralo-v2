import { NewsletterForm } from "@/components/newsletter-form"
import { Check, Users, TrendingUp, Globe, Clock } from "lucide-react"

export default function SubscribePage() {
  const benefits = [
    "Daily briefing delivered every morning",
    "Deep-dives on politics, business, and culture",
    "No fluff - only what actually matters",
    "Curated insights from 2.5B views of research",
    "Completely free, forever",
  ]

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section
        className="section-pad"
        style={{
          background: "linear-gradient(135deg, #0d1526 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - copy */}
            <div>
              <span className="tag tag-blue mb-6 inline-flex">Free Newsletter</span>
              <h1 className="font-display-black text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ color: "var(--text-primary)" }}>
                Get the Briefing That Actually{" "}
                <span className="grad-blue">Teaches You</span>{" "}
                Something
              </h1>
              <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                50,000+ readers start their day with Charles Peralo&apos;s newsletter. No noise, no spin -
                just the insights you need to understand what&apos;s really happening in the world.
              </p>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(59,130,246,0.2)" }}
                    >
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{benefit}</span>
                  </li>
                ))}
              </ul>
              {/* Social proof */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Users, value: "50K+", label: "Subscribers" },
                  { icon: TrendingUp, value: "Daily", label: "Editions" },
                  { icon: Globe, value: "Free", label: "Forever" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl text-center"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: "var(--accent)" }} />
                    <div className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{stat.value}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - form */}
            <div>
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-bright)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                }}
              >
                <div className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>
                  Join the Newsletter
                </div>
                <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
                  Start your mornings informed. It takes 10 seconds.
                </p>
                <NewsletterForm variant="hero" />
                <div
                  className="mt-8 pt-6"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    Trusted by readers in 50+ countries. Your privacy is respected.
                    Unsubscribe with one click, anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="accent-line mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl mb-4" style={{ color: "var(--text-primary)" }}>
            What to Expect
          </h2>
          <p className="mb-14 text-lg" style={{ color: "var(--text-secondary)" }}>
            Every edition is built the same way - no filler, no wasted time.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "5-Minute Read",
                description: "Every edition is designed to fit into your morning routine without overwhelming you.",
              },
              {
                icon: TrendingUp,
                title: "Real Analysis",
                description: "Not just headlines. Charles breaks down what events actually mean for you and the world.",
              },
              {
                icon: Globe,
                title: "Every Perspective",
                description: "Politics, business, culture, and personal growth — all in one cohesive briefing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl text-left"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--accent-dim)" }}
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="font-display text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}