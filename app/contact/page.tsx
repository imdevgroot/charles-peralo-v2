"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Send, CheckCircle, Youtube, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Message Sent!</h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
              Thanks for reaching out! I'll get back to you as soon as possible.
            </p>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What happens next?</h3>
              <ul className="text-left text-slate-600 dark:text-slate-300 space-y-2 text-sm sm:text-base">
                <li>• I'll review your message within 24-48 hours</li>
                <li>• You'll receive a personal response from me</li>
                <li>• For urgent matters, try reaching out on social media</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://www.youtube.com/@Charlesperalo" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </a>
              <a href="https://www.tiktok.com/@charlesperalo?lang=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700">
                  <Users className="w-4 h-4 mr-2" />
                  TikTok
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
              Have a question, story idea, or just want to say hello? I'd love to hear from you. I read every message
              personally and try to respond to as many as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Get in Touch</h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  Whether you have feedback on a video, a story tip, collaboration ideas, or just want to chat about
                  politics and culture, I'm always interested in hearing from engaged readers.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-lg rounded-2xl bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Email Response Time</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">Usually within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-red-100 dark:bg-red-900 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center">
                        <Youtube className="w-5 sm:w-6 h-5 sm:h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Social Media</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                          For quicker responses, try YouTube or TikTok
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4 sm:pt-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">
                  What I Love to Hear About:
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  <li>• Feedback on videos and articles</li>
                  <li>• Story ideas and news tips</li>
                  <li>• Questions about politics or media</li>
                  <li>• Collaboration opportunities</li>
                  <li>• Speaking engagement requests</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl rounded-2xl bg-white dark:bg-slate-800 dark:shadow-slate-900/20">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="rounded-xl border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-blue-500 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Follow Along</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-10">
            Stay connected for daily updates, behind-the-scenes content, and real-time commentary
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <a
              href="https://www.youtube.com/@Charlesperalo"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-slate-700 dark:shadow-slate-900/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="bg-red-100 dark:bg-red-900 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
                    <Youtube className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base sm:text-lg">YouTube</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">1M+ subscribers</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.tiktok.com/@charlesperalo?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-slate-700 dark:shadow-slate-900/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="bg-slate-100 dark:bg-slate-600 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-slate-200 dark:group-hover:bg-slate-500 transition-colors">
                    <Users className="w-6 sm:w-8 h-6 sm:h-8 text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base sm:text-lg">TikTok</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">600K+ followers</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
