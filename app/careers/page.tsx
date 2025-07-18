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
    description: "Comprehensive health insurance, wellness programs, and medical checkups.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and festival holidays.",
  },
  {
    icon: Clock,
    title: "Paid Time Off",
    description: "Generous leave policy, paid holidays, and parental leave.",
  },
  {
    icon: Globe,
    title: "Remote & Hybrid Work",
    description: "Work from anywhere in India or from our Mumbai office.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning, mentorship, and career advancement paths.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance bonuses, spot awards, and employee of the month.",
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "Annual budget for courses, certifications, and conferences.",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team outings, festival celebrations, and social activities.",
  },
]

const jobOpenings = [
  {
    title: "Frontend Developer (React/Next.js)",
    department: "Engineering",
    location: "Mumbai / Remote (India)",
    type: "Full-time",
    description:
      "We're looking for a frontend developer with expertise in React, Next.js, and modern JavaScript frameworks.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Mumbai / Remote (India)",
    type: "Full-time",
    description: "Join our design team to create beautiful, intuitive interfaces for our clients' digital products.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Mumbai / Remote (India)",
    type: "Full-time",
    description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Mumbai / Remote (India)",
    type: "Full-time",
    description:
      "Lead product development from conception to launch, working closely with design and engineering teams.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mumbai / Remote (India)",
    type: "Full-time",
    description: "Drive our marketing efforts across digital channels to increase brand awareness and lead generation.",
  },
]

const testimonials = [
  {
    quote: "GNJ has given me the platform to grow my skills and work on exciting projects for clients across India and abroad.",
    name: "Priya Sharma",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The work culture here is supportive and inclusive. I love the festival celebrations and team outings!",
    name: "Rahul Verma",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Flexible work options and a focus on learning make GNJ a great place to build your career in tech.",
    name: "Sneha Patel",
    role: "DevOps Engineer",
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

          <div className="aspect-video relative mb-16 overflow-hidden rounded-2xl">
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-none"
              src="https://www.youtube.com/embed/0Gs3g24iuS8?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=0&iv_load_policy=3"
              title="Company Culture Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ border: 0 }}
            />
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
          <div className="text-center py-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Currently Not Hiring</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We are currently not hiring. Please check back later or submit your resume for future opportunities.
            </p>
            <a href="#submit-resume" className="text-blue-400 hover:underline">Submit your resume</a>
          </div>
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mb-2 sm:mb-0">Contact Us</button>
            </a>
            
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Submit Your Resume
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
