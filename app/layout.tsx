import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SearchProvider } from "@/contexts/search-context"
import { SearchModal } from "@/components/search-modal"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Charles Peralo - Daily Insights That Actually Matter",
  description:
    "2M+ followers. 2.5B views. Charles Peralo turns clickbait headlines into educational content that teaches you something about the world. Join 50K+ informed readers.",
  openGraph: {
    title: "Charles Peralo - Daily Insights That Actually Matter",
    description: "2M+ followers. 2.5B views. Turning clickbait into education.",
    url: "https://charlesperalo.com",
    siteName: "Charles Peralo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Peralo - Daily Insights That Actually Matter",
    description: "2M+ followers. 2.5B views. Turning clickbait into education.",
    creator: "@charlesperalo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
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