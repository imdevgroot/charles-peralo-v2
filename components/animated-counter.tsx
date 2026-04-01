"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  target: string
  className?: string
}

export function AnimatedCounter({ target, className = "" }: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          // Parse numeric part
          const match = target.match(/^([\d.]+)(.*)$/)
          if (!match) { setDisplay(target); return }
          const end = parseFloat(match[1])
          const suffix = match[2]
          const isDecimal = match[1].includes(".")
          const duration = 1800
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const p = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            const current = end * ease
            setDisplay((isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix)
            if (p < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className={className}>{display}</span>
}