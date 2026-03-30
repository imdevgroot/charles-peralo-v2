"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ArticleMetadata } from "@/lib/articles"

export default function ArticlesPage() {
  const [visibleArticles, setVisibleArticles] = useState(9)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [allArticles, setAllArticles] = useState<ArticleMetadata[]>([])
  const [loading, setLoading] = useState(true)

  const categories = ["All", "Politics", "Business", "Culture", "Personal"]

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/articles')
        const articles = await response.json()
        setAllArticles(articles)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        // Fallback to empty array
        setAllArticles([])
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  // Filter articles based on category and search term
  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const displayedArticles = filteredArticles.slice(0, visibleArticles)
  const hasMoreArticles = visibleArticles < filteredArticles.length

  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 6)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/30 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
              All Articles
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight text-responsive">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Articles</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
              Deep dives into politics, business, culture, and the digital age. Fresh insights on the topics shaping our
              world.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>{loading ? '...' : allArticles.length} articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full text-xs sm:text-sm ${
                    selectedCategory === category
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-transparent hover:bg-slate-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 sm:mt-6 text-sm text-slate-600 dark:text-slate-400">
            Showing {displayedArticles.length} of {filteredArticles.length} articles
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-slate-600 dark:text-slate-400 mt-4">Loading articles...</p>
            </div>
          )}

          {!loading && displayedArticles.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                variant="outline"
                className="bg-transparent"
              >
                Clear Filters
              </Button>
            </div>
          ) : !loading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {displayedArticles.map((article) => (
                  <Link key={article.slug} href={`/article/${article.slug}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 rounded-2xl group cursor-pointer bg-white dark:bg-slate-800">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt={article.title}
                          width={400}
                          height={300}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
                          <Badge
                            className={`font-semibold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                              article.category === "Politics"
                                ? "bg-red-100 text-red-700"
                                : article.category === "Business"
                                  ? "bg-blue-100 text-blue-700"
                                  : article.category === "Culture"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-green-100 text-green-700"
                            }`}
                          >
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-responsive">
                          {article.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreArticles && (
                <div className="text-center mt-12 sm:mt-16">
                  <Button
                    onClick={loadMoreArticles}
                    variant="outline"
                    size="lg"
                    className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 bg-transparent"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-20 bg-blue-600 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-responsive">
            Never Miss an Article
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2">
            Get the latest articles delivered to your inbox as soon as they're published
          </p>
          <Link href="/subscribe">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg">
              Subscribe to Newsletter
            </Button>
          </Link>
          <p className="text-xs sm:text-sm text-blue-200 mt-4">Free forever • No spam</p>
        </div>
      </section>
    </div>
  )
}