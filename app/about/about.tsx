"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Users, Target, Lightbulb, Award, Globe } from "lucide-react"

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

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering solutions that make a real impact on businesses and communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
  },
  {
    icon: Users,
    title: "People-Centered",
    description: "Our success is built on strong relationships with clients, partners, and our talented team.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service.",
  },
]

const stats = [
  { number: "350+", label: "Projects Completed" },
  { number: "15+", label: "Happy Clients" },
  { number: "8", label: "Years Experience" },
  { number: "10+", label: "Team Members" },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with 15+ years in tech innovation.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technical architect passionate about scalable solutions.",
  },
  {
    name: "Emily Johnson",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative director focused on user-centered design.",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack expert with a love for clean code.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
    {/* Hero Section */}
    <section className="pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-7xl md:text-7xl font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Traditional information technology management function (or IT) should be the technology backbone that is responsible for the development, and management of digital and administrative solutions in a professional way. The technology backbone consists of all information technology systems and processes that support the running of the business's operations, through the management of end-user services, plus enterprise and business applications. It is where the essential business asset of a company resides, and the purpose is to provide operational efficiency to the company through reliability, security, and scalability. <a href="https://gnjsoft.com" className="text-blue-400 underline ml-1" target="_blank" rel="noopener noreferrer">Visit our website</a>.
        </motion.p>
      </div>
    </section>

    {/* Company Facts Section */}
    <section className="py-16 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Company Information
        </motion.h2>
        <div className="mb-10">
          <p className="text-lg text-gray-200 mb-4">
            <strong>Website:</strong> <a href="https://www.gnjworldwide.com" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">www.gnjworldwide.com</a><br/>
            <strong>Industry:</strong> IT Services and IT Consulting<br/>
            <strong>Company size:</strong> 2-10 employees<br/>
            <strong>Headquarters:</strong> Mumbai, Maharashtra<br/>
            <strong>Type:</strong> Private Company<br/>
            <strong>Founded:</strong> 2023<br/>
            <strong>Specialties:</strong> IT Developments, Professional services, IT Hardware Solutions, IT Rental Service
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">Contact Us</button>
          </a>
          <a href="/works">
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors">Our Work</button>
          </a>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-light mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
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
          Ready to Work Together?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's discuss how we can help bring your vision to life with innovative technology solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/contact">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Get In Touch
            </button>
          </a>
          
        </motion.div>
      </div>
    </section>
  </div>
  )
}
