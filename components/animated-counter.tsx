"use client"

import { useState, useEffect, useRef } from "react"

interface Props {
  end: string
  duration?: number
}

export function AnimatedCounter({ end, duration = 1800 }: Props) {
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          // Parse numeric part
          const suffix = end.replace(/[0-9.]/g, "")
          const num = parseFloat(end.replace(/[^0-9.]/g, ""))
          if (isNaN(num)) { setDisplay(end); return }
          const startTime = performance.now()
          const animate = (now: number) => {
            const elapsed = now - startTime
            const fraction = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - fraction, 3)
            const current = eased * num
            const formatted = num >= 10
              ? Math.round(current).toLocaleString()
              : current.toFixed(1)
            setDisplay(formatted + suffix)
            if (fraction < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{display}</span>
}