"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, User, MessageSquare, CheckCircle, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

interface ToastProps {
  type: "success" | "error"
  message: string
  isVisible: boolean
  onClose: () => void
}

const Toast = ({ type, message, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div
            className={`p-4 rounded-xl shadow-2xl border backdrop-blur-sm ${
              type === "success"
                ? "bg-green-50/90 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                : "bg-red-50/90 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-1 rounded-full ${
                  type === "success" ? "bg-green-100 dark:bg-green-800" : "bg-red-100 dark:bg-red-800"
                }`}
              >
                {type === "success" ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
              </div>
              <p className="font-medium flex-1">{message}</p>
              <button
                onClick={onClose}
                className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const FloatingLabelInput = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  required = false,
}: {
  id: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  icon: React.ElementType
  error?: string
  required?: boolean
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <Icon
            className={`h-5 w-5 transition-colors duration-300 ${
              isFocused || hasValue ? "text-purple-600 dark:text-purple-400" : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </div>

        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-800/50 border-2 rounded-xl transition-all duration-300 backdrop-blur-sm ${
            error
              ? "border-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-400"
              : isFocused
                ? "border-purple-400 dark:border-purple-500 shadow-lg shadow-purple-500/20"
                : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
          } focus:outline-none focus:ring-0`}
          placeholder=""
        />

        <motion.label
          htmlFor={id}
          animate={{
            top: isFocused || hasValue ? "0.5rem" : "50%",
            fontSize: isFocused || hasValue ? "0.75rem" : "1rem",
            color: error ? "#ef4444" : isFocused ? "#8b5cf6" : "#6b7280",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute left-12 transform -translate-y-1/2 pointer-events-none font-medium ${
            isFocused || hasValue ? "bg-white dark:bg-gray-900 px-2 rounded" : ""
          }`}
        >
          {placeholder}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"
          >
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const FloatingLabelTextarea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  required = false,
  rows = 5,
}: {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  icon: React.ElementType
  error?: string
  required?: boolean
  rows?: number
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-4 top-4 z-10">
          <Icon
            className={`h-5 w-5 transition-colors duration-300 ${
              isFocused || hasValue ? "text-purple-600 dark:text-purple-400" : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </div>

        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={rows}
          className={`w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-800/50 border-2 rounded-xl transition-all duration-300 backdrop-blur-sm resize-none ${
            error
              ? "border-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-400"
              : isFocused
                ? "border-purple-400 dark:border-purple-500 shadow-lg shadow-purple-500/20"
                : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
          } focus:outline-none focus:ring-0`}
          placeholder=""
        />

        <motion.label
          htmlFor={id}
          animate={{
            top: isFocused || hasValue ? "0.5rem" : "1rem",
            fontSize: isFocused || hasValue ? "0.75rem" : "1rem",
            color: error ? "#ef4444" : isFocused ? "#8b5cf6" : "#6b7280",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute left-12 pointer-events-none font-medium ${
            isFocused || hasValue ? "bg-white dark:bg-gray-900 px-2 rounded" : ""
          }`}
        >
          {placeholder}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"
          >
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    type: "success" | "error"
    message: string
    isVisible: boolean
  }>({
    type: "success",
    message: "",
    isVisible: false,
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message, isVisible: true })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }))
    }, 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    showToast("error", "Please fix the errors below");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Failed to send');

    setFormData({ name: "", email: "", subject: "", message: "" });
    showToast("success", "Thank you! Your message has been sent.");
  } catch (error) {
    console.error(error);
    showToast("error", "Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohammedahmed66478@gmail.com",
      href: "mailto:mohammedahmed66478@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01099511263",
      href: "tel:01099511263",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      href: "#",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-purple-900/10"
    >
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                project in mind or just want to chat about technology, feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white/80 dark:bg-gray-700/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group backdrop-blur-sm border border-white/30 dark:border-gray-600/30"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send me a message</h3>
                <p className="text-gray-600 dark:text-gray-400">I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FloatingLabelInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    icon={User}
                    error={errors.name}
                    required
                  />

                  <FloatingLabelInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    icon={Mail}
                    error={errors.email}
                    required
                  />
                </div>

                <FloatingLabelInput
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  icon={MessageSquare}
                  error={errors.subject}
                  required
                />

                <FloatingLabelTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  icon={MessageSquare}
                  error={errors.message}
                  required
                  rows={6}
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-purple-500/25 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </section>
  )
}
