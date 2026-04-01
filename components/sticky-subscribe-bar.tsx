"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Mail } from "lucide-react"

export function StickySubscribeBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("sub-bar-dismissed")) {
      setDismissed(true)
      return
    }
    const onScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const dismiss = () => {
    setDismissed(true)
    sessionStorage.setItem("sub-bar-dismissed", "1")
  }

  if (dismissed || !visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 fade-up"
      style={{
        background: "rgba(13,13,20,0.97)",
        borderTop: "1px solid var(--border-bright)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--accent-dim)" }}
        >
          <Mail className="w-3.5 h-3.5 text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            Get smarter every morning.{" "}
          </span>
          <span className="text-sm hidden sm:inline" style={{ color: "var(--text-secondary)" }}>
            Join 50K+ readers getting Charles&apos;s free daily briefing.
          </span>
        </div>
        <Link
          href="/subscribe"
          className="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold touch btn-accent"
        >
          Subscribe Free
        </Link>
        <button
          onClick={dismiss}
          className="flex-shrink-0 p-1.5 rounded-lg touch"
          style={{ color: "var(--text-muted)" }}
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}