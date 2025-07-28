"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"
import { FaGithub } from "react-icons/fa";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Building complete web applications using modern technologies like React, Node.js, and MongoDB.",
    features: [
      "Frontend Development with React",
      "API Design with Express.js",
      "Database Architecture (MongoDB)",
      "Cloud Deployment and Hosting",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Creating responsive, fast, and modern websites with a focus on performance and user experience.",
    features: [
      "Responsive Web Design",
      "User-Centered Interfaces",
      "Speed & Performance Optimization",
      "SEO-Friendly Structure",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing beautiful and user-friendly interfaces with tools and frameworks like Figma and Tailwind CSS.",
    features: [
      "Figma UI Design",
      "Tailwind & MUI Styling",
      "Design Systems Creation",
      "User Flow & Prototyping",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems using Node.js, Express, and MongoDB.",
    features: [
      "RESTful API Development",
      "Authentication with JWT",
      "Database Management",
      "Security & Middleware",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improving speed, SEO, and overall app performance for a better user experience.",
    features: [
      "Code Splitting & Lazy Loading",
      "Caching Strategies",
      "Analytics & Monitoring",
      "SEO Optimization",
    ],
  },
  {
    icon: FaGithub,
    title: "Version Control & Collaboration",
    description:
      "Managing code effectively using Git and GitHub for solo and team-based projects.",
    features: [
      "Branching & Pull Requests",
      "Team Collaboration",
      "Conflict Resolution",
      "Project Workflow Management",
    ],
  },
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              Services I Offer
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3 flex-shrink-0"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600/20 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Ready to bring your ideas to life? Let's discuss your project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
