import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SearchProvider } from "@/contexts/search-context"
import { SearchModal } from "@/components/search-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charles Peralo - Political Commentary & Analysis",
  description:
    "Daily political insights, cultural commentary, and media analysis from Charles Peralo. Join thousands of readers who trust independent journalism.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="charles-peralo-theme"
        >
          <SearchProvider>
            <Header />
            <main className="pt-20 sm:pt-24">{children}</main>
            <Footer />
            <SearchModal />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
