"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Trophy, CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"

export default async function QuizaclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [isComplete, setIsComplete] = useState(false)

  // Mock quiz data
  const quiz = {
    id: id,
    title: "How Well Do You Understand Social Media Algorithms?",
    description: "Test your knowledge of how platforms like TikTok, Instagram, and YouTube decide what you see.",
    category: "Culture",
    difficulty: "Intermediate",
    totalQuestions: 5,
    duration: "8 min",
    avgScore: "68%",
    participants: "15.2K",
    questions: [
      {
        id: 1,
        question: "What is the primary goal of social media algorithms?",
        options: [
          "To show users the most accurate information",
          "To maximize user engagement and time spent on platform",
          "To promote educational content",
          "To ensure equal visibility for all posts",
        ],
        correctAnswer: 1,
        explanation:
          "Social media algorithms are primarily designed to maximize user engagement and time spent on the platform. This drives advertising revenue, which is how these platforms make money. While other factors may be considered, engagement is the primary optimization target.",
      },
      {
        id: 2,
        question: "Which type of content typically gets the most algorithmic promotion?",
        options: [
          "Educational and informative posts",
          "Content that generates strong emotional reactions",
          "Posts from verified accounts only",
          "Chronologically recent posts",
        ],
        correctAnswer: 1,
        explanation:
          "Content that generates strong emotional reactions (likes, comments, shares, even angry reactions) typically gets more algorithmic promotion because it drives engagement. This can include controversial, surprising, or emotionally charged content.",
      },
      {
        id: 3,
        question: "What is a 'filter bubble' in the context of social media?",
        options: [
          "A technical glitch that filters out content",
          "A personalized information environment that isolates users from diverse viewpoints",
          "A privacy setting that blocks certain users",
          "A feature that removes inappropriate content",
        ],
        correctAnswer: 1,
        explanation:
          "A filter bubble refers to the personalized information environment created by algorithms that can isolate users from information that disagrees with their viewpoints. This happens because algorithms show you content similar to what you've previously engaged with.",
      },
      {
        id: 4,
        question: "How do social media algorithms typically determine what to show you?",
        options: [
          "Random selection from all available content",
          "Only content from accounts you follow",
          "Based on your past behavior, interactions, and similar users",
          "Chronological order of posts",
        ],
        correctAnswer: 2,
        explanation:
          "Algorithms analyze your past behavior (what you like, share, comment on, how long you watch), your interactions with other users, and patterns from similar users to predict what content will keep you engaged.",
      },
      {
        id: 5,
        question: "What is the main criticism of algorithmic content curation?",
        options: [
          "It's too slow to update",
          "It can create echo chambers and polarization",
          "It shows too much advertising",
          "It's not personalized enough",
        ],
        correctAnswer: 1,
        explanation:
          "The main criticism is that algorithmic curation can create echo chambers where users only see content that confirms their existing beliefs, potentially leading to increased polarization and reduced exposure to diverse perspectives.",
      },
    ],
  }

  const currentQ = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + (showExplanation ? 1 : 0)) / (quiz.totalQuestions * 2)) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowExplanation(true)
    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswers([])
    setIsComplete(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / quiz.totalQuestions) * 100
    if (percentage >= 80) return "Excellent! You really understand social media algorithms."
    if (percentage >= 60) return "Good job! You have a solid grasp of the basics."
    if (percentage >= 40) return "Not bad! There's room for improvement."
    return "Keep learning! This is a complex topic."
  }

  if (isComplete) {
    const percentage = Math.round((score / quiz.totalQuestions) * 100)

    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <section className="py-12 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Card className="border-0 shadow-xl rounded-2xl bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-6 sm:mb-8">
                  <div className="bg-green-100 dark:bg-green-900 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Trophy className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 text-responsive">
                    Quizacle Complete!
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">{getScoreMessage()}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">
                      {score}/{quiz.totalQuestions}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Correct Answers</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">{percentage}%</div>
                    <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Your Score</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">{quiz.avgScore}</div>
                    <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">Average Score</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="px-6 py-3 rounded-xl font-semibold bg-transparent dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 text-sm sm:text-base"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Link href="/quizacles">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base">
                      More Quizacles
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8 sm:py-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <Badge className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm">
              {quiz.category} • {quiz.difficulty}
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 leading-tight text-responsive">
              {quiz.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1">
                <Brain className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>
                  Question {currentQuestion + 1} of {quiz.totalQuestions}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Trophy className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>
                  Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <Progress value={progress} className="h-2 sm:h-3" />
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-8 sm:py-12 overflow-hidden bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="border-0 shadow-xl rounded-2xl bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 leading-relaxed text-responsive">
                {currentQ.question}
              </h2>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 sm:p-6 text-left rounded-xl border-2 transition-all duration-200 text-sm sm:text-base ${
                      selectedAnswer === index
                        ? showExplanation
                          ? index === currentQ.correctAnswer
                            ? "border-green-500 bg-green-50 dark:bg-green-900/50"
                            : "border-red-500 bg-red-50 dark:bg-red-900/50"
                          : "border-purple-500 bg-purple-50 dark:bg-purple-900/50"
                        : showExplanation && index === currentQ.correctAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-900/50"
                          : "border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700"
                    } ${showExplanation ? "cursor-default" : "cursor-pointer"} text-slate-900 dark:text-white`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex-1 pr-4">{option}</span>
                      {showExplanation && (
                        <div className="flex-shrink-0">
                          {index === currentQ.correctAnswer ? (
                            <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3 text-sm sm:text-base">Explanation:</h3>
                  <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm sm:text-base">{currentQ.explanation}</p>
                </div>
              )}

              <div className="flex justify-center">
                {!showExplanation ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base"
                  >
                    {currentQuestion < quiz.questions.length - 1 ? (
                      <>
                        Next Question
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      "View Results"
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
