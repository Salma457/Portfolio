"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Play, X, ChevronLeft, ChevronRight, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { EducationSection } from "@/components/education-section"

const projects = [
  {
    id: "itians",
    title: "ITIans Community & Job Platform",
    description:
      "A full-stack bilingual platform connecting ITI graduates with employers. Features real-time community feed, job postings, chat system, AI-powered Q&A system (RAG), and comprehensive profile showcases for seamless networking and career opportunities.",
    technologies: ["React", "Laravel", "Supabase", "AI/RAG", "Real-time Chat"],
    videoUrl: "https://drive.google.com/file/d/1_Hy4vlJPRl0m5fK6MsmhlKiTpN4KJ8Kk/view?usp=drive_link",
    githubFrontend: "https://github.com/Salma457/Graduation-Project-From-ITI-FrontEnd.git",
    githubBackend: "https://github.com/Salma457/Graduation-Project-From-ITI-BackEnd.git",
    images: [
      "/images/itians/6007853219637743162.jpg",
      "/images/itians/6.jpg",
      "/images/itians/12.jpg",
      "/images/itians/9.jpg",
      "/images/itians/2.jpg",
      "/images/itians/7.jpg",
      "/images/itians/11.jpg",
      "/images/itians/15.jpg",
      "/images/itians/3.jpg",
      "/images/itians/10.jpg",
    ],
    category: "Graduation Project",
  },
  {
    id: "job-board",
    title: "Job Board Platform",
    description:
      "A comprehensive job-matching platform where employers can post job opportunities and candidates can apply or contact employers directly. Built with modern Laravel backend and Vue.js frontend for optimal performance and user experience.",
    technologies: ["Laravel", "Vue.js", "MySQL", "RESTful API", "Authentication"],
    videoUrl: "https://drive.google.com/file/d/175WJ_VetSqwgFOIQ4jTQ7zGZvLLDFll6/view?usp=drive_link",
    githubFrontend: "https://github.com/amira-ateya/vue-laravel-project.git",
    githubBackend: "https://github.com/Salma457/vue-laravel-projectBackend.git",
    images: [
      "/images/job-board/1.png",
      "/images/job-board/2.png",
      "/images/job-board/3.png",
      "/images/job-board/4.png",
      "/images/job-board/5.png",
      "/images/job-board/6.png",
      "/images/job-board/7.png",
      "/images/job-board/8.png",
      "/images/job-board/9.png",
      "/images/job-board/10.png",
    ],
    category: "Web Application",
  },
  {
    id: "medical-system",
    title: "Medical Management System",
    description:
      "A sophisticated role-based hospital management system enabling patients to book appointments seamlessly and doctors to manage their schedules efficiently. Built with React frontend and Django REST Framework backend.",
    technologies: ["React", "Django", "Django REST Framework", "PostgreSQL", "JWT Authentication"],
    videoUrl: "https://drive.google.com/drive/u/3/folders/1rHfQXVQGuX-wCJyoX2B_WJ6-O3MLVjYi",
    githubFrontend: "https://github.com/aliaa11/MedicalProject-React-Django-",
    githubBackend: "https://github.com/aliaa11/MedicalProject-React-Django-Backend.git",
    images: [
      "/images/medical/1.jpg",
      "/images/medical/2.jpg",
      "/images/medical/3.jpg",
      "/images/medical/4.jpg",
      "/images/medical/5.jpg",
      "/images/medical/6.jpg",
      "/images/medical/7.jpg",
      "/images/medical/8.jpg",
      "/images/medical/9.jpg",
      "/images/medical/10.jpg",
    ],
    category: "Healthcare",
  },
  {
    id: "nursery-management",
    title: "Nursery Management System",
    description:
      "A comprehensive web-based system for managing nursery operations. Administrators can efficiently manage teachers and students, while teachers can handle attendance tracking and exam results management with an intuitive interface.",
    technologies: ["Angular", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    videoUrl: "https://drive.google.com/drive/u/3/folders/1rHfQXVQGuX-wCJyoX2B_WJ6-O3MLVjYi",
    githubFrontend: "https://github.com/Salma457/Shcool_System.git",
    githubBackend: "https://github.com/Salma457/School_System_Node.js.git",
    images: [
      "/images/nursery/2.jpg",
      "/images/nursery/3.jpg",
      "/images/nursery/4.jpg",
      "/images/nursery/5.jpg",
      "/images/nursery/6.jpg",
      "/images/nursery/7.jpg",
      "/images/nursery/8.jpg",
      "/images/nursery/9.jpg",
      "/images/nursery/10.jpg",
      "/images/nursery/1.jpg",
    ],
    category: "Education Management",
  },
]

const skills = [
  "React.js",
  "Vue.js",
  "Angular",
  "Next.js",
  "Laravel",
  "Node.js",
  "Django",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Git & GitHub",
  "Linux",
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <Image
                src="/images/salma-profile.jpeg"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Salma Hussein Ahmed
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full Stack Open Source Developer
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Mail className="mr-2 h-5 w-5" />
              salma.hussein.ahmedd@gmail.com
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 bg-transparent">
              <Github className="mr-2 h-5 w-5" />
              <a href="https://github.com/Salma457" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 bg-transparent">
              <Linkedin className="mr-2 h-5 w-5" />
              <a href="https://www.linkedin.com/in/salma-hussein-ahmed/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <div>
              <p>+20 1029229478</p>
              <p>Giza, Egypt</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate Full Stack Open Source Developer with hands-on experience in building responsive web
              applications and business solutions. Recently graduated with honors in Business Information Systems and
              completed a comprehensive 9-month professional Open Source training program at the Information Technology
              Institute (ITI). Skilled in modern frameworks like Laravel, Vue.js, Node.js, Angular, and Django, with
              strong Linux system administration knowledge. I'm passionate about writing clean, maintainable code,
              collaborating in team environments, and continuously learning new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Badge
                  variant="secondary"
                  className="bg-gray-800 hover:bg-gray-700 text-white border-gray-600 px-3 py-2"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <EducationSection />

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              A showcase of my recent work, demonstrating expertise in modern web development
            </p>

            {/* View More Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 bg-transparent"
                onClick={() =>
                  window.open("https://drive.google.com/drive/u/3/folders/1rHfQXVQGuX-wCJyoX2B_WJ6-O3MLVjYi", "_blank")
                }
              >
                <FolderOpen className="mr-2 h-5 w-5" />
                View All Projects Portfolio
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 hover:bg-blue-700">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 mb-2">
                        View Details <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      {project.githubFrontend && (
                        <Button
                          variant="ghost"
                          className="text-blue-400 hover:text-blue-300 p-0 mb-2"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubFrontend, "_blank")
                          }}
                        >
                          Frontend Repo <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      {project.githubBackend && (
                        <Button
                          variant="ghost"
                          className="text-blue-400 hover:text-blue-300 p-0 mb-2"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubBackend, "_blank")
                          }}
                        >
                          Backend Repo <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-400 hover:text-green-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.videoUrl, "_blank")
                        }}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                salma.hussein.ahmedd@gmail.com
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Linkedin className="mr-2 h-5 w-5" />
                <a href="https://www.linkedin.com/in/salma-hussein-ahmed/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Github className="mr-2 h-5 w-5" />
                <a href="https://github.com/Salma457" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <Badge className="bg-blue-600">{selectedProject.category}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <Image
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {selectedProject.images.slice(0, 6).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${selectedProject.title} thumbnail ${index + 1}`}
                    width={200}
                    height={150}
                    className={`w-full h-24 object-cover rounded cursor-pointer transition-all ${
                      index === currentImageIndex ? "ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => window.open(selectedProject.videoUrl, "_blank")}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
                {selectedProject.githubFrontend && (
                  <Button
                    variant="outline"
                    className="border-gray-600 hover:bg-gray-700 bg-transparent"
                    onClick={() => window.open(selectedProject.githubFrontend, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Frontend Repo
                  </Button>
                )}
                {selectedProject.githubBackend && (
                  <Button
                    variant="outline"
                    className="border-gray-600 hover:bg-gray-700 bg-transparent"
                    onClick={() => window.open(selectedProject.githubBackend, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Backend Repo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
