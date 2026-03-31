import Link from "next/link"
import { Youtube, Twitter, Instagram, Music2 } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
      {/* Newsletter strip */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="max-w-xl mx-auto text-center">
            <div className="font-display text-2xl sm:text-3xl mb-3" style={{ color: "var(--text-primary)" }}>
              Never Miss an Insight
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
              Join 50,000+ readers who start their day with Charles&apos;s daily briefing.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-xl mb-4" style={{ color: "var(--text-primary)" }}>
              CHARLES PERALO
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-8" style={{ color: "var(--text-secondary)" }}>
              Turning clickbait headlines into educational content that actually teaches you something.
              From celebrity news to business economics — making the world make sense.
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer"
                aria-label="YouTube" className="p-2.5 rounded-xl touch social-btn hover-bg-red">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/charlesperalo" target="_blank" rel="noopener noreferrer"
                aria-label="Twitter" className="p-2.5 rounded-xl touch social-btn hover-bg-blue">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/charlesperalo" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" className="p-2.5 rounded-xl touch social-btn hover-bg-pink">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@charlesperalo" target="_blank" rel="noopener noreferrer"
                aria-label="TikTok" className="p-2.5 rounded-xl touch social-btn hover-bg-purple">
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--text-muted)" }}>
              Explore
            </div>
            <ul className="space-y-3">
              {[
                { href: "/articles", label: "All Articles" },
                { href: "/quizacles", label: "Quizacles" },
                { href: "/subscribe", label: "Newsletter" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="secondary-link text-sm">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--text-muted)" }}>
              Categories
            </div>
            <ul className="space-y-3">
              {["Politics", "Business", "Culture", "Personal"].map((cat) => (
                <li key={cat}>
                  <Link href={`/category/${cat.toLowerCase()}`} className="secondary-link text-sm">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; 2025 Charles Peralo. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }, { href: "/subscribe", label: "Subscribe" }].map((item) => (
              <Link key={item.href} href={item.href} className="muted-link text-xs">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}