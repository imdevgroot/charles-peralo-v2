import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock, Trophy, Users, TrendingUp, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function QuizaclesPage() {
  const quizacles = [
    {
      id: 1,
      title: "How Well Do You Understand Social Media Algorithms?",
      description: "Test your knowledge of how platforms like TikTok, Instagram, and YouTube decide what you see.",
      category: "Culture",
      difficulty: "Intermediate",
      questions: 12,
      duration: "8 min",
      avgScore: "68%",
      participants: "15.2K",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 2,
      title: "Political Bias Detection Challenge",
      description: "Can you spot bias in news headlines and social media posts? Put your media literacy to the test.",
      category: "Politics",
      difficulty: "Advanced",
      questions: 15,
      duration: "10 min",
      avgScore: "54%",
      participants: "12.8K",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-red-100 text-red-700",
    },
    {
      id: 3,
      title: "The Creator Economy Quiz",
      description: "How much do you really know about how content creators make money and build their businesses?",
      category: "Business",
      difficulty: "Beginner",
      questions: 10,
      duration: "6 min",
      avgScore: "72%",
      participants: "18.5K",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      title: "Gen Z Communication Styles",
      description: "Test your understanding of how digital natives communicate and what it means for society.",
      category: "Culture",
      difficulty: "Intermediate",
      questions: 8,
      duration: "5 min",
      avgScore: "76%",
      participants: "9.3K",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 5,
      title: "Political Campaign Strategy Quiz",
      description: "How well do you understand modern political campaign tactics and voter psychology?",
      category: "Politics",
      difficulty: "Advanced",
      questions: 18,
      duration: "12 min",
      avgScore: "49%",
      participants: "7.1K",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-red-100 text-red-700",
    },
    {
      id: 6,
      title: "Digital Privacy & Rights",
      description: "What do you know about your digital rights and how tech companies use your data?",
      category: "Technology",
      difficulty: "Intermediate",
      questions: 14,
      duration: "9 min",
      avgScore: "61%",
      participants: "11.7K",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-green-100 text-green-700",
    },
  ]

  const categories = ["All", "Politics", "Business", "Culture", "Technology"]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Brain className="w-3 sm:w-4 h-3 sm:h-4" />
              Interactive Learning
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight text-responsive">
              Test Your Knowledge with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Quizacles
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
              Interactive quizzes that test your understanding of politics, media literacy, culture, and current events.
              Learn while you play and see how you compare to others.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50K+ participants</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>6 categories</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Track your progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div>
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs sm:text-sm bg-transparent hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs sm:text-sm bg-transparent hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quizacles Grid */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {quizacles.map((quizacle) => (
              <Link key={quizacle.id} href={`/quizacle/${quizacle.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 rounded-2xl group cursor-pointer bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
                  <div className="relative">
                    <Image
                      src={quizacle.image || "/placeholder.svg"}
                      alt={quizacle.title}
                      width={300}
                      height={200}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
                      <Badge
                        className={`font-semibold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${quizacle.color}`}
                      >
                        {quizacle.category}
                      </Badge>
                      <Badge className="bg-slate-800 text-white font-semibold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {quizacle.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 text-responsive">
                      {quizacle.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                      {quizacle.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Brain className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>{quizacle.questions} questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>{quizacle.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>{quizacle.avgScore} avg</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>{quizacle.participants}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base">
                      Start Quizacle
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 text-responsive">
              How Quizacles Work
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">
              Interactive learning that adapts to your knowledge level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Topic",
                description: "Pick from politics, business, culture, or technology quizzes based on your interests.",
                icon: Brain,
              },
              {
                step: "2",
                title: "Answer Questions",
                description: "Work through carefully crafted questions with detailed explanations for each answer.",
                icon: TrendingUp,
              },
              {
                step: "3",
                title: "Learn & Compare",
                description: "Get your score, learn from explanations, and see how you compare to other participants.",
                icon: Trophy,
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl text-center bg-white dark:bg-slate-700 dark:shadow-slate-900/20">
                <CardContent className="p-6 sm:p-8">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                  </div>
                  <div className="bg-purple-600 text-white w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-sm sm:text-base font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 text-responsive">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-purple-600 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-responsive">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 px-2">
            Join thousands of others in challenging yourself and learning something new
          </p>
          <Link href="/quizacle/1">
            <Button className="bg-white text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg">
              <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Start Your First Quizacle
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
