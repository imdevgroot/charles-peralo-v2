"use client"

import { useState, FormEvent, useEffect } from "react"
import { Check, Loader2, AlertCircle } from "lucide-react"

interface NewsletterFormProps {
  variant?: "hero" | "cta" | "footer"
  className?: string
}

export function NewsletterForm({ variant = "hero", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email) { setError("Email address is required"); return }
    if (!validateEmail(email)) { setError("Please enter a valid email address"); return }
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return <div className={className} suppressHydrationWarning />

  if (isSubmitted) {
    return (
      <div className={`text-center fade-in ${className}`}>
        <div
          className="rounded-2xl p-8 flex flex-col items-center gap-3"
          style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: "rgba(59,130,246,0.2)" }}
          >
            <Check className="w-7 h-7 text-blue-400" />
          </div>
          <div>
            <div className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
              You are in!
            </div>
            <div className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Check your inbox for a confirmation email.
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (error) setError("") }}
            placeholder="Enter your email address"
            disabled={isLoading}
            className="w-full h-13 px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              background: "var(--bg-elevated)",
              border: error ? "1px solid rgba(239,68,68,0.5)" : "1px solid var(--border-bright)",
              color: "var(--text-primary)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = error ? "rgba(239,68,68,0.5)" : "var(--border-bright)")}
          />
          {error && (
            <div className="flex items-center gap-1.5 mt-2 text-xs fade-in" style={{ color: "#fca5a5" }}>
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 touch whitespace-nowrap disabled:opacity-50"
          style={{ background: "var(--accent)", color: "#fff" }}
          onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.background = "var(--accent-hover)" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)" }}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </span>
          ) : (
            "Get Free Updates"
          )}
        </button>
      </div>
      <p className="text-xs mt-3 text-center" style={{ color: "var(--text-muted)" }}>
        Free forever. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}