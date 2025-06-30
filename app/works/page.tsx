"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Globe, Code, Smartphone, Users, ArrowRight, Star, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"

// Example project data (replace with real data as needed)
const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "A scalable, modern e-commerce solution with seamless checkout and mobile-first design.",
    image: "/placeholder-user.jpg",
    category: "Web Development",
    tags: ["React", "Next.js", "Stripe"],
    featured: true,
    year: 2024,
  },
  {
    title: "Healthcare Mobile App",
    description: "A HIPAA-compliant app for patient engagement, appointment scheduling, and telemedicine.",
    image: "/placeholder-user.jpg",
    category: "Mobile App",
    tags: ["Flutter", "Firebase", "iOS", "Android"],
    featured: true,
    year: 2024,
  },
  {
    title: "Global SaaS Dashboard",
    description: "A real-time analytics dashboard for SaaS businesses, featuring multi-tenant support.",
    image: "/placeholder-user.jpg",
    category: "Cloud Solutions",
    tags: ["AWS", "Node.js", "D3.js"],
    featured: false,
    year: 2025,
  },
  {
    title: "Brand Identity & UI Kit",
    description: "A complete brand refresh and UI kit for a fintech startup, ready for rapid scaling.",
    image: "/placeholder-user.jpg",
    category: "UI/UX Design",
    tags: ["Figma", "Design System"],
    featured: false,
    year: 2025,
  },
  {
    title: "Enterprise Integrations",
    description: "Seamless integration of CRM, ERP, and third-party APIs for a global logistics company.",
    image: "/placeholder-user.jpg",
    category: "Integrations",
    tags: ["API", "CRM", "ERP"],
    featured: false,
    year: 2025,
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "Cloud Solutions",
  "UI/UX Design",
  "Integrations",
]

const testimonials = [
  {
    text: "The team delivered our project on time and exceeded expectations. Their expertise and communication were top-notch!",
    name: "Sarah L.",
    role: "Head of Digital, Retail Co.",
    avatar: "/placeholder-user.jpg"
  },
  {
    text: "Our new app is a hit with users. The process was smooth, transparent, and highly professional.",
    name: "James K.",
    role: "CTO, HealthTech",
    avatar: "/placeholder-user.jpg"
  }
]

const processSteps = [
  {
    icon: Sparkles,
    title: "Discovery & Ideation",
    description: "We dive deep into your goals, audience, and vision to spark innovative ideas and set a clear direction."
  },
  {
    icon: Code,
    title: "Design & Build",
    description: "Our team crafts beautiful interfaces and robust code, blending creativity with technical excellence."
  },
  {
    icon: Calendar,
    title: "Launch & Evolve",
    description: "We launch, monitor, and iterate—ensuring your project grows and adapts to real-world needs."
  },
]

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  // Featured carousel projects
  const featured = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white pt-24 relative overflow-x-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ background: "radial-gradient(ellipse at 60% 20%, #3b82f6 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, #8b5cf6 0%, transparent 70%)" }}
        transition={{ duration: 1.2 }}
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Universal Portfolio
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A showcase of standout projects, creative solutions, and digital impact—crafted for brands worldwide.
        </motion.p>
      </div>

      {/* Featured Projects Carousel */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-700/40" initial="hidden" animate="visible">
          {featured.map((project, idx) => (
            <motion.div
              key={project.title}
              className="min-w-[340px] bg-gradient-to-br from-blue-900/80 to-black/80 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-blue-700/30 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-black/30">
                <img src={project.image} alt={project.title} className="object-contain w-full h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-blue-400 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" /> {project.title}
                </h3>
                <p className="text-gray-200 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-700/30 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-gray-400 text-sm flex items-center gap-1"><Calendar className="w-4 h-4" />{project.year}</span>
                  <span className="text-gray-400 text-sm ml-2">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap gap-4 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-800 text-gray-300 border-gray-700'} transition-colors`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-blue-700/20 hover:scale-105 hover:shadow-blue-700/30 transition-transform duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-black/20 group-hover:bg-blue-900/20 transition-colors duration-300">
              <img src={project.image} alt={project.title} className="object-contain w-full h-full scale-100 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400 flex items-center gap-2">
                {project.title}
                {project.featured && <Star className="w-4 h-4 text-yellow-400" />}
              </h3>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-700/30 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto">
                {project.category === "Web Development" && <Code className="w-5 h-5 text-blue-400" />}
                {project.category === "Mobile App" && <Smartphone className="w-5 h-5 text-blue-400" />}
                {project.category === "Cloud Solutions" && <Globe className="w-5 h-5 text-blue-400" />}
                {project.category === "UI/UX Design" && <Briefcase className="w-5 h-5 text-blue-400" />}
                {project.category === "Integrations" && <Users className="w-5 h-5 text-blue-400" />}
                <span className="text-gray-400 text-sm ml-2">{project.category}</span>
                <span className="text-gray-400 text-sm flex items-center gap-1 ml-2"><Calendar className="w-4 h-4" />{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline / Process Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  className="bg-gray-900 rounded-2xl p-8 shadow-md flex flex-col items-center w-full md:w-1/3 border border-blue-700/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div key={t.name} className="bg-gray-800 rounded-2xl p-8 shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
                <p className="text-gray-300 mb-4">“{t.text}”</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 border-t border-gray-800 bg-gradient-to-r from-blue-900/40 to-black/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's Create Something Remarkable
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to elevate your brand? Partner with us for your next big idea—web, mobile, cloud, or design. The future is built together.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
} 