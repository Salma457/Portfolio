"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      institution: "Information Technology Institute (ITI)",
      degree: "Professional Training Program - Open Source Track",
      year: "2025",
      description: "Comprehensive 9-month intensive program covering full-stack development with modern technologies",
      achievements: [
        "Graduation Project: ITIans Community & Job Platform",
        "Multiple hands-on projects",
        "Team collaboration experience",
      ],
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      institution: "Assuit University",
      degree: "Business Information Systems, Faculty of Commerce",
      year: "2024",
      description: "Graduated with Excellent Degree, combining business knowledge with information systems",
      achievements: ["Excellent Degree", "Strong foundation in business processes", "Information systems analysis"],
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const courses = [
    "SQL (Basic) – HackerRank 2025",
    "Linux Essentials – Mahara-Tech 2025",
    "Frontend Web Development – Mahara-Tech 2025",
    "Backend Web Development – Mahara-Tech 2025",
    "Java Programming – Udemy 2024",
    "Database Fundamentals – Mahara-Tech 2024",
    "NTI Web Development Training (1 Month) 2023",
  ]

  return (
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
            Education & Training
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Academic background and professional development journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-blue-600 rounded-lg">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-blue-400 font-semibold">{edu.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                      <p className="text-gray-300 mb-3">{edu.degree}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Courses & Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {courses.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors p-2 text-xs"
                    >
                      {course}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
