import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SearchProvider } from "@/contexts/search-context"
import { SearchModal } from "@/components/search-modal"
import { StickySubscribeBar } from "@/components/sticky-subscribe-bar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Charles Peralo - Daily Insights That Actually Matter",
  description: "2M+ followers. 2.5B views. Charles Peralo turns clickbait headlines into educational content. Join 50K+ informed readers — free daily newsletter.",
  openGraph: {
    title: "Charles Peralo - Daily Insights That Actually Matter",
    description: "2M+ followers. 2.5B views. Turning clickbait into education. Free daily newsletter.",
    url: "https://charlesperalo.com",
    siteName: "Charles Peralo",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/charles-peralo.png", width: 1200, height: 630, alt: "Charles Peralo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Peralo - Daily Insights That Actually Matter",
    description: "2M+ followers. 2.5B views. Turning clickbait into education.",
    creator: "@charlesperalo",
    images: ["/images/charles-peralo.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false} storageKey="charles-peralo-theme">
          <SearchProvider>
            <Header />
            <main className="pt-16 sm:pt-20">{children}</main>
            <Footer />
            <SearchModal />
            <StickySubscribeBar />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}