"use client"

import { useState } from "react"
import { Twitter, Link2, Check } from "lucide-react"

interface ShareButtonsProps {
  title: string
  slug: string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== "undefined" ? `${window.location.origin}/article/${slug}` : `/article/${slug}`

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=charlesperalo`

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold tracking-wider uppercase mr-1" style={{ color: "var(--text-muted)" }}>
        Share
      </span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold touch transition-all duration-200"
        style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1d9bf0"
          e.currentTarget.style.borderColor = "#1d9bf0"
          e.currentTarget.style.color = "#fff"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--bg-elevated)"
          e.currentTarget.style.borderColor = "var(--border)"
          e.currentTarget.style.color = "var(--text-secondary)"
        }}
      >
        <Twitter className="w-3.5 h-3.5" /> Twitter
      </a>
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold touch transition-all duration-200"
        style={{
          background: copied ? "rgba(16,185,129,0.15)" : "var(--bg-elevated)",
          border: copied ? "1px solid rgba(16,185,129,0.4)" : "1px solid var(--border)",
          color: copied ? "#34d399" : "var(--text-secondary)",
        }}
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  )
}