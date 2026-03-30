"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, X, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useSearch } from "@/contexts/search-context"
import Link from "next/link"
import Image from "next/image"

interface SearchResult {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

export function SearchModal() {
  const { isSearchOpen, closeSearch } = useSearch()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  // Load recent searches from localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("recentSearches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    try {
      // Fetch articles with content for comprehensive search
      const response = await fetch('/api/articles?includeContent=true')
      const allArticles = await response.json()
      
      // Filter results based on query (search in title, excerpt, category, and content)
      const filteredResults = allArticles.filter((article: any) => {
        const query = searchQuery.toLowerCase()
        return (
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
        )
      }).map((article: any) => ({
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        category: article.category,
        date: article.date,
        readTime: article.readTime
      }))

      setResults(filteredResults)
    } catch (error) {
      console.error("Search error:", error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Handle search input change with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, performSearch])

  // Handle search submission
  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return

    // Save to recent searches
    const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem("recentSearches", JSON.stringify(updated))

    // Navigate to search page for comprehensive results
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    closeSearch()
  }

  // Handle result click
  const handleResultClick = () => {
    closeSearch()
    setQuery("")
    setResults([])
  }

  // Handle recent search click
  const handleRecentSearchClick = (searchTerm: string) => {
    setQuery(searchTerm)
    performSearch(searchTerm)
  }

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  // Reset when modal closes
  useEffect(() => {
    if (!isSearchOpen) {
      setQuery("")
      setResults([])
    }
  }, [isSearchOpen])

  const categoryColors: Record<string, string> = {
    Politics: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
    Business: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200", 
    Culture: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
    Personal: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
  }

  if (!mounted) {
    return null
  }

  return (
    <Dialog open={isSearchOpen} onOpenChange={closeSearch}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-6 border-b border-slate-200">
            <Search className="w-5 h-5 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
              placeholder="Search articles, topics, or categories..."
              className="flex-1 border-0 focus:ring-0 text-lg p-0 h-auto bg-transparent"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery("")}
                className="p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto">
            {query && isLoading && (
              <div className="p-6 text-center text-slate-500">
                <div className="animate-spin w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                Searching...
              </div>
            )}

            {query && !isLoading && results.length > 0 && (
              <div className="p-4">
                <p className="text-sm text-slate-500 mb-4 px-2">
                  {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                </p>
                <div className="space-y-3">
                  {results.slice(0, 3).map((result) => (
                    <Link 
                      key={result.slug} 
                      href={`/article/${result.slug}`}
                      onClick={handleResultClick}
                    >
                      <Card className="hover:shadow-md transition-shadow duration-200 cursor-pointer border-0 bg-slate-50 hover:bg-white">
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="relative w-16 h-16 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src="/placeholder.svg?height=64&width=64"
                                alt={result.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge 
                                className={`${categoryColors[result.category] || 'bg-gray-100 text-gray-800'} text-xs px-2 py-1 mb-2`}
                              >
                                {result.category}
                              </Badge>
                              <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">
                                {result.title}
                              </h3>
                              <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                                {result.excerpt}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span>{new Date(result.date).toLocaleDateString()}</span>
                                <span>{result.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                  {results.length > 3 && (
                    <div className="pt-2 text-center">
                      <Link href={`/search?q=${encodeURIComponent(query)}`} onClick={handleResultClick}>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                          View all {results.length} results
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {query && !isLoading && results.length === 0 && (
              <div className="p-6 text-center text-slate-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="font-medium mb-2">No quick results found</p>
                <p className="text-sm mb-4">Try our advanced search for more comprehensive results</p>
                <Link href={`/search?q=${encodeURIComponent(query)}`} onClick={handleResultClick}>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    View All Search Results
                  </Button>
                </Link>
              </div>
            )}

            {/* Recent Searches & Suggestions */}
            {!query && (
              <div className="p-6">
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Recent Searches
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRecentSearches}
                        className="text-xs text-slate-500 hover:text-slate-700"
                      >
                        Clear
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleRecentSearchClick(search)}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-sm transition-colors duration-200"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4" />
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Politics", "Business", "Culture", "Personal", "Tech", "Creator Economy", "Social Media", "Young Voters", "TikTok"].map((topic) => (
                      <button
                        key={topic}
                        onClick={() => handleRecentSearchClick(topic)}
                        className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800 rounded-full text-sm transition-colors duration-200"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}