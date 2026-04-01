"use client"

import { useState } from "react"
import { Twitter, Link2, Check } from "lucide-react"

interface Props {
  title: string
  slug: string
}

export function ShareButtons({ title, slug }: Props) {
  const [copied, setCopied] = useState(false)

  const url = `https://charles-peralo-v2-nupeeks.vercel.app/article/${slug}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=charlesperalo`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
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
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold touch transition-all"
        style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#60a5fa" }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)" }}
      >
        <Twitter className="w-3.5 h-3.5" />
        Tweet
      </a>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold touch transition-all"
        style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: copied ? "#34d399" : "var(--text-secondary)" }}
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  )
}