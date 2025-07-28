"use client"

import { motion } from "framer-motion"
import { Download, Code, Palette, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaAngular, FaBootstrap, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiMongodb, SiTypescript, SiRedux, SiGraphql, SiPostman,
  SiFigma, SiSocketdotio, SiChartdotjs, SiCloudinary, SiJsonwebtokens, SiMui ,
} from "react-icons/si";
import { 
  SiMysql, SiPostgresql, SiFirebase, SiPrisma, 
  SiGitlab, SiDocker, SiAmazon, SiHeroku, SiNetlify 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "React.js", icon: <FaReact />, note: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs />, note: "Advanced" },
      { name: "Angular", icon: <FaAngular />, note: "Intermediate" },
      { name: "JavaScript", icon: <FaReact />, note: "Expert" },
      { name: "TypeScript", icon: <SiTypescript />, note: "Advanced" },
      { name: "HTML5", icon: <FaHtml5 />, note: "Expert" },
      { name: "CSS3", icon: <FaCss3Alt />, note: "Expert" },
      { name: "SASS", icon: <FaSass />, note: "Advanced" },
      { name: "Bootstrap", icon: <FaBootstrap />, note: "Advanced" },
      { name: "Material UI", icon: <SiMui />, note: "Advanced" },
      { name: "Redux", icon: <SiRedux />, note: "Advanced" },
    ],
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Backend Development",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, note: "Expert" },
      { name: "Express.js", icon: <SiExpress />, note: "Expert" },
      { name: "MongoDB", icon: <SiMongodb />, note: "Advanced" },
      { name: "MySQL", icon: <SiMysql />, note: "Intermediate" },
      { name: "PostgreSQL", icon: <SiPostgresql />, note: "Intermediate" },
      { name: "REST APIs", icon: <TbApi />, note: "Expert" },
      { name: "JWT", icon: <SiJsonwebtokens />, note: "Advanced" },
      { name: "Socket.io", icon: <SiSocketdotio />, note: "Advanced" },
      { name: "GraphQL", icon: <SiGraphql />, note: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase />, note: "Intermediate" },
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "DevOps & Tools",
    icon: <Zap className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <FaGitAlt />, note: "Expert" },
      { name: "GitHub", icon: <FaGithub />, note: "Expert" },
      { name: "GitLab", icon: <SiGitlab />, note: "Intermediate" },
      { name: "Docker", icon: <SiDocker />, note: "Intermediate" },
      { name: "Postman", icon: <SiPostman />, note: "Advanced" },
      { name: "Figma", icon: <SiFigma />, note: "Intermediate" },
      { name: "Chart.js", icon: <SiChartdotjs />, note: "Advanced" },
      { name: "Cloudinary", icon: <SiCloudinary />, note: "Intermediate" },
      { name: "AWS", icon: <SiAmazon />, note: "Beginner" },
      { name: "Netlify", icon: <SiNetlify />, note: "Intermediate" },
    ],
    color: "from-indigo-500 to-purple-600"
  },
];
const highlights = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code" },
  { icon: Palette, title: "MERN Stack", description: "Expert in MongoDB, Express, React, Node.js" },
  { icon: Zap, title: "Performance", description: "Building high-performance web applications" },
  { icon: Users, title: "Team Player", description: "Collaborative work in agile environments" },
]

export default function About() {
   const handleDownloadCV = () => {
    // إنشاء رابط تنزيل لملف الـ CV
    const link = document.createElement('a')
    link.href = '/Mohammed-Ahmed-CV.pdf' // تأكد من أن اسم الملف مطابق للملف في مجلد public
    link.download = 'Mohammed-Ahmed-CV.pdf' // اسم الملف الذي سيظهر للمستخدم عند التنزيل
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            MERN Stack Developer with proven ability to build scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          {/* Profile Image - Takes up more space on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/MOHAMED.png"
                  alt="Mohammed Ahmed - Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl -z-10 blur-xl" />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-30"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content - Takes up remaining space */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Hi there! I'm Mohammed Ahmed
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p className="text-lg">
                    I'm an experienced MERN Stack Developer with proven ability to build scalable and high-performance
                    web applications using React.js, Next.js, MongoDB, Express.js, and Node.js. I specialize in
                    developing responsive user interfaces, RESTful APIs, and real-time features.
                  </p>
                  <p className="text-lg">
                    With a strong background in both frontend and backend development, I focus on writing maintainable
                    and scalable code. I'm quick to adapt to new technologies and tools, and I'm a collaborative team
                    player with experience working in agile environments to deliver efficient, user-focused solutions.
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <item.icon className="h-8 w-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h3 className="text-3xl font-bold text-center mb-12">
    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
      Technical Skills
    </span>
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {skillGroups.map((group, groupIndex) => (
      <motion.div
        key={group.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="relative overflow-hidden group"
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
        
        {/* Animated Border */}
        <div className={`absolute inset-0 rounded-xl p-px bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        
        <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-200 dark:border-gray-700">
          {/* Header with icon */}
          <div className="flex items-center mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${group.color} text-white mr-3`}>
              {group.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {group.title}
            </h4>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-3">
            {group.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all"
              >
                <div className={`p-2 rounded-md bg-gradient-to-br ${group.color} text-white text-lg`}>
                  {skill.icon}
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">{skill.name}</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span className={`px-2 py-1 rounded-full bg-gradient-to-r ${group.color} bg-clip-text text-transparent font-semibold`}>
                      {skill.note}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>


          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="mt-16"
>
  <h4 className="text-3xl font-bold text-center mb-8">
    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
      Education & Training
    </span>
  </h4>

  <div className="max-w-4xl mx-auto space-y-6">
    {/* الجامعة */}
    <motion.div
      whileHover={{ y: -3 }}
      className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6">
        <div className="flex items-start">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg text-white mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Bachelor's Degree in Computer Science
            </h5>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Assiut University (2020 – 2024)</p>
            <div className="flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                GPA: 3.1
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* الدورات */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* الدورة الأولى */}
      <motion.div
        whileHover={{ y: -3 }}
        className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-6 h-full">
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Full Stack Web Development – MERN Track
              </h5>
              <p className="text-gray-600 dark:text-gray-400">ITI – Qena Branch</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">Dec 2024 – May 2025</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* الدورة الثانية */}
      <motion.div
        whileHover={{ y: -3 }}
        className="relative overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-6 h-full">
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Full Stack Node.js Diploma
              </h5>
              <p className="text-gray-600 dark:text-gray-400">AMIT – Online</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">Sep 2024 – Apr 2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  )
}
