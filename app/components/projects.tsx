"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Admin Dashboard - React.js",
    description: "A responsive and modular admin panel with real-time notifications, video upload, and dynamic charts.",
    longDescription:
      "This comprehensive admin dashboard is built with React.js and features a modern, responsive design. It includes real-time notifications using Socket.io, video upload functionality with Cloudinary integration, and dynamic charts powered by Chart.js. The dashboard provides a complete admin interface with user management, analytics, and content management capabilities. The modular architecture ensures easy maintenance and scalability.",
    images: [
      "/p1/1.png",
      "/p1/2.png",
      "/p1/3.png",
      "/p1/4.png",
      "/p1/5.png",
      
    ],
    tech: ["React.js", "Socket.io", "Cloudinary", "Chart.js", "Material UI", "CSS3"],
    category: "Full Stack",
    liveUrl: "https://github.com/mohammed651/Admin-Dashboard-React-",
    githubUrl: "https://github.com/mohammed651/Admin-Dashboard-React-",
    duration: "2 months",
    team: "Solo Project",
    features: [
      "Real-time Notifications",
      "Video Upload System",
      "Dynamic Charts",
      "Responsive Design",
      "User Management",
    ],
  },
  {
    id: 2,
    title: "Furniture E-Commerce Website",
    description: "A modern furniture shopping platform with cart functionality and full responsiveness.",
    longDescription:
      "A complete e-commerce solution for furniture shopping built with React.js and Redux for state management. The platform features a modern, responsive design with smooth navigation using React Router. Users can browse furniture categories, add items to cart, manage quantities, and enjoy a seamless shopping experience across all devices. The application demonstrates advanced React patterns and state management techniques.",
    images: [
        "/p2/1.png",
      "/p2/2.png",
      "/p2/3.png",
      "/p2/4.png",
      "/p2/5.png",
      "/p2/6.png",
    ],
    tech: ["React.js", "Redux", "React Router", "CSS3", "JavaScript", "HTML5"],
    category: "Frontend",
    liveUrl: "https://github.com/mohammed651/React-Project",
    githubUrl: "https://github.com/mohammed651/React-Project",
    duration: "1.5 months",
    team: "Solo Project",
    features: ["Shopping Cart", "Product Catalog", "Responsive Design", "State Management", "Smooth Navigation"],
  }
]

// Enhanced ImageCarousel component
const ImageCarousel = ({
  images,
  projectTitle,
  isModal = false,
}: {
  images: string[]
  projectTitle: string
  isModal?: boolean
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return
    setIsTransitioning(true)
    setCurrentImageIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    } else if (isRightSwipe) {
      prevImage()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isModal) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModal])

  if (images.length <= 1) {
    return (
      <div className={`relative ${isModal ? "h-96" : "h-48"} flex items-center justify-center bg-gray-100 dark:bg-gray-800`}>
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={projectTitle}
          width={600}
          height={400}
          className="object-contain max-h-full max-w-full"
          style={{
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>
    )
  }

  return (
    <div className={`relative ${isModal ? "h-96" : "h-48"} bg-gray-100 dark:bg-gray-800`}>
      {/* Main Image Display */}
      <div
        className="relative h-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center justify-center h-full w-full"
          >
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
              width={600}
              height={400}
              className="object-contain max-h-full max-w-full"
              style={{
                width: 'auto',
                height: 'auto'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div
        className={`absolute inset-0 flex items-center justify-between p-4 ${isModal ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation()
            prevImage()
          }}
          disabled={isTransitioning}
          className="p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 disabled:opacity-50"
        >
          <ChevronLeft size={isModal ? 24 : 16} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation()
            nextImage()
          }}
          disabled={isTransitioning}
          className="p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 disabled:opacity-50"
        >
          <ChevronRight size={isModal ? 24 : 16} />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              goToImage(index)
            }}
            disabled={isTransitioning}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            } disabled:opacity-50`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
        {currentImageIndex + 1} / {images.length}
      </div>

      {/* Thumbnails for Modal */}
      {isModal && images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
          <div className="flex space-x-2 justify-center overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  goToImage(index)
                }}
                disabled={isTransitioning}
                className={`relative w-16 h-12 flex-shrink-0 rounded overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex ? "ring-2 ring-white scale-110" : "opacity-70 hover:opacity-100"
                } disabled:opacity-50`}
              >
                <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Project Modal Component
const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: (typeof projects)[0] | null
  isOpen: boolean
  onClose: () => void
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {project.title}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Image Carousel */}
                <div className="relative">
                  <ImageCarousel images={project.images} projectTitle={project.title} isModal={true} />
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.longDescription}</p>
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Project Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                          <span className="text-gray-900 dark:text-white">{project.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Team:</span>
                          <span className="text-gray-900 dark:text-white">{project.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-400">Category:</span>
                          <span className="text-gray-900 dark:text-white">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my MERN stack projects and web development solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <ImageCarousel images={project.images} projectTitle={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl font-bold mb-2"
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex gap-3"
                >
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.liveUrl, "_blank")
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubUrl, "_blank")
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
