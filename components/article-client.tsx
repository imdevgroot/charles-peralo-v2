"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Bookmark, Heart, MessageCircle, Twitter, Facebook, Linkedin, Link2 } from "lucide-react"

interface ArticleClientProps {
  article: {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    readTime: string
    content: string
  }
  relatedArticles: {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    readTime: string
  }[]
}

export function ArticleClient({ article, relatedArticles }: ArticleClientProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [copyLinkText, setCopyLinkText] = useState("Copy link")

  // Reading progress
  useEffect(() => {
    const updateProgress = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const progressBar = document.getElementById('reading-progress')
      if (progressBar) {
        progressBar.style.width = scrolled + '%'
      }
    }
    
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowShareMenu(false)
    if (showShareMenu) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showShareMenu])

  const shareArticle = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = article?.title || ''
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        setCopyLinkText("Copied!")
        setTimeout(() => setCopyLinkText("Copy link"), 2000)
        break
    }
    setShowShareMenu(false)
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 z-50">
        <div id="reading-progress" className="h-full bg-red-600 transition-all duration-300 ease-out" style={{width: '0%'}}></div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <div className="relative">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              setShowShareMenu(!showShareMenu)
            }}
            size="lg"
            className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-600 shadow-strong border-2 border-slate-200 dark:border-slate-600"
          >
            <Share2 className="w-5 h-5" />
          </Button>
          
          {showShareMenu && (
            <div className="absolute right-16 top-0 bg-white dark:bg-slate-800 rounded-2xl shadow-strong border border-slate-200 dark:border-slate-700 p-2 min-w-[180px]">
              <div className="space-y-1">
                <button
                  onClick={() => shareArticle('twitter')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Twitter className="w-4 h-4 text-blue-400" />
                  Share on Twitter
                </button>
                <button
                  onClick={() => shareArticle('facebook')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  Share on Facebook
                </button>
                <button
                  onClick={() => shareArticle('linkedin')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  Share on LinkedIn
                </button>
                <button
                  onClick={() => shareArticle('copy')}
                  className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Link2 className="w-4 h-4 text-slate-600" />
                  {copyLinkText}
                </button>
              </div>
            </div>
          )}
        </div>

        <Button
          onClick={() => setIsBookmarked(!isBookmarked)}
          size="lg"
          className={`w-14 h-14 rounded-full shadow-strong border-2 transition-all ${
            isBookmarked
              ? "bg-red-600 text-white border-red-600"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-600 border-slate-200 dark:border-slate-600"
          }`}
        >
          <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
        </Button>

        <Button
          onClick={() => setIsLiked(!isLiked)}
          size="lg"
          className={`w-14 h-14 rounded-full shadow-strong border-2 transition-all ${
            isLiked
              ? "bg-red-600 text-white border-red-600"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-600 border-slate-200 dark:border-slate-600"
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
        </Button>
      </div>
    </>
  )
}