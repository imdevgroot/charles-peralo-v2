"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSearch } from "@/contexts/search-context"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesOpen, setIsArticlesOpen] = useState(false)
  const { openSearch } = useSearch()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleArticles = () => {
    setIsArticlesOpen(!isArticlesOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      <div className="w-full px-2 sm:px-6">
        <div className="flex items-center h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-lift transition-transform duration-200 flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-soft">
              <Image src="/images/charles-peralo.png" alt="Charles Peralo - Political Commentator" fill className="object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-heading text-xl sm:text-2xl text-slate-900">Charles Peralo</h1>
              <p className="text-sm text-slate-600 font-medium">Daily Political Insights</p>
            </div>
          </Link>

          {/* Mobile Center Content */}
          <div className="block sm:hidden absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-base font-bold text-slate-900">Daily Political Insights</h1>
            <p className="text-xs text-slate-600">Stay Informed. Stay Engaged.</p>
          </div>

          {/* Spacer for mobile layout */}
          <div className="flex-1 sm:hidden"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-slate-700 hover:text-red-600 font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-red-50 focus-visible">
              Home
            </Link>

            {/* Articles Dropdown */}
            <div className="relative">
              <Link
                href="/articles"
                className="flex items-center text-slate-700 hover:text-red-600 font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-red-50 focus-visible"
                onMouseEnter={() => setIsArticlesOpen(true)}
                onMouseLeave={() => setIsArticlesOpen(false)}
              >
                Articles
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isArticlesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {isArticlesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-strong border border-slate-200 py-3 z-50 animate-fade-in"
                  onMouseEnter={() => setIsArticlesOpen(true)}
                  onMouseLeave={() => setIsArticlesOpen(false)}
                >
                  <Link
                    href="/articles"
                    className="block px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors font-medium"
                  >
                    All Articles
                  </Link>
                  <div className="border-t border-slate-100 my-2"></div>
                  <Link
                    href="/category/politics"
                    className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    Politics
                  </Link>
                  <Link
                    href="/category/business"
                    className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    Business
                  </Link>
                  <Link
                    href="/category/culture"
                    className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    Culture
                  </Link>
                  <Link
                    href="/category/personal"
                    className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    Personal
                  </Link>
                </div>
              )}
            </div>

            <Link href="/quizacles" className="text-slate-700 hover:text-purple-600 font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-purple-50 focus-visible">
              Quizacles
            </Link>
            <Link href="/search" className="text-slate-700 hover:text-blue-600 font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 focus-visible">
              Search
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-slate-50 focus-visible">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={openSearch}
              className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 focus-visible touch-target group"
              aria-label="Search articles (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <Search className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="hidden xl:block ml-2 text-xs text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ⌘K
              </span>
            </Button>
            <ThemeToggle />
            <Link href="/subscribe">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-200 hover-lift touch-target">
                Subscribe Free
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 touch-target flex-shrink-0" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 py-6 animate-fade-in bg-white dark:bg-slate-900">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-semibold transition-all duration-200 px-4 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-950 touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Articles Section */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-2">
                <Link
                  href="/articles"
                  className="text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-semibold transition-all duration-200 px-4 py-3 rounded-lg hover:bg-white dark:hover:bg-slate-700 block touch-target"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Articles
                </Link>
                <div className="ml-2 mt-1 space-y-1">
                  <Link
                    href="/category/politics"
                    className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors px-4 py-2 block rounded-lg hover:bg-white dark:hover:bg-slate-700 touch-target"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Politics
                  </Link>
                  <Link
                    href="/category/business"
                    className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors px-4 py-2 block rounded-lg hover:bg-white dark:hover:bg-slate-700 touch-target"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business
                  </Link>
                  <Link
                    href="/category/culture"
                    className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors px-4 py-2 block rounded-lg hover:bg-white dark:hover:bg-slate-700 touch-target"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Culture
                  </Link>
                  <Link
                    href="/category/personal"
                    className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors px-4 py-2 block rounded-lg hover:bg-white dark:hover:bg-slate-700 touch-target"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Personal
                  </Link>
                </div>
              </div>

              <Link
                href="/quizacles"
                className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-200 px-4 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950 touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Quizacles
              </Link>
              <Link
                href="/search"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-200 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                href="/about"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-all duration-200 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <div className="flex flex-col gap-3 px-2 pt-6 border-t border-slate-200 dark:border-slate-700 mt-4">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    openSearch()
                    setIsMenuOpen(false)
                  }}
                  className="justify-start px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 touch-target"
                >
                  <Search className="w-5 h-5 mr-2 text-slate-600 dark:text-slate-400" />
                  Search Articles
                </Button>
                <Link href="/subscribe" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold w-full shadow-medium hover:shadow-strong transition-all duration-200 touch-target">
                    Subscribe Free
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
