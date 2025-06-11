"use client"

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
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "8", label: "Years Experience" },
  { number: "25+", label: "Team Members" },
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
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
            Learn about our journey, our values, and the team behind GNJ's success in delivering innovative technology
            solutions.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">Our Story</h2>
              <p className="text-gray-400 text-lg mb-6">
                Founded in 2016, GNJ began as a small team of passionate developers and designers who believed
                technology could transform businesses. What started in a garage has grown into a leading technology
                consultancy.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                We've helped hundreds of companies navigate digital transformation, from startups finding their footing
                to enterprises scaling globally. Our approach combines technical expertise with deep business
                understanding.
              </p>
              <p className="text-gray-400 text-lg">
                Today, we're proud to be trusted partners to organizations across industries, helping them build the
                future through innovative technology solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 flex items-center justify-center">
                <Globe className="w-32 h-32 text-white" />
              </div>
            </motion.div>
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

      {/* Team Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="aspect-square bg-gray-800 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
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
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Get In Touch
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:border-white transition-colors">
              View Our Work
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
