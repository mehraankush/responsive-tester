import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "./components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Responsive Website Tester | Check Website on All Screen Sizes",
  description:
    "Free tool to test and check website responsiveness on mobile, tablet, desktop and custom screen sizes. Instantly see how your website looks on different devices.",
  keywords:
    "responsive website tester, website responsiveness, mobile view, tablet view, desktop view, responsive design testing, screen size testing, website testing tool",
  authors: [{ name: "Responsive Tester" }],
  creator: "Responsive Tester",
  publisher: "Responsive Tester",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://responsive-tester.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Responsive Website Tester | Check Website on All Screen Sizes",
    description:
      "Free tool to test and check website responsiveness on mobile, tablet, desktop and custom screen sizes. Instantly see how your website looks on different devices.",
    url: "https://responsive-tester.vercel.app",
    siteName: "Responsive Website Tester",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Responsive Website Tester",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsive Website Tester | Check Website on All Screen Sizes",
    description:
      "Free tool to test and check website responsiveness on mobile, tablet, desktop and custom screen sizes.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'