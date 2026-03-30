"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Filter, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

import type { ArticleMetadata } from "@/lib/articles"

type SearchResult = ArticleMetadata

function SearchContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [filterCategory, setFilterCategory] = useState("all")
  const [totalResults, setTotalResults] = useState(0)

  // Search function using real articles
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setTotalResults(0)
      return
    }

    setIsLoading(true)
    try {
      // Fetch articles with content for comprehensive search
      const response = await fetch('/api/articles?includeContent=true')
      const allArticles = await response.json()
      
      // Filter by search query (search in title, excerpt, category, and content)
      let filteredResults = allArticles.filter((article: any) => {
        const query = searchQuery.toLowerCase()
        return (
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
        )
      })

      // Filter by category
      if (filterCategory !== "all") {
        filteredResults = filteredResults.filter((result: SearchResult) => 
          result.category.toLowerCase() === filterCategory.toLowerCase()
        )
      }

      // Sort results
      if (sortBy === "date") {
        filteredResults.sort((a: SearchResult, b: SearchResult) => new Date(b.date).getTime() - new Date(a.date).getTime())
      } else if (sortBy === "category") {
        filteredResults.sort((a: SearchResult, b: SearchResult) => a.category.localeCompare(b.category))
      }

      setResults(filteredResults)
      setTotalResults(filteredResults.length)
    } catch (error) {
      console.error("Search error:", error)
      setResults([])
      setTotalResults(0)
    } finally {
      setIsLoading(false)
    }
  }

  // Search when query changes
  useEffect(() => {
    if (query) {
      const timeoutId = setTimeout(() => {
        performSearch(query)
      }, 300)
      return () => clearTimeout(timeoutId)
    } else {
      setResults([])
      setTotalResults(0)
    }
  }, [query, sortBy, filterCategory])

  // Update URL when query changes
  useEffect(() => {
    const newUrl = query 
      ? `/search?q=${encodeURIComponent(query)}`
      : "/search"
    window.history.replaceState({}, "", newUrl)
  }, [query])

  const categoryColors: Record<string, string> = {
    Politics: "bg-red-100 text-red-800",
    Business: "bg-blue-100 text-blue-800", 
    Culture: "bg-purple-100 text-purple-800",
    Personal: "bg-green-100 text-green-800"
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-heading text-4xl text-slate-900 dark:text-white mb-4">
            Search Articles
          </h1>
          <p className="text-body-large text-slate-600 dark:text-slate-300">
            Find the insights and analysis you're looking for
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, or categories..."
            className="pl-12 h-14 text-lg border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-red-500 dark:focus:border-red-500"
          />
        </div>

        {/* Filters and Sort */}
        {query && (
          <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="politics">Politics</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="culture">Culture</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-500" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="sm:ml-auto text-sm text-slate-500 flex items-center">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </div>
              ) : (
                totalResults > 0 && (
                  <span>
                    {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && !isLoading && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Try different keywords or browse our categories below
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Politics", "Business", "Culture", "Personal"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setQuery(category)
                    setFilterCategory("all")
                  }}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="space-y-6">
          {results.map((result) => (
            <Link key={result.slug} href={`/article/${result.slug}`}>
              <Card className="hover-lift shadow-soft hover:shadow-medium transition-all duration-300 border-0 rounded-2xl group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Article Image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt={result.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${categoryColors[result.category] || 'bg-gray-100 text-gray-800'} text-sm px-3 py-1`}>
                          {result.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(result.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {result.readTime}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-heading text-xl sm:text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                        {result.title}
                      </h2>

                      <p className="text-body text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {result.excerpt}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No query state */}
        {!query && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Start searching
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Enter a keyword above to find articles on politics, business, culture, and more
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
              {["Politics", "Business", "Culture", "Personal"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setQuery(category)}
                  className="rounded-xl border-2 hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>}>
      <SearchContent />
    </Suspense>
  )
}