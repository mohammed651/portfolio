"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
