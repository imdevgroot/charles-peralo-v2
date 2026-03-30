"use client"

import { useState, FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2, AlertCircle } from "lucide-react"

interface NewsletterFormProps {
  variant?: "hero" | "cta"
  className?: string
}

export function NewsletterForm({ variant = "hero", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email address is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return <div className={`${className}`} suppressHydrationWarning />
  }

  if (isSubmitted) {
    return (
      <div className={`text-center animate-fade-in ${className}`}>
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-heading text-xl text-slate-900 mb-2">You're all set!</h3>
          <p className="text-body text-slate-600">
            Welcome to the newsletter. Check your inbox for a confirmation email.
          </p>
        </div>
      </div>
    )
  }

  const isHero = variant === "hero"

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError("")
            }}
            placeholder="Enter your email address"
            className={`${
              isHero 
                ? "h-14 rounded-xl border-2 border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-lg" 
                : "h-14 rounded-xl border-2 border-white/30 bg-white/20 text-white placeholder:text-red-200 focus:bg-white focus:text-slate-900 focus:border-white text-lg backdrop-blur-sm"
            } focus-visible transition-all duration-200`}
            disabled={isLoading}
          />
          {error && (
            <div className="absolute top-full left-0 mt-2 flex items-center gap-2 text-red-600 text-sm animate-fade-in">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={`${
            isHero
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-white text-red-600 hover:bg-red-50"
          } px-8 h-14 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-200 hover-lift touch-target whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            isHero ? "Get Free Updates" : "Start Reading Free"
          )}
        </Button>
      </div>
      <p className={`text-sm text-center ${error ? 'mt-8' : ''} ${
        isHero ? "text-slate-500" : "text-red-200"
      }`}>
        ✓ Free forever ✓ {isHero ? "No spam" : "Daily insights"} ✓ Unsubscribe anytime
      </p>
    </form>
  )
}