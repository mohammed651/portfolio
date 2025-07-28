import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Ahmed | Full Stack Developer & MERN Stack Specialist",
  description:
    "Professional portfolio of Mohammed Ahmed - Full Stack Developer specializing in MERN stack development, React.js, Node.js, and creating scalable web applications.",
  keywords:
    "full stack developer, MERN stack, React.js, Node.js, MongoDB, Express.js, web development, portfolio, Mohammed Ahmed",
  authors: [{ name: "Mohammed Ahmed" }],
  openGraph: {
    title: "Mohammed Ahmed | Full Stack Developer",
    description: "Building scalable and high-performance web applications with the MERN stack",
    type: "website",
  },
    generator: 'v0.dev',
    icons: {
    icon: "/logo.svg", 
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
