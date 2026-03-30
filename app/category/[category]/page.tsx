"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ArticleMetadata } from "@/lib/articles"
import { notFound } from "next/navigation"

const categoryConfig = {
  politics: {
    title: "Political Analysis",
    gradient: "from-red-600 to-red-500",
    color: "red",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    buttonColor: "bg-red-600 hover:bg-red-700",
    description: "Deep dives into political systems, current events, and the forces shaping our democracy."
  },
  business: {
    title: "Business Insights",
    gradient: "from-blue-600 to-blue-500", 
    color: "blue",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    description: "Analysis of business trends, creator economy, and the intersection of commerce and politics."
  },
  culture: {
    title: "Cultural Commentary",
    gradient: "from-purple-600 to-purple-500",
    color: "purple", 
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    description: "Exploring how digital culture, social media, and technology shape our society."
  },
  personal: {
    title: "Personal Insights",
    gradient: "from-green-600 to-green-500",
    color: "green",
    bgColor: "bg-green-50", 
    textColor: "text-green-700",
    buttonColor: "bg-green-600 hover:bg-green-700",
    description: "Behind-the-scenes thoughts on content creation, life as a creator, and personal reflections."
  }
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const [category, setCategory] = useState<string>("")
  const [visibleArticles, setVisibleArticles] = useState(9)
  const [articles, setArticles] = useState<ArticleMetadata[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function getParams() {
      const { category: categoryParam } = await params
      setCategory(categoryParam)
    }
    getParams()
  }, [params])

  const categoryKey = category.toLowerCase() as keyof typeof categoryConfig
  const config = categoryKey ? categoryConfig[categoryKey] : null

  useEffect(() => {
    if (!category) return
    
    const categoryKey = category.toLowerCase() as keyof typeof categoryConfig
    if (!categoryConfig[categoryKey]) {
      notFound()
      return
    }

    async function fetchArticles() {
      try {
        const response = await fetch('/api/articles')
        const allArticles = await response.json()
        const categoryArticles = allArticles.filter((article: ArticleMetadata) => 
          article.category.toLowerCase() === categoryKey
        )
        setArticles(categoryArticles)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [category])

  if (!category || !config) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 dark:border-slate-300 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  const loadMore = () => {
    setVisibleArticles((prev) => Math.min(prev + 6, articles.length))
  }

  const featuredArticles = articles.slice(0, 3)
  const displayedArticles = articles.slice(0, visibleArticles)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center gap-2 ${config.bgColor} ${config.textColor} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6`}>
              <Filter className="w-3 sm:w-4 h-3 sm:h-4" />
              {config.title}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
              <span className={`bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                Articles
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
              {config.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-600 dark:text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>{loading ? '...' : articles.length} articles</span>
              </div>
            </div>
            <Link href="/subscribe">
              <Button className={`${config.buttonColor} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg`}>
                Subscribe for More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Loading state */}
      {loading && (
        <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 dark:border-slate-300 mx-auto"></div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">Loading articles...</p>
          </div>
        </section>
      )}

      {/* Featured Articles */}
      {!loading && featuredArticles.length > 0 && (
        <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Latest {config.title}</h2>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">
                Our most recent insights and analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredArticles.map((article) => (
                <Card
                  key={article.slug}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 rounded-2xl group bg-white dark:bg-slate-800 dark:shadow-slate-900/20"
                >
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${config.bgColor} ${config.textColor} font-semibold px-3 py-1 rounded-full text-xs sm:text-sm`}>
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <Link href={`/article/${article.slug}`}>
                      <h3 className={`font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 line-clamp-2 text-base sm:text-lg leading-tight group-hover:text-${config.color}-600 dark:group-hover:text-${config.color}-400 transition-colors duration-200 cursor-pointer`}>
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
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
                    <Link href={`/article/${article.slug}`}>
                      <Button className={`w-full ${config.buttonColor} text-white rounded-xl font-semibold transition-all duration-200 h-10 sm:h-12`}>
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      {!loading && (
        <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {articles.length > 0 ? (
              <>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">All {category.charAt(0).toUpperCase() + category.slice(1)} Articles</h2>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">
                    Complete collection of our {category} content
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {displayedArticles.map((article) => (
                    <Card
                      key={article.slug}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 rounded-2xl group bg-white dark:bg-slate-700 dark:shadow-slate-900/20"
                    >
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt={article.title}
                          width={400}
                          height={300}
                          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={`${config.bgColor} ${config.textColor} font-semibold px-3 py-1 rounded-full text-xs sm:text-sm`}>
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <Link href={`/article/${article.slug}`}>
                          <h3 className={`font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 line-clamp-2 text-base sm:text-lg leading-tight group-hover:text-${config.color}-600 dark:group-hover:text-${config.color}-400 transition-colors duration-200 cursor-pointer`}>
                            {article.title}
                          </h3>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <Link href={`/article/${article.slug}`}>
                          <Button
                            variant="outline"
                            className="w-full rounded-xl font-semibold transition-all duration-200 border-2 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-600 h-10 sm:h-12 bg-transparent"
                          >
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                {visibleArticles < articles.length && (
                  <div className="text-center mt-12 sm:mt-16">
                    <Button
                      onClick={loadMore}
                      variant="outline"
                      size="lg"
                      className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl border-2 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-all duration-200 bg-transparent"
                    >
                      Load More Articles
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No {category.charAt(0).toUpperCase() + category.slice(1)} Articles Yet</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8">Check back soon for Charles's latest {category} content</p>
                <Link href="/articles">
                  <Button variant="outline" className="bg-transparent dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
                    View All Articles
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}