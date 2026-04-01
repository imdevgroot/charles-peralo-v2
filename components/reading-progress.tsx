"use client"

import { useState, useEffect } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5" style={{ background: "rgba(255,255,255,0.04)" }}>
      <div
        className="h-full transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(to right, var(--accent), #a78bfa)",
        }}
      />
    </div>
  )
}