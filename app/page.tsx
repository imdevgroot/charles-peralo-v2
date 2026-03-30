import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"
import { Play, ArrowRight, TrendingUp, Users, Globe, Brain, Trophy, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllArticles, getCategoryStats } from "@/lib/articles"

export default function HomePage() {
  // Get real data at build time
  const articles = getAllArticles()
  const categoryStats = getCategoryStats()
  
  const categories = [
    { name: "Politics", count: categoryStats.politics || 0, color: "bg-red-100 text-red-800" },
    { name: "Business", count: categoryStats.business || 0, color: "bg-blue-100 text-blue-800" },
    { name: "Culture", count: categoryStats.culture || 0, color: "bg-purple-100 text-purple-800" },
    { name: "Personal", count: categoryStats.personal || 0, color: "bg-green-100 text-green-800" },
  ]

  // Get the first 3 articles as featured posts
  const featuredPosts = articles.slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section - Newsletter Signup Focus */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/30 section-padding overflow-hidden animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-800 px-4 py-3 rounded-full text-sm font-semibold mb-8 shadow-soft hover-lift">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              2M+ Followers • 2.5B Views
            </div>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-900 dark:text-white mb-8 animate-slide-up leading-tight">
              Daily Insights That{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Actually Matter
              </span>
            </h1>
            <p className="text-body-large text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-12 content-spacing">
              Cut through the noise with Charles Peralo's daily newsletter. Get the insights that turn clickbait headlines into educational content that actually teaches you something about the world.
              <span className="block mt-4 font-semibold text-green-700">Join 50K+ informed readers — completely free.</span>
            </p>

            {/* Newsletter Signup Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-strong border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto backdrop-blur-sm mb-8 hover-lift">
              <div className="text-center mb-6">
                <h3 className="text-heading text-2xl text-slate-900 dark:text-white mb-3 leading-tight">
              Start Your<br className="sm:hidden" />
              <span className="sm:ml-2">Daily Briefing</span>
            </h3>
                <p className="text-body text-base text-slate-600 dark:text-slate-300">
                  Get the most important insights delivered to your inbox every morning
                </p>
              </div>
              <NewsletterForm variant="hero" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-slate-700">
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg">
                <Users className="w-4 h-4 text-green-600" />
                <span className="font-medium">50K+ subscribers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Daily insights</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="font-medium">Trusted worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 content-spacing">
              <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">About Charles</Badge>
              <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
                Making Clickbait<br className="sm:hidden" />
                <span className="sm:ml-0">Educational and Fun</span>
              </h2>
              <p className="text-body-large text-slate-600 dark:text-slate-300 mb-6">
                With over 2 million followers and 2.5 billion views, Charles Peralo has mastered the art of turning clickbait headlines into educational content. From celebrity news to business economics, he makes everything from silly to serious topics actually teach you something.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl mb-8">
                <p className="text-body font-medium text-slate-800 dark:text-slate-200 mb-2">
                  "I make headlines that are sometimes silly, sometimes tricky and sometimes weird, but they lead to stories that pack a bunch and sometimes actually get to teach people things."
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">— Charles Peralo</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold w-full sm:w-auto shadow-medium hover:shadow-strong transition-all duration-200 hover-lift touch-target">
                    Learn More About Charles
                  </Button>
                </Link>
                <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="px-8 py-4 rounded-xl font-semibold border-2 border-slate-300 hover:border-slate-400 w-full sm:w-auto transition-all duration-200 hover-lift touch-target"
                  >
                    Watch Latest Videos
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/images/charles-peralo.png"
                  alt="Charles Peralo - Content creator making clickbait educational"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-strong w-full max-w-md mx-auto lg:max-w-none hover-lift transition-transform duration-300"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-3 rounded-xl shadow-medium">
                  <div className="text-sm font-bold">2.5B</div>
                  <div className="text-xs">Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-heading text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">Explore by<br className="sm:hidden" /><span className="sm:ml-2">Category</span></h2>
            <p className="text-body-large text-slate-600 dark:text-slate-300">Dive deep into the topics shaping our world</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category) => (
              <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
                <Card className="hover-lift shadow-soft hover:shadow-strong transition-all duration-300 border-0 rounded-2xl group cursor-pointer bg-white dark:bg-slate-700">
                  <CardContent className="p-8 text-center content-spacing">
                    <div
                      className={`inline-flex px-4 py-2 rounded-full text-sm font-bold mb-6 ${category.color}`}
                    >
                      {category.name}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {category.count}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium mb-4">Articles</p>
                    <ArrowRight className="w-5 h-5 mx-auto text-slate-400 dark:text-slate-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-200 group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-heading text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">Must-Read<br className="sm:hidden" /><span className="sm:ml-2">Articles</span></h2>
            <p className="text-body-large text-slate-600 dark:text-slate-300">The stories everyone's talking about, analyzed and explained</p>
          </div>

          {featuredPosts.length > 0 && (
            <>
              {/* Featured Article - Large */}
              <div className="mb-16">
                <Link href={`/article/${featuredPosts[0].slug}`}>
                  <Card className="overflow-hidden hover-lift shadow-medium hover:shadow-strong transition-all duration-300 border-0 rounded-2xl group cursor-pointer">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-80">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt={featuredPosts[0].title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-red-600 text-white font-semibold px-3 py-2 rounded-full text-sm">
                          Featured
                        </Badge>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <Badge className="mb-4 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                          {featuredPosts[0].category}
                        </Badge>
                        <h3 className="text-heading text-2xl md:text-3xl text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-200">
                          {featuredPosts[0].title}
                        </h3>
                        <p className="text-body-large mb-6">{featuredPosts[0].excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <span className="font-medium">{new Date(featuredPosts[0].date).toLocaleDateString()}</span>
                          <span>{featuredPosts[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>

              {/* Secondary Articles */}
              {featuredPosts.length > 1 && (
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {featuredPosts.slice(1, 3).map((post) => (
                    <Link key={post.slug} href={`/article/${post.slug}`}>
                      <Card className="overflow-hidden hover-lift shadow-soft hover:shadow-medium transition-all duration-300 border-0 rounded-2xl group cursor-pointer h-full">
                        <div className="relative h-48">
                          <Image
                            src="/placeholder.svg?height=200&width=400"
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-3 left-3 bg-white/90 text-slate-800 font-semibold px-3 py-1 rounded-full text-sm">
                            {post.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6 flex-1 flex flex-col">
                          <h3 className="text-heading text-xl text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-200 flex-1">
                            {post.title}
                          </h3>
                          <p className="text-body text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-slate-500">
                            <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="text-center">
            <Link href="/articles">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 hover-lift touch-target"
              >
                Explore All Articles →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section - Simplified */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-heading text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">Latest<br className="sm:hidden" /><span className="sm:ml-2">Video</span></h2>
            <p className="text-body-large text-slate-600 dark:text-slate-300">Watch Charles break down today's biggest story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-700 p-2 rounded-3xl shadow-strong">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Why Everyone's Talking About This Political Scandal"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="text-center mt-8">
              <Badge className="mb-4 bg-red-100 text-red-800 text-sm px-3 py-2 font-semibold">Latest on YouTube</Badge>
              <h3 className="text-heading text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4 leading-tight">
                Why Everyone's Talking About<br className="sm:hidden" /><span className="sm:ml-2">This Political Scandal</span>
              </h3>
              <p className="text-body-large text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Breaking down the latest political controversy and what it really means for the upcoming election.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-200 hover-lift touch-target">
                    <Play className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </a>
                <a href="https://www.tiktok.com/@charlesperalo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-8 py-4 rounded-xl font-semibold border-2 border-slate-300 hover:border-slate-400 transition-all duration-200 hover-lift touch-target">
                    Follow on TikTok
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quizacles Section */}
      <section className="section-padding bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-heading text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">Test Your<br className="sm:hidden" /><span className="sm:ml-2">Knowledge</span></h2>
            <p className="text-body-large text-slate-600 dark:text-slate-300">
              Challenge yourself with interactive quizzes on current events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Political Bias Detection Challenge",
                description: "Can you spot bias in news headlines and social media posts? Test your media literacy skills.",
                questions: 15,
                duration: "10 min",
                participants: "12.8K",
                color: "bg-red-100 text-red-800",
              },
              {
                title: "Social Media Algorithm Quiz",
                description: "Think you understand how platforms decide what you see? This quiz might surprise you.",
                questions: 12,
                duration: "8 min",
                participants: "15.2K",
                color: "bg-purple-100 text-purple-800",
              },
            ].map((quiz, index) => (
              <Card
                key={index}
                className="hover-lift shadow-soft hover:shadow-medium transition-all duration-300 border-0 rounded-2xl group cursor-pointer bg-white dark:bg-slate-700"
              >
                <CardContent className="p-8 content-spacing">
                  <div className="mb-6">
                    <div
                      className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${quiz.color}`}
                    >
                      Quizacle
                    </div>
                  </div>
                  <h3 className="text-heading text-xl text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {quiz.title}
                  </h3>
                  <p className="text-body text-slate-600 dark:text-slate-300 mb-6">{quiz.description}</p>
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-6 bg-slate-50 dark:bg-slate-600 p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      <span className="font-medium">{quiz.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{quiz.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{quiz.participants}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-200 hover-lift touch-target">
                    Take the Challenge
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quizacles">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 hover-lift touch-target"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Explore More Quizzes →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-red-600 to-red-700 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Don't Miss<br className="sm:hidden" /><span className="sm:ml-2">Tomorrow's Insights</span>
            </h2>
            <p className="text-body-large text-red-100 mb-8">
              Join 50,000+ readers who rely on Charles Peralo's daily newsletter for the analysis that matters
            </p>
            <NewsletterForm variant="cta" />
          </div>
        </div>
      </section>
    </div>
  )
}