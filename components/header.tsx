"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearch } from "@/contexts/search-context"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesOpen, setIsArticlesOpen] = useState(false)
  const { openSearch } = useSearch()

  return (
    <header
      style={{
        background: "rgba(13,13,20,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-500/30 group-hover:ring-blue-500/60 transition-all">
              <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <div
                className="font-display text-base leading-none"
                style={{ color: "var(--text-primary)" }}
              >
                Charles Peralo
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                Daily Insights
              </div>
            </div>
          </Link>

          {/* Mobile logo center */}
          <div className="sm:hidden absolute left-1/2 -translate-x-1/2 font-display text-sm" style={{ color: "var(--text-primary)" }}>
            Charles Peralo
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {item.label}
              </Link>
            ))}

            {/* Articles dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsArticlesOpen(true)}
              onMouseLeave={() => setIsArticlesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Articles
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isArticlesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isArticlesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 rounded-xl py-2 z-50 fade-in"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-bright)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {[
                    { href: "/articles", label: "All Articles" },
                    { href: "/category/politics", label: "Politics" },
                    { href: "/category/business", label: "Business" },
                    { href: "/category/culture", label: "Culture" },
                    { href: "/category/personal", label: "Personal" },
                  ].map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm transition-all duration-150 ${i === 0 ? "font-semibold mb-1 border-b" : ""}`}
                      style={{
                        color: "var(--text-secondary)",
                        borderColor: i === 0 ? "var(--border)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)"
                        e.currentTarget.style.background = "var(--bg-card)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)"
                        e.currentTarget.style.background = "transparent"
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/quizacles"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              Quizacles
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openSearch}
              className="p-2.5 rounded-lg transition-all duration-200 touch"
              style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-bright)"
                e.currentTarget.style.color = "var(--text-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)"
                e.currentTarget.style.color = "var(--text-muted)"
              }}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <Link
              href="/subscribe"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 touch"
              style={{ background: "var(--accent)", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
            >
              Subscribe Free
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={openSearch}
              className="p-2 rounded-lg touch"
              style={{ color: "var(--text-muted)" }}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg touch"
              style={{ color: "var(--text-muted)" }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden py-6 fade-in"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <nav className="flex flex-col gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/articles", label: "All Articles" },
                { href: "/category/politics", label: "Politics" },
                { href: "/category/business", label: "Business" },
                { href: "/category/culture", label: "Culture" },
                { href: "/category/personal", label: "Personal" },
                { href: "/quizacles", label: "Quizacles" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium touch"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <Link
                  href="/subscribe"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold touch"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  Subscribe Free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}