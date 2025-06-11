"use client"

import { motion } from "framer-motion"
import { Heart, Coffee, Clock, Globe, Zap, Award, BookOpen, Users } from "lucide-react"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and gym memberships.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options to suit your lifestyle.",
  },
  {
    icon: Clock,
    title: "Paid Time Off",
    description: "Generous vacation policy, paid holidays, and parental leave.",
  },
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere with our distributed team across the globe.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning, mentorship, and career advancement paths.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance bonuses and peer recognition programs.",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences.",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team retreats and social activities.",
  },
]

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for an experienced frontend developer with expertise in React, Next.js, and modern JavaScript frameworks.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Join our design team to create beautiful, intuitive interfaces for our clients' digital products.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead product development from conception to launch, working closely with design and engineering teams.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive our marketing efforts across digital channels to increase brand awareness and lead generation.",
  },
]

const testimonials = [
  {
    quote: "Working here has been the highlight of my career. The culture of innovation and support is unmatched.",
    name: "Alex Rivera",
    role: "Senior Developer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I've grown more in my two years here than in my previous decade of work. The learning opportunities are endless.",
    name: "Jordan Taylor",
    role: "Product Designer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The flexibility and trust given to employees makes this the best place I've ever worked.",
    name: "Morgan Chen",
    role: "Project Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", ...new Set(jobOpenings.map((job) => job.department))]

  const filteredJobs =
    selectedDepartment === "All" ? jobOpenings : jobOpenings.filter((job) => job.department === selectedDepartment)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Careers
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our team of innovators and be part of our mission to transform businesses through technology.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Culture
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We believe in creating an environment where talented individuals can thrive, innovate, and grow both
            personally and professionally.
          </motion.p>

          <div className="aspect-video relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <p className="text-2xl font-light">Company Culture Video</p>
            </div>
          </div>

          <motion.h3
            className="text-3xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Benefits & Perks
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900 p-6 rounded-xl group hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            From Our Team
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-black p-8 rounded-xl relative">
                <div className="mb-8">
                  <svg className="w-10 h-10 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v12H6v-8c0-2.2 1.8-4 4-4zm16 0v12h-4v-8c0-2.2 1.8-4 4-4z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find your next career opportunity and join our growing team.
          </motion.p>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === department
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-light">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                      {job.department}
                    </span>
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">{job.location}</span>
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">{job.type}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{job.description}</p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors">
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No open positions in this department at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Hiring Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-600/30 -translate-y-1/2 z-0"></div>

            {[
              { number: "01", title: "Application", description: "Submit your resume and cover letter" },
              { number: "02", title: "Initial Interview", description: "Meet with our recruiting team" },
              { number: "03", title: "Technical Assessment", description: "Showcase your skills and expertise" },
              { number: "04", title: "Final Interview", description: "Meet with the team and leadership" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-xl relative z-10"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-sm font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Don't See a Perfect Fit?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
            mind for future opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Submit Your Resume
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
