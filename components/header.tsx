"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearch } from "@/contexts/search-context"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesOpen, setIsArticlesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openSearch } = useSearch()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <>
      <header
        style={{
          background: scrolled ? "rgba(13,13,20,0.97)" : "rgba(13,13,20,0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "var(--border-bright)" : "var(--border)"}`,
          transition: "background 0.3s, border-color 0.3s",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300">
                <Image src="/images/charles-peralo.png" alt="Charles Peralo" fill className="object-cover" priority />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-sm leading-none" style={{ color: "var(--text-primary)" }}>Charles Peralo</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Daily Insights</div>
              </div>
            </Link>

            {/* Mobile logo center */}
            <div className="sm:hidden absolute left-1/2 -translate-x-1/2">
              <div className="font-display text-sm" style={{ color: "var(--text-primary)" }}>Charles Peralo</div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <Link href="/" className="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-all">Home</Link>
              <Link href="/about" className="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-all">About</Link>

              {/* Articles dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsArticlesOpen(true)}
                onMouseLeave={() => setIsArticlesOpen(false)}
              >
                <button
                  className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
                >
                  Articles
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isArticlesOpen ? "rotate-180" : ""}`} />
                </button>
                {isArticlesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-44 rounded-xl py-2 z-50 mobile-nav-enter"
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-bright)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    }}
                  >
                    {[
                      { href: "/articles", label: "All Articles", bold: true },
                      { href: "/category/politics", label: "Politics" },
                      { href: "/category/business", label: "Business" },
                      { href: "/category/culture", label: "Culture" },
                      { href: "/category/personal", label: "Personal" },
                    ].map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`secondary-link block px-4 py-2.5 text-sm hover:bg-white/5 transition-all ${item.bold ? "font-semibold border-b" : ""}`}
                        style={{ borderColor: "var(--border)" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/quizacles" className="nav-link px-4 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-all">Quizacles</Link>
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={openSearch}
                aria-label="Search"
                className="touch flex items-center justify-center w-9 h-9 rounded-lg transition-all"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-bright)"
                  e.currentTarget.style.color = "var(--text-primary)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)"
                  e.currentTarget.style.color = "var(--text-muted)"
                }}
              >
                <Search className="w-4 h-4" />
              </button>
              <Link
                href="/subscribe"
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 touch btn-accent"
              >
                Subscribe Free
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={openSearch}
                aria-label="Search"
                className="p-2 rounded-lg touch"
                style={{ color: "var(--text-muted)" }}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg touch"
                style={{ color: "var(--text-muted)" }}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden mobile-nav-enter"
            style={{
              borderTop: "1px solid var(--border)",
              background: "rgba(13,13,20,0.98)",
            }}
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col">
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
                  className="secondary-link px-3 py-3.5 text-sm font-medium rounded-lg hover:bg-white/5 transition-all touch"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <Link
                  href="/subscribe"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold btn-accent touch"
                >
                  Subscribe Free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}