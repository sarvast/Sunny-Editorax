import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "SUNNY EDITORX - Professional Video Editor Portfolio",
  description: "Professional Video Editor specializing in Instagram Reels, YouTube Shorts & TikTok content. 500+ videos created, 25+ viral hits with 1M+ views.",
  keywords: [
    "video editor", 
    "instagram reels", 
    "youtube shorts", 
    "tiktok videos", 
    "video production", 
    "content creator", 
    "viral videos", 
    "social media videos",
    "video editing services",
    "sunny editorx"
  ],
  authors: [{ name: "SUNNY EDITORX" }],
  openGraph: {
    title: "SUNNY EDITORX - Professional Video Editor",
    description: "Professional Video Editor specializing in Instagram Reels, YouTube Shorts & TikTok content. 500+ videos created, 25+ viral hits with 1M+ views.",
    type: "website",
    siteName: "SUNNY EDITORX Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUNNY EDITORX - Professional Video Editor",
    description: "Professional Video Editor specializing in Instagram Reels, YouTube Shorts & TikTok content.",
    creator: "@sunnyeditorx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  generator: 'SUNNY EDITORX Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
