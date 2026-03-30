import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewsletterForm } from "@/components/newsletter-form"
import { Youtube, Twitter, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white" role="contentinfo">
      {/* Newsletter Signup */}
      <div className="border-b border-slate-800 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-8">
            <h2 className="text-heading text-2xl sm:text-3xl text-white mb-4">Never Miss an Update</h2>
            <p className="text-slate-400 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of readers who start their day with Charles's insights. Get the analysis that matters, delivered daily.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="cta" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl font-bold">
                CHARLES
                <span className="block text-xs font-medium text-slate-400 -mt-1 tracking-wider">PERALO</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-md">
              Turning clickbait headlines into educational content that actually teaches you something. From celebrity news
              to business economics, making everything fun and informative for curious minds worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@Charlesperalo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 dark:bg-slate-700 hover:bg-red-600 p-3 rounded-xl transition-all duration-200 hover-lift focus-visible touch-target"
                aria-label="Follow Charles Peralo on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/charlesperalo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 dark:bg-slate-700 hover:bg-blue-600 p-3 rounded-xl transition-all duration-200 hover-lift focus-visible touch-target"
                aria-label="Follow Charles Peralo on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/charlesperalo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 dark:bg-slate-700 hover:bg-pink-600 p-3 rounded-xl transition-all duration-200 hover-lift focus-visible touch-target"
                aria-label="Follow Charles Peralo on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@charlesperalo.com"
                className="bg-slate-800 dark:bg-slate-700 hover:bg-green-600 p-3 rounded-xl transition-all duration-200 hover-lift focus-visible touch-target"
                aria-label="Send an email to Charles Peralo"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/articles"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/quizacles"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Quizacles
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-6 text-heading">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/category/politics"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  href="/category/business"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/category/culture"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  href="/category/personal"
                  className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible"
                >
                  Personal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 dark:text-slate-300 text-sm text-center sm:text-left">
              © 2025 Charles Peralo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible">
                Terms of Service
              </Link>
              <Link href="/subscribe" className="text-slate-400 dark:text-slate-300 hover:text-white transition-colors duration-200 focus-visible">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
