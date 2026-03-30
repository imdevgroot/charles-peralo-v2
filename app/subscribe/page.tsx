"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Globe, Mail, Gift, Clock, Star, Calendar } from "lucide-react"
import Image from "next/image"

export default function SubscribePage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const recentIssues = [
    {
      id: 1,
      title: "The Real Story Behind the TikTok Ban Debate",
      excerpt:
        "What politicians aren't telling you about the proposed TikTok legislation and why it matters for your digital rights.",
      date: "March 15, 2025",
      readTime: "3 min read",
      category: "Politics",
    },
    {
      id: 2,
      title: "How AI is Changing Political Campaigns Forever",
      excerpt:
        "From deepfakes to micro-targeting, artificial intelligence is revolutionizing how politicians reach voters.",
      date: "March 12, 2025",
      readTime: "4 min read",
      category: "Technology",
    },
    {
      id: 3,
      title: "The Creator Economy's Political Awakening",
      excerpt: "Why more content creators are speaking out on political issues and what it means for democracy.",
      date: "March 10, 2025",
      readTime: "5 min read",
      category: "Culture",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "College Student",
      content:
        "Charles makes politics actually understandable. His newsletter is the only news I actually look forward to reading.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Johnson",
      role: "Young Professional",
      content: "Finally, someone who explains what's happening without talking down to us. Essential daily reading.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emma Rodriguez",
      role: "Graduate Student",
      content: "Charles cuts through the noise and gives you what actually matters. Best decision I made this year.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Welcome to the Community!</h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
              You're all set! Check your email for a welcome message and your first newsletter will arrive tomorrow
              morning.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What happens next?</h3>
              <ul className="text-left text-slate-600 dark:text-slate-300 space-y-2 text-sm sm:text-base">
                <li>• Check your email for a welcome message</li>
                <li>• Your first newsletter arrives tomorrow at 7 AM</li>
                <li>• Follow Charles on social media for real-time updates</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">Follow on YouTube</Button>
              </a>
              <a href="https://www.tiktok.com/@charlesperalo?lang=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
                  Follow on TikTok
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Gift className="w-3 sm:w-4 h-3 sm:h-4" />
              100% Free Forever
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Get{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Free Access
              </span><br className="sm:hidden" />
              <span className="sm:ml-2">to Everything</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
              Join thousands of readers who get daily political insights, cultural analysis, and behind-the-scenes
              content.
              <span className="font-semibold text-green-600"> Completely free, no strings attached.</span>
            </p>

            {/* Newsletter Signup Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto backdrop-blur-sm mb-6 sm:mb-8">
              <div className="text-center mb-4 sm:mb-6">
                <Mail className="w-8 sm:w-12 h-8 sm:h-12 mx-auto text-green-600 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Start Your Free Subscription</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  Get instant access to all content and daily newsletter
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 sm:h-14 rounded-xl border-slate-300 focus:border-green-500 focus:ring-green-500 text-base sm:text-lg"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 h-12 sm:h-14 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg whitespace-nowrap"
                  >
                    Get Free Access
                  </Button>
                </div>
              </form>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center mt-4">
                Free forever • No credit card required • Unsubscribe anytime
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50K+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Daily insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5-minute read</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Trusted worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Everything Included, Free</h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">
              Get full access to all content, features, and community benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Mail,
                title: "Daily Newsletter",
                description:
                  "Get Charles's daily insights delivered to your inbox every morning with analysis you won't find anywhere else.",
              },
              {
                icon: TrendingUp,
                title: "All Articles",
                description:
                  "Full access to every article, deep dive, and analysis piece on politics, business, and culture.",
              },
              {
                icon: Users,
                title: "Interactive Quizacles",
                description:
                  "Test your knowledge with interactive quizzes on current events, media literacy, and political topics.",
              },
              {
                icon: Globe,
                title: "Behind-the-Scenes Content",
                description:
                  "Exclusive insights into content creation, personal stories, and the process behind the analysis.",
              },
              {
                icon: CheckCircle,
                title: "Community Access",
                description: "Join discussions with other engaged readers and get your questions answered directly.",
              },
              {
                icon: Gift,
                title: "Early Access",
                description: "Be the first to see new content, videos, and announcements before they go public.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Each Issue */}
      <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              What's Inside Each Newsletter
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">
              Every newsletter is packed with insights you won't find anywhere else
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Political Analysis",
                description: "Breaking down the day's biggest political stories with context and nuance.",
                icon: "🏛️",
              },
              {
                title: "Cultural Commentary",
                description: "How digital culture shapes politics and society in ways most people miss.",
                icon: "🎭",
              },
              {
                title: "Business Insights",
                description: "The intersection of politics, technology, and the creator economy.",
                icon: "💼",
              },
              {
                title: "Media Literacy",
                description: "Understanding how information spreads and how to think critically about news.",
                icon: "📚",
              },
              {
                title: "Behind the Scenes",
                description: "Personal insights from building a platform and navigating public discourse.",
                icon: "🎬",
              },
              {
                title: "What's Next",
                description: "Predictions and analysis of emerging trends in politics and culture.",
                icon: "🔮",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-700 dark:shadow-slate-900/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Recent Newsletter Issues</h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">
              Get a taste of what subscribers receive every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentIssues.map((issue) => (
              <Card
                key={issue.id}
                className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 group bg-white dark:bg-slate-800 dark:shadow-slate-900/20"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full mb-4 text-xs sm:text-sm inline-block">
                    {issue.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {issue.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                    {issue.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{issue.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{issue.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free? */}
      <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Why Is This Free?</h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 px-2">Because informed citizens shouldn't be a luxury</p>
          </div>

          <Card className="border-0 shadow-xl rounded-2xl bg-white dark:bg-slate-700 dark:shadow-slate-900/20">
            <CardContent className="p-6 sm:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  I believe that learning should be accessible and fun. During the pandemic, I started writing on Facebook just because I had a passion for learning and discussing what I learned. That inner love of researching and sharing knowledge is what drives everything I do.
                </p>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  This platform is supported by the success I've built over the years - from zero to 2.5 billion views and millions in revenue. But I still have that same passion for writing and creating conversations that I had when I was celebrating 30 likes on a Facebook post.
                </p>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  My Goal A is building a trillion dollar company. Goal B is having a lot of fun discussing stuff. Not going to say A won't happen, but I'll be happy with B. That's why everything here is free - because the conversation matters more than the cash.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">What Readers Are Saying</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white ml-2">4.9/5</span>
            </div>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">From 50,000+ newsletter subscribers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 bg-green-600 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 px-2">
            Join the community of informed readers. It takes 30 seconds and it's completely free.
          </p>

          <Card className="max-w-md mx-auto shadow-2xl border-0 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
            <CardContent className="p-6 sm:p-8 bg-white dark:bg-slate-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-green-500 focus:ring-green-500"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl font-semibold"
                >
                  Get Free Access
                </Button>
              </form>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center mt-4">Free forever • No spam</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
