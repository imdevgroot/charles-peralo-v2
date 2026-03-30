import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, User, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"
import { ArticleClient } from "@/components/article-client"
import { Card, CardContent } from "@/components/ui/card"

// Enhanced markdown to HTML converter with special formatting
function markdownToHtml(markdown: string): string {
  // First, normalize line breaks
  let html = markdown.replace(/\r\n/g, '\n');
  
  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Convert bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Convert blockquotes (lines starting with >)
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
  
  // Convert lists
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  // Group consecutive list items
  html = html.replace(/(<li>.*<\/li>\s*)+/g, function(match) {
    return '<ul>' + match + '</ul>';
  });
  
  // Convert paragraphs
  html = html.split('\n\n').map((para, index) => {
    // Skip if it's already an HTML element
    if (para.match(/^<[h|u|l|b]/)) return para;
    // Skip empty paragraphs
    if (!para.trim()) return '';
    
    // Add drop cap to first paragraph
    if (index === 0 && !para.startsWith('<')) {
      const firstLetter = para.charAt(0);
      const restOfPara = para.slice(1);
      return `<p class="first-paragraph"><span class="drop-cap">${firstLetter}</span>${restOfPara.trim()}</p>`;
    }
    
    // Wrap in paragraph tags
    return `<p>${para.trim()}</p>`;
  }).join('\n');
  
  // Clean up any double wrapping
  html = html.replace(/<p>(<h[1-3])/g, '$1');
  html = html.replace(/(<\/h[1-3]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<blockquote)/g, '$1');
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');
  
  return html.trim();
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  const allArticles = getAllArticles()
  
  // Get related articles from the same category or recent articles
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug && (a.category === article?.category || true))
    .slice(0, 3)

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
          <Link href="/articles">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">Back to Articles</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Article Header */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-red-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Back to Articles</span>
          </Link>

          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Badge
                className={`${
                  article.category === "Politics"
                    ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                    : article.category === "Business"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : article.category === "Culture"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                        : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                } px-4 py-2 text-sm font-semibold`}
              >
                {article.category}
              </Badge>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{article.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight text-responsive">
              {article.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Charles Peralo</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MessageCircle className="w-4 h-4" />
              <span>Join the discussion below</span>
            </div>
          </div>

          {/* Feature Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-medium mb-8 sm:mb-12">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-red-50/10 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sm:p-12 border border-slate-200 dark:border-slate-700">
                <div
                  className="article-content prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(article.content)
                  }}
                />
              </div>

                {/* Article Footer */}
                <div className="border-t border-slate-200 dark:border-slate-600 pt-8 mt-12">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg ring-4 ring-white dark:ring-slate-700">
                        <Image
                          src="/images/charles-peralo.png"
                          alt="Charles Peralo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">Charles Peralo</h3>
                        <p className="text-body text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                          Political commentator and media analyst with over a decade of experience covering the intersection of politics, culture, and technology.
                        </p>
                        <div className="flex items-center gap-4">
                          <Link
                            href="/about"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                          >
                            <User className="w-4 h-4" />
                            Follow Charles
                          </Link>
                          <Link
                            href="/subscribe"
                            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-600 shadow-md hover:shadow-lg"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Subscribe
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 px-6 py-4 border-b border-slate-200 dark:border-slate-600">
                      <h3 className="text-heading text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Related Articles
                      </h3>
                    </div>
                    <div className="p-4 space-y-4">
                      {relatedArticles.map((related) => (
                        <Link key={related.slug} href={`/article/${related.slug}`} className="block group">
                          <div className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md">
                            <Badge className={`${
                              related.category === "Politics"
                                ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                                : related.category === "Business"
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                  : related.category === "Culture"
                                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                                    : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                            } text-xs font-medium mb-2`}>
                              {related.category}
                            </Badge>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight">
                              {related.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-3 leading-relaxed">
                              {related.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(related.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              <span>{related.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}